"use client"
import { useSession } from 'next-auth/react';


const CheckOutFrom = ({service}) => {

    const session = useSession();
    const {email,name} = session?.data?.user || {};

    console.log(service);

    const handleSubmit=(event)=>{
        event.preventDefault();
        const name = event.target.name.value;
        const date = event.target.date.value;
        const email = event.target.name.value;
        const amount = event.target.name.value;
        const phone = event.target.name.value;
        const address = event.target.address.value;

        console.log(name,date,email,amount,phone,address);
    }


    return (
        <div className='bg-gray-300 p-12 my-10'>
            <form action='submit' onSubmit={handleSubmit}>
                <div className='grid grid-cols-2 gap-5'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Name:</span>
                        </label>
                        <input type="name" defaultValue={name} placeholder="Name" name='name' className="input input-bordered text-black" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Date:</span>
                        </label>
                        <input type="date" defaultValue={new Date()?.getDate()} name='date' className="input input-bordered text-black" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Email:</span>
                        </label>
                        <input type="email" defaultValue={email} placeholder="email" name='email' className="input input-bordered text-black" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Due amount:</span>
                        </label>
                        <input type="text" readOnly defaultValue={service?.price} placeholder="amount" name='amount' className="input input-bordered text-black" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Phone:</span>
                        </label>
                        <input type="text" placeholder="your phone" name='phone' className="input input-bordered text-black" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Present address:</span>
                        </label>
                        <input type="text" placeholder="your address" name='address' className="input input-bordered text-black" required />
                    </div>
                </div>
                <div className='text-center'>
                    <input type="submit" value="Submit" className='btn btn-primary text-white my-5 px-10'/>
                </div>
            </form>
        </div>
    );
};

export default CheckOutFrom;