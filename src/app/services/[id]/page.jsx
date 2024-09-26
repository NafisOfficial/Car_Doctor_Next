import CommonBanner from '@/Components/Shared/CommonBanner';
import { getServiceDetails } from '@/lib/getServices';
import Image from 'next/image';
import React from 'react';


export const metadata = {
    title: "service details",
    description: "service details page shows the details about services"
}


const DetailsService = async ({ params }) => {
    const service = await getServiceDetails(params.id);
    const { title, img, price, description, facility, } = service;

    return (
        <div className='container mx-auto'>
            <CommonBanner data={{ tittle: "Service Details", path: "Home/Service Details" }} />
            <div className='flex'>
                <div className='w-8/12 mr-0'>
                    <Image src={img} alt='serviced details image' height={200} width={600}/>
                </div>
                <div className='w-4/12'>Side contain</div>
            </div>
        </div>
    );
};

export default DetailsService;