import { useAuth } from '@/hooks/use-auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
  const {logout} = useAuth()
  const router = useRouter()
  const hanleLogoutClick = async()=>{
    try {
      await logout()
      router.push('/login')
    } catch (error) {
      console.log('logout failed');
    }
  }
  return (
    <nav className="bg-white border-gray-200 px-2 md:px-4 py-2.5 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <Link href={'/'}>
          <a className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
        </Link>
        <div className="flex items-center md:order-2">
          <button
            onClick={hanleLogoutClick}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Logout
          </button>
          <button
            data-collapse-toggle="mega-menu"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              aria-hidden="true"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          id="mega-menu"
          className="hidden justify-between items-center w-full text-sm md:flex md:w-auto md:order-1"
        >
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <button
                id="mega-menu-dropdown-button"
                data-dropdown-toggle="mega-menu-dropdown"
                className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Company{' '}
                <svg
                  aria-hidden="true"
                  className="ml-1 w-5 h-5 md:w-4 md:h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                id="mega-menu-dropdown"
                className="grid hidden absolute z-10 grid-cols-2 w-auto text-sm bg-white rounded-lg border border-gray-100 shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700"
                data-popper-reference-hidden
                data-popper-escaped
                data-popper-placement="bottom"
                style={{
                  position: 'absolute',
                  inset: '0px auto auto 0px',
                  margin: 0,
                  transform: 'translate3d(0px, 410.4px, 0px)',
                }}
              >
                <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                  <ul className="space-y-4" aria-labelledby="mega-menu-dropdown-button">
                    <li>
                      <Link href={'/about'}>
                        <a className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                          About
                        </a>
                      </Link>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Library
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Resources
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Pro Version
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Newsletter
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Playground
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        License
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="p-4 text-gray-900 dark:text-white">
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Support Center
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                      >
                        Terms
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <Link href={'/about'}>
                <a className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                  About
                </a>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}