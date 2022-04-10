import React from 'react'
import Link from 'next/link'
import { IoCall } from 'react-icons/io5';
import { AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
    const menuapper = () => {
        var menuBlock = document.querySelector('.main_hidden_header')
        menuBlock.classList.toggle('menu_apper')
    }

    return (
        <div className='Header'>
            <div className="header_main">
                <Link href="/">
                    <div className="logo">
                        <p className='logoone'>L&M Pro Car</p>
                        <p className='logotwo'>Detailing</p>
                    </div>
                </Link>

                <div className="nav_call_number">
                    <div className="navs">
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="#services">Services</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/monthly-packages">Monthly Packages</Link>
                    </div>
                    <div className="call_number">
                        <div className="call_icn_div">
                            <IoCall size={22} color='white' className='callIcon' />
                        </div>
                        <div className="num">
                            <p className='roada'>Road Assistance</p>
                            <p className='phonenum'>1800 265 24 52</p>
                        </div>
                    </div>
                </div>

                <div className="header_hidden">
                    <AiOutlineMenu
                        size={25}
                        onClick={menuapper}
                    />

                    <div className="main_hidden_header">
                        <div className="navshidden">
                            <Link href="/">Home</Link>
                            <Link href="/about">About</Link>
                            <Link href="/services">Services</Link>
                            <Link href="/contact">Contact</Link>
                            <Link href="/monthly-packages">Monthly Packages</Link>
                        </div>
                        <div className="call_number call_number_hidden">
                            <div className="call_icn_div">
                                <IoCall size={22} color='white' className='callIcon' />
                            </div>
                            <div className="num">
                                <p className='roada'>Road Assistance</p>
                                <p className='phonenum'>1800 265 24 52</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header