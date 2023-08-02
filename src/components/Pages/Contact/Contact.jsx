import React from 'react'
import { Link } from 'react-router-dom'
import {FaAddressBook} from 'react-icons/fa'
import {BiSolidPhone} from 'react-icons/bi'
import {BsEnvelope} from 'react-icons/bs'

const Contact=()=> {
    return (
        <>
            <div>
                <div style={{ backgroundImage: 'url(https://htmldemo.net/juan/juan/assets/img/banner/breadcrumb-banner.jpg)' }} className='py-[50px] text-center'>
                    <h1 className='uppercase font-semibold pb-3 text-[24px]'>Contact Us</h1>
                    <span>
                        <Link to='/' className='pe-2 hover:!text-[#E3A51E] duration-500'>Home</Link>
                        /
                        <Link to='/contact' className='text-yellow-500 ps-2'>Contact Us</Link>
                    </span>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-4 py-5 mx-4 md:px-10 overflow-x-hidden'>
                    <div>
                        <h1 className='text-[24px] font-semibold font-sans mb-4'>Tell Us Your Project</h1>
                        <div className=''>
                            <div className='flex gap-4'>
                                <input type="text" className='py-4 ps-3 w-[80%] bg-[#F3F6F5] outline-none mb-4' placeholder='Name *' />
                                <input type='tel' className='py-4 ps-3 w-[80%] bg-[#F3F6F5] outline-none mb-4' placeholder='Phone *' />
                            </div>
                            <div className='flex gap-4'>
                                <input type='email' className='py-4 ps-3 w-[80%] bg-[#F3F6F5] outline-none mb-4' placeholder='Email *' />
                                <input type='text' className='py-4 ps-3 w-[80%] bg-[#F3F6F5] outline-none mb-4' placeholder='Subject *' />
                            </div>
                            <div>
                                <textarea name="" id="" className='w-full pt-3 px-3 bg-[#F3F6F5] outline-none mb-4 h-[160px]' placeholder='Message *' cols="10" rows="10"></textarea>
                                <button type="submit" className='bg-[#333333] duration-500 text-[#e3a51e] hover:bg-[#e3a51e] hover:text-[#333] px-5 py-3'>SEND MESSAGE</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-[24px] font-semibold font-sans mb-4'>Contact Us</h1>
                        <div className=''>
                            <p className='text-[#666666] w-[80%] '>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.
                            Mirum est notare quam littera gothica,
                            quam nunc putamus parum claram anteposuerit litterarum formas human.</p>
                            <div className='flex text-[#666666] items-center mt-6 border-b pb-4 mb-4'>
                                <FaAddressBook />
                                <p className='ps-3'>Address : No 40 Baria Sreet 133/2 NewYork City</p>
                            </div>
                            <div className='flex text-[#666666]  items-center mt-6 border-b pb-4 mb-4'>
                                <BiSolidPhone className='text-[20px]' />
                                <p className='ps-3'>info@yourdomain.com</p>
                            </div>
                            <div className='flex text-[#666666]  items-center mt-6 pb-4 mb-4'>
                                <BsEnvelope className='text-[20px]' />
                                <p className='ps-3'> +88013245657</p>
                            </div>
                            <div>
                                <h4 className='font-semibold text-[18px]'>Working Hours</h4>
                                <span className='pt-2 text-[16px] text-[#666666]'>Monday – Saturday:  08AM – 22PM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact