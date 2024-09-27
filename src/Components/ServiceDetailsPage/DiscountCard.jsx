import React from 'react';
import img from '../../../public/assets/logo.svg'
import Image from 'next/image';

const DiscountCard = () => {
    return (
        <div className='bg-black p-8 flex flex-col gap-5 rounded text-center'>
            <Image alt='logo' className='mx-auto' width={80} height={50} src={img.src}/>
            <h1 className='text-xl font-bold'>Need Help? We Are Here<br/>To Help you</h1>
            <div>
                <div className='bg-white rounded p-2'>
                    <h1 className='text-2xl font-bold text-primary'>Car Doctor <span className='text-black'>Special</span></h1>
                    <p className='text-primary font-bold text-lg'><span className='text-slate-400'>Save up to</span> 60% off</p>
                    <button className="btn btn-primary relative -bottom-5 mx-auto text-white px-2">Get A Quote</button>
                </div>
            </div>
        </div>
    );
};

export default DiscountCard;