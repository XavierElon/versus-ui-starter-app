import { Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { CgMenuGridR } from 'react-icons/cg'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'About', href: '/about-us', current: false },
  { name: 'FAQ', href: '/faq', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-zinc-900 border-b border-zinc-700">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-700 hover:text-white ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <CgMenuGridR className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
               <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                              <div className="invisible lg:visible md:invisible w-auto">
                                    <div className="ml-16 flex-0 space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'text-white no-underline' : 'no-underline text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                                
                                  </div>
        
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            
                                          <Link
                    href="/sign-up"
                    className="custom-button small white w-inline-block"
                  >
                    <div className="custom-button-hover primary" />
                    <div className="corner-black bottom-right small" />
                    <div className="corner-black top-left small" />
                    <div className="custom-button-text">SIGN UP</div>
                  </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel >
            <div className="space-y-1 divide-y divide-zinc-700 border-t border-b border-zinc-700 zinc-700 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'no-underline text-zinc-400 hover:text-white' : 'text-zinc-400 no-underline hover:text-white',
                    'block px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
                      </div>
                      
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
