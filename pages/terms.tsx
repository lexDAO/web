import type { NextPage } from 'next'
import Layout from '~/layout'
import ReactMarkdown from 'react-markdown'
import { twMerge } from 'tailwind-merge'
import { useEffect, useState } from 'react'

const Terms: NextPage = () => {
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    fetch('/terms_of_service.md')
      .then((response) => response.text())
      .then((text) => {
        setMarkdown(text)
      })
  })
  return (
    <Layout heading="Terms of Use" content="Homepage of the legal engineering guild.">
      <div className={twMerge('min-h-screen px-10')}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </Layout>
  )
}

export default Terms
