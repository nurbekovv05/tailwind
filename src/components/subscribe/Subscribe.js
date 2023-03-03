import React from 'react';

const Subscribe = () => {
    return (
        <div>
            <div className='container'>
                <div className='text-center pt-16'>
                    <h1 className='text-4xl font-medium  '>Subscribe to the Newsletter</h1>
                    <p className='leading-[30px] text-xl mt-6'>Enter your email below to get our daily offers and news</p>
                </div>
                <div className='text-center mt-20'>
                    <input type="text" placeholder='Enter your email ' className='rounded-[20px] border-2 w-[300px] h-[50px] pl-6  outline-none '/>
                    <button className='text-white ml-6 rounded-[50px] bg-[#64BB47] w-[150px] h-[50px]'>Get started</button>
                </div>

            </div>
        </div>
    );
};

export default Subscribe;