import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav'

type LayoutProps = {
  heading: string
  content: string
  children: React.ReactNode
}

export default function Layout({ heading, content, children }: LayoutProps) {
  const title = 'LexDAO - ' + heading

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg-white dark:bg-black min-h-screen flex flex-col space-between align-center">
          <Header />
          {children}
          <Nav />
        </div>
        <Footer />
      </main>
    </>
  )
}
