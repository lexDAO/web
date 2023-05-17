import { AsciiArt } from '@/components/ascii-art'

const lexyTitle = `
██╗░░░░░  ███████╗  ██╗░░██╗  ██╗░░░██╗
██║░░░░░  ██╔════╝  ╚██╗██╔╝  ╚██╗░██╔╝
██║░░░░░  █████╗░░  ░╚███╔╝░  ░╚████╔╝░
██║░░░░░  ██╔══╝░░  ░██╔██╗░  ░░╚██╔╝░░
███████╗  ███████╗  ██╔╝╚██╗  ░░░██║░░░
╚══════╝  ╚══════╝  ╚═╝░░╚═╝  ░░░╚═╝░░░`

const TICKER = '>'

export const Lexy = () => {
  return (
    <div className="font-mono h-[80vh] space-y-5 w-screen md:w-[80vw] lg:w-[60vw] overflow-hidden flex flex-col items-center justify-start bg-black">
      <AsciiArt className="">{lexyTitle}</AsciiArt>

      <p className="font-arcade text-center uppercase tracking-widest animate-blink">
        lexy is learning <br />
        <span className="text-2xl">[</span> <span className="text-2xl text-lex-gold">{TICKER}</span>{' '}
        <span className="text-2xl">]</span>
      </p>
    </div>
  )
}
