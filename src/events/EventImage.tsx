export const EventImage = ({ title }: { title: string }) => {
  if (title.includes('Study Group')) {
    return <img src="/images/study-group.png" alt="Study Group" className="h-24 w-24 rounded-full xl:h-32 xl:w-32" />
  }

  if (title.includes('Happy Hour')) {
    return <img src="/images/happy-hour.png" alt="Happy Hour" className="h-24 w-24 rounded-full xl:h-32 xl:w-32" />
  }

  if (title.includes('Hack Call')) {
    return <img src="/images/legal-hacks.png" alt="Hack Call" className="h-24 w-24 rounded-full xl:h-32 xl:w-32" />
  }

  return null
}
