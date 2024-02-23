'use client'

import { useState } from 'react'

export default function Question() {
  const [value, setValue] = useState('')
  const onChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // do stuff
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="Ask a question"
          className="mr-2 rounded-lg border border-black/20 px-4 py-2 text-lg"
        />
        <button
          type="submit"
          className="rounded-lg bg-blue-400 px-4 py-2 text-lg"
        >
          Ask
        </button>
      </form>
    </div>
  )
}
