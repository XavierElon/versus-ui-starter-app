import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Disclosure, Menu } from '@headlessui/react';
import { useSession, signOut } from 'next-auth/react';
import { useTheme } from 'next-themes';
import ClickAwayListener from '../ClickAwayListener';
import Image from 'next/image';


const navigation = [
  { name: 'Home', href: '/', current: true },
   { name: 'SignUp', href: '/sign-up', current: false }
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

  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  
  const { data: session, status } = useSession();

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
<>
        <div className="w-10 h-10 text-black rounded-full bg-white p-2  hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" role="button" onClick={() => setTheme('light')} >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
          </div>
          </>
      )
    }
    else {
      return (
        <>
        <div className="w-10 h-10 text-black rounded-full bg-white p-2  hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" role="button" onClick={() => setTheme('dark')} >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
          </div>
          </>
      )
    }
  };
  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg dark:bg-gray-800'}`}>
    <>
    <Disclosure as="nav">
     {({ open }) => (
       <>
         <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
           <div className="relative flex h-16 items-center justify-between">
             <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
               {/* Mobile menu button*/}
               <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:focus:ring-gray-800 dark:text-white dark:hover:bg-gray-800">
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
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <h1 className="text-3xl ml-8 flex justify-left items-center font-bold text-black dark:text-white">Versus </h1>
          </div>
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
         
               <div className="hidden sm:ml-6 sm:block">
                 <div className="flex space-x-4">
                   {navigation.map((item) => (
                     <a
                       key={item.name}
                       href={item.href}
                       className={classNames(
                         item.current ? ' text-black dark:text-white' : 'text-black hover:bg-white hover:text-black dark:text-white dark:hover:bg-gray-800 dark:hover:text-white',
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
            
           {status === "unauthenticated" ? (
             <Link
               href="/sign-in"
               className="rounded flex items-center gap-2 h-9 px-3 mr-28 bg-white hover:bg-black hover:text-white transition dark:bg-red-600 dark:hover:bg-white">
               
                 Log In
               
             </Link>
           ) : status === "authenticated" ? (
             <ClickAwayListener onClickAway={() => setIsDropdownOpened(false)}>
               {(ref) => (
                 <div ref={ref} className="relative">
                   <button
                     onClick={() => setIsDropdownOpened(!isDropdownOpened)}
                   >
                     <Image
                       width={36}
                       height={36}
                       className="rounded-full flex justify-center items-center mt-2"
                       // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                       src={session.user?.image!}
                       alt="Avatar"
                     />
                   </button>
                   <div
                     className={`absolute shadow-[rgb(0_0_0_/_12%)_0px_4px_16px] dark:text-black bg-white top-[120%] right-0 py-2 flex flex-col items-stretch [&>*]:whitespace-nowrap rounded-md transition-all z-50 ${
                       isDropdownOpened
                         ? "opacity-100 visible"
                         : "opacity-0 invisible"
                     }`}
                   >
                     <Link
                       // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                       href={`/user/${session?.user?.name}`}
                       className="flex items-center gap-2 px-3 py-2 bg-white hover:bg-gray-50 transition">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                  <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                                </svg>
                                
                       <span>Profile</span>

                     </Link>
                     <button
                       onClick={() => signOut()}
                       className="rounded flex items-center gap-2 h-9 px-3 mr-28 bg-white hover:bg-black hover:text-white transition dark:bg-gray-800 dark:hover:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">

                                  <path 
                                    fill-rule="evenodd"
                                    d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 110 16 8 8 0 010-16zm0 2a6 6 0 100 12 6 6 0 000-12zm0 2a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4zm0 2a.5.5 0 110 1 .5.5 0 010-1z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
  
                       <span>Sign out</span>
                     </button>
                   </div>
                 </div>
               )}
             </ClickAwayListener>
           ) : (
             <></>
           )}
             <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
               {/* Profile dropdown */}
               <Menu as="div" className="relative ml-3">
               </Menu>
                <div className="container pl-2 py-4 flex justify-between items-center">
             {renderThemeChanger()}
           </div>

             </div>
           
           </div>
         </div>

         <Disclosure.Panel className="sm:hidden">
           <div className="space-y-1 px-2 pt-2 pb-3">
             {navigation.map((item) => (
               <Disclosure.Button
                 key={item.name}
                 as="a"
                 href={item.href}
                 className={classNames(
                   item.current ? 'bg-gray-900 text-white' : 'text-gray-900 hover:bg-gray-700 hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-white',
                   'block px-3 py-2 rounded-md text-base font-medium'
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
