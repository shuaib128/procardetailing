import React, { useState } from 'react'
import { BackendLink } from '../../utils/BackendLink'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import ServicesLoading from './ServicesLoading';

const Services = () => {
    const navigate = useNavigate();

    //Get all services
    const [Services, setServices] = useState(() => {
        axios.post(`${BackendLink}/api/booking`, {
            pagenum: "pagenum"
        })
            .then((res) => {
                setServices(res.data);
            })
    })

    if (!Services) return <ServicesLoading />
    if (!Services) return "Error!"

    //Send Zip Code
    const gotozipcodepage = (data) => {
        navigate(
            '/zipcode',
            {
                state: {
                    name: data.item_data.name,
                    price: data.item_data.variations[0].item_variation_data.price_money.amount,
                    body: data.item_data.description,
                    variation_datas: JSON.stringify(data)
                }
            }
        )
    }


    return (
        <div className='Services' id='services'>
            <div className="servicesmain">
                <p className="wwOsp">What we Offer</p>
                <p className="wwoph1">
                    We offer full service auto repair & maintenance
                </p>

                <div className="services_">
                    {Services && Services.catalog.objects.map((service, index) => (
                        <div className="service" key={index}>
                            <div className="serveice_price">
                                <p className="price_icon">$</p>
                                <p className="actual_name">
                                    {service && service.item_data.variations[0].item_variation_data.price_money.amount}
                                </p>
                            </div>
                            <p className="service_name">{service && service.item_data.name}</p>
                            <p className="service_des">{service && service.item_data.description}</p>
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