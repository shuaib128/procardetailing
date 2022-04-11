import React from 'react'
import { AiOutlineClockCircle, AiFillStar } from 'react-icons/ai';
import { motion } from "framer-motion"

const BillBord = () => {
    return (
        <div className='BillBord'>
            <motion.div className="billbord_left"
                initial={{ y: 35, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .6 }}
            >
                <p className="billlbord_h1">
                    Get your vehicle service done online at one place
                </p>
                <button className='billbord_button'>
                    Book a service
                </button>
                <div className="billbord_open_scauale">
                    <AiOutlineClockCircle color='rgb(185 189 192)' size={32} className="scauale_icon" />
                    <div className='billbordScasulep'>
                        <p className="wao">We are open</p>
                        <p className="billbord_casule_time">Monday to Friday 9:00 AM to  10:00  AM</p>
                    </div>
                </div>
            </motion.div>

            <motion.div className="billbord_right"
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: .7 }}
            >
                <img className='billbordmainimg' src="images/billboedmainimg.jpg" alt="billbord-main-img" />
                <div className="QS_block">
                    <div className="block_time">
                        <span style={{
                            fontSize: "1.5rem",
                            lineHeight: 1.5,
                            fontWeight: 500,
                            letterSpacing: "-0.03em",
                            marginRight: "5px"
                        }}>24</span> hr
                    </div>
                    <p className="qs_p">Quick service</p>
                </div>

                <div className="QS_block QS_block_rating">
                    <div className='rating_text'>
                        <p className="rtngtxtone">4.5/5</p>
                        <p className="rtngtxttwo">Rating</p>
                    </div>

                    <div className="rating_strs">
                        <AiFillStar size={30} color="#ffb648" className='rating_svg' />
                        <AiFillStar size={30} color="#ffb648" className='rating_svg' />
                        <AiFillStar size={30} color="#ffb648" className='rating_svg' />
                        <AiFillStar size={30} color="#ffb648" className='rating_svg' />
                        <AiFillStar size={30} color="#ffb648" className='rating_svg' />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default BillBord