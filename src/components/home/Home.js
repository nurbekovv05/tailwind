import React from 'react';
import header from './../../image/header Image.png'
import element from './../../image/bg elements.png'
const Home = () => {
    return (
        <>
            <div className='container '>
                <div className='flex items-center justify-center'>
                    <div>
                        <h1 className='text-6xl w-[500px] leading-[80px]'>
                            Just <span className='text-[#5FB848]'>Eat healthy</span>   food to live a  healthier life
                        </h1>
                        <p className='text-xl w-[400px] py-10 leading-[30px]'>Enjoy a healthy life by eating healthy foods that have extraordinary flavors that make your life healthier for today and in the future</p>
                        <button className='bg-[#64BB47] rounded-[70px] w-[150px] h-[50px] text-white'>Order Now</button>
                    </div>
                    <div className='relative'>
                        <img src={header} alt="" className='w-full'/>
                        <img src={element} alt="" className='absolute top-0 left-0 z-[-1] right-0 w-[100%]'/>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Home;