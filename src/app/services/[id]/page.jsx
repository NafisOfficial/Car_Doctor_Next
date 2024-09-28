import DiscountCard from '@/Components/ServiceDetailsPage/DiscountCard';
import DownloadCard from '@/Components/ServiceDetailsPage/DownloadCard';
import FacilityCard from '@/Components/ServiceDetailsPage/FacilityCard';
import CommonBanner from '@/Components/Shared/CommonBanner';
import { getServiceDetails } from '@/lib/getServices';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


export const metadata = {
    title: "service details",
    description: "service details page shows the details about services"
}


const DetailsService = async ({ params }) => {
    const service = await getServiceDetails(params.id);
    const {_id, title, img, price, description, facility } = service;

    return (
        <div className='container mx-auto'>
            <CommonBanner data={{ stittle: title, tittle: "Service Details", path: "Home/Service Details" }} />
            <div className='flex gap-5 my-5'>
                <div className='w-9/12'>
                    <Image src={img} className='h-[300px] width-[800px] rounded me-0' alt='serviced details image' height={300} width={800} />
                    <div className=' flex flex-col gap-2 mt-5'>
                        <h1 className='text-2xl text-black font-bold'>{title}</h1>
                        <p className='text-justify text-sm text-gray-500'>{description}</p>
                    </div>
                    <div className='grid grid-cols-2 gap-5 mt-5'>
                        {facility.length>0 && facility.map((dt,index)=><FacilityCard key={index} data={dt}/>)}
                    </div>
                </div>
                <div className='w-3/12 flex flex-col gap-7'>
                    <DownloadCard/>
                    <DiscountCard/>
                    <h1 className='font-bold text-3xl text-black'>Price ${price}</h1>
                    <Link href={`http://localhost:3000/checkout/${_id}`} className='btn btn-primary text-white'>Proceed CheckOut</Link>
                </div>
            </div>
        </div>
    );
};

export default DetailsService;