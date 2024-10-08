import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react';

import logo from "../assets/assets/logo.png"
import { navItems } from '../constants';

const Navbar = () => {
    const [mobileDrawerOpen, setmobileDrawerOpen] = useState(false)

    const toggleNavbar = () => {
        setmobileDrawerOpen(!mobileDrawerOpen)
    }
    useEffect(() => {
        console.log(navItems)
    }, [])

    return (
        <nav className="stciky top-0 z-50 py-3 backdrop-blur-lg border-b">
            <div className='container px-4 mx-auto relative text-sm'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center flex-shrink-0'>
                        <img className='h-10 w-10 mr-2' src={logo} alt="" />
                        <span className='text-xl tracking-tight'>VirtualR</span>
                    </div>
                    <ul className='hidden lg:flex ml-14 space-x-12 text-white'>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className='hidden lg:flex  justify-between items-center space-x-12'>
                        <a href="#" className='py-2 px-3 border rounded-sm'>Sign In</a>
                        <a href="#" className='bg-gradient-to-tr from-orange-500 to-orange-800 py-2 px-3 rounded-sm'>Create an Account</a>
                    </div>
                    <div className='lg:hidden md:flex flex-col justify-end'>
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className='py-4'>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className='flex space-x-6'>
                            <a href="#" className='py-2 px-3 border rounded-md'>
                                Sign In
                            </a>
                            <a href="#" className='bg-gradient-to-tr from-orange-500 to-orange-800 py-2 px-3 rounded-sm'>Create an Account</a>

                        </div>
                    </div>
                )

                }
            </div>
        </nav>
    )
}

export default Navbar
