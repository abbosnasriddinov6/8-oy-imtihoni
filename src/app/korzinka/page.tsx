"use client"
import { product1 } from '@/asstets'
import Header from '@/components/Header'
import Image from 'next/image'
import React, { useState } from 'react'
import { useCounterStore } from '../Storetypes'

const page = () => {

  const { count, increase, decrease } = useCounterStore();
  const [subtotal, setSubtotal] = useState(85);

  const handleIncrease = () => {
    increase();
    setSubtotal((prevSubtotal) => prevSubtotal + 85); // Increase subtotal by product price when increasing quantity
  };

  const handleDecrease = () => {
    if (count > 1) {
      decrease();
      setSubtotal((prevSubtotal) => prevSubtotal - 85); // Decrease subtotal by product price when decreasing quantity
    }
  };
  return (
    <div>
      <Header />
      <section className="text-gray-600 body-font mt-40">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-start w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-[#2A254B] tracking-widest">Your shopping cart</h1>
          </div>
          <div className=" flex  -m-4">

            <div className="p-4 lg:w-1/2">
              <h4 className='mb-10 text-[#2A254B]'>Product</h4>
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <Image alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={product1} />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-[#2A254B]">Graystone vase</h2>

                  <p className="mb-4 mt-3 w-[220px] text-[#2A254B]">A timeless ceramic vase with
                    a tri color grey glaze.</p>

                  <h4>£85</h4>
                </div>
              </div>
            </div>
            <div className="p-4 ml-96 lg:w-1/2">
              <h4 className='mb-10 text-[#2A254B]'>Quantity</h4>
              <div className="h-full flex sm:flex-row gap-10 flex-col items-center ">
                <button onClick={handleDecrease} className='bg-[#2A254B] w-[50px] h-[50px] rounded-xl text-4xl text-white' >-</button>
                <p className='text-2xl text-[#2A254B]'>{count}</p>
                <button onClick={handleIncrease} className='bg-[#2A254B] w-[50px] h-[50px] rounded-xl text-4xl text-white'>+</button>
              </div>
            </div>
            <div className="p-4  lg:w-1/2">
              <h4 className='mb-10 text-[#2A254B]' >Total</h4>
              <div className="h-full flex sm:flex-row gap-10 flex-col items-center ">
                <p className='text-2xl text-[#2A254B]'>£{subtotal}</p>
              </div>
            </div>
            <div className="p-4  lg:w-1/2">
              <h4 className='mb-10 text-[#2A254B]' >Action</h4>
              <div className="h-full flex sm:flex-row gap-10 flex-col items-center ">
                <button className='bg-[#2A254B] w-[90px] h-[50px] rounded-xl text-2xl text-white'>Delete</button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className='flex flex-col justify-end py-16 px-[328px] container mx-auto'>
          <div className='flex justify-end gap-3 text-2xl text-[#2A254B]'>
            <h3 className=''>Subtotal</h3>
            <h3 className=''>£{subtotal}</h3>
          </div>
          <p className='text-end text-sm mt-3 text-[#2A254B]'>Taxes and shipping are calculated at checkout</p>
          <div className='flex justify-end'>
            <button className='w-[170px] h-[56px] bg-[#2A254B] mt-4 text-white'>Go to checkout</button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default page