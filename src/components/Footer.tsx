import React from 'react'
import '../scss/main.scss'
import { TiSocialSkypeOutline } from "react-icons/ti";
const Footer = () => {
  return (
    <div className=''>
      <footer className="text-gray-400 footer body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Menu</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-400 hover:text-white">New arrivals</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Recently viewed</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Popular this week</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">All products</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2  px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-400 hover:text-white">Crockery</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Furniture</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Homeware</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Plant pots</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Chairs</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Crockery</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Our company</h2>
              <nav className="list-none mb-10 ">
                <li>
                  <a className="text-gray-400 hover:text-white">About us</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Vacancies</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Contact us </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Privacy </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Returns policy </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2  px-4 doit ">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Join our maling list</h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="flex relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <input type="text" placeholder='your@email.com' id="footer-field" name="footer-field" className="w-[400px] bg-gray-300  bg-opacity-40 border-white-700 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 focus:border-indigo-500 text-base outline-none text-white-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-black bg-white py-2 px-6 focus:outline-none hover:bg-indigo-600 ">Sign up</button>
                </div>

              </div>

            </div>
          </div>
        </div>
        <hr className='w-[76%] mx-auto hrrr' />
        <div className="footer bg-opacity-75">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">

            <p className="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">Copyright 2022 Avion LTD</p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-gray-400">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a className="ml-3 text-gray-400">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a className="ml-3 text-gray-400">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a className="ml-3 text-gray-400">
                <TiSocialSkypeOutline className='w-[25px] h-[22px]' />
              </a>

              <a className="ml-3 text-gray-400">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer