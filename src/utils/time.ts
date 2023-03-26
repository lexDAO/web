import dayjs from 'dayjs'

export const prettyShortDate = (timestamp: string) => {
  return dayjs(timestamp).format('MMM D, YYYY')
}
