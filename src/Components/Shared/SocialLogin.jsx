import { signIn } from 'next-auth/react';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {

    const handleSocialLogin=async (provider)=>{
        const res = signIn(provider)
    }


    return (
        <div className='flex gap-3 text-3xl items-center justify-center'>
            <FcGoogle className='cursor-pointer' onClick={()=>handleSocialLogin("google")} />
            <FaGithub className='cursor-pointer text-black' onClick={()=>handleSocialLogin("github")} />
        </div>
    );
};

export default SocialLogin;