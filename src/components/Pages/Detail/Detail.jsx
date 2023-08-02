import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { api } from '../../util/api'

const Detail = () => {
    const { id } = useParams()
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");


    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await fetch(`${api}/products/${id}`);

                if (!res.ok) throw new Error("Could not found!");

                const data = await res.json();
                console.log(data);
                setProducts(data);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setError(error.message);
            }
        };
        getProduct();
    }, [id]);

    return (
        <div className='pb-5 pt-[80px] md:px-10 overflow-x-hidden'>
            {isLoading && !error && <h4>Loading........</h4>}
            {error && !isLoading && { error }}
            <div className=' text-center' key={id}>
                <div className=" flex justify-center items-center gap-5 ">
                    <div className="w-[30%]  flex justify-center ">
                        <img src={products.image} className=' h-[400px] object-contain' alt="" />
                    </div>
                    <div className=' text-start w-[50%]'>
                        {/* put rating here */}
                        <h3 className='text-[36px]  pt-4 '>{products.title}</h3>
                        <span className='text-[20px] '>${products.price}</span>
                        <h6 className='text-[#666666] text-[16px] leading-6 mt-4 mb-6'>{products.description}</h6>
                        <table>
                            <tbody>
                                <tr>
                                    <td className='border border-black px-5 py-2'>Category</td>
                                    <td className='border border-black px-5 py-2 capitalize'>{products.category}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className='uppercase bg-[#333333] text-[#e3a51e] py-[14px] px-[25px] mt-5'>
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail