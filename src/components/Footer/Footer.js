import React from 'react';

const Footer = () => {
    return (
        <>
            <div className='bg-[#FCFCFC] h-[70vh] mt-[150px]'>
                <div className="container">
                    <div className='flex items-center justify-around pt-[120px]'>
                        <div>
                            <h1 className='text-2xl font-medium'>UI.desk</h1>
                            <p className='w-[260px] mt-10'>On formed merits hunted unable merely by mr whence or. </p>
                        </div>
                        <div className=''>
                            <h1 className='text-2xl font-medium'>Home</h1>
                            <div className='leading-[32px] mt-5 cursor-pointer'>
                                <p>Company</p>
                                <p>News</p>
                                <p>Team</p>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-2xl font-medium'>About</h1>
                            <div className='leading-[32px] mt-5 cursor-pointer'>
                                <p>History</p>
                                <p>Service</p>
                                <p>Pricing</p>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-2xl font-medium'>Partner</h1>
                            <div className='leading-[32px] mt-5 cursor-pointer'>
                                <p>Business</p>
                                <p>Plan</p>
                                <p>Marketing</p>
                            </div>

                        </div>
                        <div>
                            <h1 className='text-2xl font-medium'>Contact</h1>
                            <div className='leading-[32px] mt-5 cursor-pointer'>
                                <p>UI.desk</p>
                                <p>(465)954-8487</p>
                                <p>Lahore, Pakistan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#64BB47] h-[70px] text-center'>
                <h1 className='text-white text-xl pt-5'>© Copyright 2020 by ui.desk. All right reserved.</h1>
            </div>
        </>


    );
};

export default Footer;