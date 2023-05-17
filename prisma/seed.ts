const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
import fs from 'fs'

export const loadCoinsFromFile = (filePath: string) => {
  const data = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(data)
}

const load = async () => {
  try {
    console.log('Connected to prisma')

    const coins = await loadCoinsFromFile('../data/tokens_cap.json')

    console.info('Loaded coins from file', coins, coins.length)

    const data = await prisma.token.createMany({
      data: [
        ...coins.map((coin: any) => ({
          name: coin.name,
          symbol: coin.symbol,
          image: coin.image,
        })),
      ],
      skipDuplicates: true,
    })

    console.info('Added token data', data)
  } catch (e) {
    console.error(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

load()
