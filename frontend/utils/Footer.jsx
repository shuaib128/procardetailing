import React from 'react'
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="footerTop">
                <div className="footertopmain">
                    <div className="footertopleft">
                        <p className="footertitle">Get in touch with us for your  service</p>
                        <div className="footersocials">
                            <BsFacebook size={25} />
                            <BsInstagram size={25} />
                            <FaTiktok size={25} />
                        </div>
                    </div>

                    <div className="footertopright">
                        <div className="footerrightblock">
                            <p className="footerblocktop">Help line Number</p>
                            <p className="footerblockdown">1800 265 24 52</p>
                        </div>

                        <div className="footerrightblock">
                            <p className="footerblocktop">Address</p>
                            <p className="footerblockdown">NH 234  Public Square San Francisco  65368</p>
                        </div>

                        <div className="footerrightblock">
                            <p className="footerblocktop">We are open</p>
                            <p className="footerblockdown">Monday to Friday 9:00 AM to  10:00  AM</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footerDown">
                <p className='copyrighttitle'>@ Copyright Finsweet 2021</p>
            </div>
        </div>
    )
}

export default Footer