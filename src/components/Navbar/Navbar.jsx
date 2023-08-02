import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import icon from "../../Assets/logo.png"
import { AiOutlineSearch } from "react-icons/ai";
import { FiMenu } from "react-icons/fi"
import { CiSettings } from "react-icons/ci"
import { HiOutlineShoppingBag } from "react-icons/hi"


const Navbar = () => {
    const Links = [
        { name: "HOME", link: "/", current: true },
        { name: "SHOP", link: "/shop", current: false },
        // { name: "BLOG", link: "/blog", current: false },
        { name: "CONTACT US", link: "/contact", current: false },
    ];

    const navigate = useNavigate()
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const [open, setOpen] = useState(false);
    const navStyles = ({ isActive }) => {
        return {
            color: isActive ? '#E3A51E' : 'black'
        }
    }

    return (
        <div className=' py-5 md:px-10 px-3 fixed top-0 left-0 right-0 z-[1000] bg-white'>
            <div className='flex items-center  justify-between' >
                <div className=''>
                    <img src={icon} alt="" />
                </div>

                <ul className={`md:flex md:items-center md:pb-0  absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-5 transition-all duration-500 ease-in ${open ? 'top-20 shadow-xl rounded-md' : 'top-[-490px]'}`}>
                    <div className='bg-[#f2f2f2] inline-block md:hidden py-3 '>
                        <span className='flex px-3 item-center justify-center'>
                            <input type="text" name="" placeholder='Search Here...' className='bg-transparent italic' id="" />
                            <AiOutlineSearch className='text-[20px]' />
                        </span>
                    </div>

                    {
                        Links.map((link) => (
                            <li key={link.name} className={`md:ml-8 text-[18px] font-sans md:my-0 my-5 `}>
                                <NavLink to={link.link} style={navStyles} className=' hover:!text-[#E3A51E] duration-500'>
                                    {link.name}
                                </NavLink>
                            </li>
                        ))
                    }

                    <div className='border-t md:hidden mt-[30px]'>
                        <span className='block py-4'>Currency</span>
                        <span className='block pb-4'>My Account</span>
                    </div>
                </ul>

                <div className='flex items-center '>
                    <div className='md:flex items-center  gap-5 inline-block'>
                        {/* <AiOutlineSearch className='text-[25px] hidden md:block' /> */}
                        <span className='z-[1000]'>
                            <div className="group relative bg-white px-4 ">
                                <CiSettings className='text-[25px] menu-hover hidden md:block cursor-pointer ' />
                                <div className="invisible opacity-0 absolute left-[-100%] z-[1000] flex w-[150px] flex-col border border-[#e5e5e5] bg-white group-hover:visible group-hover:opacity-100 transition  duration-[400ms] ease-in-out ">
                                    <span className='px-3 mt-2 block py-1 cursor-pointer text-[#666666] hover:text-[#E3A51E] transition duration-500 md:mx-2'>Login</span>
                                    <span className='px-3 block py-1 cursor-pointer text-[#666666] hover:text-[#E3A51E] transition duration-500 md:mx-2'>Register</span>
                                    <span className='px-3 mb-2 block py-1 cursor-pointer text-[#666666] hover:text-[#E3A51E] transition duration-500 md:mx-2'>My Account</span>
                                </div>
                            </div>
                        </span>
                        <span className='relative '>
                            <NavLink to='/cart'>
                                <HiOutlineShoppingBag className='text-[25px]' />
                                <span className='bg-[#E3A51E] w-[18px] h-[18px] flex justify-center items-center absolute top-[-7px] right-[-6px] text-white rounded-full text-[10px]'>{cart.length}</span>
                            </NavLink>
                        </span>
                    </div>

                    <div onClick={() => setOpen(!open)} className='text-3xl ms-5 inline-block cursor-pointer md:hidden'>
                        <FiMenu name={open ? 'close' : 'menu'}></FiMenu>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar