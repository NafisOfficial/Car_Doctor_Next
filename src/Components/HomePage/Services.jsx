import React from 'react';
import ServicesCards from '../Cards/ServicesCards';
import { getAllServices } from '@/lib/getServices';




const Services = async () => {

    const servicesData = await getAllServices();

    return (
        <div className='flex flex-col text-center gap-8 mb-10'>
            <div className='flex flex-col gap-3 w-1/2 mx-auto'>
                <h3 className='font-bold text-primary'>Service</h3>
                <h1 className='font-bold text-5xl text-black'>Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-3 items-center w-2/3 mx-auto gap-5'>
                {servicesData.length > 0 && servicesData.map((service) => <ServicesCards key={service._id} service={service} />)}
            </div>
            <div><button className='btn btn-outline btn-primary'>More Services</button></div>
        </div>
    );
};

export default Services;