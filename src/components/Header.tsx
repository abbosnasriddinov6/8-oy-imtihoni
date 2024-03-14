import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import '../scss/main.scss'
const Header = () => {
  return (
    <div className='flex' >
      <header className="text-black-600 body-font   header1 ">
        <div className=' flex p-6  justify-between items-center '>
          <h1><IoIosSearch className='w-[25px] h-[25px]' /></h1>
          <h1 className='text-3xl'>Avion</h1>
          <div className='flex gap-5'>
            <h1><SlBasket className='w-[25px] h-[20px]' /></h1>
            <h1><CgProfile className='w-[25px] h-[20px]' /></h1>
          </div>
        </div>
        <hr className='w-[98%] mx-auto' />
      </header>
      <div className="text-gray-600    header1   ">
        <div className="container mx-auto flex flex-wrap p-5 mt-20 flex-col md:flex-row items-center">
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base gap-16">
            <h3>Plant pots</h3>
            <h3>Ceramics</h3>
            <h3>Tables</h3>
            <h3>Chairs</h3>
            <h3>Crockery</h3>
            <h3>Tableware</h3>
            <h3>Cutlery</h3>
          </nav>
        </div>
      </div>

    </div>
  )
}

export default Header