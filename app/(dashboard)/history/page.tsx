import { getUserByClerkId } from '@/utils/auth'
import { prisma } from '@/utils/db'

const getData = async () => {
  const user = await getUserByClerkId()
  const analysis = await prisma.analysis.findMany({
    where: {
      userId: user.id,
    },
    select: {
      sentimentScore: true,
    },
  })

  const sum = analysis.reduce((sum, current) => sum + current.sentimentScore, 0)
  const avg = Math.round(sum / analysis.length)
  return { analysis, avg }
}

export default async function History() {
  const data = await getData()

  return (
    <div>
      <h1>History</h1>
      <p>Average: {data.avg}</p>
      {data.analysis.map(JSON.stringify)}
    </div>
  )
}
