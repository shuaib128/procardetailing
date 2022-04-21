import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Header from '../utils/Header';
import Footer from '../utils/Footer';

const Varition = () => {

    const { state } = useLocation();
    const navigate = useNavigate();
    const data = state;

    const [Loading, setLoading] = useState(false)
    var varitions

    try {
        varitions = JSON.parse(data.variation_datas).item_data.variations
    } catch (error) {
        console.log(error);
    }

    function sendVaritionData(variation_data) {
        setLoading(true)
        try {
            navigate('/agree', {
                state: {
                    name: data.name,
                    price: data.price,
                    body: data.body,
                    zipcode: data.zipcode,
                    variation_datas: JSON.stringify(variation_data)
                }
            })
        } catch (error) {

        }
    }

    return (
        <>
            <Header />
            <div className='Varition zipcodefield'>
                {!Loading ?
                    <>
                        <h1 style={{ textAlign: 'center' }}>Select Varition</h1>

                        <div className="veriations_">
                            {varitions && varitions.map((variation, index) => {
                                return (
                                    <div className="variation" key={index} onClick={() => sendVaritionData(variation)}>
                                        <p
                                            className='var'
                                        >
                                            {variation.item_variation_data.name}
                                        </p>

                                        <p className="varitionPrice">${variation.item_variation_data.price_money.amount}</p>
                                    </div>
                                )
                            })}
                        </div>
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

export default Varition