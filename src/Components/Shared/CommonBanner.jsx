import React from 'react';
import img1 from '../../../public/assets/images/checkout/checkout.png'

const CommonBanner = ({data}) => {
    const {stittle,tittle,path} = data;
    return (
        <div className='w-full rounded my-7' style={{ backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(${img1.src})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            <div>
                <p className='text-2xl font-bold text-white p-12 pt-20'>{tittle} Of {stittle}</p>
                <div className='text-center'><span className='bg-primary p-2 pb-0.5 text-white '>{path}</span></div>
            </div>
        </div>
    );
};

export default CommonBanner;