import CheckOutFrom from '@/Components/CheckOut/CheckOutFrom';
import CommonBanner from '@/Components/Shared/CommonBanner';
import React from 'react';

const CheckOutPage = () => {
    return (
        <div className='container mx-auto'>
            <CommonBanner data={{stittle: "",tittle: "Check Out", path: "home/checkOut"}}/>
            <CheckOutFrom/>
        </div>
    );
};

export default CheckOutPage;