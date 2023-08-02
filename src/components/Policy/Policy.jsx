import React from 'react'

import service1 from '../../Assets/services/service1.png'
import service2 from '../../Assets/services/service2.png'
import service3 from '../../Assets/services/service3.png'

function Policy() {
    return (
        <div className='py-4 md:px-10 px-3'>
            <div className='md:flex  gap-5'>
                <div className='bg-[#FCEDDA] w-full md:w-1/3 ps-5 py-8 '>
                    <div className='flex items-center '>
                        <img src={service1} alt="" />
                        <div className='ps-4'>
                            <span className='text-[18px]  tracking-wider font-sans '>FREE SHIPPING</span>
                            <p className='text-[16px]'>Free shipping on all order</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#f2fbcb] w-full md:w-1/3 ps-5 py-8 my-4 md:my-0'>
                    <div className='flex items-center'>
                        <img src={service2} alt="" />
                        <div className='ps-4'>
                            <span className='text-[18px]  tracking-wider font-sans '>ONLINE SUPPORT</span>
                            <p className='text-[16px]'>Online support 24 hours a day</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#f7d8f9] w-full md:w-1/3 ps-5 py-8 '>
                    <div className='flex items-center'>
                        <img src={service3} alt="" />
                        <div className='ps-4'>
                            <span className='text-[18px]  tracking-wider font-sans '>MONEY RETURN</span>
                            <p className='text-[16px]'>Back guarantee under 5 days</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Policy