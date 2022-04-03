import React, { useState } from 'react'
import { BsFillHouseFill } from 'react-icons/bs';
import { GiMoldova } from 'react-icons/gi';
import { MdPets } from 'react-icons/md';
import { AiFillCar } from 'react-icons/ai';
import { useRouter } from 'next/router'

const agree = () => {
    const router = useRouter();
    const data = router.query;

    const [Appertment, setAppertment] = useState(false)
    const [Mold, setMold] = useState(false)
    const [PetHair, setPetHair] = useState(false)
    const [Good, setGood] = useState(false)
    const [Bad, setBad] = useState(false)
    const [Excellent, setExcellent] = useState(false)
    const [Car, setCar] = useState("")

    //Send data to next page
    const sendData = () => {
        router.push({
            pathname: '/userdata',
            query: {
                name: data.name,
                price: data.price,
                body: data.body,
                image: data.image,
                zipcode: data.zipcode,
                Appertment,
                Mold,
                PetHair,
                Good,
                Bad,
                Excellent,
                Car
            }
        })
    }

    return (
        <div className='agree'>
            <div className="questions_block">
                <div className="question_block">
                    <div className="question">
                        <BsFillHouseFill size={30} />
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
                        <GiMoldova size={30} />
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
                        <MdPets size={30} />
                        <p>Do you have any pet hair?</p>
                    </div>

                    <div className="answer">
                        <input type="checkbox"
                            onChange={e => setPetHair(e.target.checked)}
                        />
                    </div>
                </div>

                <div className="question_block">
                    <div className="question">
                        <AiFillCar size={30} />
                        <p>What kind of vehicle is it ?</p>
                    </div>

                    <div className="answer">
                        <input type="text"
                            onChange={e => setCar(e.target.value)}
                        />
                    </div>
                </div>

                <div className="question_block">
                    <div className="question">
                        <AiFillCar size={30} />
                        <p>What’s the condition of the vehicle ?</p>
                    </div>

                    <div className="answer">
                        <div>
                            <label>Bad</label>
                            <input type="checkbox"
                                onChange={e => setBad(e.target.checked)}
                            />
                        </div>

                        <div>
                            <label>Good</label>
                            <input type="checkbox"
                                onChange={e => setGood(e.target.checked)}
                            />
                        </div>

                        <div>
                            <label>Excellent</label>
                            <input type="checkbox"
                                onChange={e => setExcellent(e.target.checked)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <button className="submit_questions"
                onClick={sendData}
            >
                Next
            </button>
        </div>
    )
}

export default agree