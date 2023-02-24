import axios from 'axios'

export const createNewsletterUser = async (email: string) => {
  console.log('here')
  console.log(process.env.NEXT_PUBLIC_NEWSLETTER_URL)
  setTimeout(() => {
    console.log('timeing')
  }, 3000)
  // try {
  //     axios.post(process.env.NEWSLETTER_URL, {
  //         email: email,
  //         subscribed: true
  //     })
  //     console.log('posted')
  // } catch (error) {
  //     console.log(`${error}`)
  // }
}
