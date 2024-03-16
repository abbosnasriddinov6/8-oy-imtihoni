import React from 'react'
import '../scss/pages/Furniture.scss'
import Image from 'next/image'
import { one } from '@/asstets'
const Furniture = () => {
  return (
    <div className='Furniture flex mt-48'>
      <div className=' furni p-10'>
        <h1>The furniture brand for the future, with timeless designs</h1>
        <button>View collection</button>
        <p>A new era in eco friendly furniture with Avelon, the French luxury retail brand
          with nice fonts, tasteful colors and a beautiful way to display things digitally
          using modern web technologies.</p>
      </div>
      <div className=' furnit  flex justify-center items-center'>
        <Image className='w-[100%] h-[100%] ' src={one} alt="asd" />
      </div>
    </div>
  )
}

export default Furniture