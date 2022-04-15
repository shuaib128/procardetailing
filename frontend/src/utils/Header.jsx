import React from 'react'
import { Link } from 'react-router-dom';
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
                <Link to="/">
                    <div className="logo">
                        <img src="images/logo.jpeg" alt="logo" />
                        <div>
                            <p className='logoone'>L&M Pro Car</p>
                            <p className='logotwo'>Detailing</p>
                        </div>
                    </div>
                </Link>

                <div className="nav_call_number">
                    <div className="navs">
                        <a href='#billbord'>Home</a>
                        <a href='#aboout'>About</a>
                        <a href='#services'>Services</a>
                        <a href='#footer'>Contact</a>
                        <a href='#faq'>FAQ</a>
                    </div>
                    <div className="call_number">
                        <div className="call_icn_div">
                            <IoCall size={22} color='white' className='callIcon' />
                        </div>
                        <div className="num">
                            <p className='roada'>Call Us</p>
                            <p className='phonenum'>(425) 329-9364</p>
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
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/monthly-packages">Monthly Packages</Link>
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