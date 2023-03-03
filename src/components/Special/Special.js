import React from 'react';
import food1 from './../../image/food.png'
import food2 from './../../image/food1.png'
import food3 from './../../image/food2.png'
const Special = () => {
    return (
        <div className='mt-[150px]'>
           <div className="container">
               <h1 className='text-5xl font-medium text-center'>Special Dishes for you</h1>
               <p className='text-center mt-6 text-[#3B433E] text-xl'>Made with premium & 100% Organic ingredients</p>
               <div className='mt-[100px]'>
                   <div className='flex items-center justify-around text-center'>
                       <div className='shadow-xl w-[326px] h-[500px] items-center rounded-[20px]'>
                           <img src={food1} alt="" className='text-center ml-9 w-[70%] mt-10'/>
                           <h1 className='text-2xl font-medium text-center py-6'>Green Salad</h1>
                           <p className='w-[250px] leading-[28px] ml-9'>A salad combined witha delicious
                               cut of bacon and mixed with tasty
                               and fresh sesome oil.</p>
                       </div>
                       <div className='shadow-xl w-[326px] h-[500px] items-center rounded-[20px]'>
                           <img src={food2} alt="" className='text-center ml-9 w-[70%] mt-10'/>
                           <h1 className='text-2xl font-medium text-center py-6'>Beef Salad</h1>
                           <p className='w-[250px] leading-[28px] ml-9'>A salad combined witha delicious
                               cut of bacon and mixed with tasty
                               and fresh sesome oil.</p>
                       </div>
                       <div className='shadow-xl w-[326px] h-[500px] items-center rounded-[20px]'>
                           <img src={food3} alt="" className='text-center ml-9 w-[70%] mt-10'/>
                           <h1 className='text-2xl font-medium text-center py-6'>Nut Salad</h1>
                           <p className='w-[250px] leading-[28px] ml-9'>A salad combined witha delicious
                               cut of bacon and mixed with tasty
                               and fresh sesome oil.</p>
                       </div>

                   </div>
               </div>
               <div className='text-center'>
                   <button className='w-[180px] h-[54px] bg-[#64BB47] rounded-[50px] text-white mt-16 '>View All</button>

               </div>

           </div>
        </div>
    );
};

export default Special;