import { useState } from "react"

export default function JoinForm() {
  const [isLawyer, setIsLawyer] = useState(false)
  return (
    <form className="absolute h-screen right-0 top-0 bottom-0 p-10 bg-gray-50 w-1/2 flex flex-col align-center justify-center space-y-5">
      <h2 className="text-2xl font-semibold">Be part of the revolution.</h2>
      <p className="text-md font-medium">
        This will generate a membership NFT on Ethereum. You can access exclusive token-gated content and discussions
        through it.
      </p>
      <input type="text" placeholder="Name" className="rounded-xl" />
      <input type="email" placeholder="Email" className="rounded-xl" />
      <input type="text" placeholder="Discord" className="rounded-xl" />
      <div className="flex flex-row align-center">
        <label className="">
          Are you a lawyer?
        </label>
        <input type="checkbox" className="rounded-full m-1" onChangeCapture={() => setIsLawyer(!isLawyer)} />
      </div>
      {isLawyer && <input type='text' placeholder="Practice Area" className="rounded-xl" />}
      <span>These fields are not required but will make it easier for us to communicate with you.</span>
      <button type="submit" className="p-2 rounded-xl bg-brand-50 hover:bg-brand-100 focus:ring-brand-200 outline-none">
        Mint!
      </button>
    </form>
  )
}
