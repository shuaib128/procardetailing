import React, { useState } from 'react'
import axios from 'axios'
import { BackendLink } from '../utils/backendlink'
import { useRouter } from 'next/router'

const ZipCode = () => {
    const router = useRouter();
    const data = router.query;

    const [ZipCode, setZipCode] = useState()

    const sendzipcode = () => {
        //Send zip to backend
        try {
            axios.post(`${BackendLink}/api/booking/geolocation`, {
                zip: ZipCode,
            })
                .then((res) => {
                    if (res.data.inarea) {
                        router.push({
                            pathname: 'agree',
                            query: {
                                name: data.name,
                                price: data.price,
                                body: data.body,
                                image: data.image,
                                zipcode: ZipCode
                            }
                        })
                    }
                    else {
                        alert("sorry")
                    }
                });
        } catch {
            console.log("error!!");
        }
    }

    return (
        <div className='zipcode app'>
            <div className="zipcodefield">
                <input
                    type="text"
                    name="zipcode"
                    className="zipcodeinput"
                    placeholder='ZIP code'
                    onChange={(e) => setZipCode(e.target.value)}
                />
                <button
                    className='zipcodebutton'
                    onClick={sendzipcode}
                >
                    Continue
                </button>
            </div>
        </div>
    )
}

export default ZipCode