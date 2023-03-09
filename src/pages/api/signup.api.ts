import { UserData } from '@/models/interfaces'
import axios, { AxiosError } from 'axios'
import dotenv from 'dotenv'

export const createUser = async (
  userData: UserData
): Promise<boolean | String> => {
  const { email, firstName, lastName, userName, password, mobileNumber } =
    userData
  const url = process.env.CREATE_USER_URL || ''
  console.log('url -> ', url)
  try {
    await axios
      .post(url, {
        email: email,
        firstName,
        lastName,
        userName,
        password,
        mobileNumber
      })
      .then((res) => console.log(res))
    return true
  } catch (error: any) {
    console.error(
      `ERROR MESSAGE ${error.message}\nRESPONSE DATA: ${JSON.stringify(
        error.response.data
      )}`
    )
    return JSON.stringify(error.response.data.message)
  }
}
