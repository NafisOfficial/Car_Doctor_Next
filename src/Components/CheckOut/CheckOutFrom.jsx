"use client"
import React from 'react';

const CheckOutFrom = () => {
    return (
        <div className='bg-gray-300 p-12 my-10'>
            <form>
                <div className='grid grid-cols-2 gap-5'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Name:</span>
                        </label>
                        <input type="name" placeholder="Name" name='name' className="input input-bordered text-black" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Date:</span>
                        </label>
                        <input type="date" defaultValue={new Date().getDate()} name='date' className="input input-bordered text-black" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Email:</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered text-black" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-black">Due amount:</span>
                        </label>
                        <input type="text" placeholder="amount" name='amount' className="input input-bordered text-black" required />
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