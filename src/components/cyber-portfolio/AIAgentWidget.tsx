'use client'

import { useEffect, useRef, useState } from 'react'
import { MessageSquare, Send, X } from 'lucide-react'

const AGENT_ID = 'agent_2W3RmSP27FY1N8Vi'
const BASE_WS_URL = `wss://api.x.ai/v1/realtime?agent_id=${AGENT_ID}`

function formatStatusText(status: string) {
  switch (status) {
    case 'connecting':
      return 'Connecting…'
    case 'open':
      return 'Connected'
    case 'closed':
      return 'Disconnected'
    case 'failed':
      return 'Connection failed'
    case 'missing-key':
      return 'Missing API key'
    default:
      return 'Ready'
  }
}

export function AIAgentWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant' | 'system'; text: string }>>([
    { role: 'system', text: 'AI agent ready. Tap to chat.' },
  ])
  const [inputValue, setInputValue] = useState('')
  const [status, setStatus] = useState<'connecting' | 'open' | 'closed' | 'failed' | 'missing-key' | 'idle'>('idle')
  const wsRef = useRef<WebSocket | null>(null)

  useEffect(() => {
    const apiKey =
      import.meta.env.VITE_XAI_API_KEY ?? import.meta.env.XAI_API_KEY ?? ''

    if (!apiKey) {
      setStatus('missing-key')
      return
    }

    setStatus('connecting')

    const wsUrl = `${BASE_WS_URL}&authorization=${encodeURIComponent(`Bearer ${apiKey}`)}`

    const socket = new WebSocket(wsUrl)
    wsRef.current = socket

    socket.onopen = () => {
      setStatus('open')
      socket.send(
        JSON.stringify({
          type: 'conversation.item.create',
          item: {
            type: 'message',
            role: 'user',
            content: [{ type: 'input_text', text: 'Hello!' }],
          },
        }),
      )
      socket.send(JSON.stringify({ type: 'response.create' }))
    }

    socket.onmessage = event => {
      try {
        const payload = JSON.parse(event.data)
        if (payload.type === 'response.output_text.delta' || payload.type === 'response.output_audio_transcript.delta') {
          setMessages(prev => {
            const last = prev[prev.length - 1]
            if (last?.role === 'assistant') {
              return [...prev.slice(0, -1), { ...last, text: `${last.text}${payload.delta}` }]
            }
            return [...prev, { role: 'assistant', text: payload.delta }]
          })
        } else if (payload.type === 'response.output_audio.delta') {
          // Audio stream payloads may contain base64 PCM data.
          // You can extend this to decode and play audio in the browser.
          console.debug('Audio delta received', payload.delta)
        }
      } catch (error) {
        console.error('AI agent websocket message parse error', error)
      }
    }

    socket.onerror = () => {
      setStatus('failed')
    }

    socket.onclose = () => {
      setStatus('closed')
    }

    return () => {
      socket.close()
      wsRef.current = null
    }
  }, [])

  const sendMessage = (text: string) => {
    const socket = wsRef.current
    if (!socket || socket.readyState !== WebSocket.OPEN) {
      setMessages(prev => [...prev, { role: 'system', text: 'Connection is not open yet.' }])
      return
    }

    setMessages(prev => [...prev, { role: 'user', text }])
    socket.send(
      JSON.stringify({
        type: 'conversation.item.create',
        item: {
          type: 'message',
          role: 'user',
          content: [{ type: 'input_text', text }],
        },
      }),
    )
    socket.send(JSON.stringify({ type: 'response.create' }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!inputValue.trim()) return
    sendMessage(inputValue.trim())
    setInputValue('')
  }

  return (
    <div className="pointer-events-none fixed inset-x-4 bottom-4 z-[90] flex justify-end sm:inset-x-auto sm:right-4 sm:bottom-4">
      <div className="pointer-events-auto w-full max-w-[min(92vw,18rem)] md:max-w-[24rem]">
        <div className="rounded-3xl border border-white/10 bg-[#0A0A0A]/95 shadow-2xl backdrop-blur-xl transition-all duration-200">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
            <div>
              <div className="flex items-center gap-2 text-sm font-medium text-pampas">
                <MessageSquare className="h-4 w-4 text-crail" />
                AI Agent
              </div>
              <p className="text-[11px] text-cloudy-light">{formatStatusText(status)}</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(open => !open)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-cloudy-light transition hover:bg-white/10"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Send className="h-4 w-4" />}
            </button>
          </div>

          {isOpen ? (
            <div className="flex flex-col gap-3 px-4 py-3">
              <div className="flex max-h-56 flex-col gap-2 overflow-y-auto pr-1 text-sm text-cloudy-light">
                {messages.map((message, index) => (
                  <div
                    key={`${message.role}-${index}`}
                    className={`rounded-2xl px-3 py-2 ${
                      message.role === 'user'
                        ? 'self-end bg-crail/15 text-pampas'
                        : message.role === 'assistant'
                        ? 'self-start bg-white/5 text-cloudy'
                        : 'self-start bg-white/5 text-cloudy-light'
                    }`}
                  >
                    {message.text}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input
                  value={inputValue}
                  onChange={event => setInputValue(event.target.value)}
                  placeholder="Ask the agent..."
                  className="h-11 w-full rounded-2xl border border-white/10 bg-[#121212] px-3 text-sm text-cloudy-light outline-none transition focus:border-crail focus:ring-1 focus:ring-crail/30"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="inline-flex h-11 items-center justify-center rounded-2xl bg-crail px-3 text-sm font-medium text-white transition disabled:cursor-not-allowed disabled:bg-white/10"
                >
                  Send
                </button>
              </form>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
