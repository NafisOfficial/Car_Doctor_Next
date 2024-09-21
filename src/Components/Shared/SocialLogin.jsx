import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {

    const session = useSession();
    const router = useRouter();
    const handleSocialLogin=async (provider)=>{
        const res = signIn(provider);
    }

    if(session.status === "authenticated"){
        router.push("/");
    }


    return (
        <div className='flex gap-3 text-3xl items-center justify-center'>
            <FcGoogle className='cursor-pointer' onClick={()=>handleSocialLogin("google")} />
            <FaGithub className='cursor-pointer text-black' onClick={()=>handleSocialLogin("github")} />
        </div>
    );
};

export default SocialLogin;