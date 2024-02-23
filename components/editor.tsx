'use client'

export default function Editor({ entry }) {
  return (
    <div>
      {entry.id} {entry.content}
    </div>
  )
}
