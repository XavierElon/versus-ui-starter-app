import axios from 'axios'

export const createNewsletterUser = async (email: string) => {
  console.log(email)
  const url = process.env.NEXT_PUBLIC_LOCAL_HOST! + 420 + '/newsletter'
  console.log(url)
  console.log(process.env.NEXT_PUBLIC_NEWSLETTER_URL)
  console.log(process.env.LOCAL_HOST)
  setTimeout(() => {
    console.log('timeing')
  }, 3000)
  try {
      axios.post(url, {
          email: email,
          subscribed: true
      })
      console.log('posted')
  } catch (error) {
      console.log(`${error}`)
  }
}
