import axios from 'axios'
interface NewsletterUserData {
  email: string
  subscribed: boolean
}

export const postUser = async (props: NewsletterUserData) => {
  const { email, subscribed } = props
  const url = process.env.NEXT_PUBLIC_LOCAL_HOST! + 420 + '/newsletter'
  console.log(url)
  console.log(email)
  try {
    axios.post(url, {
      email: email,
      subscribed: subscribed
    })
    console.log('posted')
  } catch (error) {
    console.log(`${error}`)
  }
}
