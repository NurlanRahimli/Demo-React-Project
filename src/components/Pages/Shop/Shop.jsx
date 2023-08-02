import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';

// import { api } from "../../util/api";
// import { url } from "../../util/api";

import { Search } from '../../Search/Search'
import { SearchList } from "../../SearchList/SearchList";

import { Tooltip, Button } from "@material-tailwind/react";

import { AiOutlineHeart } from 'react-icons/ai'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { BsEye } from 'react-icons/bs'
import { FaTh, FaThList } from 'react-icons/fa'

const Shop = () => {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    // const [showModal, setShowModal] = useState(false);
    const [categories, setCategories] = useState([])
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState("")
    const [results, setResults] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('')

    const getCategories = async () => {
        try {
            // const res = await fetch(`${api}/shoes/?rapidapi-key=${key}`);
            const res = await fetch(`https://fakestoreapi.com/products/categories`);
            if (!res.ok) throw new Error("Something went wrong!");
            const data = await res.json();
            console.log(data);
            setCategories(data);
        }
        catch (error) {
            setError(error.message);
        }
    }

    const getProducts = async () => {
        try {
            // const res = await fetch(`${api}/shoes/?rapidapi-key=${key}`);
            const res = await fetch(`https://fakestoreapi.com/products`);
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
        getProducts()
        getCategories()
    }, []);

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
        navigate('/shop')
    }

    return (
        <>
            <div className="">
                <div style={{ backgroundImage: 'url(https://htmldemo.net/juan/juan/assets/img/banner/breadcrumb-banner.jpg)' }} className='py-[50px] text-center'>
                    <h1 className='uppercase font-semibold pb-3 text-[24px]'>Shop</h1>
                    <span>
                        <Link to='/' className='pe-2 hover:!text-[#E3A51E] duration-500'>Home</Link>
                        /
                        <Link to='/products' className='text-yellow-500 ps-2'>Shop</Link>
                    </span>
                </div>
                <div className="py-5 mx-4 md:px-10 overflow-x-hidden">
                    <div className="md:flex gap-4  ">
                        <div className="md:w-[20%] w-full">
                            <h1 className="text-[20px] mb-3 font-semibold">Categories</h1>
                            <h1 className="bg-yellow-500 px-6 py-3 inline-block text-center pt-4 cursor-pointer  duration-500" onClick={() => setSelectedCategory('')}>
                                Reset
                            </h1>
                            {categories.map((category) => (
                                <h1
                                    className=" pt-4  capitalize cursor-pointer md:hover:text-[#e3a51e] duration-500"
                                    style={selectedCategory === category ? { color: '#e3a51e' } : { color: 'black' }}
                                    onClick={() => setSelectedCategory(category)} >
                                    {category}
                                </h1>
                            ))}
                        </div>
                        <div className="md:w-[80%] w-full">
                            <div className="md:flex hidden relative items-center justify-between">
                                <div>
                                    <div className="px-2 inline-block py-2" style={{ backgroundColor: '#e3a51e' }}>
                                        <FaTh className="text-white  text-[20px] cursor-pointer" />
                                    </div>
                                    <div className="px-2 inline-block ms-3 py-2" style={{ backgroundColor: '#9e9e9e' }}>
                                        <FaThList className="text-white  text-[20px] cursor-pointer" />
                                    </div>
                                </div>
                                <Search setResults={setResults} />
                                {results && results.length > 0 && <SearchList results={results} />}
                                <div>
                                    <span>Sort By </span>
                                    <select className="py-3 ps-2 pe-7 border rounded-md outline-[#e3a51e] outline-1">
                                        <option value="Relevance">Relevance</option>
                                        <option value="a-z">Name (A-Z)</option>
                                        <option value="z-a">Name (Z-A)</option>
                                    </select>
                                </div>
                            </div>
                            {/* products */}
                            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-4 justify-center">
                                {products.filter((product) => {
                                    if (selectedCategory === '') {
                                        return true
                                    }
                                    return product.category === selectedCategory
                                }).map((product) => (
                                    <div key={product.id}>
                                        <Link to={`/shop/${product.id}`}>
                                            <div key={product.id} className="border mx-3 md:mx-0 overflow-hidden hover:border-[#e3a51e] duration-500   rounded-md text-center">
                                                <img src={product.image} className="hover:scale-105 overflow-hidden duration-500 cursor-pointer h-[300px] w-full object-cover" alt="" />
                                                <h1 className="md:text-[22px] text-[38px] pt-4 cursor-pointer md:hover:text-[#e3a51e] duration-500">{product.title.substring(0, 30) + '...'}</h1>
                                                <p className=" md:text-[20px] text-center inline-block" onClick={(e) => { e.preventDefault() }}>${product.price}</p>
                                                <div className="flex justify-center items-center gap-3 my-4">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop