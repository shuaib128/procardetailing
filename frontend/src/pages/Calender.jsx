import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
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

    //Get data from previous page
    const { state } = useLocation();
    const data = state;

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
                <p className="whreal" style={{ marginBottom: 50 }}>Last step! How can we reach you?</p>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                        <DateTimePicker
                            label="Date&Time picker"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
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