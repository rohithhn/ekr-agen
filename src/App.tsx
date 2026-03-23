import { useCallback, useEffect, useRef, useState, type TransitionEvent } from 'react';
import { createPortal } from 'react-dom';
import { Dashboard } from './components/Dashboard';
import { TraceDetailBlocked } from './components/trace-detail/TraceDetailBlocked';
import { TraceDetailClaude } from './components/trace-detail/TraceDetailClaude';
import { TraceDetailLangChain } from './components/trace-detail/TraceDetailLangChain';
import type { TraceRowContext } from './traceContext';

const FOCUSABLE =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function App() {
  const [activeTrace, setActiveTrace] = useState<TraceRowContext | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const asideRef = useRef<HTMLElement>(null);
  const lastFocusRef = useRef<HTMLElement | null>(null);
  const wasClosedRef = useRef(true);
  const sheetOpenRef = useRef(false);
  sheetOpenRef.current = sheetOpen;

  const openTrace = useCallback((trace: TraceRowContext) => {
    let sameRowAsBefore = false;
    setActiveTrace((prev) => {
      if (prev === null) {
        lastFocusRef.current = document.activeElement as HTMLElement | null;
      }
      sameRowAsBefore = prev?.id === trace.id;
      return trace;
    });
    // Same trace id while sheet closed: `activeTrace` reference may not change enough for effects.
    if (sameRowAsBefore && !sheetOpenRef.current) {
      wasClosedRef.current = true;
      setSheetOpen(false);
      window.setTimeout(() => {
        wasClosedRef.current = false;
        setSheetOpen(true);
      }, 0);
    }
  }, []);

  const requestClose = useCallback(() => {
    setSheetOpen(false);
  }, []);

  // Enter animation: one frame closed then open. Strict Mode runs effect → cleanup → effect;
  // cancelling rAF left wasClosedRef false so the sheet never opened. Reset ref in cleanup.
  useEffect(() => {
    if (activeTrace === null) {
      setSheetOpen(false);
      wasClosedRef.current = true;
      return;
    }
    if (!wasClosedRef.current) {
      setSheetOpen(true);
      return;
    }

    wasClosedRef.current = false;
    setSheetOpen(false);
    let opened = false;
    const id = window.setTimeout(() => {
      opened = true;
      setSheetOpen(true);
    }, 0);
    return () => {
      clearTimeout(id);
      if (!opened) wasClosedRef.current = true;
    };
  }, [activeTrace]);

  useEffect(() => {
    if (!activeTrace) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [activeTrace]);

  useEffect(() => {
    if (!activeTrace) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') requestClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [activeTrace, requestClose]);

  useEffect(() => {
    if (!activeTrace || !sheetOpen) return;
    const root = asideRef.current;
    if (!root) return;
    root.querySelector<HTMLElement>('[data-trace-panel-close]')?.focus();

    const onTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !asideRef.current) return;
      const nodes = [...asideRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)];
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onTab);
    return () => document.removeEventListener('keydown', onTab);
  }, [activeTrace, sheetOpen]);

  const onAsideTransitionEnd = useCallback(
    (e: TransitionEvent<HTMLElement>) => {
      if (e.target !== asideRef.current || e.propertyName !== 'transform') return;
      if (!sheetOpen) {
        setActiveTrace(null);
        lastFocusRef.current?.focus?.();
        lastFocusRef.current = null;
      }
    },
    [sheetOpen],
  );

  const overlay =
    activeTrace !== null
      ? createPortal(
          <div
            className={`fixed inset-0 z-[9999] flex justify-end transition-[opacity,backdrop-filter] duration-300 ease-out ${
              sheetOpen
                ? 'pointer-events-auto bg-black/45 opacity-100 backdrop-blur-[2px]'
                : 'pointer-events-none bg-black/45 opacity-0 backdrop-blur-none'
            }`}
            role="presentation"
            aria-hidden={!sheetOpen}
            onClick={requestClose}
          >
            <aside
              ref={asideRef}
              className={`flex h-full w-full max-w-[1280px] flex-col bg-[#f5f5f5] shadow-[-8px_0_32px_rgba(0,0,0,0.12)] transition-transform duration-300 ease-out will-change-transform ${
                sheetOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
              role="dialog"
              aria-modal="true"
              aria-label="Trace details"
              onTransitionEnd={onAsideTransitionEnd}
              onClick={(e) => e.stopPropagation()}
            >
              {activeTrace.kind === 'claude' && (
                <TraceDetailClaude key={activeTrace.id} trace={activeTrace} onClose={requestClose} />
              )}
              {activeTrace.kind === 'blocked' && (
                <TraceDetailBlocked key={activeTrace.id} trace={activeTrace} onClose={requestClose} />
              )}
              {activeTrace.kind === 'langchain' && (
                <TraceDetailLangChain key={activeTrace.id} trace={activeTrace} onClose={requestClose} />
              )}
            </aside>
          </div>,
          document.body,
        )
      : null;

  return (
    <div className="min-h-screen bg-[#eceff3] p-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div className="mx-auto flex max-w-[1600px] justify-center">
        <Dashboard onOpenTrace={openTrace} />
      </div>
      {overlay}
    </div>
  );
}
