import React from 'react';
import image1 from './../../image/Image 01.png'
import image2 from './../../image/Image 02.png'
import image3 from './../../image/Image 03.png'
const About = () => {
    return (
        <div className='mt-[200px]'>
            <div className='container'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='text-5xl font-medium'>About US</h1>
                        <p className='w-[420px] text-xl my-8'>Organic food is grown without the use of synthetic chemicals, such as human-made pesticides and fertilizers, and does not contain genetically modified organisms (GMOs). Organic foods include fresh produce, meats, and dairy products as well as processed foods such as crackers, drinks, and frozen meals.</p>
                        <button className='w-[180px] h-[64px] bg-[#64BB47] rounded-[50px] text-white mt-8'>Learn More</button>
                    </div>
                    <div>
                        <div className='flex'>
                            <div className='mr-4 '>
                                <img src={image1} alt="" className='pb-3'/>
                                <img src={image2} alt="" className=''/>
                            </div>
                            <div className='mt-10'>
                                <img src={image3} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;