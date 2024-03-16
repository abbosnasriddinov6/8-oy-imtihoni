'use client'
import '../scss/main.scss'
import { one } from '@/asstets'

import React from 'react'
import Image from 'next/image'
import Furniture from '@/components/Furniture'
import Brand from '@/components/Brand'
import Cards from '@/components/Cards'
import Club from '@/components/Club'
import London from '@/components/London'
import Header from '@/components/Header'

const page = () => {
  return (
    <>
      <div className='container m-auto page'>
        <Header />
        <Furniture />
        <Brand />
        <Cards />

      </div>
      <Club />

      <London />


    </>
  )
}

export default page