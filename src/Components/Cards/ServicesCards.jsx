import Image from 'next/image';

const ServicesCards = () => {
    return (
        <div>
            <div className='flex flex-col gap-2 rounded w-56 border-2 p-2'>
                <Image alt="services" className='rounded' src={s1} height={150} width={200} />
                <div className='text-left'>
                    <h1 className='font-bold text-lg text-black'>Services title</h1>
                    <div className='flex justify-between'>
                        <span className='text-primary'>Price: $20.00</span>
                        <span>arrow</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCards;