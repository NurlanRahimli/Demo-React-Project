import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { api } from '../util/api';
// import { key } from '../util/api'

const Modal = ({ isOpen, handleClose }) => {
    // const { id } = useParams()
    // const [modal, setModal] = useState([])
    // const [error, setError] = useState("")

    // useEffect(() => {
    //     const getModal = async () => {
    //         try {
    //             const res = await fetch(`${api}/books/${id}`);
    //             // const res = await fetch(`${api}/products/${id}`);
    //             if (!res.ok) throw new Error("Something went wrong!");
    //             const data = await res.json();
    //             console.log(data);
    //             setModal(data);
    //         }
    //         catch (error) {
    //             setError(error.message);
    //         }
    //     }
    //     getModal()
    // }, [id])

    useEffect(() => {
        const closeOnEscapeKey = e => e.key === "Escape" ? handleClose() : null;
        document.body.addEventListener("keydown", closeOnEscapeKey);
        return () => {
            document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
    }, [handleClose]);

    if (!isOpen) return null;

    return (
        <>
            <div className="justify-center overflow-hidden items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
                <div className="relative md:max-w-[720px] max-w-full mx-2 md:mx-0">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative pt-3 flex flex-col justify-center items-center bg-white md:h-[350px] h-[600px] outline-none focus:outline-none">
                        {/*header*/}
                        <div className="md:flex mx-6 md:mx-0 md:text-start text-center md:gap-4 items-center justify-center  rounded-t">
                            <div className='w-full flex  justify-center border  md:ms-4'>
                                <img src="https://htmldemo.net/juan/juan/assets/img/product/product-details-img1.jpg" className=" w-[70%]  " alt="" />
                            </div>
                            <div className=''>
                                <h1 className="text-[24px] pb-3 tracking-wide">What do you want </h1>
                                <span className="text-[18px] font-semibold tracking-wider">$18</span>
                                <p className="text-[16px] pt-3 pb-4 text-[#666666] leading-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex adipisci fugit nostrum architecto iure esse!</p>
                                <div className="md:flex inline-block">
                                    <button className="bg-[#333333] inline-block hover:bg-[#e3a51e] hover:text-[#333333] text-[#e3a51e] duration-500 px-4 py-2 text-[18px]">ADD TO CART</button>
                                </div>
                                <p className="pt-4">Availability: <span className="text-green-500">In Stock</span></p>
                            </div>
                        </div>

                    </div>
                    <button
                        className="absolute right-[2%] top-[3%]"
                        type="button"
                        onClick={handleClose}
                    >
                        <AiOutlineCloseCircle className="text-[26px]" />
                    </button>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default Modal