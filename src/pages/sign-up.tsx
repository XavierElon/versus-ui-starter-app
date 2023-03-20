import { NextPage } from 'next'
import React, { FormEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { toast, Toaster } from 'react-hot-toast'
import { gapi } from "gapi-script";
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { UserData, ValidationPattern, ErrorMessage } from '@/models/interfaces'
import { createUser } from '@/pages/api/signup.api'
import CustomInput from '@/components/Inputs/CustomInput'

const SignUp: NextPage = () => {
  const pattern = new ValidationPattern()
  const errorMessge = new ErrorMessage()
  const router = useRouter()
  const error = router.query.error as string

  const [userData, setUserData] = useState<UserData>({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    mobileNumber: ''
  })

  useEffect(() => {
    if (error) {
      const errors: { [key: string]: string } = {}
      toast.error(errors[error] || error)
    }
  }, [error])

  useEffect(() => {
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: 'YOUR_GOOGLE_CLIENT_ID',
      });
    });
  }, []);

  function handleInputChange(key: string, value: string) {
    setUserData((prevState) => ({ ...prevState, [key]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('hanlde submit called')
    console.log('event -> ', event)
    console.log('event -> ', event.target)
    const firstName = (event.target as HTMLFormElement)['firstName'].value
    const lastName = (event.target as HTMLFormElement)['lastName'].value
    const userName = (event.target as HTMLFormElement)['userName'].value
    const password = (event.target as HTMLFormElement)['password'].value
    const email = (event.target as HTMLFormElement)['email'].value
    const mobileNumber = (event.target as HTMLFormElement)['mobileNumber'].value

    if (
      !firstName ||
      !lastName ||
      !userName ||
      !password ||
      !email ||
      !mobileNumber
    ) {
      console.error('Missing required form fields')
      return
    }
    setUserData({
      ...userData,
      firstName: firstName,
      email: email,
      lastName: lastName,
      userName: userName,
      password: password,
      mobileNumber: mobileNumber
    })
    const succeeded = await createUser(userData)
    console.log('succeeded - > ', succeeded)
    if (succeeded === true) {
      toast.success('Successfully created')
    } else if (succeeded === false) {
      toast.error('Did not create successfully')
    } else {
      toast.error(`Error creating user: ${succeeded}`)
    }
  }

  const handleDelete = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    // submit formData to server or perform other actions
  }

  const GoogleLoginButton: React.FC<{}> = () => {
    const handleGoogleLogin = async () => {
      try {
        const auth = await gapi.auth2.getAuthInstance().signIn();
        const idToken = auth.getAuthResponse().id_token;
    
        // Send the ID token to your backend server for verification and authentication
      } catch (error) {
        console.error(error);
      }
    };
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Header />
      <script src="https://apis.google.com/js/platform.js" async defer></script>
      <div className="bg-[url('/images/signup-cover.png')] bg-cover bg-center bg-no-repeat h-100%">
        <div className="flex-grow flex flex-col justify-center items-center gap-3">
          <h1 className="text-3xl mt-4 text-zinc-900 text-center font-semibold">
            Sign Up For Rivals...
          </h1>
          <p className="text-center w-[95vw] max-w-[375px] text-sm text-zinc-900">
            Join The Next Evolution Of Competitive Gaming...
          </p>
          <div className="px-2 py-2 mb-10 border rounded-xl bg-zinc-900 border-zinc-400 w-[95vw] max-w-[375px]">
            <div className="flex flex-col gap-3">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-3">
                  <CustomInput
                    name="firstName"
                    label="First name"
                    pattern={pattern.name}
                    errorMessage={errorMessge.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <CustomInput
                    name="lastName"
                    label="Last name"
                    pattern={pattern.name}
                    errorMessage={errorMessge.lastName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <CustomInput
                    name="userName"
                    label="User name"
                    pattern={pattern.userName}
                    errorMessage={errorMessge.userName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <CustomInput
                    name="email"
                    label="Email"
                    pattern={pattern.email}
                    errorMessage={errorMessge.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <CustomInput
                    name="mobileNumber"
                    label="Mobile number"
                    pattern={pattern.mobileNumber}
                    errorMessage={errorMessge.mobileNumber}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <CustomInput
                    name="password"
                    label="Password"
                    pattern={pattern.password}
                    errorMessage={errorMessge.password}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col gap-3 my-3">
                  <p>Picture Of ID</p>
                </div>
                <div className="border rounded-xl border-zinc-400 mb-4 relative">
                  <input
                    type="file"
                    multiple
                    className="cursor-pointer relative block opacity-0 w-full h-full mt-5 p-10 z-50"
                  />
                  <div className="text-center p-10 absolute top-0 right-0 left-0 m-auto">
                    <svg
                      className="w-10 h-10 text-gray-400 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M12 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path
                        fillRule="evenodd"
                        d="M12 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    {/* //create a delete file button at the right middle of the image */}
                    <button
                      className="text-sm text-gray-400 bg-white absolute top-0 right-0 mt-2 mr-2 border rounded-3xl p-2
                          "
                      onClick={handleDelete}
                    >
                      <svg
                        className="w-5 h-5 text-red-600 mx-auto"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 6a2 2 0 012-2h8a2 2 0 012 2v1H4V6zm2 2v9a2 2 0 002 2h6a2 2 0 002-2V8H6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <p className="text-sm text-gray-400">Upload a file</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <button
                    className="w-full px-3 py-2 text-white bg-blue-500 rounded-md font-medium"
                    type="submit"
                  >
                    Submit
                  </button>
                  <Link
                    href="/sign-up"
                    className="custom-button small white w-inline-block text-center"
                  >
                    <div className="custom-button-hover primary" />
                    <div className="corner-black bottom-right small" />
                    <div className="corner-black top-left small" />
                    <div className="custom-button-text">
                      Login With FaceBook
                    </div>
                  </Link>
                  <Link
                    href="/sign-up"
                    className="custom-button small white w-inline-block text-center"
                  >
                    <div className="custom-button-hover primary" />
                    <div className="corner-black bottom-right small" />
                    <div className="corner-black top-left small" />
                    <div className="custom-button-text">Login With Apple</div>
                  </Link>
                  <Link
                    onClick={handleGoogleLogin}
                    href="/sign-up"
                    className="custom-button small white w-inline-block text-center"
                  >
                    <div className="custom-button-hover primary" />
                    <div className="corner-black bottom-right small" />
                    <div className="corner-black top-left small" />
                    <div className="custom-button-text">Login With Google</div>
                  </Link>
                </div>
              </form>
              <div className="flex flex-col gap-3 mt-5">
                <p className="text-center text-zinc-400">
                  Already have an account?{' '}
                  <a href="/login" className="text-red-600">
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-shrink-2 flex-row justify-center items-center mt-7 gap-3">
        <p className="text-center text-sm text-zinc-400 hover:text-white">
          By signing up, you agree to our{' '}
        </p>
        <p className="text-center text-sm text-zinc-400 hover:text-white">
          <a href="#" className="text-red-600 hover:text-white">
            Terms of Service
          </a>
        </p>
        <p className="text-center text-sm text-zinc-400 hover:text-white">
          and{' '}
        </p>
        <p className="text-center text-sm text-zinc-400 hover:text-white">
          <a href="#" className="hover:text-white text-red-600">
            Privacy Policy
          </a>
        </p>
      </div>
      <div className="flex pt-2 flex-row justify-center items-center gap-3 mt-5">
        <div className="flex flex-col w-1/2 pb-6 gap-3">
          <Link
            href="/"
            className="custom-button small white w-inline-block text-center"
          >
            <div className="custom-button-hover primary" />
            <div className="corner-black bottom-right small" />
            <div className="corner-black top-left small" />
            <div className="custom-button-text">Return Home</div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SignUp
