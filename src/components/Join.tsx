import React from 'react'
import '../scss/pages/Club.scss'
const Join = () => {
    return (
        <div className='joinjon'>
            <div className="relative flex-grow flex justify-center items-center container mx-auto  w-full z[0]">
                <input type="email" placeholder='your@email.com' id="email" name="email" className="  mt-96 p-[50px]  w-[40%] h-[60px]  bg-opacity-50  border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-[#2A254B] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                <button className="text-white mt-96  bg-[#2A254B] h-[60px] border-0 py-2 px-8 focus:outline-none   text-lg">Sign up</button>
            </div>
        </div>
    )
}

export default Join