"use client"
import React from 'react';
import img from '../../../public/assets/images/login/login.svg'
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import SocialLogin from '@/Components/Shared/SocialLogin';

const LoginPage = () => {

    const router = useRouter()
    const handleLogin = async (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        const res = await signIn("credentials", {
            email,password,redirect: false
        })

        if(res.status === 200)router.push("/");

    }







    return (
        <div className='flex justify-center items-center gap-10 my-10'>
            <div>
                <Image alt='banner' src={img} height={400} width={400}/>
            </div>
            <div className='w-96 border py-5 px-10'>
                <h1 className='text-3xl text-black font-semibold text-center my-5'>Login</h1>
                <form action='submit' onSubmit={handleLogin} className='flex flex-col gap-5'>
                    <div>
                        <label htmlFor="email">Email</label><br/>
                        <input type="email" name='email' placeholder="your email" className="input input-bordered w-full max-w-xs text-black" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label><br/>
                        <input type="password" name='password' placeholder="your password" className="input input-bordered w-full max-w-xs text-black" />
                    </div>
                    <input type="submit"  className='btn btn-primary text-white' value="Login" />
                </form>
                <p className='text-center text-black my-3'>Or Sign in with</p>
                <SocialLogin/>
                <p className='text-center mt-3'>Have an account ? <Link href="/signup" className='font-bold text-primary'>Sign Up</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;