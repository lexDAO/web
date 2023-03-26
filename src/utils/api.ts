import qs from 'qs'

export const getApiUrl = (path: string) => {
  return `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'}${path}`
}

export const fetcher = async (path: string, urlParamsObject: any = {}, options: any = {}) => {
  const mergedOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
    ...options,
  }

  const queryString = qs.stringify(urlParamsObject)
  const requestUrl = `${getApiUrl(`/api${path}${queryString ? `?${queryString}` : ''}`)}`

  console.log('requestUrl', requestUrl)
  const response = await fetch(requestUrl, mergedOptions)

  if (!response.ok) {
    console.error('Error', response.statusText)
    throw new Error(`An error occured please try again`)
  }

  const data = await response.json()
  return data
}

export const getMedia = (media: {
  data: {
    attributes: {
      url: string
    }
  }
}) => {
  if (!media?.data?.attributes?.url) return
  const url = media.data.attributes.url
  const imageUrl = url.startsWith('/') ? getApiUrl(url) : url
  return imageUrl
}
