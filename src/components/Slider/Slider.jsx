import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { api } from "../util/api"
import { url } from "../util/api"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules

const Slider = () => {
    const [sliders, setSliders] = useState([]);
    const [error, setError] = useState("");

    const getSlider = async () => {
        try {
            // const res = await fetch(`${api}/shoes/?rapidapi-key=${key}`);
            const res = await fetch(`${api}/products/category/men's clothing`);
            if (!res.ok) throw new Error("Something went wrong!");
            const data = await res.json();
            console.log(data);
            setSliders(data);
        }
        catch (error) {
            setError(error.message);
        }
    }

    useEffect(() => {
        getSlider();
    }, []);

    return (
        <div className="px-3 md:px-10 md:py-4 mt-[60px]">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                navigation={false}
                className="mySwiper"
            >
                {sliders.map((slider) => (
                    <SwiperSlide>
                        <div key={slider.id} className="">
                            <div className={`text-white font-sans md:flex justify-between items-center md:py-[40px] py-6 md:ps-[100px] px-4`} style={{ backgroundImage: `url(${slider.image})`, height: '500px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                                <div>
                                    <h1 className="md:text-[46px] text-[30px] capitalize">{slider.title}</h1>
                                    <span className="md:text-[24px] text-[18px] text-white block pb-3">{slider.category}!</span>
                                    <p className="md:w-[50%] md:text-[14px] capitalize ">{slider.description}</p>
                                    <Link to='/shop'>
                                    <button className="bg-white text-black hover:bg-black hover:text-white duration-500 mt-3 px-[30px] py-3 rounded-3xl" >Shop Now</button>
                                    </Link>
                                </div>
                                <div className="pt-5 md:pt-0">
                                    <img src={slider.image} className=" md:h-[450px] md:w-[450px] object-cover" alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
}

export default Slider