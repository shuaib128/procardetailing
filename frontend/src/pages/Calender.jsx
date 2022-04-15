import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { BackendLink } from '../utils/BackendLink';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../utils/Header';
import Footer from '../utils/Footer';

const Calender = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [appointments, setappointmets] = useState(() => {
        axios.post(`${BackendLink}/api/booking/checkappointment`, {
            data: "data",
        })
            .then((res) => {
                setappointmets(res.data);
            });
    })

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    //Date values
    const d = new Date();
    let time = d.getTime();
    const [value, setValue] = useState();
    const [TimeValue, setTimeValue] = useState(time);
    const [FinalTime, setFinalTime] = useState();
    const [AboutCar, setAboutCar] = useState("")
    const [Loading, setLoading] = useState(false)

    //Get data from previous page
    const { state } = useLocation();
    const data = state;


    //Send data to payment
    const confirmBooking = () => {
        setLoading(true)
        Object.assign(data, { date: FinalTime, time: TimeValue, user_message: AboutCar })

        try {
            axios.post(`${BackendLink}/api/booking/book`, {
                data: data,
                variation_datas: JSON.stringify(JSON.parse(data.variation_datas))
            })
                .then((res) => {
                    if (res.data.booked === "booked") {
                        navigate('/confirm')
                    }
                });
        } catch {
            console.log("error!!");
        }
    }

    //Get num of days in month
    var getDaysInMonth = function (month, year) {
        return new Date(year, month, 0).getDate();
    }

    //Set date for square api
    const setdate = (date, month, year) => {
        const date_utc = new Date(Date.UTC(year, month, date, 14))
        setValue(date_utc);
    }

    //Set time
    const setTime = (e) => {
        setFinalTime(new Date(Date.UTC(value.getUTCFullYear(), value.getUTCMonth(), value.getUTCDate(), e)));
    }

    //mark the clicked date
    const markdate = (e) => {
        var dates = document.querySelectorAll(".monthoneday")
        for (var i = 0; i < dates.length; i++) {
            dates[i].setAttribute("style", "background-color: white; color: black;");
        }
        e.setAttribute("style", "background-color: black; color: white;");
    }

    if (!appointments) return "Loading..."
    if (!appointments) return "Error!"

    var appointemnts_list = []

    appointments.map((app, index) => {
        appointemnts_list.push(new Date(app.date).getDate())
    })


    return (
        <>
            <Header />
            <div className='calender zipcodefield'>
                {!Loading ?
                    <>
                        <p className="whreal" style={{ marginBottom: 94 }}>Last step! How can we reach you?</p>

                        <div className="months">
                            <div>
                                <p className='monthname'>{monthNames[d.getMonth()]}</p>
                                <ul className='monthone'>
                                    {[...Array(getDaysInMonth(d.getMonth() + 1, d.getFullYear()))].map((e, i) => {
                                        if (i >= d.getDate() && d.getMonth() + 1 && !appointemnts_list.includes(i + 1)) {
                                            return (
                                                <span onClick={(e) => markdate(e.target)} key={i}>
                                                    <li
                                                        onClick={() => setdate(i + 1, d.getMonth(), d.getFullYear())}
                                                        className='monthoneday'
                                                    >
                                                        {i + 1}
                                                    </li>
                                                </span>
                                            )
                                        } else {
                                            return (
                                                <li className='monthonedaydebaibled'>{i + 1}</li>
                                            )
                                        }
                                    })}
                                </ul>
                            </div>

                            <div>
                                <p className='monthname'>{monthNames[d.getMonth() + 1]}</p>
                                <ul className='monthone monthtwo'>
                                    {[...Array(getDaysInMonth(d.getMonth() + 2, d.getFullYear()))].map((e, i) => {
                                        return (
                                            <span onClick={(e) => markdate(e.target)} key={i}>
                                                <li
                                                    onClick={() => setdate(i + 1, d.getMonth() + 1, d.getFullYear())}
                                                    className='monthoneday'
                                                >
                                                    {i + 1}
                                                </li>
                                            </span>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>


                        {value && value ?
                            <div className="times">
                                <div class="select">
                                    <select name="format" id="format" onChange={(e) => setTime(e.target.value)}>
                                        <option selected disabled>Choose Time</option>
                                        <option value="16">9 AM</option>
                                        <option value="18">11 AM</option>
                                        <option value="20">1 PM</option>
                                        <option value="22">3 PM</option>
                                    </select>
                                </div>
                            </div> :
                            <div></div>
                        }

                        <textarea type="text"
                            className='user_message'
                            onChange={e => setAboutCar(e.target.value)}
                            placeholder="Give a message"
                        />
                    </> :
                    <div className="loader">
                        <span></span>
                        <span></span>
                        <span></span>
                        <h2>Loading....</h2>
                    </div>
                }

                {!Loading ?
                    <button className="service_booking_btn"
                        onClick={confirmBooking}
                    >
                        Confirm Apointment
                    </button> :
                    <button disabled className="service_booking_btn"
                        style={{ marginTop: "50px" }}
                    >
                        Loading...
                    </button>
                }
            </div>
            <Footer />
        </>
    )
}

export default Calender