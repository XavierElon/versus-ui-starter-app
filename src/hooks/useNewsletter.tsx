import { useRef, useState } from 'react'
import axios from 'axios'

interface NewsletterData {
  email: string
  subscribed: boolean
}

export const useNewsletter = async (email: string, subscribed: boolean) => {
  //   const { email, subscribed } = data
  const url = process.env.NEXT_PUBLIC_LOCAL_HOST! + 420 + '/newsletter'
  console.log(url)
  console.log(email)
  console.log(subscribed)
  const postUser = async () => {
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
  return { postUser }
}
