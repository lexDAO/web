import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

type LayoutProps = {
  heading: string
  content: string
  children: React.ReactNode
}

export default function Layout({ heading, content, children }: LayoutProps) {
  const title = 'LexDAO - ' + heading

  return (
    <body className="flex flex-col min-h-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen w-screen">
        <Header />
        <div className="space-between align-center flex min-h-screen w-screen flex-col bg-white">{children}</div>
      </main>
      <Footer />
    </body>
  )
}
