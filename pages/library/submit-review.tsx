import type { NextPage } from 'next'
import Layout from '~/layout'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SubmitReview: NextPage = () => {
  const [email, setEmail] = useState('')
  const [array, setArray] = useState([])
  const [qualifications, setQualifications] = useState('')
  const [countries, setCountries] = useState('')
  const [otherQualifications, setOtherQualifications] = useState('')
  const [title, setTitle] = useState('')
  const [numpages, setNumpages] = useState('')
  const [jurisdictions, setJurisdictions] = useState('')
  const [legallyEnforceable, setLegallyEnforceable] = useState('')
  const [law, setLaw] = useState('')
  const [rulings, setRulings] = useState('')
  const [impact, setImpact] = useState('')
  //Muliple
  const [authorQualification, setAuthorQualification] = useState('')
  //text
  const [authorQualifications, setAuthorQualifications] = useState('')
  const [ratings, setRatings] = useState({})
  //Weak Arguments
  const [errorArgument, setErrorArgument] = useState('')
  const [error, setError] = useState('')

  let article: any
  const onSubmit = async () => {
    axios
      .get('http://localhost:1337/api/articles')
      .then((response) => {
        console.log(response.data.data.title)
        const articles = response.data.data
        article = articles.filter((item: any) => item['attributes']['title'] === title)
        console.log(article[0].attributes.topics)
        setArray(article[0].attributes.topics)
      })
      .catch((error) => {
        console.log(error)
        setError('Article not found. Please enter a valid article.')
      })
  }

  useEffect(() => {
    //onSubmit();
  }, [title])

  return (
    <Layout heading="Home" content="Homepage of the legal engineering guild.">
      <h1 className="px-8 mx-8 text-3xl font-bold font-sans text-white">Submit Article Feedback</h1>
      <div
        className="mb-6  flex flex-col 
                    items-center justify-center"
      >
        <label className="block mb-2 text-sm font-medium font-sans dark:text-gray-300">Email Address</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          id="base-input"
          className="border-gray-300 text-sm rounded-md w-64 p-2.5 bg-zinc-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-stone-700"
        />
        <label className="block mb-2 text-sm font-medium font-sans text-gray-900 dark:text-gray-300">
          What are your qualifications?
        </label>
        <input
          onChange={(e) => setQualifications(e.target.value)}
          type="text"
          id="base-input"
          className="border-gray-300 text-sm rounded-md w-64 p-2.5 bg-zinc-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-stone-700"
          placeholder="Lawyer/Engineer/Professor/Student"
        />
        <label className="block mb-2 text-sm font-medium font-sans text-gray-900 dark:text-gray-300">
          What countries are you most qualified in?
        </label>
        <input
          onChange={(e) => setCountries(e.target.value)}
          type="text"
          id="base-input"
          className="border-gray-300 text-sm rounded-md w-64 p-2.5 bg-zinc-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-stone-700"
        />
        <label className="block mb-2 text-sm font-medium font-sans text-gray-900 dark:text-gray-300">
          Any other relevant qualifications details?
        </label>
        <input
          onChange={(e) => setOtherQualifications(e.target.value)}
          type="text"
          id="base-input"
          className="border-gray-300 text-sm rounded-md w-64 p-2.5 bg-zinc-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-stone-700"
        />
        <label className="block mb-2 text-sm font-medium font-sans text-gray-900 dark:text-gray-300">
          Title of the Article
        </label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="base-input"
          className="border-gray-300 text-sm rounded-md w-64 p-2.5 bg-zinc-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-stone-700"
        />
        <button className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" onClick={onSubmit}>
          Search
        </button>
        {error !== null ? (
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{error}</label>
        ) : null}
        <label className="block mb-2 text-sm font-medium font-sans text-gray-900 dark:text-gray-300">
          How many pages is the article?
        </label>
        <div className="flex items-center mb-4">
          <input
            id="default-radio-1"
            type="radio"
            value="five"
            name="default-radio"
            onChange={(e) => setNumpages(e.target.value)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-radio-1"
            className="ml-2 text-sm font-medium font-sans text-gray-900 dark:text-gray-300"
          >
            1-5
          </label>
          <input
            id="default-radio-2"
            type="radio"
            value="twenty"
            name="default-radio"
            onChange={(e) => setNumpages(e.target.value)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-radio-2"
            className="ml-2 text-sm font-medium font-sans text-gray-900 dark:text-gray-300"
          >
            5-20
          </label>
          <input
            id="default-radio-2"
            type="radio"
            value="fifty"
            name="default-radio"
            onChange={(e) => setNumpages(e.target.value)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-radio-2"
            className="ml-2 text-sm font-medium font-sans text-gray-900 dark:text-gray-300"
          >
            20-50
          </label>
          <input
            id="default-radio-2"
            type="radio"
            value="hundred"
            name="default-radio"
            onChange={(e) => setNumpages(e.target.value)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-radio-2"
            className="ml-2 text-sm font-medium font-sans text-gray-900 dark:text-gray-300"
          >
            50-100
          </label>
          <input
            id="default-radio-2"
            type="radio"
            value="hundred plus"
            name="default-radio"
            onChange={(e) => setNumpages(e.target.value)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-radio-2"
            className="ml-2 text-sm font-medium font-sans text-gray-900 dark:text-gray-300"
          >
            100+
          </label>
        </div>

        <label className="block mb-2 text-sm font-medium font-sans text-gray-900 dark:text-gray-300">
          What is the primary jurisdiction(s) of this content?
        </label>
        <input
          onChange={(e) => setJurisdictions(e.target.value)}
          type="text"
          id="base-input"
          className="border-gray-300 text-sm rounded-md w-64 p-2.5 bg-zinc-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-stone-700"
        />
        <label className="block mb-2 text-sm font-medium font-sans text-gray-900 dark:text-gray-300">
          Is this discussion related to Common Law or Civil Law?
        </label>
        <div className="flex items-center mb-4">
          <input
            id="default-radio-1"
            type="radio"
            value="Common Law"
            name="law"
            onChange={(e) => setLaw(e.target.value)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-radio-1"
            className="ml-2 text-sm font-medium font-sans text-gray-900 dark:text-gray-300"
          >
            Common Law
          </label>
          <input
            id="default-radio-1"
            type="radio"
            value="Civil Law"
            name="law"
            onChange={(e) => setLaw(e.target.value)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-radio-1"
            className="ml-2 text-sm font-medium font-sans text-gray-900 dark:text-gray-300"
          >
            Civil Law
          </label>
          <input
            id="default-radio-1"
            type="radio"
            value="Not Applicable"
            name="law"
            onChange={(e) => setLaw(e.target.value)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-radio-1"
            className="ml-2 text-sm font-medium font-sans text-gray-900 dark:text-gray-300"
          >
            Not Applicable
          </label>
        </div>
        <label className="block mb-2 text-sm font-medium font-sans text-gray-900 dark:text-gray-300">
          If the piece is of a legal nature, is this topic supported by law and enforceable as of the date of the
          review?
        </label>
        <div className="flex items-center mb-4">
          <input
            id="default-radio-1"
            type="radio"
            value="true"
            name="legalenforceable"
            onChange={(e) => setLegallyEnforceable(e.target.value)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-radio-1"
            className=" ml-2 text-sm font-medium font-sans text-gray-900 dark:text-gray-300"
          >
            Yes
          </label>
          <input
            id="default-radio-1"
            type="radio"
            value="false"
            name="legalenforceable"
            onChange={(e) => setLegallyEnforceable(e.target.value)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-radio-1"
            className=" ml-2 text-sm font-medium font-sans text-gray-900 dark:text-gray-300"
          >
            No
          </label>
        </div>
        <label className="block mb-2 text-sm font-medium font-sans text-gray-900 dark:text-gray-300">
          What are the rulings or codes (law) that the article referring to in order to make this enforceable?
        </label>
        <input
          onChange={(e) => setRulings(e.target.value)}
          type="text"
          id="base-input"
          className="border-gray-300 text-sm rounded-md w-64 p-2.5 bg-zinc-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-stone-700"
        />
        <label className="block mb-2 text-sm font-medium font-sans text-gray-900 dark:text-gray-300">
          Please describe the impact of this decision in the given jurisdiction
        </label>
        <input
          onChange={(e) => setImpact(e.target.value)}
          type="text"
          id="base-input"
          className="border-gray-300 text-sm rounded-md w-64 p-2.5 bg-zinc-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-stone-700"
        />
        <label className="block mb-2 text-sm font-medium font-sans text-gray-900 dark:text-gray-300">
          How qualified is the author of the piece on the subject?
        </label>
        <div className="flex items-center mb-4">
          <input
            id="default-radio-1"
            type="radio"
            value="Very Qualified"
            name="qualification"
            onChange={(e) => setAuthorQualification(e.target.value)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-radio-1"
            className="ml-2 text-sm font-medium font-sans text-gray-900 dark:text-gray-300"
          >
            Very Qualified
          </label>
          <input
            id="default-radio-1"
            type="radio"
            value="Moderately Qualified"
            name="qualification"
            onChange={(e) => setAuthorQualification(e.target.value)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-radio-1"
            className="ml-2 text-sm font-medium font-sans text-gray-900 dark:text-gray-300"
          >
            Moderately Qualified
          </label>
          <input
            id="default-radio-1"
            type="radio"
            value="Not Qualified"
            name="qualification"
            onChange={(e) => setAuthorQualification(e.target.value)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-radio-1"
            className="ml-2 text-sm font-medium font-sans text-gray-900 dark:text-gray-300"
          >
            Not Qualified
          </label>
        </div>
        <label className="block mb-2 text-sm font-medium font-sans text-gray-900 dark:text-gray-300">
          What are the author(s) qualifications?
        </label>
        <input
          onChange={(e) => setAuthorQualifications(e.target.value)}
          type="text"
          id="base-input"
          className="border-gray-300 text-sm rounded-md w-64 p-2.5 bg-zinc-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-stone-700"
        />
        <label className="block mb-2 text-sm font-medium font-sans text-gray-900 dark:text-gray-300">
          How would you rate the article for each of its relevant topics and tags? (5= Excellent and 1=Bad)
        </label>
        <label className="block mb-2 text-sm font-medium font-sans text-gray-900 dark:text-gray-300">1 2 3 4 5</label>
        {array
          ? array.map((topic: any, key: any) => (
              <div key={key} className="flex">
                <div className="flex items-center mr-4">
                  <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{topic}</p>
                  <input
                    id="inline-radio"
                    type="radio"
                    value="1"
                    name={topic}
                    onChange={(e) => setRatings({ ...ratings, [topic]: e.target.value })}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <input
                    id="inline-radio"
                    type="radio"
                    value="2"
                    name={topic}
                    onChange={(e) => setRatings({ ...ratings, [topic]: e.target.value })}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <input
                    id="inline-radio"
                    type="radio"
                    value="3"
                    name={topic}
                    onChange={(e) => setRatings({ ...ratings, [topic]: e.target.value })}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <input
                    id="inline-radio"
                    type="radio"
                    value="4"
                    name={topic}
                    onChange={(e) => setRatings({ ...ratings, [topic]: e.target.value })}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <input
                    id="inline-radio"
                    type="radio"
                    value="5"
                    name={topic}
                    onChange={(e) => setRatings({ ...ratings, [topic]: e.target.value })}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
              </div>
            ))
          : null}

        <label className="block mb-2 text-sm font-medium font-sans text-gray-900 dark:text-gray-300">
          Are there any errors that the Author commits or weak arguments?{' '}
        </label>
        <input
          onChange={(e) => setErrorArgument(e.target.value)}
          type="text"
          id="base-input"
          className="border-gray-300 text-sm rounded-md w-64 p-2.5 bg-zinc-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-stone-700"
        />
        <button onClick={onSubmit}>get articles</button>
      </div>
    </Layout>
  )
}

export default SubmitReview
