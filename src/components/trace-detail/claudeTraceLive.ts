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
  /** OTel-style key/value hints for tooltips (synthetic demo). */
  attrs?: { k: string; v: string }[]
}

/** How many spans the demo timeline simulates (virtualized in UI). */
export const DEMO_TIMELINE_SPAN_TARGET = 140

function stableSpanHex(seed: number): string {
  let x = (seed * 2654435761 + 1013904223) >>> 0
  let out = ''
  for (let j = 0; j < 16; j++) {
    x = (Math.imul(x, 1664525) + 1013904223) >>> 0
    out += (x % 16).toString(16)
  }
  return out
}

const MODELS = [
  'claude-sonnet-4-20250514',
  'claude-3-5-sonnet-20241022',
  'gpt-4.1-2025-04-14',
  'gpt-4o-mini-2024-07-18',
] as const

function buildManyDemoSpans(count: number): LiveSpan[] {
  const kinds: SpanKind[] = ['llm', 'file', 'bash', 'subagent', 'user', 'session']
  const llmPool = (i: number) => {
    const m = MODELS[i % MODELS.length]
    const toks = `${800 + (i % 40) * 120}→${200 + (i % 25) * 40}`
    return {
      label: `gen_ai.chat · ${m.split('-').slice(0, 3).join('-')}… · ${toks} tok`,
      attrs: [
        { k: 'gen_ai.operation.name', v: 'chat' },
        { k: 'gen_ai.request.model', v: m },
        { k: 'gen_ai.usage.output_tokens', v: String(200 + (i % 25) * 40) },
      ],
    }
  }
  const filePool = (i: number) => {
    const paths = [
      'src/agents/planner.ts',
      'lib/rag/retriever.ts',
      'migrations/20260319_idx.sql',
      'packages/core/src/prompts/system.ts',
    ]
    const p = paths[i % paths.length]
    return {
      label: `tool.write_file · ${p}`,
      attrs: [
        { k: 'tool.name', v: 'write_file' },
        { k: 'code.filepath', v: p },
      ],
    }
  }
  const bashPool = (i: number) => {
    const cmds = [
      'pnpm test --filter @app/api',
      'rg --files -g "*.ts" src/',
      'openssl rand -hex 16',
      'docker compose exec api pytest -q',
    ]
    const c = cmds[i % cmds.length]
    return {
      label: `process.exec · ${c.length > 42 ? `${c.slice(0, 40)}…` : c}`,
      attrs: [
        { k: 'process.command', v: c },
        { k: 'process.executable.name', v: c.split(' ')[0] ?? 'sh' },
      ],
    }
  }
  const subPool = (i: number) => ({
    label: `agent.handoff · ${['ResearchAgent', 'CoderAgent', 'ReviewerAgent', 'DeployAgent'][i % 4]}`,
    attrs: [
      { k: 'traceai.agent.name', v: ['ResearchAgent', 'CoderAgent', 'ReviewerAgent', 'DeployAgent'][i % 4] },
      { k: 'messaging.destination', v: 'orchestrator' },
    ],
  })
  const userPool = (i: number) => ({
    label: `user.message · turn ${i + 1} · ${(180 + (i % 8) * 90).toLocaleString()} chars`,
    attrs: [
      { k: 'enduser.id', v: `usr_${stableSpanHex(i * 17).slice(0, 8)}` },
      { k: 'session.id', v: `sess_${stableSpanHex(i * 31).slice(0, 10)}` },
    ],
  })
  const sessionPool = (i: number) => ({
    label: `trace.root · service.chat-api · segment ${i + 1}`,
    attrs: [
      { k: 'service.name', v: 'chat-api' },
      { k: 'deployment.environment', v: i % 3 === 0 ? 'staging' : 'production' },
    ],
  })
  const stopPool = (i: number) => ({
    label: `agent.complete · ${['ok', 'ok', 'cancelled'][i % 3]}`,
    attrs: [
      { k: 'otel.status_code', v: i % 3 === 2 ? 'ERROR' : 'OK' },
      { k: 'gen_ai.response.finish_reasons', v: i % 3 === 2 ? '["user_cancel"]' : '["stop"]' },
    ],
  })

  const out: LiveSpan[] = []
  for (let i = 0; i < count; i++) {
    const kind = kinds[i % kinds.length]
    const durationMs = 40 + Math.round((Math.sin(i * 0.31) * 0.5 + 0.5) * 4200 + (i % 7) * 180)
    const indent = Math.min(4, (i % 11) % 5)
    let label: string
    let attrs: { k: string; v: string }[] | undefined
    switch (kind) {
      case 'llm':
        ;({ label, attrs } = llmPool(i))
        break
      case 'file':
        ;({ label, attrs } = filePool(i))
        break
      case 'bash':
        ;({ label, attrs } = bashPool(i))
        break
      case 'subagent':
        ;({ label, attrs } = subPool(i))
        break
      case 'user':
        ;({ label, attrs } = userPool(i))
        break
      case 'session':
        ;({ label, attrs } = sessionPool(i))
        break
      case 'stop':
        ;({ label, attrs } = stopPool(i))
        break
      default:
        label = `span ${i}`
    }
    const row: LiveSpan = {
      id: `sp_${stableSpanHex(i * 7919)}`,
      label,
      durationMs,
      kind,
      indent,
      attrs,
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
  {
    id: 'a1f2c9d8e7b64510',
    label: 'trace.root · multi-agent · chat-api',
    durationMs: 14200,
    kind: 'session',
    indent: 0,
    attrs: [
      { k: 'service.name', v: 'chat-api' },
      { k: 'service.version', v: '2.14.0' },
      { k: 'deployment.environment', v: 'production' },
    ],
  },
  {
    id: 'b3e4f5a6c7d84921',
    label: 'user.message · prompt · 2.1k chars',
    durationMs: 13200,
    kind: 'user',
    indent: 1,
    attrs: [
      { k: 'enduser.id', v: 'usr_01JQ4K8VZ9' },
      { k: 'session.id', v: 'sess_m7p2nx9k1' },
    ],
  },
  {
    id: 'c5d6e7f8a9b03254',
    label: 'gen_ai.chat · claude-opus-4-20250514 · 2140→1380 tok · $0.018',
    durationMs: 2200,
    kind: 'llm',
    indent: 1,
    pass: true,
    score: '0.03',
    attrs: [
      { k: 'gen_ai.operation.name', v: 'chat' },
      { k: 'gen_ai.request.model', v: 'claude-opus-4-20250514' },
      { k: 'gen_ai.usage.input_tokens', v: '2140' },
      { k: 'gen_ai.usage.output_tokens', v: '1380' },
    ],
  },
  {
    id: 'd7e8f9a0b1c24365',
    label: 'agent.handoff · MigrationAgent',
    durationMs: 5800,
    kind: 'subagent',
    indent: 2,
    attrs: [
      { k: 'traceai.agent.name', v: 'MigrationAgent' },
      { k: 'messaging.operation', v: 'publish' },
    ],
  },
  {
    id: 'e9f0a1b2c3d45676',
    label: 'gen_ai.chat · claude-opus-4-20250514 · 1820→1190 tok · $0.015',
    durationMs: 1800,
    kind: 'llm',
    indent: 3,
    attrs: [
      { k: 'gen_ai.operation.name', v: 'chat' },
      { k: 'gen_ai.request.model', v: 'claude-opus-4-20250514' },
    ],
  },
  {
    id: 'f0a1b2c3d4e56787',
    label: 'tool.write_file · migrations/20260318_add_2fa.sql',
    durationMs: 80,
    kind: 'file',
    indent: 3,
    pass: true,
    score: '0.03',
    attrs: [
      { k: 'tool.name', v: 'write_file' },
      { k: 'code.filepath', v: 'migrations/20260318_add_2fa.sql' },
    ],
  },
  {
    id: 'a2b3c4d5e6f67898',
    label: 'process.exec · psql -f migrations/20260318_add_2fa.sql',
    durationMs: 1200,
    kind: 'bash',
    indent: 3,
    attrs: [
      { k: 'process.executable.path', v: '/usr/bin/psql' },
      { k: 'process.command', v: 'psql -f migrations/20260318_add_2fa.sql' },
    ],
  },
  {
    id: 'b4c5d6e7f8a78909',
    label: 'process.exec · psql -f migrations/20260318_add_2fa_rollback.sql',
    durationMs: 900,
    kind: 'bash',
    indent: 3,
    attrs: [{ k: 'process.command', v: 'psql -f migrations/20260318_add_2fa_rollback.sql' }],
  },
  {
    id: 'c6d7e8f9a0b89012',
    label: 'process.exec · psql -f migrations/20260318_add_2fa.sql',
    durationMs: 800,
    kind: 'bash',
    indent: 3,
    attrs: [{ k: 'process.command', v: 'psql -f migrations/20260318_add_2fa.sql' }],
  },
  {
    id: 'd8e9f0a1b2c90123',
    label: 'agent.complete · MigrationAgent · OK',
    durationMs: 20,
    kind: 'stop',
    indent: 3,
    attrs: [{ k: 'otel.status_code', v: 'OK' }],
  },
  {
    id: 'e0f1a2b3c4d01234',
    label: 'agent.handoff · APIAgent',
    durationMs: 4800,
    kind: 'subagent',
    indent: 2,
    attrs: [{ k: 'traceai.agent.name', v: 'APIAgent' }],
  },
  {
    id: 'f2a3b4c5d6e12345',
    label: 'gen_ai.chat · claude-opus-4-20250514 · 3200→1840 tok · $0.025',
    durationMs: 2000,
    kind: 'llm',
    indent: 3,
    attrs: [
      { k: 'gen_ai.request.model', v: 'claude-opus-4-20250514' },
      { k: 'server.address', v: 'api.anthropic.com' },
    ],
  },
  {
    id: 'a4b5c6d7e8f23456',
    label: 'tool.search_replace · src/routes/auth.ts',
    durationMs: 120,
    kind: 'file',
    indent: 3,
    attrs: [
      { k: 'tool.name', v: 'search_replace' },
      { k: 'code.filepath', v: 'src/routes/auth.ts' },
    ],
  },
  {
    id: 'b6c7d8e9f0a34567',
    label: 'tool.search_replace · src/models/user.ts',
    durationMs: 80,
    kind: 'file',
    indent: 3,
    attrs: [
      { k: 'tool.name', v: 'search_replace' },
      { k: 'code.filepath', v: 'src/models/user.ts' },
    ],
  },
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
  id: '7f3a9b2ec4d18f0a',
  name: 'POST /v1/chat/completions · support-copilot',
  durationMs: 12770,
  kind: 'root',
  metrics: [
    { key: 'guardrail.contains_pii', value: '0.00' },
    { key: 'guardrail.toxicity', value: '0.02' },
    { key: 'eval.helpfulness', value: '0.84' },
    { key: 'gen_ai.usage.total_tokens', value: '5720' },
    { key: 'http.route', value: '/v1/chat/completions' },
  ],
  children: [
    {
      id: '8e1c4d509a2b7f33',
      name: 'RunnableSequence · LangGraph node run',
      durationMs: 12770,
      kind: 'stream',
      children: [
        {
          id: '9a0b1c2d3e4f5061',
          name: 'Retriever · vector_store.similarity_search',
          durationMs: 42,
          kind: 'io',
          tokens: { in: 0, out: 0, sum: 4 },
        },
        {
          id: 'a1b2c3d4e5f60712',
          name: 'mcp_client.initialize · filesystem',
          durationMs: 80,
          kind: 'io',
        },
        {
          id: 'b2c3d4e5f6a71823',
          name: 'streamText · @ai-sdk/anthropic',
          durationMs: 12630,
          kind: 'stream',
          children: [
            {
              id: 'c3d4e5f6a7b82934',
              name: 'doStream · messages.create (streaming)',
              durationMs: 5480,
              kind: 'stream',
              tokens: { in: 1119, out: 52, sum: 1171 },
            },
            {
              id: 'd4e5f6a7b8c93045',
              name: 'tool.invoke · web_search_preview',
              durationMs: 370,
              kind: 'tool',
            },
            {
              id: 'e5f6a7b8c9d04156',
              name: 'doStream · messages.create (streaming)',
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
