import type { NextPage } from 'next'
import { useState } from 'react'
import Layout from '~/layout'
import ReactMarkdown from 'react-markdown'
import { useEffect } from 'react'

const Privacy: NextPage = () => {
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    fetch('/privacy_policy.md')
      .then((response) => response.text())
      .then((text) => {
        setMarkdown(text)
      })
  })
  return (
    <Layout heading="Privacy Policy" content="Homepage of the legal engineering guild.">
      <div className="min-h-screen px-10">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </Layout>
  )
}

export default Privacy
