import React, { useState, useEffect } from 'react'
import { BsFillHouseFill } from 'react-icons/bs';
import { GiMoldova } from 'react-icons/gi';
import { MdPets } from 'react-icons/md';
import { AiFillCar } from 'react-icons/ai';
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Header from '../utils/Header';
import Footer from '../utils/Footer';

const Agree = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { state } = useLocation();
    const navigate = useNavigate();
    const data = state;

    const [loading, setloading] = useState(false)

    const [Appertment, setAppertment] = useState(false)
    const [Mold, setMold] = useState(false)
    const [PetHair, setPetHair] = useState(false)
    const [Good, setGood] = useState(false)
    const [Bad, setBad] = useState(false)
    const [Excellent, setExcellent] = useState(false)
    const [Car, setCar] = useState("")

    //Send data to next page
    const sendData = () => {
        setloading(true)
        if (Appertment && Car !== "" && Bad || Excellent || Good) {
            try {
                navigate('/userdata', {
                    state: {
                        name: data.name,
                        price: data.price,
                        body: data.body,
                        zipcode: data.zipcode,
                        Appertment: Appertment,
                        Mold: Mold,
                        PetHair: PetHair,
                        Good: Good,
                        Bad: Bad,
                        Excellent: Excellent,
                        Car: Car,
                        variation_datas: JSON.stringify(JSON.parse(data.variation_datas))
                    }
                })
            } catch (error) {
                console.log(error);
                setloading(false)
            }
        }
        else {
            setloading(false)
            alert(`
                1. If apartment (Well they allowed us to do a car wash?).
                2. Check What kind of viacle is it.
                3. Also check the car status And try again.
            `)
        }
    }


    //Check uncheck checkboxex
    const checkUncheck = (e) => {
        var checkboxes = document.querySelectorAll(".conditioncheck")
        for (let index = 0; index < checkboxes.length; index++) {
            checkboxes[index].checked = false
        }

        setBad(false)
        setGood(false)
        setExcellent(false)

        if (e.target.name === "excellent") {
            setExcellent(true)
        }
        if (e.target.name === "good") {
            setGood(true)
        }
        if (e.target.name === "bad") {
            setBad(true)
        }

        e.target.checked = true
    }

    return (
        <>
            <Header />
            <div className='agree zipcodefield'>
                {!loading ?
                    <>
                        <div className="questions_block">
                            <div className="question_block">
                                <div className="question">
                                    <BsFillHouseFill size={35} />
                                    <p>Is that house or apartment ? If apartment (Well they allowed us to do a car wash?)</p>
                                </div>

                                <div className="answer">
                                    <input type="checkbox"
                                        onChange={e => setAppertment(e.target.checked)}
                                    />
                                </div>
                            </div>

                            <div className="question_block">
                                <div className="question">
                                    <GiMoldova size={35} />
                                    <p>Do you have any mold?</p>
                                </div>

                                <div className="answer">
                                    <input type="checkbox"
                                        onChange={e => setMold(e.target.checked)}
                                    />
                                </div>
                            </div>

                            <div className="question_block">
                                <div className="question">
                                    <MdPets size={35} />
                                    <p>Do you have any pet hair?</p>
                                </div>

                                <div className="answer">
                                    <input type="checkbox"
                                        onChange={e => setPetHair(e.target.checked)}
                                    />
                                </div>
                            </div>

                            <div className="question_block kindofvickle">
                                <div className="question">
                                    <AiFillCar size={35} />
                                    <p>What kind of vehicle is it ?</p>
                                </div>

                                <div className="answer">
                                    <input type="text"
                                        onChange={e => setCar(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="question_block carconditioncheckboxstop">
                                <div className="question">
                                    <AiFillCar size={35} />
                                    <p>What’s the condition of the vehicle ?</p>
                                </div>

                                <div className="answer carconditioncheckboxs">
                                    <div style={{ marginRight: "15px", display: "flex" }}>
                                        <label>Bad</label>
                                        <input type="checkbox"
                                            name='bad'
                                            className='conditioncheck'
                                            onChange={checkUncheck}
                                        />
                                    </div>

                                    <div style={{ marginRight: "15px", display: "flex" }}>
                                        <label>Good</label>
                                        <input type="checkbox"
                                            name='good'
                                            className='conditioncheck'
                                            onChange={checkUncheck}
                                        />
                                    </div>

                                    <div style={{ marginRight: "15px", display: "flex" }}>
                                        <label>Excellent</label>
                                        <input type="checkbox"
                                            name='excellent'
                                            className='conditioncheck'
                                            onChange={checkUncheck}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="submit_questions billbord_button"
                            onClick={sendData}
                        >
                            Next
                        </button>
                    </> :
                    <div className="loader">
                        <span></span>
                        <span></span>
                        <span></span>
                        <h2>Loading....</h2>
                    </div>
                }
            </div>
            <Footer />
        </>
    )
}

export default Agree