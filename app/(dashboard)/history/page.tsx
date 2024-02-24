import HistoryChart from '@/components/history-chart'
import { getUserByClerkId } from '@/utils/auth'
import { prisma } from '@/utils/db'

const getData = async () => {
  const user = await getUserByClerkId()
  const analysis = await prisma.analysis.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'asc',
    },
  })

  const sum = analysis.reduce((sum, current) => sum + current.sentimentScore, 0)
  const avg = Math.round(sum / analysis.length)
  return { analysis, avg }
}

export default async function History() {
  const data = await getData()

  return (
    <div className="h-full w-full">
      <h1>History</h1>
      <p>{`Average sentiment: ${data.avg}`}</p>
      <div className="h-full w-full">
        <HistoryChart data={data.analysis} />
      </div>
    </div>
  )
}
