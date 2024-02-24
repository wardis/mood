import Link from 'next/link'
import { auth } from '@clerk/nextjs'

export default async function Home() {
  const { userId } = await auth()
  let href = userId ? '/journal' : '/new-user'

  return (
    <div className=" flex h-screen w-screen items-center justify-center bg-black text-white">
      <div className="w-full max-w-[600px] space-y-4">
        <h1 className="text-6xl">The best journal app</h1>
        <p className="text-2xl text-white/60">
          Write and track your mood everyday.
        </p>
        <div>
          <Link href={href}>
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-xl">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
