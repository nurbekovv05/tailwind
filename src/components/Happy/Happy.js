import React from 'react';
import avatar from './../../image/avatar.png'
import png from './../../image/png-image.png'
import vector from './../../image/Vector 1.png'
import vector2 from './../../image/Vector 2.png'
const Happy = () => {
    return (
        <div className='my-8 bg-[#FCFCFC] h-[110vh] mt-[140px]'>
            <div className='container'>
                <h1 className='text-5xl font-medium text-center pt-10'>Happy Clients Says</h1>
                <div className='flex items-center justify-around mt-[100px]'>
                    <div className='shadow-2xl w-[494px] h-[307px] rounded-[20px]'>
                        <div className='ml-8 '>
                            <div className='flex items-center'>
                                <div className='flex items-center mt-10'>
                                    <img src={avatar} alt=""/>
                                    <div className='ml-8'>
                                        <h2 className='text-xl font-medium'>KHALIL NAZIR</h2>
                                        <p>CEO of UI.Desk</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={png} alt="" className='ml-20'/>
                                </div>
                            </div>

                            <p className=' w-[380px] mt-8'>
                                Thirty for remove plenty regard you summer though.
                                He preference Partiality on or continuing in particular
                                principles as. Do believing oh disposing to supported allowance we.
                            </p>
                        </div>
                    </div>
                    <div className='shadow-2xl w-[494px] h-[307px] rounded-[20px]'>
                        <div className='ml-8 '>
                            <div className='flex items-center'>
                                <div className='flex items-center mt-10'>
                                    <img src={avatar} alt=""/>
                                    <div className='ml-8'>
                                        <h2 className='text-xl font-medium'>KHALIL NAZIR</h2>
                                        <p>CEO of UI.Desk</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={png} alt="" className='ml-20'/>
                                </div>
                            </div>

                            <p className=' w-[380px] mt-8'>
                                Thirty for remove plenty regard you summer though.
                                He preference Partiality on or continuing in particular
                                principles as. Do believing oh disposing to supported allowance we.
                            </p>
                        </div>
                    </div>

                </div>
                <div className='flex items-center justify-center mt-16 pb-4'>
                    <img src={vector2} alt="" className='mr-4'/>
                    <img src={vector} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Happy;