export default function JoinForm() {
  return (
    <form className="absolute h-screen right-0 top-0 bottom-0 p-10 bg-gray-50 dark:bg-gray-900 w-1/2 flex flex-col align-center justify-center space-y-5">
      <h2 className="text-2xl font-semibold">Your support matters.</h2>
      <p className="text-md font-medium">
        This will generate a NFT on Ethereum. It will allow you to access exclusive token-gated content and discussions.
      </p>
      <label htmlFor="name" className="italic">
        What should we call you?
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="border-bottom-1 border-brand-200 dark:border-brand-800"
        autoFocus
      />
      <button
        type="submit"
        className="p-2 rounded-xl bg-brand-50 dark:bg-brand-900 hover:bg-brand-100 hover:dark:bg-brand-900 focus:ring-brand-200 focus:dark:ring-brand-800 outline-none"
      >
        Mint!
      </button>
    </form>
  )
}
