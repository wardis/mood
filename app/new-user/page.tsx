import { prisma } from '@/utils/db'
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

const createNewUser = async () => {
  const user = await currentUser()
  console.log(user)
  const match = await prisma.user.findUnique({
    where: {
      clerkId: user!.id,
    },
  })

  if (!match) {
    await prisma.user.create({
      data: {
        clerkId: user!.id,
        email: user!.emailAddresses[0].emailAddress,
      },
    })
  }

  redirect('/journal')
}

prisma
export default async function NewUserPage() {
  await createNewUser()
  return <div>Hi User</div>
}
