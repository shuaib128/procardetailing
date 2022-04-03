import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';

const calender = () => {
    const d = new Date();
    let time = d.getTime();
    const [value, setValue] = useState(d);
    const [TimeValue, setTimeValue] = useState(time);

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    const handleTimeChange = (newValue) => {
        setTimeValue(newValue);
    };

    //Get data from previous page
    const router = useRouter();
    const data = router.query;
    console.log(data);

    //Block random days in calender
    function disableRandomDates() {
        return Math.random() > 0.7;
    }
    function disableRandomTimes() {
        return Math.random() > 0.3;
    }

    //Send data to payment
    const sendDataToPayment = () => {

    }

    return (
        <div className='calender'>
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

            <button className="service_booking_btn"
                onClick={sendDataToPayment}
            >
                Confirm Apointment
            </button>
        </div>
    )
}

export default calender