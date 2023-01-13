import Typical from 'react-typical'
import Balancer from 'react-wrap-balancer'

export const Splash = () => {
  return (
    <>
      <h1 className="font-serif text-6xl font-extrabold text-zinc-800 md:text-9xl">
        <Balancer>LexDAO</Balancer>
      </h1>
      <p className="font-mono text-xl md:text-5xl">
        <Balancer>
          <Typical
            steps={[
              'Building',
              1000,
              'Building the',
              500,
              'Building the next',
              500,
              'Building the next generation',
              500,
              'Building the next generation of',
              500,
              'Building the next generation of contracts',
            ]}
            wrapper="p"
          />
        </Balancer>
      </p>
    </>
  )
}
