import type { NextPage } from 'next'
import Layout from '~/layout'
import { useQuery } from 'wagmi'


const Events: NextPage = () => {
  const calendar = 'lexdaocoop@gmail.com'
  const { data, isLoading } = useQuery(['calendar'], () =>
    fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${calendar}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`,
      {
        method: 'GET',
      },
    ).then((res) => res.json()),
  )

  console.log('calendar', isLoading, data)
  return (
    <Layout heading="Home" content="Homepage of the legal engineering guild.">
      <div className="h-screen w-full flex flex-row justify-center items-top m-10">
        <div>
          <h1 className="text-3xl font-bold">Events</h1>
          {data?.items.map((item: any) => (
            <div key={item.id}>{item.summary}</div>
          ))}
        </div>
        <div>
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&mode=MONTH&src=bGV4ZGFvY29vcEBnbWFpbC5jb20&src=MTI2ZzQzNnYybXZrb2V2Y2FqYWJqdXQ5dXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=czJsOGhnNm01ZXJ2MTNwdm1pNXE1djNzMDBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23b8a000&color=%23c53f00&color=%23D81B60&color=%2333B679&color=%230B8043"
            width="500"
            height="800"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </Layout>
  )
}

export default Events
