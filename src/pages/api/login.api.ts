import axios from 'axios'


export const loginUser = async (
    email: string,
    password: string
  ): Promise<boolean | string> => {
    const url = process.env.LOGIN_USER_URL || ''
    console.log('url -> ', url)
    try {
      await axios
        .post(url, {
          email: email,
          password: password
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

  
  
  

