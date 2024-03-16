import Brand from '@/components/Brand'
import Footer from '@/components/Footer'

import Header1 from '@/components/Header1'
import Join from '@/components/Join'
import London from '@/components/London'
import London1 from '@/components/London1'
import Quality from '@/components/Quality'
import React from 'react'

const About = () => {
    return (
        <div>
            <Header1 />
            <div className='container mx-auto'>
                <Quality />
            </div>
            <London />
            <London1 />
            <div className='container mx-auto'>
                <Brand />
            </div>
            <Join />
        </div>
    )
}

export default About