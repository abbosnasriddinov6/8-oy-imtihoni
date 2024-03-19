'use client'
import { four, one, three, two } from '@/asstets'
import Brand from '@/components/Brand'
import Club from '@/components/Club'
import Header from '@/components/Header'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useStore } from 'zustand'
import { log } from 'console'
import { useCounterStore } from '../Storetypes'

const Details = ({ params, }: {
    params: { details: string }
}) => {



    const { count, increase, decrease } = useCounterStore();





    const [s, sets] = useState([])
    const { details } = params
    const getproductss = async () => {
        try {
            const res = await axios.get(`https://65f7443bb4f842e8088565a2.mockapi.io/products?id=${details}`)
            const data = await res.data
            sets(data)



        } catch (error) {

        }

    }
    useEffect(() => {
        getproductss()
    }, [s])


    return (
        <>
            <Header />
            <div className='container mx-auto mt-40'>
                {s.length > 0 ? s.map((product) =>
                    <div className="content-wrapper flex flex-col items-center justify-start gap-20">
                        <section className="w-full h-full flex flex-col lg:flex-row items-start  lg:items-center justify-start gap-10 lg:gap-20">
                            
                            <section className="w-full h-full sm:w-[407px] sm:h-[461px] md:w-[507px] md:h-[561px]">
                                <img
                                    src={product.category}
                                    alt="rasm"
                                    className="w-full h-full object-cover"
                                />
                            </section>
                            <section className="flex flex-col justify-start items-start gap-10">
                                <div className="flex flex-col items-start justify-start gap-4">
                                    <h1 className="font-clash font-normal text-3xl md:text-4xl text-Primary">
                                        £ {product.price}
                                    </h1>

                                </div>
                                <div className="max-w-xl flex flex-col justify-start items-start gap-4">
                                    <h3 className="font-clash font-normal text-xl text-Primary">
                                        {product.title}
                                    </h3>
                                    <p className="para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                                        doloremque sapiente, tenetur nesciunt mollitia quaerat neque
                                        dolores blanditiis, autem, id officiis dolore nihil dolor
                                        assumenda dolorem. Quod dolorum excepturi quo.
                                    </p>
                                </div>
                                <div className="flex flex-col items-start justify-start gap-4">
                                    <h3 className="font-clash font-normal text-Primary text-xl">
                                        Qunatity
                                    </h3>
                                    <div className="flex items-center justify-start gap-4 font-satoshi font-normal text-base text-Primary">
                                        <span onClick={decrease}
                                            className="border-[1px] border-light-gray-100 px-4 py-2 cursor-pointer "


                                        >
                                            -
                                        </span>
                                        <p>  {count}</p>
                                        <span onClick={increase}
                                            className="border-[1px] border-light-gray-100 px-4 py-2 cursor-pointer"

                                        >
                                            +
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-start gap-2">
                                    <button className='bg-[#2A254B] w-[156px] h-[56px] rounded text-white'>Go to cart</button>
                                    <button className="button bg-[#2A254B] w-[156px] h-[56px] rounded text-white">
                                        Add to cart
                                    </button>
                                </div>
                            </section>
                        </section>

                    </div>
                ) : null}
            </div>
            <div>
                <section className="text-gray-600 body-font z-40">

                    <div className="container px-5 py-24 mx-auto ceramics">
                        <h1 className='text-[26px] text-[#2A254B]'>You might also like</h1>
                        <div className="flex flex-wrap -m-4 mt-10">
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:scale-105 transition-all">
                                <a className=" h-48 rounded overflow-hidden">
                                    <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src={one} />
                                </a>
                                <div className="mt-4">
                                    <h2 className="text-gray-900 title-font text-lg font-medium"></h2>
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
            </div>
            <Brand />
            <Club />
        </>
    )
}


export default Details