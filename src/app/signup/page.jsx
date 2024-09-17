"use client"
import React from 'react';
import img from '../../../public/assets/images/login/login.svg'
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';

const SignupPage = () => {

    const handleSignUp= async (event)=>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        const user = {
            name,email,password
        }

        const res = await fetch("http://localhost:3000/signup/api",{
            method: "POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })

        if(res.status === 200){
            event.target.reset();
        }
    }

    const handleGoogleSignUp =()=>{
        console.log("Google signup clicked");
    }

    const handleGithubSingUp =()=>{
        console.log("Github signup clicked");
    }

    return (
        <div className='flex justify-center items-center gap-10 my-10'>
            <div>
                <Image alt='banner' src={img} height={400} width={400}/>
            </div>
            <div className='w-96 border py-5 px-10'>
                <h1 className='text-3xl text-black font-semibold text-center my-5'>Sign Up</h1>
                <form action='submit' onSubmit={handleSignUp} className='flex flex-col gap-5'>
                    <div>
                        <label htmlFor="name">Name</label><br/>
                        <input type="text" name='name' placeholder="your name" className="input input-bordered w-full max-w-xs text-black" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label><br/>
                        <input type="email" name='email' placeholder="your email" className="input input-bordered w-full max-w-xs text-black" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label><br/>
                        <input type="password" name='password' placeholder="your password" className="input input-bordered w-full max-w-xs text-black" />
                    </div>
                    <input type="submit" className='btn btn-primary text-white' value="Sign Up" />
                </form>
                <p className='text-center text-black my-3'>Or Sign Up with</p>
                <div className='flex gap-3 text-3xl items-center justify-center'>
                    <FcGoogle onClick={handleGoogleSignUp}/>
                    <FaGithub onClick={handleGithubSingUp}/>
                </div>
                <p className='text-center mt-3'>Already have an account ? <Link href="/login" className='font-bold text-primary'>Login</Link></p>
            </div>
        </div>
    );
};

export default SignupPage;