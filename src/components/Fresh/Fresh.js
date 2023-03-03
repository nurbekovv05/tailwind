import React from 'react';
import fresh from './../../image/Group 4114.png'
const Fresh = () => {
    return (
        <div className='pt-[140px]'>
            <div className='container'>
                <div className='flex '>
                    <div>
                        <img src={fresh} alt="" className='w-[90%]'/>
                    </div>
                    <div className='ml-9'>
                        <h1 className='text-5xl w-[410px] font-medium leading-[65px]'>Fresh Vegetables
                            Every Day</h1>
                        <p className='text-xl w-[440px] leading-[33px] my-5'>Healthy life as informed declared
                            we enjoy the margaret.
                            Joy horrible moreover man feelings own shy.
                            Request norland neither
                            mistake for yet. Between the for
                            morning assured country believe.
                        </p>
                        <button className='w-[180px] h-[64px] bg-[#64BB47] rounded-[50px] text-white mt-8'>Learn More</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Fresh;