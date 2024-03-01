import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const jhon = await prisma.user.upsert({
    where: { username: 'jhon' },
    update: {},
    create: {
      username: 'jhon',
      password: '123456',
    },
  })
  console.log(jhon)
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
