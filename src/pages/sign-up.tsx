import { NextPage } from 'next'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const SignUp: NextPage = () => {
  const router = useRouter()
  const error = router.query.error as string

  useEffect(() => {
    if (error) {
      const errors: { [key: string]: string } = {}
      toast.error(errors[error] || error)
    }
  }, [error])
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    // submit formData to server or perform other actions
  }
  const handleDelete = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    // submit formData to server or perform other actions
  }
  return (
    <>
      <Header />
      <div className="bg-[url('/images/signup-cover.png')] bg-cover bg-center bg-no-repeat h-100%">
        <div className="flex-grow flex flex-col justify-center items-center gap-3">
          <h1 className="text-3xl mt-4 text-zinc-900 text-center font-semibold">
            Sign Up For Versus...
          </h1>
          <p className="text-center w-[95vw] max-w-[375px] text-sm text-zinc-900">
            Join The Next Evolution Of Competitive Gaming...
          </p>
          <div className="px-2 py-2 mb-10 border rounded-xl bg-zinc-900 border-zinc-400 w-[95vw] max-w-[375px]">
            <div className="flex flex-col gap-3">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-3">
                  <label htmlFor="firstname"></label>
                  <input
                    placeholder="First Name"
                    type="text"
                    name="firstname"
                    id="firstname"
                    className=" px-2 py-1 rounded-md border-gray-200 bg-gray-200"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="lastname"></label>
                  <input
                    placeholder="Last Name"
                    type="text"
                    name="lastname"
                    id="lastname"
                    className=" px-2 py-1 rounded-md border-gray-200 bg-gray-200"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="email"></label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="email"
                    className=" rounded-md px-2 py-1 border-gray-200 bg-gray-200"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="mobilenumber"></label>
                  <input
                    type="number"
                    placeholder="Mobile Number"
                    name="mobilenumber"
                    id="mobilenumber"
                    className=" px-2 py-1 rounded-md border-gray-200 bg-gray-200"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="confirmPassword"></label>
                  <input
                    type="password"
                    placeholder="Password"
                    name="confirmPassword"
                    id="confirmPassword"
                    className=" px-2 py-1 rounded-md border-gray-200 bg-gray-200"
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
                  <Link
                    href="/sign-up"
                    className="custom-button small white w-inline-block text-center"
                  >
                    <div className="custom-button-hover primary" />
                    <div className="corner-black bottom-right small" />
                    <div className="corner-black top-left small" />
                    <div className="custom-button-text">SIGN UP</div>
                  </Link>
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
