import React from 'react'
import { FaTruckFast } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import { CiMoneyCheck1 } from "react-icons/ci";
import { LuSprout } from "react-icons/lu";
const Brand = () => {
  return (
      <div className='container m-auto '>
          <h1 className='text-center  '>  What makes our brand different</h1>
          <div className='flex justify-between'>
              <div><FaTruckFast /></div>
              <div><CiCircleCheck /></div>
              <div><CiMoneyCheck1 /></div>
              <div><LuSprout /></div>
          </div>
    </div>
  )
}

export default Brand