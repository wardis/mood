'use client'

import { updateEntry } from '@/utils/api'
import { useState } from 'react'
import { useAutosave } from 'react-autosave'

export default function Editor({ entry }) {
  const [value, setValue] = useState(entry.content)
  const [isLoading, setIsLoading] = useState(false)
  const [analysis, setAnalysis] = useState(entry.analysis)

  const analysisData = [
    { name: 'Summary', value: analysis?.summary },
    { name: 'Subject', value: analysis?.subject },
    { name: 'Mood', value: analysis?.mood },
    { name: 'Negative', value: analysis?.negative ? 'True' : 'False' },
  ]

  useAutosave({
    data: value,
    onSave: async (_value) => {
      setIsLoading(true)
      const data = await updateEntry(entry.id, _value)
      setAnalysis(data.analysis)
      setIsLoading(false)
    },
  })

  return (
    <div className="grid h-full w-full grid-cols-3 overflow-hidden">
      <div className="col-span-2">
        {isLoading && <div>...loading </div>}
        <textarea
          className="h-full w-full p-8 text-xl outline-none"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <div className="border-l border-black/10">
        <div
          className="px-6 py-10"
          style={{ backgroundColor: entry?.analysis?.color ?? 'lightgray' }}
        >
          <h2 className="text-2xl">Analysis</h2>
        </div>
        <div className="">
          <ul>
            {analysisData.map((item) => (
              <li
                className="flex items-center justify-between border-b border-black/10 px-2 py-4"
                key={item.name}
              >
                <span className="text-lg font-semibold">{item.name}</span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
