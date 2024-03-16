import Link from 'next/link'
import React from 'react'
import { SlBasket } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import '../scss/main.scss'

const Header1 = () => {
    return (
        <>
     
            <div className='header1'>
                <header className="text-[#2A254B] body-font">
                    <div className=" mx-auto flex flex-wrap justify-between p-6 flex-col md:flex-row items-center">

                        <Link href='/'><h1 className='text-3xl text-[#2A254B] ' >Avion</h1></Link>

                        <div className='flex gap-10'>
                            <div className='flex justify-around items-center gap-6 text-[#2A254B]'>
                                <Link href='/about'> <h3>About us</h3></Link>
                                <Link href='/products'><h3>Products</h3></Link>
                            </div>
                            <div className='flex gap-5'>
                                <Link href='/korzinka'><h1><SlBasket className='w-[25px] h-[20px]' /></h1></Link>
                                <h1><CgProfile className='w-[25px] h-[20px]' /></h1>
                            </div>
                        </div>
                    </div>
                    <hr />
                </header>
                <div className="text-[#2A254B]     ">
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
        </>
    )
}

export default Header1