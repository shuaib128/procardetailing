import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Header from '../utils/Header';
import Footer from '../utils/Footer';
import axios from 'axios';
import { BackendLink } from '../utils/BackendLink';

const Userdata = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { state } = useLocation();
    const navigate = useNavigate();
    const data = state;

    //Get data from previous page
    const [loadign, setloadign] = useState(false)
    const [NumberOrnot, setNumberOrnot] = useState(false)

    //States for inputs
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [Email, setEmail] = useState("")
    const [PhoneNumber, setPhoneNumber] = useState("")
    const [PhoneCallMe, setPhoneCallMe] = useState("")
    const [EmailMe, setEmailMe] = useState("")
    const [TextMe, setTextMe] = useState("")


    //Check uncheck checkboxex
    const checkUncheck = (e) => {
        var checkboxes = document.querySelectorAll(".short")
        for (let index = 0; index < checkboxes.length; index++) {
            checkboxes[index].checked = false
        }

        setPhoneCallMe(false)
        setEmailMe(false)
        setTextMe(false)

        if (e.target.name === "phonecall") {
            setPhoneCallMe(true)
        }
        if (e.target.name === "email") {
            setEmailMe(true)
        }
        if (e.target.name === "sms") {
            setTextMe(true)
        }

        e.target.checked = true
    }

    //go to calenderpage
    const gotopayments = () => {
        const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
        const ok = re.test(PhoneNumber);
        setloadign(true)

        //Get user or create one
        if (ok) {
            try {
                axios.post(`${BackendLink}/api/booking/user`, {
                    email: Email,
                    FirstName,
                    LastName,
                    PhoneNumber
                })
                    .then((res) => {
                        if (res.data.userstatus === "exists") {
                            try {
                                navigate('/calender', {
                                    state: {
                                        name: data.name,
                                        price: data.price,
                                        body: data.body,
                                        zipcode: data.zipcode,
                                        Appertment: data.Appertment,
                                        Mold: data.Mold,
                                        PetHair: data.PetHair,
                                        Good: data.Good,
                                        Bad: data.Bad,
                                        Excellent: data.Excellent,
                                        Car: data.Car,
                                        FirstName,
                                        LastName,
                                        Email,
                                        PhoneNumber,
                                        PhoneCallMe,
                                        EmailMe,
                                        TextMe,
                                        userID: res.data.userid,
                                        variation_datas: JSON.stringify(JSON.parse(data.variation_datas))
                                    }
                                })
                            } catch (error) {
                                alert("Use a valid E-mail adress")
                                console.log(error);
                                setloadign(false)
                            }
                        } else {
                            console.log("eror");
                            console.log(res.data);
                            setloadign(false)
                            alert("Use a valid E-mail adress")
                        }
                    });
            } catch {
                console.log("error!!");
            }
        } else {
            setNumberOrnot(true)
            setloadign(false)
        }
    }

    return (
        <>
            <Header />
            <div className='userdata zipcodefield'>
                <p className="whreal">Last step! How can we reach you?</p>
                <div className="userdata_block">
                    <input
                        required
                        type="text"
                        placeholder='First Name'
                        onChange={e => setFirstName(e.target.value)}
                    />
                    <input
                        required
                        type="text"
                        placeholder='Last Name'
                        onChange={e => setLastName(e.target.value)}
                    />
                    <input
                        required
                        type="email"
                        placeholder='Email'
                        onChange={e => setEmail(e.target.value)}
                    />
                    {!NumberOrnot ?
                        <input
                            required
                            type="number"
                            placeholder='Phone Number'
                            onChange={e => setPhoneNumber(e.target.value)}
                        /> :
                        <>
                            <span style={{ position: "relative" }}>
                                <input
                                    required
                                    className='notnumber'
                                    type="number"
                                    placeholder='Phone Number'
                                    onChange={e => setPhoneNumber(e.target.value)}
                                />
                                <p className='notnumberp'>Please use a standard 10-digit phone number</p>
                            </span>
                        </>
                    }
                </div>

                <div className="contact_me_by">
                    <p className="contact_me_by_p">You can contact me by</p>

                    <div className="contatyoublocks">
                        <div className="contact_me_by_check">
                            <input
                                type="checkbox"
                                className='short'
                                onChange={checkUncheck}
                                name="phonecall"
                            />
                            <label style={{ marginLeft: "10px" }}>Phone Call</label>
                        </div>

                        <div className="contact_me_by_check">
                            <input
                                type="checkbox"
                                className='short'
                                onChange={checkUncheck}
                                name="email"
                            />
                            <label style={{ marginLeft: "10px" }}>Email</label>
                        </div>

                        <div className="contact_me_by_check">
                            <input
                                type="checkbox"
                                className='short'
                                onChange={checkUncheck}
                                name="sms"
                            />
                            <label style={{ marginLeft: "10px" }}>SMS/text</label>
                        </div>
                    </div>
                </div>

                {!loadign && Email && FirstName && LastName && PhoneNumber ?
                    <button className="service_booking_btn"
                        onClick={gotopayments}
                    >
                        Next
                    </button> : loadign ?
                        <button className="service_booking_btn" disabled>
                            Loading...
                        </button> :
                        <button className="service_booking_btn"
                            disabled
                            style={{
                                opacity: .4,
                                cursor: 'default'
                            }}
                        >
                            Next
                        </button>
                }
            </div>
            <Footer />
        </>
    )
}

export default Userdata