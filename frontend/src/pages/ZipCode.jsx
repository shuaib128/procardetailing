import React, { useState } from 'react'
import axios from 'axios'
import { BackendLink } from '../utils/BackendLink'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Header from '../utils/Header'
import Footer from '../utils/Footer'

const ZipCode = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const data = state;

    const [loading, setloading] = useState(false)
    const [ZipCode, setZipCode] = useState()

    const sendzipcode = () => {
        setloading(true)
        //Send zip to backend
        axios.post(`${BackendLink}/api/booking/geolocation`, {
            zip: ZipCode,
        })
            .then((res) => {
                if (res.data.inarea) {
                    try {
                        navigate('/varition', {
                            state: {
                                name: data.name,
                                price: data.price,
                                body: data.body,
                                zipcode: ZipCode,
                                variation_datas: JSON.stringify(JSON.parse(data.variation_datas))
                            }
                        })
                    } catch (error) {
                        console.log(error);
                    }
                }
                else {
                    alert("sorry")
                    setloading(false)
                }
            });
    }

    return (
        <>
            <Header />
            <div className='zipcode app'>
                <div className="zipcodefield">
                    <div className="zipcodetopsec">
                        <p className="ziptoptitle">Let’s get started on your service</p>
                        <p className="whreal">Where are you located?</p>
                        <p className="whrel_title">We tailor your options based on where you are.</p>
                    </div>

                    <input
                        type="text"
                        name="zipcode"
                        className="zipcodeinput"
                        placeholder='ZIP code'
                        onChange={(e) => setZipCode(e.target.value)}
                    />
                    <>
                        {!loading ?
                            <button
                                className='zipcodebutton billbord_button'
                                onClick={sendzipcode}
                            >
                                Continue
                            </button> :
                            <button
                                disabled
                                className='zipcodebutton billbord_button'
                            >
                                Loading...
                            </button>
                        }
                    </>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ZipCode