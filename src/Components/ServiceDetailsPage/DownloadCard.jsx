import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";

const DownloadCard = () => {
    return (
        <div>
            <div className='bg-black text-white p-5 rounded'>
                <h1 className='font-bold'>Download</h1>
                <div className='flex items-center gap-5 my-5 justify-between'>
                    <div className='flex items-center gap-3'>
                        <HiOutlineDocumentReport className='text-3xl' />
                        <div>
                            <h1 className='font-bold'>Our Brochure</h1>
                            <p>Download</p>
                        </div>
                    </div>
                    <button className='btn btn-primary text-white'><FaArrowRight /></button>
                </div>
                <div className='flex items-center gap-5 justify-between'>
                    <div className='flex items-center gap-3'>
                        <HiOutlineDocumentReport className='text-3xl' />
                        <div>
                            <h1 className='font-bold'>Company Details</h1>
                            <p>Download</p>
                        </div>
                    </div>
                    <button className='btn btn-primary text-white'><FaArrowRight /></button>
                </div>
            </div>
        </div>
    );
};

export default DownloadCard;