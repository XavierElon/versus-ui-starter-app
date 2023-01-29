import React, { useState, useEffect } from 'react';
import { Disclosure, Menu } from '@headlessui/react';
import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '/', current: true },
   { name: 'Company', href: '/about-us', current: false }
]
function classNames(...classes: unknown[]) {
  return classes.filter(Boolean).join(' ')
}
function Header() {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, [])

  return (
      <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-zinc-900 text-zinc-400 hover:text-white backdrop-blur-sm shadow-lg'}`}>
    <>
              <Disclosure as="nav" className="bg-zinc-900 text-zinc-400"> 
                 
                  
                          
                  {({ open }) => (
                      
                      <>
         <div className="mx-auto max-w-7xl px-2 lg:px-8">
           <div className="relative flex h-16 items-center justify-between">
             <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
               {/* Mobile menu button*/}
               <Disclosure.Button className="inline-flex items-center justify-center p-2 text-zinc-400 hover:text-white focus:outline-none">
                 <span className="sr-only">Open main menu</span>
                 {open ? (
                                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="block h-6 w-6">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                              </svg>          
                 ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="block h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                          </svg>
                 )}
               </Disclosure.Button>
                </div>
                                  <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-end">
                                      <div className="absolute top-1 right-0">
                          <Link
              href="/sign-up"
              className="custom-button primary w-inline-block"
            >
              <div className="custom-button-hover white" />
              <div className="corner-dark top-left small" />
              <div className="corner-dark bottom-right small" />
              <div className="custom-button-text">Play now</div>
                                      </Link>
                                        </div>
                        
                                      <div className="flex-shrink-0 flex justify-center items-center mt-2 space-x-6">
                                          <Link href="/">
                                                <p className="text-zinc-400 font-medium hover:text-white">
                                                  Home
                                              </p>
                                          </Link>
                                      
                                          <Link href="/about">
                                                <p className="text-zinc-400 font-medium hover:text-white">
                                                  Company
                                              </p>
                                          </Link>
                                      </div>
                                    </div>
                                    
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
         
               <div className="hidden sm:ml-6 sm:block">
                 <div className="flex space-x-4">
                   {navigation.map((item) => (
                     <a
                       key={item.name}
                       href={item.href}
                       className={classNames(
                         item.current ? 'text-white' : 'text-zinc-400 hover:text-white ',
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
             
               <Menu as="div" className="relative ml-3">
               </Menu>
                <div className="container pl-2 py-4 mx-3 flex justify-between items-center">

           </div>

             </div>
           
           </div>
         </div>

         <Disclosure.Panel className="sm:hidden bg-zinc-900 ">
           <div className="space-y-1 px-2 pt-2 pb-3 border-t border-b border-zinc-400">
             {navigation.map((item) => (
               <Disclosure.Button
                 key={item.name}
                 as="a"
                 href={item.href}
                 className={classNames(
                   item.current ? 'no-underline text-zinc-400' : 'text-zinc-400 no-underline hover:bg-zinc-800 hover:text-white dark:text-white dark:hover:bg-zinc-900 dark:hover:text-white',
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
      </>
    </header>
  );
}

export default Header;
