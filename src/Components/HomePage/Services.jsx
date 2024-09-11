import React from 'react';
import s1 from '../../../public/assets/images/services/1.jpg'
import Image from 'next/image';

const Services = () => {
    return (
        <div className='flex flex-col text-center gap-8'>
            <div className='flex flex-col gap-3 w-1/2 mx-auto'>
                <h3 className='font-bold text-primary'>Service</h3>
                <h1 className='font-bold text-5xl text-black'>Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
            </div>
            <div>
                <div className='flex flex-col gap-2 rounded w-56 border-2 p-2'>
                    <Image alt="services" className='rounded' src={s1} height={150} width={200} />
                    <div className='text-left'>
                        <h1 className='font-bold text-lg text-black'>Services title</h1>
                        <div className='flex justify-between'>
                            <span className='text-primary'>Price: $20.00</span>
                            <span>arrow</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;