import React from 'react'
import { FaTruckFast } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import { CiMoneyCheck1 } from "react-icons/ci";
import { LuSprout } from "react-icons/lu";
import '../scss/pages/Brand.scss'
const Brand = () => {
  return (
    <div className='container m-auto brand'>
      <h1 className='text-center  '>  What makes our brand different</h1>
      <div className='cardlar'>
        <div className='cards'>
          <h1><FaTruckFast /></h1>
          <h3>Next day as standard</h3>
          <p>Order before 3pm and get your order
            the next day as standard</p>
        </div>
        <div className='cards'>
          <h1><CiCircleCheck /></h1>
          <h3>Next day as standard</h3>
          <p>Order before 3pm and get your order
            the next day as standard</p>
        </div>
        <div className='cards'>
          <h1><CiMoneyCheck1 /></h1>
          <h3>Next day as standard</h3>
          <p>Order before 3pm and get your order
            the next day as standard</p>
        </div>
        <div className='cards'>
          <h1><LuSprout /></h1>
          <h3>Next day as standard</h3>
          <p>Order before 3pm and get your order
            the next day as standard</p>
        </div>
      </div>
    </div>
  )
}

export default Brand