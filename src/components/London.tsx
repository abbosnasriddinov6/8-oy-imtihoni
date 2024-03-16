import React from 'react'
import '../scss/pages/London.scss'
import { image } from '@/asstets'
import Image from 'next/image'
const London = () => {
    return (
        <div className='w-[100%] h-[800px]  flex'>
            <div className='thatone container'>
                <h1>From a studio in London to a global brand with
                    over 400 outlets</h1>
                <p>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
                <p>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                <button>Get in touch</button>
            </div>
            <div className='thattwo container'>
                <Image className='w-full h-full' src={image} alt="" />
            </div>
        </div>
    )
}

export default London