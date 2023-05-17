import { Configuration, OpenAIApi } from 'openai-edge'

export const getLLM = () => {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY not set')
  }

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })

  return new OpenAIApi(configuration)
}
