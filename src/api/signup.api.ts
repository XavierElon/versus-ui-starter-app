import { UserData } from '@/models/interfaces'
import axios, { AxiosError }  from 'axios'
import { transpileModule } from 'typescript'

export const createUser  = async (
  userData: UserData
): Promise<boolean | String> => {
  const { email, firstName, lastName, userName, password, mobileNumber } = userData
  const url = 'http://18.237.115.207:1017/signup';
  console.log('url -> ',url)
  try {
    await axios.post(url, {
      email: email,
      firstName,
      lastName,
      userName,
      password,
      mobileNumber
    }).then((res) => console.log(res))
    return true
  } catch (error: any) {
    console.error(`ERROR MESSAGE ${error.message}\nRESPONSE DATA: ${JSON.stringify(error.response.data)}`)
    return JSON.stringify(error.response.data.message)
  }
}
