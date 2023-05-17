import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const fetchRandomToken = async () => {
  try {
  } catch (e) {
    console.error(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}
