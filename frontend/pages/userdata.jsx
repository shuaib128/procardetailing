import React, { useState } from 'react'
import { useRouter } from 'next/router'

const userdata = () => {
    //Get data from previous page
    const router = useRouter();
    const data = router.query;

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
        router.push({
            pathname: '/calender',
            query: {
                name: data.name,
                price: data.price,
                body: data.body,
                image: data.image,
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
                TextMe
            }
        })
    }

    return (
        <div className='userdata'>
            <div className="userdata_block">
                <input
                    type="text"
                    placeholder='First Name'
                    onChange={e => setFirstName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Last Name'
                    onChange={e => setLastName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Email'
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Phone Number'
                    onChange={e => setPhoneNumber(e.target.value)}
                />
            </div>

            <div className="contact_me_by">
                <p className="contact_me_by_p">You can contact me by</p>

                <div className="contact_me_by_check">
                    <input
                        type="checkbox"
                        className='short'
                        onChange={checkUncheck}
                        name="phonecall"
                    />
                    <label>Phone Call</label>
                </div>

                <div className="contact_me_by_check">
                    <input
                        type="checkbox"
                        className='short'
                        onChange={checkUncheck}
                        name="email"
                    />
                    <label>Email</label>
                </div>

                <div className="contact_me_by_check">
                    <input
                        type="checkbox"
                        className='short'
                        onChange={checkUncheck}
                        name="sms"
                    />
                    <label>SMS/text</label>
                </div>
            </div>

            <button className="service_booking_btn"
                onClick={gotopayments}
            >
                Next
            </button>
        </div>
    )
}

export default userdata