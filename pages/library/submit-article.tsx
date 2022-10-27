import type { NextPage } from 'next'
import Layout from '~/layout'
import Multiselect from './Multiselect'
import React, { useState } from 'react'
import axios from 'axios'

const SubmitArticle: NextPage = () => {
  const [tag, setTag] = useState([
    'First Amendment',
    'Accountability',
    'Alternative Dispute Resolution',
    'Anonymity',
    'Applications',
    'Artificial Intelligence',
    'Blockchain',
    'Browsers',
    'Central Bank',
    'Civil Liability',
    'Commodities',
    'Confidentiality',
    'Compliance',
    'Computational Security',
    'Conflict Resolution Framework',
    'Consent Management',
    'Consumer Protection',
    'Consensus',
    'Crowdfunding',
    'Cryptocurrency',
    'Cryptography',
    'Cybersecurity',
    'DAO',
    'Data Management',
    'Data Provenance',
    'DDOS Attacks',
    'DeFi',
  ])
  const [selectedTag, setSelectedTag] = useState([])
  const [selectedType, setselectedType] = useState([])

  const [type, setType] = useState([
    'Article',
    'Academic Journal',
    'Book',
    'Panel',
    'Twitter Thread',
    'Editorial',
    'Practical Law Guide',
    'Case Law',
  ])
  const [title, setTitle] = useState('')
  const [email, setEmail] = useState('')
  const [author, setAuthor] = useState('')
  const [link, setLink] = useState('')
  const [notes, setNotes] = useState('')
  const [date, setDate] = useState('')
//email, author, link, notes, date, title 
  const onSubmit = async () => {
    if (tag && tag.length > 0) {
      const result = await axios
        .post('http://localhost:1337/api/articles', {
          data: { topics: selectedTag, type: selectedType, email, author, link, notes, date, title}
        })
        .catch((error) => {
          console.log(error.response)
        })
      console.log(result)
    }
  }
  return (
    <Layout heading="Home" content="Homepage of the legal engineering guild.">
      <h1 className="text-3xl font-bold text-white">Submit your article</h1>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email Address</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          id="base-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="base-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Author</label>
        <input
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          id="base-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Link</label>
        <input
          onChange={(e) => setLink(e.target.value)}
          type="text"
          id="base-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Publication Date</label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>

          <input
            onChange={(e) => setDate(e.target.value)}
            datepicker-format="dd/mm/yyyy"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="DD/MM/YYYY"
          />
        </div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Type</label>
        <Multiselect tag={type} setSelectedTag={setselectedType} selectedTag={selectedType} />
        {/* <Multiselect type={tag} setType={setTag} /> */}
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Topics/Tags</label>
        <Multiselect tag={tag} setSelectedTag={setSelectedTag} selectedTag={selectedTag} />
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Notes</label>
        <input
          onChange={(e) => setNotes(e.target.value)}
          type="text"
          id="base-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button
          onClick={onSubmit}
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Submit
        </button>
      </div>
    </Layout>
  )
}

export default SubmitArticle
