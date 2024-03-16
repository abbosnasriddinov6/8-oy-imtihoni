import React from 'react'
import '../scss/pages/Club.scss'
const Club = () => {
    return (
        <div className='benefits '>
            <section className="text-gray-600 body-font container mx-auto bg-white z-0">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Join the club and get the benefits</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Sign up for our newsletter and receive exclusive offers on new <br /> ranges, sales, pop up stores and more</p>
                    </div>
                    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">

                        <div className="relative flex-grow flex justify-center items-center w-full z[0]">
                            <input type="email" placeholder='your@email.com' id="email" name="email" className=" p-[50px]  w-[40%] h-[60px] bg-gray-100 bg-opacity-50  border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            <button className="text-white  bg-[#2A254B] h-[60px] border-0 py-2 px-8 focus:outline-none   text-lg">Sign up</button>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Club