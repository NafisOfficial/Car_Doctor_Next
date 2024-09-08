import Image from 'next/image';
import React from 'react';
import logo from '../../../public/assets/logo.svg';
import Link from 'next/link';

const Footer = () => {

    const footerItem = [
        {
            header: 'About',
            data: [
                {
                    title: "Home",
                    path: "/home"
                },
                {
                    title: "Services",
                    path: "/services"
                },
                {
                    title: "Contact",
                    path: "/contact"
                },
            ]
        },
        {
            header: "Company",
            data: [
                {
                    title: "Why car doctors",
                    path: "/why-car-doctors"
                },
                {
                    title: "About",
                    path: "/about"
                },
            ]
        },
        {
            header: "Support",
            data: [
                {
                    title: "Support Center",
                    path: "/support-center"
                },
                {
                    title: "Feedback",
                    path: "/feedback"
                },
                {
                    title: "Accessibility",
                    path: "/accessibility"
                },
            ]
        },

    ]


    return (
        <footer className="footer bg-[#000000] text-white p-10">
            <aside className='w-1/3'>
                <Image alt='logo' src={logo} height={50} width={80} />
                <p>
                    Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .
                </p>
            </aside>
            {
                footerItem.map(dt => <nav key={dt?.header}>
                    <h6 className="footer-title text-white">{dt?.header}</h6>
                    {dt?.data?.map((element) =><Link key={element?.path} href={element?.path} className="link link-hove no-underline">{element.title}</Link>
                    )}
                </nav>)
            }
        </footer>
    );
};

export default Footer;