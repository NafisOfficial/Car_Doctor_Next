import React from 'react';

const FacilityCard = ({data}) => {
    const {name,details} = data;
    return (
        <div className='bg-gray-300 p-5 border border-t-2 border-t-primary rounded'>
            <h1 className='font-bold text-black'>{name}</h1>
            <p className='text-justify text-gray-500'>{details}</p>
        </div>
    );
};

export default FacilityCard;