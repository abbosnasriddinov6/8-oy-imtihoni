'use client'
import Header from '@/components/Header'
import '../../scss/pages/Product.scss'
import Image from 'next/image'
import { four, one, three, two } from '@/asstets'
import getall from '../../useproducts/useProducts'
import { useEffect, useState } from 'react'
import '../../scss/pages/Club.scss'
import Link from 'next/link'

const page = () => {

  const [search, setSearch] = useState('')


  const { products, loading, getproducts } = getall()

  useEffect(() => {
    getproducts()
  }, [])


  return (
    <div>
      <Header />
      <div className='div  mt-40'>
        <div className='container mx-auto flex  '>
          <h1 className='mt-40 '>All products</h1>
        </div>
      </div>
      <div className='next flex w-[100%] container m-auto '>
        <div className='filter w-[20%] px-3 py-24 '>
          <div>
            <h1 className='text-[18px] '>Product type</h1>
            <div className='mt-4 flex flex-col gap-3 px-3 text-[#2A254B]'>
              <div className='flex gap-2'>
                <input type="checkbox" />
                <h3>Furniture</h3>
              </div>
              <div className='flex gap-2'>
                <input type="checkbox" />
                <h3>Homeware</h3>
              </div>
              <div className='flex gap-2'>
                <input type="checkbox" />
                <h3>Sofas</h3>
              </div>
              <div className='flex gap-2'>
                <input type="checkbox" />
                <h3>Homeware</h3>
              </div>
              <div className='flex gap-1'>
                <input type="checkbox" />
                <h3>Light fittings</h3>
              </div>
              <div className='flex gap-2'>
                <input type="checkbox" />
                <h3>Accessories</h3>
              </div>
            </div>
          </div>
          <div className='mt-10'>
            <h1 className='text-[18px] '>Price</h1>
            <div className='mt-4 flex flex-col gap-3 px-3 text-[#2A254B]'>
              <div className='flex gap-2'>
                <input type="checkbox" />
                <h3>0 - 100</h3>
              </div>
              <div className='flex gap-2'>
                <input type="checkbox" />
                <h3>101 - 250</h3>
              </div>
              <div className='flex gap-2'>
                <input type="checkbox" />
                <h3>250 +</h3>
              </div>
            </div>
          </div>
        </div>
        <div className='productsall w-[80%] '>
          <div className=''>
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='mx-auto block mt-5 w-[400px] h-[40px] px-4'
            />
          </div>
          <section className="text-gray-600 body-font z-40 mx-auto container py-12 ">
            {loading ? <h2>Loading...</h2> : null}
            <div className=" grid grid-cols-4 gap-y-12 ceramics">
              {products.filter((product) => {
                if (search === "") {
                  return product;
                } else if (
                  product.title.toLowerCase().includes(search.toLowerCase())
                ) {
                  return product;
                }
              }).map((product) => (
                <div className="flex flex-wrap gap-y-10">
                  <div className="lg:w-1/4 md:w-1/2 ochil  p-4  hover:scale-105 transition-all ">
                    <a className=" h-48 rounded overflow-hidden">

                      <Link href={`/${product.id}`}>   <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.category} /></Link>
                    </a>
                    <div className="mt-4">
                      <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                      <p className="mt-1">£{product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='flex justify-center items-center button1'><button className='mt-20 mb-10 w-[200px] text-[#2A254B] rounded h-[56px] bg-[#F9F9F9]'>Load more</button></div>
          </section>
        </div>
      </div>
    </div >

  )
}

export default page