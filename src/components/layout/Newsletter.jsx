import React from 'react';

function Newsletter() {
  return (

  //create a simple newsletter
    <div className="bg-gray-100 dark:bg-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h2 className="text-base font-semibold text-red-600 tracking-wide uppercase">Newsletter</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Sign up for our newsletter
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
           Never miss out on a chance to win big, bet on your favorite players, and stay up to date with how we will make Versus the best </p>
          </div>
          <form className="mt-12 sm:max-w-lg sm:mx-auto lg:mx-0">
            <div className="sm:flex">
              <div className="min-w-0 flex-1">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="appearance-none block w-full px-5 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md shadow-sm focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:px-10"
                >
                  Notify me
                </button>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-500">
              We care about the protection of your data. Read our{' '}
              <a href="#" className="font-medium text-gray-900 dark:text-red-600">
                Privacy Policy.
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
