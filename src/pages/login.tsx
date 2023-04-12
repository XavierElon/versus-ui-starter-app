import { NextPage } from 'next'
import React, { FormEvent, useEffect, useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { UserData, ValidationPattern, ErrorMessage } from '@/models/interfaces'
import CustomInput from '@/components/Inputs/CustomInput'
import { useRouter } from 'next/router'
import { loginUser } from '@/pages/api/login.api'

const Login: NextPage = () => {
  const pattern = new ValidationPattern()
  const errorMessge = new ErrorMessage()
  const router = useRouter()
  const error = router.query.error as string

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleInputChange(key: string, value: string) {
    if (key === 'email') {
      setEmail(value)
    } else if (key === 'password') {
      setPassword(value)
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const email = (event.target as HTMLFormElement)['email'].value
    const password = (event.target as HTMLFormElement)['password'].value

    if (!email || !password) {
      console.error('Missing required form fields')
      return
    }

    const succeeded = await loginUser(email, password)

    if (succeeded === true) {
      toast.success('Successfully logged in')
      router.push('/')
    } else if (succeeded === false) {
      toast.error('Login failed')
    } else {
      toast.error(`Error logging in: ${succeeded}`)
    }
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Header />
      <div className="bg-[url('/images/signup-cover.png')] bg-cover bg-center bg-no-repeat h-100%">
        <div className="flex-grow flex flex-col justify-center items-center gap-3">
          <h1 className="text-3xl mt-4 text-zinc-900 text-center font-semibold">
            Login to Rivals
          </h1>
          <p className="text-center w-[95vw] max-w-[375px] text-sm text-zinc-900">
            Join The Next Evolution Of Competitive Gaming...
          </p>
          <div className="px-2 py-2 mb-10 border rounded-xl bg-zinc-900 border-zinc-400 w-[95vw] max-w-[375px]">
            <div className="flex flex-col gap-3">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-3">
                  <CustomInput
                    name="email"
                    label="Email"
                    pattern={pattern.email}
                    errorMessage={errorMessge.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col gap-3 my-6">
                  <CustomInput
                    name="password"
                    label="Password"
                    pattern={pattern.password}
                    errorMessage={errorMessge.password}
                    onChange={handleInputChange}
                  />
                </div>
                <button
                  className="w-full px-3 py-2 text-white bg-blue-500 rounded-md font-medium"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Login
