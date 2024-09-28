"use client"
import CheckOutFrom from '@/Components/CheckOut/CheckOutFrom';
import CommonBanner from '@/Components/Shared/CommonBanner';
import { getServiceDetails } from '@/lib/getServices';
import React, { useEffect, useState } from 'react';

const CheckOutPage = ({params}) => {

    const [service,setService] = useState({});

    const loadService= async(id)=>{
        const details = await getServiceDetails(params.id);
        setService(details);
    }

    useEffect(()=>{
        loadService(params.id)
    },[params]);



    return (
        <div className='container mx-auto'>
            <CommonBanner data={{stittle: service?.tittle,tittle: "Check Out", path: "home/checkOut"}}/>
            <CheckOutFrom service={service}/>
        </div>
    );
};

export default CheckOutPage;