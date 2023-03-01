import { NewsletterUserData } from '@/models/interfaces'
import axios from 'axios'

export const createNewsletterUser = async (
  newletterForm: NewsletterUserData
) => {
  const { email, subscribed } = newletterForm
  const url = process.env.NEXT_PUBLIC_LOCAL_HOST! + 420 + '/newsletter'
  console.log(url)
  try {
    await axios.post(url, {
      email: email,
      subscribed: subscribed
    })
  } catch (error) {
    console.error(`${error}`)
  }
}
