import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../../public/assets/logo.svg'

const Navbar = () => {

    const navItems = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
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

    return (
        <div className="navbar bg-base-100 container ms-auto">
            <div className="navbar-start">
                <Link href="/"><Image alt='logo' src={logo} height="50" width="80"></Image></Link>
            </div>
            <div className="navbar-center lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems.map(dt=><li key={dt.path}><Link href={dt.path}>{dt.title}</Link></li>)}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;