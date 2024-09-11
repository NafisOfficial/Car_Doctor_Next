import Image from 'next/image';
import React from 'react';
import img1 from '../../../public/assets/images/about_us/parts.jpg'
import img2 from '../../../public/assets/images/about_us/person.jpg'

const AboutUs = () => {
    return (
        <div className='grid grid-cols-2 gap-8 mt-5 mb-16'>
            <div className='relative'>
                <Image alt='person image' className='rounded' src={img2} height={250} width={450} />
                <Image alt='person image' className='absolute -bottom-2 -right-2 border-8 border-white rounded' src={img1} height={300} width={300} />
            </div>
            <div className='flex flex-col gap-5 text-black'>
                <h3 className='font-bold text-primary'>About Us</h3>
                <h1 className='font-bold text-5xl'>We are qualified & of experience in this field</h1>
                <div className='flex flex-col gap-3'>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
                </div>
                <div>
                    <button className="btn btn-primary text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;