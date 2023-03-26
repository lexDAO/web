const faqs = [
  {
    id: 1,
    question: 'What are guilds?',
    answer:
      'Guilds are autonomous organizations that are part of the LexDAO ecosystem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 2,
    question: 'How do I join a guild?',
    answer:
      'Get in touch with the guild lead. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 3,
    question: 'How do I contribute to a guild?',
    answer:
      'Get in touch with the guild lead. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 4,
    question: 'How do I start a guild?',
    answer:
      'Get in touch with the guild lead. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
]

export const FAQs = () => {
  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-900">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white">Frequently asked questions</h2>
        <div className="mt-6 border-t border-indigo-300 border-opacity-25 pt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 md:space-y-0">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-lg font-medium leading-6 text-white">{faq.question}</dt>
                <dd className="mt-2 text-base text-indigo-200">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
