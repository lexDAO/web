export default function JoinForm() {
  return (
    <form className="absolute min-h-screen w-full lg:bg-zinc-50 right-0 top-0 bottom-0 p-10 lg:w-1/2 flex flex-col align-center justify-center space-y-5">
      <h2 className="text-2xl font-semibold">Your support matters.</h2>
      <p className="text-md font-medium">
        This will generate a NFT on Ethereum. It will allow you to access exclusive token-gated content and discussions.
      </p>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="italic">
            What should we call you?
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="border-bottom-1 border-brand-200 focus:border-brand-600 focus:ring-brand-500 focus:ring-2"
            autoFocus
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="why" className="italic">
            Why do you want to join LexDAO?
          </label>
          <textarea
            name="why"
            id="name"
            className="border-bottom-1 border-brand-200 focus:border-brand-600 focus:ring-brand-500 focus:ring-2"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="way" className="italic">
            Will you contribute capital or sweat to join?
          </label>
          <label htmlFor="way_capital" className="flex flex-row">
            <div className="flex items-center h-5">
              <input
                type="radio"
                id="way_capital"
                name="way"
                value="capital"
                aria-describedby="capital-helper-text"
                className="w-4 h-4 text-brand-600 bg-gray-100 border-gray-300 focus:ring-brand-500  focus:ring-2"
              />
            </div>
            <div className="flex flex-col ml-2 text-sm">
              <span className="font-medium text-gray-900 ">Capital</span>
              <span id="capital-helper-text" className="text-xs font-normal text-gray-500 ">
                Pay 300 USDC/DAI as membership dues. This will be refunded if you&apos;re not accepted as a member by
                the guild.
              </span>
            </div>
          </label>
          <label htmlFor="way_capital" className="flex flex-row">
            <div className="flex items-center h-5">
              <input
                type="radio"
                id="way_sweat"
                name="way"
                value="sweat"
                aria-describedby="sweat-helper-text"
                className="w-4 h-4 text-brand-600 bg-gray-100 border-gray-300 focus:ring-brand-500  focus:ring-2"
              />
            </div>
            <div className="flex flex-col ml-2 text-sm">
              <span className="font-medium text-gray-900 ">Sweat</span>
              <span id="sweat-helper-text" className="text-xs font-normal text-gray-500 ">
                Apprentice on a project with a legal engineer to earn your membership.
              </span>
            </div>
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="transition-transform duration-300 ease-in hover:scale-105 p-2 rounded-xl bg-brand-50  hover:bg-brand-100  focus:ring-brand-200  outline-none"
      >
        Submit.
      </button>
    </form>
  )
}
