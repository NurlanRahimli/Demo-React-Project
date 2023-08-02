import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import { api } from "../util/api";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState("")

    const getBlogs = async () => {
        try {
            // const res = await fetch(`${api}/shoes/?rapidapi-key=${key}`);
            const res = await fetch(`${api}/articles`);
            if (!res.ok) throw new Error("Something went wrong!");
            const data = await res.json();
            console.log(data);
            setBlogs(data);
        }
        catch (error) {
            setError(error.message);
        }
    }

    useEffect(() => {
        getBlogs()
    }, []);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 3,
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

    return (
        <>
            <div className='py-5 md:px-10 '>
                <div className='text-center pb-5'>
                    <h1 className='text-[30px] font-semibold tracking-wide'>Our Blogs</h1>
                    <span className='text-[18px] text-[#666666]'>Lorem ipsum dolor sit amet consectetur adipisicing</span>
                </div>
                <div>
                    <Carousel
                        responsive={responsive}
                        draggable={true}
                        focusOnSelect={false}
                        keyBoardControl
                        maximumTouchDrag={80}
                        pauseOnHover
                        swipeable
                        rtl={false}
                        infinite={true}>
                        {blogs.slice(api.length-5, api.length).map((blog) => (
                            <div key={blog.id} className="mx-4">
                                <img src={blog.img_src} className='w-[100%] h-[300px]' alt={blog.title} />
                                <h1 className='py-4 text-[22px] font-semibold'>{blog.title.substring(0,70)+'...'}</h1>
                                <div className='flex pb-3'>
                                    <span>By <span className='text-[#666666]'>{blog.authors}</span></span>,
                                    <span className='ps-2'>On: <span className='text-[#666666]'>{blog.date}</span></span>
                                </div>
                                <a href="" className='text-[20px] font-sans'>Read More...</a>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Blogs