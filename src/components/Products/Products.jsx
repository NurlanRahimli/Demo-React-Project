import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Modal from "../Modal/Modal";

import { AiOutlineHeart } from 'react-icons/ai'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { BsEye } from 'react-icons/bs'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiOutlineCloseCircle } from 'react-icons/ai'

import { api } from "../util/api"
// import { key } from "../util/api"

import { Tooltip, Button } from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

const Products = () => {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    // const [showModal, setShowModal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState("")

    const getProducts = async () => {
        try {
            // const res = await fetch(`${api}/shoes/?rapidapi-key=${key}`);
            const res = await fetch(`${api}/products`);
            if (!res.ok) throw new Error("Something went wrong!");
            const data = await res.json();
            console.log(data);
            setProducts(data);

        }
        catch (error) {
            setError(error.message);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 4,
            slidesToSlide: 1,
        },
        desktop: {
            breakpoint: { max: 1024, min: 820 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 820, min: 600 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1,
            slidesToSlide: 1
        },
    };

    const handleCart = (product, redirect) => {
        console.log(product);
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const isProductExist = cart.find(item => item.id === product.id)
        if (isProductExist) {
            const updatedCart = cart.map(item => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }
                return item
            })
            localStorage.setItem('cart', JSON.stringify(updatedCart))
        }
        else {
            localStorage.setItem('cart', JSON.stringify([...cart, { ...product, quantity: 1 }]))
        }
        navigate('/')
    }

    return (
        <>
            <div className='py-5 md:px-10 overflow-x-hidden '>
                <div className='text-center pb-5'>
                    <h1 className='text-[30px] font-semibold tracking-wide'>Our Product</h1>
                    <span className='text-[18px] text-[#666666]'>Lorem ipsum dolor sit amet consectetur adipisicing</span>
                </div>
                <div className="relative">
                    <Carousel
                        responsive={responsive}
                        draggable={true}
                        focusOnSelect={false}
                        keyBoardControl
                        maximumTouchDrag={80}
                        pauseOnHover
                        swipeable
                        rtl={false}
                        infinite={true}
                        autoPlay={true}
                        customLeftArrow={<div className=" bg-yellow-500 md:px-3 px-2 py-2 text-[22px] md:py-3   rounded-full text-white absolute top-[42%] cursor-pointer left-[3%]"><IoIosArrowBack /></div>}
                        customRightArrow={<div className=" bg-yellow-500 md:px-3 px-2 py-2 text-[22px] md:py-3   rounded-full text-white absolute top-[42%] cursor-pointer right-[3%]"><IoIosArrowForward /></div>}
                    >
                        {products.map((product) => (
                            <div key={product.id} className="mx-3">
                                <Link to={`/shop/${product.id}`}>
                                    <div key={product.id} className="border mx-3 md:mx-0 overflow-hidden hover:border-[#e3a51e] duration-500 rounded-md text-center">
                                        <img src={product.image} className="hover:scale-105 overflow-hidden duration-500 cursor-pointer h-[300px] w-full object-cover" alt="" />
                                        <h1 className="md:text-[22px] text-[38px] pt-4 cursor-pointer md:hover:text-[#e3a51e] duration-500">{product.title.substring(0,20)+'...'}</h1>
                                        <p className=" md:text-[20px] text-center inline-block" onClick={(e) => { e.preventDefault() }}>${product.price}</p>
                                        <div className="flex justify-center items-center gap-3 my-4">
                                            {/* <Tooltip
                                                content="Wishlist"
                                                animate={{
                                                    mount: { scale: 1, y: 0 },
                                                    unmount: { scale: 0, y: 25 },
                                                }}
                                                onClick={(e) => { e.preventDefault() }}
                                            >
                                                <button onClick={(e) => { e.preventDefault() }} className="border border-[#e3a51e] text-[#e3a51e] hover:bg-[#e3a51e] hover:text-white duration-500 w-[46px] h-[46px] rounded-full flex justify-center items-center">
                                                    <AiOutlineHeart className="" />
                                                </button>
                                            </Tooltip> */}

                                            <Tooltip
                                                content="Add To Cart"
                                                animate={{
                                                    mount: { scale: 1, y: 0 },
                                                    unmount: { scale: 0, y: 25 },
                                                }}

                                                onClick={(e) => {
                                                    e.preventDefault()
                                                }}
                                            >
                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        handleCart(product)
                                                    }}
                                                    className="border border-[#e3a51e] text-[#e3a51e] hover:bg-[#e3a51e] hover:text-white duration-500 w-[46px] h-[46px] rounded-full flex justify-center items-center">
                                                    <HiOutlineShoppingBag className="" />
                                                </button>
                                            </Tooltip>

                                            {/* <Tooltip
                                                content="Quick View"
                                                animate={{
                                                    mount: { scale: 1, y: 0 },
                                                    unmount: { scale: 0, y: 25 },
                                                }}
                                                onClick={(e) => { e.preventDefault() }}
                                            >
                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        setIsOpen(true)
                                                    }}
                                                    className="border border-[#e3a51e] text-[#e3a51e] hover:bg-[#e3a51e] hover:text-white duration-500 w-[46px] h-[46px] rounded-full flex justify-center items-center">
                                                    <BsEye className="" />
                                                </button>
                                            </Tooltip> */}

                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </Carousel>
                </div >

            </div >

            <>
                <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen} />
            </>

        </>
    )
}

export default Products