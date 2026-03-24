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
  /** Bold prefix before name in the sheet summary row (e.g. hex trace id + separator). */
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
    model: 'anthropic/claude-sonnet-4-20250514',
    avatar: 'CC',
    typeLabel: 'ide',
    guardrail: 'Policy · prod-auth',
    warning: '1',
    pass: '12',
    time: '2:27 PM',
    cost: '$2.84',
    traceIdLabel: '7f3a9b2e · ',
    summaryBanner: {
      variant: 'success',
      tag: '',
      body: 'JWT middleware refactor: JWKS rotation + HS256 fallback removed. CI pipeline 14/14 green on branch feat/auth-jwks.',
    },
  },
  {
    id: 'latest-langchain',
    kind: 'langchain',
    name: 'LangChain',
    model: 'anthropic/claude-3-5-sonnet-20241022',
    avatar: 'LC',
    typeLabel: 'framework',
    guardrail: 'RAG · PII',
    warning: '2',
    pass: '9',
    time: '2:21 PM',
    cost: '$0.41',
    traceIdLabel: 'c4d88e1a · ',
    summaryBanner: {
      variant: 'error',
      tag: 'RAG retrieval',
      body: 'Top-k chunk hit internal wiki page with legacy API keys in prose; response blocked before user stream.',
    },
  },
  {
    id: 'latest-cursor-blocked',
    kind: 'blocked',
    name: 'Cursor',
    model: 'openai/gpt-4.1-2025-04-14',
    avatar: 'Cu',
    typeLabel: 'ide',
    guardrail: 'Exfil · secrets',
    warning: '1',
    pass: '0',
    time: '2:18 PM',
    cost: '$0.06',
    traceIdLabel: '9e02f5c3 · ',
    summaryBanner: {
      variant: 'error',
      tag: 'BLOCKED',
      body: 'Shell tool attempted curl POST of .env to non-allowlisted host; execution denied and trace flagged.',
    },
  },
  {
    id: 'latest-crewai',
    kind: 'claude',
    name: 'CrewAI',
    model: 'openai/gpt-4o-2024-11-20',
    avatar: 'Cr',
    typeLabel: 'framework',
    guardrail: 'DevOps · prod',
    warning: '0',
    pass: '6',
    time: '2:04 PM',
    cost: '$1.12',
    traceIdLabel: 'b8116d4f · ',
    summaryBanner: {
      variant: 'success',
      tag: '',
      body: 'Crew run deploy-validator: staging health checks OK, Argo sync diff empty, no policy violations in tool traces.',
    },
  },
]
