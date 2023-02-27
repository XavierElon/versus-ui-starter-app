import { NewsletterUserData } from '@/models/interfaces'
import axios from 'axios'

export const createNewsletterUser = async (newletterForm: NewsletterUserData) => {
  const { email, subscribed } = newletterForm
  const url = process.env.NEXT_PUBLIC_LOCAL_HOST! + 420 + '/newsletter'
  console.log(url)
  console.log(email)
  try {
    axios.post(url, {
      email: email,
      subscribed: subscribed
    }).catch((error) => console.log(error))
  } catch (error) {
    console.log('failed')
    console.log(`${error}`)
  }
}
