"use client"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


const CheckOutFrom = ({ service }) => {

    const session = useSession();
    const { email, name } = session?.data?.user || {};
    const router = useRouter();


    const handleSubmit = async(event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const date = event.target.date.value;
        const email = event.target.email.value;
        const price = service.price;
        const phone = event.target.phone.value;
        const address = event.target.address.value;
        const newBookings = { name, date, email, price, phone, address,serviceId: service._id,serviceTittle: service.tittle }

        const res = await fetch("http://localhost:3000/checkout/api/new-booking",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBookings)
        })

        if(res.status === 200){
            event.target.reset();
            router.push("/")
        }
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
                    <input type="submit" value="Submit" className='btn btn-primary text-white my-5 px-10' />
                </div>
            </form>
        </div>
    );
};

export default CheckOutFrom;