import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/assets/logo.svg';
import { CiSearch } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";

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
        <div className="navbar bg-white text-black container mx-auto">
            <div className="navbar-start">
                <Link href="/"><Image alt='logo' src={logo} height="50" width="80"></Image></Link>
            </div>
            <div className="navbar-center lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems.map(dt => <li key={dt.path}><Link href={dt.path}>{dt.title}</Link></li>)}
                </ul>
            </div>
            <div className="navbar-end gap-5 items-center text-lg">
                <IoBagHandleOutline />
                <CiSearch />
                <a className="btn btn-primary btn-outline">Appointment</a>
                <Link href="/login" className='btn btn-primary text-white'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;