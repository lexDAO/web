import Image from 'next/image'
import studyGroup from '../../public/images/study-group.png'
import happyHour from '../../public/images/happy-hour.png'
import hackCall from '../../public/images/legal-hacks.png'

export const EventImage = ({ title }: { title: string }) => {
  if (title.includes('Study Group')) {
    return <Image src={studyGroup} alt="Study Group" className="h-24 w-24 rounded-full xl:h-32 xl:w-32" />
  }

  if (title.includes('Happy Hour')) {
    return <Image src={happyHour} alt="Happy Hour" className="h-24 w-24 rounded-full xl:h-32 xl:w-32" />
  }

  if (title.includes('Hack Call')) {
    return <Image src={hackCall} alt="Hack Call" className="h-24 w-24 rounded-full xl:h-32 xl:w-32" />
  }

  return null
}
