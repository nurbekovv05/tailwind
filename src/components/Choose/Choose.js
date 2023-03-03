import React from 'react';
import icon1 from './../../image/Icon.png'
import icon2 from './../../image/Icon (1).png'
import leaf from './../../image/leaf 1.png'
const Choose = () => {
    return (
        <div className='container'>
            <div>
                <div className='text-center py-20'>
                    <h1 className='text-4xl font-medium'>Why Choose US?</h1>
                    <p className='mt-8 text-xl'>Organic food is grown without the use of synthetic chemicals</p>
                </div>

                <div className='flex items-center justify-around '>
                    <div className='text-center'>
                        <div className=''>
                            <img src={icon1} alt="" className='my-8 ml-20'/>
                            <span className='text-2xl font-medium '>Easy to order</span>
                        </div>

                        <p className='w-[270px] text-center text-xl mt-5'>foods include fresh produce, meats as well as processed</p>
                    </div>
                    <div className=''>
                        <div className='text-center '>
                            <img src={icon2} alt="" className='ml-20 my-8'/>
                            <span className=' text-2xl font-medium '>Live Order</span>
                        </div>
                        <p className='w-[270px] text-xl text-center mt-5'>Place your online Order easily and get the food instantly</p>
                    </div>
                    <div className=''>
                        <div className='text-center '>
                            <img src={leaf} alt="" className='ml-20 my-8'/>
                            <span className=' text-2xl font-medium '>100% Organic</span>
                        </div>
                        <p className='w-[270px] text-xl text-center mt-5'>Organic food is grown without the use of synthetic chemicals</p>
                    </div>
                </div>
                <div className='flex items-center justify-center mt-20'>
                    <div className='text-center'>
                        <h1 className='text-4xl font-bold'>40+</h1>
                        <p className='text-xl mt-5'>Food Partners</p>
                    </div>
                    <div className='text-center mx-[200px]'>
                        <h1 className='text-4xl font-bold'>459+</h1>
                        <p className='text-xl mt-5'>Trusted Clients</p>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-4xl font-bold'>12k+</h1>
                        <p className='text-xl mt-5'>Order Online</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;