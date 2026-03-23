import type { TraceKind } from './traceKinds'

export type TraceTypeLabel = 'ide' | 'framework'

/** Row-specific data shown in the Latest Traces table and the trace side sheet. */
export type TraceRowContext = {
  id: string
  kind: TraceKind
  name: string
  model: string
  avatar: string
  typeLabel: TraceTypeLabel
  guardrail: string
  warning: string
  pass: string
  time: string
  cost: string
  /** Bold prefix before name in the sheet summary row (e.g. `trc-a1 -`). */
  traceIdLabel: string
  /** Banner under the summary table */
  summaryBanner: {
    variant: 'success' | 'error' | 'warning'
    tag: string
    body: string
  }
}

export const LATEST_TRACES: TraceRowContext[] = [
  {
    id: 'latest-claude-code',
    kind: 'claude',
    name: 'Claude Code',
    model: 'claude-sonnet-4-2025051',
    avatar: 'CC',
    typeLabel: 'ide',
    guardrail: 'Policy 1',
    warning: '3',
    pass: '4',
    time: '2:25 PM',
    cost: '$ 10.00',
    traceIdLabel: 'trc-a1 -',
    summaryBanner: {
      variant: 'success',
      tag: '',
      body: 'Refactored JWT auth middleware to support rotating JWKS keys. All 14 tests pass.',
    },
  },
  {
    id: 'latest-langchain',
    kind: 'langchain',
    name: 'LangChain',
    model: 'claude-sonnet-4-2025051',
    avatar: 'LC',
    typeLabel: 'framework',
    guardrail: 'Coding',
    warning: '3',
    pass: '4',
    time: '2:25 PM',
    cost: '$ 10.00',
    traceIdLabel: 'trc-lc1 -',
    summaryBanner: {
      variant: 'error',
      tag: 'RAG query',
      body: 'Refactored JWT auth middleware to support rotating JWKS keys. All 14 tests pass.',
    },
  },
  {
    id: 'latest-cursor-blocked',
    kind: 'blocked',
    name: 'Cursor',
    model: 'claude-sonnet-4-2025051',
    avatar: 'CC',
    typeLabel: 'ide',
    guardrail: 'Marketing',
    warning: '3',
    pass: '4',
    time: '2:25 PM',
    cost: '$ 10.00',
    traceIdLabel: 'trc-bl1 -',
    summaryBanner: {
      variant: 'error',
      tag: 'BLOCKED',
      body: 'Agent attempted to exfiltrate .env via curl to external webhook.',
    },
  },
  {
    id: 'latest-crewai',
    kind: 'claude',
    name: 'CrewAI',
    model: 'GPT-4-2025051',
    avatar: 'CC',
    typeLabel: 'framework',
    guardrail: 'Devops',
    warning: '3',
    pass: '4',
    time: '2:25 PM',
    cost: '$ 10.00',
    traceIdLabel: 'trc-cr1 -',
    summaryBanner: {
      variant: 'success',
      tag: '',
      body: 'Multi-agent crew completed deployment checklist; staging validation green.',
    },
  },
]
