import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { BackendLink } from '../utils/BackendLink';
import axios from 'axios';
import Header from '../utils/Header';
import Footer from '../utils/Footer';

const Calender = () => {
    const d = new Date();
    let time = d.getTime();
    const [value, setValue] = useState(d);
    const [TimeValue, setTimeValue] = useState(time);
    const [AboutCar, setAboutCar] = useState("")

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    const handleTimeChange = (newValue) => {
        setTimeValue(newValue);
    };

    //Get data from previous page
    const router = useRouter();
    const data = router.query;

    //Block random days in calender
    function disableRandomDates() {
        return Math.random() > 0.7;
    }
    function disableRandomTimes() {
        return Math.random() > 0.3;
    }

    //Send data to payment
    const confirmBooking = () => {
        Object.assign(data, { date: value, time: TimeValue, user_message: AboutCar })

        try {
            axios.post(`${BackendLink}/api/booking/book`, {
                data: data,
                variation_datas: JSON.stringify(JSON.parse(data.variation_datas))
            })
                .then((res) => {
                    console.log(res);
                });
        } catch {
            console.log("error!!");
        }
    }

    return (
        <>
            <Header />
            <div className='calender zipcodefield'>
                <p className="whreal" style={{marginBottom: 50}}>Last step! How can we reach you?</p>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                        <DesktopDatePicker
                            label="Date desktop"
                            inputFormat="MM/dd/yyyy"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                            shouldDisableDate={disableRandomDates}
                        />

                        <TimePicker
                            label="Time"
                            value={TimeValue}
                            onChange={handleTimeChange}
                            renderInput={(params) => <TextField {...params} />}
                            shouldDisableTime={disableRandomTimes}
                        />
                    </Stack>

                </LocalizationProvider>

                <textarea type="text"
                    className='user_message'
                    onChange={e => setAboutCar(e.target.value)}
                    placeholder="Give a message"
                />

                <button className="service_booking_btn"
                    onClick={confirmBooking}
                >
                    Confirm Apointment
                </button>
            </div>
            <Footer />
        </>
    )
}

export default Calender