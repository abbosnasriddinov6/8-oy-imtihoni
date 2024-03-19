import { Large, four, one, photo1, three, two } from '@/asstets'
import Image from 'next/image'
import React from 'react'
import '../scss/pages/Cards.scss'
import Link from 'next/link'

const Cards = () => {
    return (
        <div>
            <section className="text-gray-600 body-font z-40">
                <div className="container px-5 py-24 mx-auto ceramics">
                    <h1>New ceramics</h1>
                    <div className="flex flex-wrap -m-4 mt-10">
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:scale-105 transition-all">
                            <a className=" h-48 rounded overflow-hidden">
                                <Link href='/details' ><Image alt="ecommerce" className="object-cover object-center w-full h-full block" src={one} /></Link>
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-900 title-font text-lg font-medium">The Dandy chair</h2>
                                <p className="mt-1">£250</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:scale-105 transition-all">
                            <a className=" h-48 rounded overflow-hidden">
                                <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src={two} />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-900 title-font text-lg font-medium">Rustic Vase Set</h2>
                                <p className="mt-1">£155</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:scale-105 transition-all">
                            <a className=" h-48 rounded overflow-hidden">
                                <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src={three} />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-900 title-font text-lg font-medium">The Silky Vase</h2>
                                <p className="mt-1">£125</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:scale-105 transition-all">
                            <a className=" h-48 rounded overflow-hidden">
                                <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src={four} />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-900 title-font text-lg font-medium">The Lucy Lamp</h2>
                                <p className="mt-1">£399</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center button1'><button className='mt-10'>View collection</button></div>
            </section>
            <section className="text-gray-600 body-font z-40">
                <div className="container px-5 py-24 mx-auto ceramics">
                    <h1>New ceramics</h1>
                    <div className="flex flex-wrap -m-4 mt-10">
                        <div className="w-[764px] h-[550px] p-4 hover:scale-105 transition-all ">
                            <a className=" h-48 rounded overflow-hidden">
                                <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src={Large} />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-900 title-font text-lg font-medium">Rustic Vase Set</h2>
                                <p className="mt-1">£155</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:scale-105 transition-all">
                            <a className=" h-48 rounded overflow-hidden">
                                <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src={photo1} />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-900 title-font text-lg font-medium">Rustic Vase Set</h2>
                                <p className="mt-1">£155</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:scale-105 transition-all">
                            <a className=" h-48 rounded overflow-hidden">
                                <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src={photo1} />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-900 title-font text-lg font-medium">The Silky Vase</h2>
                                <p className="mt-1">£125</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='flex justify-center items-center button1'><button className='mt-10'>View collection</button></div>
            </section>
        </div>
    )
}

export default Cards