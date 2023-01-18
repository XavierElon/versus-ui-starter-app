import React, { useState } from 'react'
import Image from 'next/image'
import VsImage from '../../public/images/red-v-blue.jpg'

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false)

  return (
    //make a simple hero section
    <section className="relative bg-white overflow-hidden dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 dark:bg-black">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2 dark:text-black"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>
          <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
                <span className="block xl:inline">Versus</span>{' '}
                <span className="block text-red-600 xl:inline dark:text-white dark:bg-black">
                  A platform for the worlds most elite players...
                </span>
              </h2>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Stake, wager and find out who is truely the best...
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <a
                    href="#0"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:text-black focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <a
                    href="#0"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-black hover:text-red-600 hover:bg-black focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={VsImage}
          height={500}
          width={500}
          alt="Hero Image"
        />
      </div>
    </section>
  )
}

export default HeroHome
