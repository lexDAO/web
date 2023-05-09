import Typical from 'react-typical'
import { useIsMounted } from '@/src/hooks/useIsMounted'
import { useMemo } from 'react'

export const Splash = ({ title, content }: { title: string; content: string }) => {
  const isMounted = useIsMounted()

  const steps =
    useMemo(() => {
      if (!content) return []
      const words = content.split(' ')
      let s: any[] = []
      for (let i = 0; i < words.length; i++) {
        // add the last words to the steps array
        if (i === 0) {
          s = [...s, words[i], 1000]
        } else {
          // add the last word to the steps array
          const lastWord = words.slice(0, i + 1).join(' ')
          s = [...s, lastWord, 500]
        }
      }
      return s
    }, [content]) || []

  if (!isMounted) return null

  return (
    <>
      <h1 className="animate-in slide-in-from-top-30 font-serif text-5xl  uppercase font-blacksub pixel-antialiased overline decoration-from-font indent-5 decoration-primary-500 text-white tracking-widest leading-relaxed">
        {title}
      </h1>
      <div className="font-mono indent-5 text-white text-2xl md:text-5xl text-center">
        {steps.length > 0 ? <Typical steps={steps} wrapper="p" /> : null}
      </div>
    </>
  )
}
