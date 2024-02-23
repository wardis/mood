import { OpenAI } from 'langchain/llms/openai'

export const analyse = async (prompt) => {
  const model = new OpenAI({ temperature: 0, modelName: 'gpt-3.5-turbo' })
  const result = await model.call(prompt)
  console.log('\n\n\n\n', result)
}
