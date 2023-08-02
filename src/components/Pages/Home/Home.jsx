import React from 'react'
import Slider from '../../Slider/Slider'
import Policy from '../../Policy/Policy'
import Products from '../../Products/Products'
import TopSeller from '../../TopSeller/TopSeller'
import Blogs from '../../Blogs/Blogs'

function Home() {
    return (
        <>
            <Slider />
            <Policy />
            <Products />
            <TopSeller />
            {/* <Blogs /> */}
        </>
    )
}

export default Home