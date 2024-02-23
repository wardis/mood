'use client'

import { useState } from 'react'

export default function Editor({ entry }) {
  const [value, setValue] = useState(entry.content)

  return (
    <div className="h-full w-full overflow-hidden">
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="h-full w-full p-8 text-xl outline-none"
      />
    </div>
  )
}
