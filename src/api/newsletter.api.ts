import { NewsletterUserData } from '@/models/interfaces'
import axios from 'axios'
import { transpileModule } from 'typescript'

export const createNewsletterUser = async (
  newletterForm: NewsletterUserData
): Promise<boolean> => {
  const { email, subscribed } = newletterForm
  const url = process.env.NEXT_PUBLIC_LOCAL_HOST! + 420 + '/newsletter'
  console.log(url)
  try {
    await axios
      .post(url, {
        email: email,
        subscribed: subscribed
      })
      .then((res) => console.log(res))
    return true
  } catch (error) {
    console.error(`${error}`)
    return false
  }
}
