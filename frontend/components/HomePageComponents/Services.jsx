import React, { useState } from 'react'
import { BackendLink } from '../../utils/BackendLink'
import axios from 'axios'
import { useRouter } from 'next/router'

const Services = () => {
    const router = useRouter();

    //Get all services
    const [Services, setServices] = useState(() => {
        axios.post(`${BackendLink}/api/booking`, {
            pagenum: "pagenum"
        })
            .then((res) => {
                setServices(res.data);
            })
    })

    //Send Zip Code
    const gotozipcodepage = (data) => {
        router.push({
            pathname: 'ZipCode',
            query: {
                name: data.name,
                price: data.price,
                body: data.body,
                image: data.image
            }
        })
    }


    return (
        <div className='Services'>
            <div className="servicesmain">
                <p className="wwOsp">What we Offer</p>
                <p className="wwoph1">
                    We offer full service auto repair & maintenance
                </p>

                <div className="services_">
                    {Services && Services.map((service, index) => (
                        <div className="service" key={index}>
                            <img src={BackendLink + service.image} alt="service_img" />

                            <div className="serveice_price">
                                <p className="price_icon">$</p>
                                <p className="actual_name">{service.price}</p>
                            </div>
                            <p className="service_name">{service.name}</p>
                            <p className="service_des">{service.body}</p>
                            <button className="service_booking_btn"
                                onClick={() => gotozipcodepage(service)}
                            >
                                Book now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services