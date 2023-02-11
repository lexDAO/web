import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== 'GET') {
      res.status(405).json({ statusCode: 405, message: 'Method Not Allowed' })
      return
    }

    const response = await fetch(`https://discord.com/api/v10/guilds/682960432272506907/scheduled-events`, {
      method: 'GET',
      headers: {
        Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ statusCode: 500, error: error })
  }
}

export default handler
