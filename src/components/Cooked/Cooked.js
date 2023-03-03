import React from 'react';
import chef from './../../image/Image & bg elements.png'
import check from './../../image/check mark.png'

const Cooked = () => {
    return (
        <div className='mt-[120px]'>
            <div className="container">
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='text-5xl font-medium w-[360px] leading-[68px]'>
                            Cooked by the
                            Best Chefs
                        </h1>
                        <p className='text-xl leading-[34px] w-[420px] my-8'>
                            Believing neglected so so allowance existence
                            departure in. In design active temper be uneasy.
                            Thirty for remove plenty regard
                            you summer though. He preference connection astonished on of ye.
                        </p>
                        <div>
                            <div className='flex'>
                                <img src={check} alt="" className='mr-4'/>
                                <p>A guaranteed delicious meal</p>
                            </div>
                            <div className='flex my-3'>
                                <img src={check} alt="" className='mr-4 '/>
                                <p>Food is guaranteed hygienic</p>
                            </div>
                            <div className='flex'>
                                <img src={check} alt="" className='mr-4'/>
                                <p>Cooked quickly</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={chef} alt="" className=' '/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Cooked;