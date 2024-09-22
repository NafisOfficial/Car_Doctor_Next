import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";

const ServicesCards = ({service}) => {
    const {_id, title, img, price} = service || {};


    return (
        <div>
            <div className='flex flex-col gap-2 rounded w-56 border-2 p-2'>
                <Image alt="services" className='rounded' src={img} height={200} width={200} />
                <div className='text-left'>
                    <h1 className='font-bold text-lg text-black'>{title}</h1>
                    <div className='flex justify-between items-center'>
                        <span className='text-primary'>Price: $ {price}</span>
                        <Link href={`services/${_id}`} className='text-primary cursor-pointer' title='view details' ><FaArrowRight /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCards;