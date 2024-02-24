'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React,{useState} from 'react'

const Navbar = () => {

    let location = usePathname();
    const [toogle, settoogle] = useState(true);
  return (
    <div className=' sticky top-0 left-0 right-0'>
        

<nav className=" border-gray-200 bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://insta-saver.vercel.app" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/logoinside.png" className="h-12 logoinside" alt="instasaver Logo" />
        <div className="flex flex-col self-center text-2xl font-semibold whitespace-nowrap text-white"><span>YOU</span><span>DOWNLOADER</span></div>
    </a>
    <button onClick={()=>settoogle(!toogle)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className={`${!toogle?"fixed top-20 left-0 z-40":"hidden"} w-full md:block md:w-auto`} id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-900">
      <li>
          <Link href={"/"} className={`block py-2 px-3  rounded ${
                  location === "/"
                    ? "text-blue-500 font-bold"
                    : "text-gray-200"
                }  md:border-0 md:hover:text-blue-700 md:p-0`}>Home</Link>
        </li>
        
        <li>
          <Link href={"/about"} className={`block py-2 px-3  rounded ${
                  location === "/about"
                    ? "text-blue-500 font-bold"
                    : "text-gray-200"
                }  md:border-0 md:hover:text-blue-700 md:p-0`}>About</Link>
        </li>
        <li>
          <Link href={"/contact"} className={`block py-2 px-3  rounded ${
                  location === "/contact"
                    ? "text-blue-500 font-bold"
                    : "text-gray-200"
                }  md:border-0 md:hover:text-blue-700 md:p-0`}>Contact</Link>
        </li>
        <li>
          <Link href={"/privacypolicy"} className={`block py-2 px-3  rounded ${
                  location === "/privacypolicy"
                    ? "text-blue-500 font-bold"
                    : "text-gray-200"
                }  md:border-0 md:hover:text-blue-700 md:p-0`}>Privacy
          Policy</Link>
        </li>
        <li>
          <Link href={"/disclaimer"} className={`block py-2 px-3  rounded ${
                  location === "/disclaimer"
                    ? "text-blue-500 font-bold"
                    : "text-gray-200"
                }  md:border-0 md:hover:text-blue-700 md:p-0`}>Disclaimer</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar