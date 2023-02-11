import { useQuery } from '@tanstack/react-query'

export const getDiscordEvents = async () => {
  const res = await fetch('api/events', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  console.log(res)
  const data = await res.json()
  console.log(data)
  return data
}

export const useGetDiscordEvents = () => {
  return useQuery(['events'], getDiscordEvents, {
    refetchOnWindowFocus: false,
  })
}
