import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ImBin } from 'react-icons/im'

const Cart = () => {
    const navigate = useNavigate()
    const carts = JSON.parse(localStorage.getItem('cart')) || []
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const total = carts.reduce((acc, item) => {
            return acc + (item.price * item.quantity)
        }, 0)
        setTotal(total)
    }, [carts])

    const handleInc = (id) => {
        const updatedCart = carts.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })
        localStorage.setItem('cart', JSON.stringify(updatedCart))
        navigate('/cart')
    }

    const handleDec = (id) => {
        const updatedCart = carts.map(item => {
            if (item.quantity > 0) {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    }
                }
            }
            return item
        })
        localStorage.setItem('cart', JSON.stringify(updatedCart))
        navigate('/cart')
    }

    const removeProduct = (id) => {
        const updatedCart = carts.filter(item => item.id !== id)
        localStorage.setItem('cart', JSON.stringify(updatedCart))
        navigate('/cart')
    }

    if (carts.length === 0) {
        return <div className='h-[60vh] text-[30px] justify-center items-center flex'>Cart is empty</div>
    }

    return (
        <>
            <div>
                <div style={{ backgroundImage: 'url(https://htmldemo.net/juan/juan/assets/img/banner/breadcrumb-banner.jpg)' }} className='py-[50px] text-center'>
                    <h1 className='uppercase font-semibold pb-3 text-[24px]'>Shop</h1>
                    <span>
                        <Link to='/' className='pe-2 hover:!text-[#E3A51E] duration-500'>Home</Link>
                        /
                        <Link to='/cart' className='text-yellow-500 ps-2'>Cart</Link>
                    </span>
                </div>
                <div className='py-5 md:px-10  '>
                    <div className='flex overflow-x-auto '>
                        <span className='text-white font-semibold text-[17px] bg-[#e3a51e] py-4 md:w-[10%] w-[50%] ps-5'>THUMBNAIL</span>
                        <span className='text-white font-semibold text-[17px] bg-[#e3a51e] py-4 md:w-[50%] w-[50%] ps-5 md:ps-0 text-center'>PRODUCT</span>
                        <span className='text-white font-semibold text-[17px] bg-[#e3a51e] py-4 md:w-[10%] w-[50%] ps-5'>PRICE</span>
                        <span className='text-white font-semibold text-[17px] bg-[#e3a51e] py-4 md:w-[10%] w-[50%] ps-5'>QUANTITY</span>
                        <span className='text-white font-semibold text-[17px] bg-[#e3a51e] py-4 md:w-[10%] w-[50%] ps-5'>TOTAL</span>
                        <span className='text-white font-semibold text-[17px] bg-[#e3a51e] py-4 md:w-[10%] w-[50%] ps-5 pe-3 md:pe-0'>REMOVE</span>
                    </div>
                    <div className=' '>
                        {
                            carts.map(cart => {
                                return (
                                    <div className='flex overflow-x-auto ' key={cart.id}>
                                        <img src={cart.image} className='border md:w-[10%] w-[20%]  h-[150px] ' alt={cart.title} />
                                        <span className='md:w-[50%] px-3 md:px-0 w-[35%] border flex items-center justify-center'>{cart.title}</span>
                                        <span className='md:w-[10%]  border flex items-center w-[25%] justify-center'>{cart.price}$</span>
                                        <span className='md:w-[10%] w-[40%] border flex items-center justify-center'>
                                            <span className='border py-2 px-3 md:w-[60%] w-[75%] flex'>
                                                <span className='text-[20px] cursor-pointer' onClick={() => handleInc(cart.id)}>+</span>
                                                <input type="text" className='mx-1 text-center w-[50%] outline-none' min='0' value={cart.quantity} name="" id="" />
                                                <span className='text-[20px] cursor-pointer' onClick={() => handleDec(cart.id)}>-</span>
                                            </span>
                                        </span>
                                        <span className='md:w-[10%] w-[25%] border flex  items-center justify-center  '>{cart.price * cart.quantity}$</span>
                                        <span className='md:w-[10%] w-[20%] border flex  items-center justify-center   cursor-pointer' onClick={() => removeProduct(cart.id)}>
                                            <ImBin />
                                        </span>
                                    </div>
                                )
                            })
                        }
                        {/* <h1 className='text-[26px]'>{total.toFixed(2)}</h1> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart