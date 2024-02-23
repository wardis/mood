import { getUserByClerkId } from '@/utils/auth'
import { prisma } from '@/utils/db'

const getData = async () => {
  const user = getUserByClerkId()
  const analyses = await prisma.analysis.findMany({
    where: {},
  })
  return analyses
}

export default async function History() {
  const analyses = await getData()

  return (
    <div>
      <h1>History</h1>
      {analyses.map((a) => (
        <p>{a.summary + '  --  ' + a.sentimentScore}</p>
      ))}
    </div>
  )
}
