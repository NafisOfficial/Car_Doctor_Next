"use client"
import React from 'react';
import img from '../../../public/assets/images/login/login.svg'
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';

const LoginPage = () => {


    const handleLogin = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        const user = {
            email, password
        }

    }

    const handleGoogleLogin =()=>{
        console.log("Google login clicked");
    }

    const handleGithubLogin =()=>{
        console.log("Github login clicked");
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
                <div className='flex gap-3 text-3xl items-center justify-center'>
                    <FcGoogle onClick={handleGoogleLogin}/>
                    <FaGithub onClick={handleGithubLogin}/>
                </div>
                <p className='text-center mt-3'>Have an account ? <Link href="/signup" className='font-bold text-primary'>Sign Up</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;