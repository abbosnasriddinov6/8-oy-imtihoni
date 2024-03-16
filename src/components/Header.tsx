import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import '../scss/main.scss'
import Link from 'next/link';
const Header = () => {
  return (
    <div className=' w-[100%]  header1 ' >
      <header className="text-black-600 body-font  ">
        <div className=' flex p-6  justify-between items-center '>
          <h1><IoIosSearch className='w-[25px] h-[25px]' /></h1>
          <Link href='/'><h1 className='text-3xl ml-[270px]' >Avion</h1></Link>
          <div className='flex gap-10'>
            <div className='flex justify-around items-center gap-6'>
              <Link href='/about'> <h3>About us</h3></Link>
              <Link href='/products'><h3>Products</h3></Link>
            </div>
            <div className='flex gap-5'>
              <Link href='/korzinka'><h1><SlBasket className='w-[25px] h-[20px]' /></h1></Link>
              <h1><CgProfile className='w-[25px] h-[20px]' /></h1>
            </div>
          </div>
        </div>
        <hr className='w-[98%] mx-auto' />
      </header>
      <div className="text-gray-600      ">
        <div className="container mx-auto flex flex-wrap p-5  flex-col md:flex-row items-center">
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