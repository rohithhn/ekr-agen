import { useCallback, useEffect, useMemo, useState } from 'react'

export type SpanKind = 'session' | 'user' | 'llm' | 'subagent' | 'file' | 'bash' | 'stop'

export type LiveSpan = {
  id: string
  label: string
  durationMs: number
  kind: SpanKind
  indent: number
  pass?: boolean
  score?: string
  cost?: string
}

/** How many spans the demo timeline simulates (virtualized in UI). */
export const DEMO_TIMELINE_SPAN_TARGET = 140

function buildManyDemoSpans(count: number): LiveSpan[] {
  const kinds: SpanKind[] = ['llm', 'file', 'bash', 'subagent', 'user', 'session']
  const labels: Record<SpanKind, (i: number) => string> = {
    session: (i) => `Session segment ${i}`,
    user: (i) => `User turn / prompt chunk ${i}`,
    llm: (i) => `LLM → model inference batch ${i}`,
    subagent: (i) => `Subagent handoff ${i}`,
    file: (i) => `Tool: read/write file ${i}`,
    bash: (i) => `Tool: shell ${i}`,
    stop: (i) => `Subagent complete ${i}`,
  }
  const out: LiveSpan[] = []
  for (let i = 0; i < count; i++) {
    const kind = kinds[i % kinds.length]
    const durationMs = 40 + Math.round((Math.sin(i * 0.31) * 0.5 + 0.5) * 4200 + (i % 7) * 180)
    const indent = Math.min(4, (i % 11) % 5)
    const row: LiveSpan = {
      id: `demo-${i}`,
      label: labels[kind](i + 1),
      durationMs,
      kind,
      indent,
    }
    if (kind === 'llm' && i % 4 === 0) {
      row.pass = true
      row.score = (0.02 + (i % 5) * 0.01).toFixed(2)
    }
    out.push(row)
  }
  return out
}

const BASE_SPANS: LiveSpan[] = [
  { id: 's1', label: 'Session Start (Multi-Agent)', durationMs: 14200, kind: 'session', indent: 0 },
  {
    id: 's2',
    label: 'User: "Create migration to add 2FA columns to users tab…',
    durationMs: 13200,
    kind: 'user',
    indent: 1,
  },
  {
    id: 's3',
    label: 'LLM → claude-opus-4 (orchestrator planning) (2.1k→1.4k) $0.0180',
    durationMs: 2200,
    kind: 'llm',
    indent: 1,
    pass: true,
    score: '0.03',
  },
  { id: 's4', label: 'SubagentStart → MigrationAgent', durationMs: 5800, kind: 'subagent', indent: 2 },
  {
    id: 's5',
    label: 'LLM → claude-opus-4 (migration gen) (1.8k→1.2k) $0.0150',
    durationMs: 1800,
    kind: 'llm',
    indent: 3,
  },
  {
    id: 's6',
    label: 'CreateFile → migrations/20260318_add_2fa.sql',
    durationMs: 80,
    kind: 'file',
    indent: 3,
    pass: true,
    score: '0.03',
  },
  { id: 's7', label: 'Bash → psql -f migrations/20260318_add_2fa.sql', durationMs: 1200, kind: 'bash', indent: 3 },
  {
    id: 's8',
    label: 'Bash → psql -f migrations/20260318_add_2fa_rollback.s…',
    durationMs: 900,
    kind: 'bash',
    indent: 3,
  },
  { id: 's9', label: 'Bash → psql -f migrations/20260318_add_2fa.sql', durationMs: 800, kind: 'bash', indent: 3 },
  { id: 's10', label: 'SubagentStop → MigrationAgent ✓', durationMs: 20, kind: 'stop', indent: 3 },
  { id: 's11', label: 'SubagentStart → APIAgent', durationMs: 4800, kind: 'subagent', indent: 2 },
  {
    id: 's12',
    label: 'LLM → claude-opus-4 (API update) (3.2k→1.8k) $0.0250',
    durationMs: 2000,
    kind: 'llm',
    indent: 3,
  },
  { id: 's13', label: 'EditFile → src/routes/auth.ts', durationMs: 120, kind: 'file', indent: 3 },
  { id: 's14', label: 'EditFile → src/models/user.ts', durationMs: 80, kind: 'file', indent: 3 },
]

const EXTRA_DEMO_COUNT = Math.max(0, DEMO_TIMELINE_SPAN_TARGET - BASE_SPANS.length)
const SEEDED_SPANS: LiveSpan[] = [...BASE_SPANS, ...buildManyDemoSpans(EXTRA_DEMO_COUNT)]

/** Wall-clock start (ms) for each span in trace order (sequential waterfall for demo). */
export function cumulativeStartMs(spans: LiveSpan[]): number[] {
  const starts: number[] = []
  let c = 0
  for (const s of spans) {
    starts.push(c)
    c += s.durationMs
  }
  return starts
}

function jitterSpan(s: LiveSpan): LiveSpan {
  const delta = (Math.random() - 0.5) * Math.min(400, s.durationMs * 0.08)
  const next = Math.round(Math.max(15, s.durationMs + delta))
  return { ...s, durationMs: next }
}

export function useLiveClaudeSpans(intervalMs = 2200) {
  const [spans, setSpans] = useState<LiveSpan[]>(() => SEEDED_SPANS.map((s) => ({ ...s })))

  const tick = useCallback(() => {
    setSpans((prev) => prev.map(jitterSpan))
  }, [])

  useEffect(() => {
    const id = window.setInterval(tick, intervalMs)
    return () => clearInterval(id)
  }, [tick, intervalMs])

  const maxMs = useMemo(() => Math.max(...spans.map((s) => s.durationMs), 1), [spans])
  const totalTraceMs = useMemo(() => spans.reduce((acc, s) => acc + s.durationMs, 0), [spans])

  return { spans, maxMs, totalTraceMs, tick }
}

export type V2TreeNode = {
  id: string
  name: string
  durationMs: number
  kind: 'root' | 'stream' | 'io' | 'tool'
  tokens?: { in: number; out: number; sum: number }
  metrics?: { key: string; value: string }[]
  children?: V2TreeNode[]
}

export const INITIAL_V2_TREE: V2TreeNode = {
  id: 'root',
  name: 'QA-Chatbot',
  durationMs: 12770,
  kind: 'root',
  metrics: [
    { key: 'contains-pii', value: '0.00' },
    { key: 'error-analysis', value: '1.00' },
    { key: 'helpfulness', value: '0.20' },
    { key: 'is_question', value: '1.00' },
    { key: 'is_same_lang', value: '1.00' },
  ],
  children: [
    {
      id: 'h1',
      name: 'handle-chatbot-message',
      durationMs: 12770,
      kind: 'stream',
      children: [
        { id: 'g1', name: 'get-langfuse-prompt', durationMs: 42, kind: 'io' },
        { id: 'c1', name: 'create-mcp-client', durationMs: 80, kind: 'io' },
        {
          id: 'st1',
          name: 'ai.streamText',
          durationMs: 12630,
          kind: 'stream',
          children: [
            {
              id: 'ds1',
              name: 'ai.streamText.doStream',
              durationMs: 5480,
              kind: 'stream',
              tokens: { in: 1119, out: 52, sum: 1171 },
            },
            { id: 'tc1', name: 'ai.toolCall', durationMs: 370, kind: 'tool' },
            {
              id: 'ds2',
              name: 'ai.streamText.doStream',
              durationMs: 7140,
              kind: 'stream',
              tokens: { in: 4268, out: 281, sum: 4549 },
            },
          ],
        },
      ],
    },
  ],
}

function jitterTree(n: V2TreeNode): V2TreeNode {
  const d = Math.round(Math.max(10, n.durationMs + (Math.random() - 0.5) * Math.min(200, n.durationMs * 0.05)))
  let tokens = n.tokens
  if (tokens) {
    const di = Math.round((Math.random() - 0.5) * 40)
    const dout = Math.round((Math.random() - 0.5) * 8)
    const ni = Math.max(0, tokens.in + di)
    const no = Math.max(0, tokens.out + dout)
    tokens = { in: ni, out: no, sum: ni + no }
  }
  const metrics = n.metrics?.map((m) => {
    const v = parseFloat(m.value)
    if (Number.isNaN(v)) return m
    const nv = Math.min(1, Math.max(0, +(v + (Math.random() - 0.5) * 0.04).toFixed(2)))
    return { ...m, value: nv.toFixed(2) }
  })
  return {
    ...n,
    durationMs: d,
    tokens,
    metrics,
    children: n.children?.map(jitterTree),
  }
}

function cloneTree(n: V2TreeNode): V2TreeNode {
  return JSON.parse(JSON.stringify(n)) as V2TreeNode
}

export function useLiveV2Tree(intervalMs = 2400) {
  const [tree, setTree] = useState<V2TreeNode>(() => cloneTree(INITIAL_V2_TREE))

  useEffect(() => {
    const id = window.setInterval(() => {
      setTree((t) => jitterTree(t))
    }, intervalMs)
    return () => clearInterval(id)
  }, [intervalMs])

  return tree
}

export function spanBarColor(kind: SpanKind): string {
  switch (kind) {
    case 'session':
    case 'stop':
      return '#2a3350'
    case 'user':
      return '#a78bfa'
    case 'llm':
      return '#38bdf8'
    case 'subagent':
      return '#c084fc'
    case 'file':
      return '#fbbf24'
    case 'bash':
      return '#fbbf24'
    default:
      return '#64748b'
  }
}

export function durationTone(ms: number): 'red' | 'amber' | 'muted' {
  if (ms >= 8000) return 'red'
  if (ms >= 4000) return 'amber'
  return 'muted'
}
