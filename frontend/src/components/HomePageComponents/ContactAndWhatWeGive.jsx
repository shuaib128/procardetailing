import React from 'react'
import { BsFillGearFill, BsFillPersonFill, BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import { MdOutlineAttachMoney } from 'react-icons/md';

const ContactAndWhatWeGive = () => {
    return (
        <div className='ContactAndWhatWeGive'>
            <div className='ContactAndWhatWeGiveMain'>
                <div className="whatweegive">
                    <p className='whatwegivetext'>We are taking car servicing seriously</p>

                    <div className="whatweegiveboxes">
                        <div className="whatwegivebox">
                            <div className="whatweegiveboxicon">
                                <BsFillGearFill size={27} />
                            </div>

                            <div className='whatwegiveboxdes'>
                                <p className='whatwegiveboxtitle'>Convenient service</p>
                                <p className='whatwegiveboxtdetail'>
                                    Through True Rich Attended does no end
                                    it his mother since real had half every him.
                                </p>
                            </div>
                        </div>

                        <div className="whatwegivebox">
                            <div className="whatweegiveboxicon">
                                <BsFillPersonFill size={27} />
                            </div>

                            <div className='whatwegiveboxdes'>
                                <p className='whatwegiveboxtitle'>Expert mechanics</p>
                                <p className='whatwegiveboxtdetail'>
                                    Through True Rich Attended does no end it his
                                    mother since real had half every him.
                                </p>
                            </div>
                        </div>

                        <div className="whatwegivebox">
                            <div className="whatweegiveboxicon">
                                <MdOutlineAttachMoney size={27} />
                            </div>

                            <div className='whatwegiveboxdes'>
                                <p className='whatwegiveboxtitle'>Transparent pricing</p>
                                <p className='whatwegiveboxtdetail'>
                                    Through True Rich Attended does no end it his
                                    mother since real had half every him.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="knowmoreaboutusbutton">
                        <p style={{ marginRight: "12px" }}>Know more about us</p>
                        <BsFillArrowUpRightCircleFill size={20} />
                    </div>
                </div>

                <div className="homepagecontact">
                    <img src="images/care.jpeg" alt="careimage" />
                </div>
            </div>
        </div>
    )
}

export default ContactAndWhatWeGive