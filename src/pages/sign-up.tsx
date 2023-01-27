import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import Link from 'next/link';

const SignUp: NextPage = () => {
  const router = useRouter();
  const error = router.query.error as string;

  useEffect(() => {
    if (error) {
      const errors: { [key: string]: string } = {

        };  
        toast.error(errors[error] || error);
    }
  }, [error]);
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // submit formData to server or perform other actions
    };
    const handleDelete = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // submit formData to server or perform other actions
    };
  return (
    <div className="flex-grow flex flex-col justify-center items-center gap-3">
      <h1 className="text-3xl text-center font-semibold mt-10">
        Sign Up For Versus...
      </h1>
      <p className="text-center w-[95vw] max-w-[375px] text-sm text-gray-500">
        Bet, Stake, and Win Money With Your Friends!
          </p>
          <div className="px-2 py-2 mb-10 border rounded-xl border-gray-200 w-[95vw] max-w-[375px]">
      <div className="flex flex-col gap-3">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            <label htmlFor="firstname"></label>
            <input placeholder="First Name" type="text" name="firstname" id="firstname" className="border-r rounded-lg border-gray-200 bg-gray-200" />
                  </div>
                     <div className="flex flex-col gap-3">
            <label htmlFor="lastname"></label>
            <input placeholder="Last Name" type="text" name="lastname" id="lastname" className="border-r rounded-lg border-gray-200 bg-gray-200" />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="email"></label>
            <input type="email" placeholder="Email" name="email" id="email" className="border-r rounded-lg border-gray-200 bg-gray-200" />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="mobilenumber"></label>
            <input type="number" placeholder="Mobile Number" name="mobilenumber" id="mobilenumber" className="border-r rounded-lg border-gray-200 bg-gray-200" />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="confirmPassword"></label>
            <input type="password" placeholder="Password" name="confirmPassword" id="confirmPassword"  className="border-r rounded-lg border-gray-200 bg-gray-200"/>
          </div>
                           <div className="flex flex-col gap-3 my-3">
                          <p>Picture Of ID</p>
                      </div>
                               <div className="border rounded-xl border-gray-500 relative">      
    <input type="file" multiple className="cursor-pointer relative block opacity-0 w-full h-full mt-5 p-10 z-50"/>
    <div className="text-center p-10 absolute top-0 right-0 left-0 m-auto">
                          <svg className="w-10 h-10 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M12 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                              <path fillRule="evenodd" d="M12 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" clipRule="evenodd"></path>    
                          </svg>
                          {/* //create a delete file button at the right middle of the image */}
                          <button className="text-sm text-gray-400 bg-white absolute top-0 right-0 mt-2 mr-2 border rounded-3xl p-2
                          " onClick={handleDelete}
                          >
                              <svg
                              className="w-5 h-5 text-red-600 mx-auto"
                              fill="currentColor" 
                              viewBox="0 0 20 20">
                              <path fillRule="evenodd"
                                  d="M4 6a2 2 0 012-2h8a2 2 0 012 2v1H4V6zm2 2v9a2 2 0 002 2h6a2 2 0 002-2V8H6z"
                                  clipRule="evenodd"></path>
                          </svg>
                          </button>
                          <p className="text-sm text-gray-400">Upload a file</p>
                    
                      </div>
                    </div>
                      <button className="bg-red-600 text-white rounded-lg p-3 mt-5 w-full" type="submit">
                          Sign Up
                      </button>
                      <div className="flex flex-col gap-3 mt-5">
                          <button className="bg-blue-600 text-white rounded-lg p-3 w-full">
                              Login With Facebook
                          </button>
                          <button className="bg-red-600 text-white rounded-lg p-3 w-full">
                              Login With Google
                          </button>
                          <button className="bg-zinc-900 text-white rounded-lg p-3 w-full dark:bg-white dark:text-zinc-900">
                              Login With Apple
                          </button>
</div>
                  </form>
                  <div className="flex flex-col gap-3 mt-5">
                      <p className="text-center text-gray-500">Already have an account? <a href="/login" className="text-red-600">Login</a></p></div>
              </div>
          </div>
            <div className="flex flex-row justify-center items-center gap-3">
              <p className="text-center text-gray-500 hover:text-white">By signing up, you agree to our </p>
                <p className="text-center text-gray-500 hover:text-white">
                  <a href="#" className="text-red-600 hover:text-white">Terms of Service</a></p>
                <p className="text-center text-gray-500 hover:text-white">
                  and </p>
                <p className="text-center text-gray-500 hover:text-white">
                  <a href="#" className="hover:text-white text-red-600">Privacy Policy</a></p>
          </div>
          <div className="flex flex-row justify-center items-center gap-3 mt-5 mb-10">
              <p className="text-center text-gray-500 hover:text-white">
                  <a href="/" className="text-red-600 hover:text-white">
                      <svg className="w-5 h-5 text-red-600 hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 7.293a1 1 0 011.414 0L12 10.586l3.293-3.293a1 1 0 111.414 1.414l-3.999 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>  
                  </a>
              </p>
              <Link className="text-center text-gray-500 hover:text-red-600" href={'/'}>Return Home</Link>
          </div>
        </div>  
  
    )
}

export default SignUp