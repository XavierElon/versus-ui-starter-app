import { useRef, useState } from 'react'

export enum Form {
  Initial,
  Loading,
  Success,
  Error
}
export type FormState = {
  state: Form
  message?: string
  inputEl?: React.RefObject<HTMLInputElement>
}

export function useSubscribe() {
  const [form, setForm] = useState<FormState>({ state: Form.Initial })
  const inputEl = useRef<HTMLInputElement>(null)
  async function subscribe(e: React.FormEvent) {
    e.preventDefault()
    setForm({ state: Form.Loading })
    try {
      const res = await fetch('/api/subscribe', {
        body: JSON.stringify({
          email: inputEl.current?.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
      const { error } = await res.json()
      if (error) {
        throw error
      }
      setForm({ state: Form.Success })
    } catch (error) {
      setForm({ state: Form.Error, message: 'something went wrong' })
    }
  }
  return { form, inputEl, subscribe }
}
