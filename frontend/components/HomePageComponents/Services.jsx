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

    if (!Services) return "Loading..."
    if (!Services) return "Error!"

    //Send Zip Code
    const gotozipcodepage = (data) => {
        router.push({
            pathname: 'ZipCode',
            query: {
                name: data.item_data.name,
                price: data.item_data.variations[0].item_variation_data.price_money.amount,
                body: data.item_data.description,
                variation_datas: JSON.stringify(data)
            }
        })
    }


    return (
        <div className='Services' id='services'>
            <div className="servicesmain">
                <p className="wwOsp">What we Offer</p>
                <p className="wwoph1">
                    We offer full service auto repair & maintenance
                </p>

                <div className="services_">
                    {Services.catalog.objects && Services.catalog.objects.map((service, index) => (
                        <div className="service" key={index}>
                            {Services.services && Services.services.map((image, index) => {
                                if (image.name === service.item_data.name) {
                                    return (
                                        <img
                                            key={index}
                                            src={BackendLink + image.image}
                                            alt="service_img"
                                        />
                                    )
                                }
                            })}

                            <div className="serveice_price">
                                <p className="price_icon">$</p>
                                <p className="actual_name">
                                    {service.item_data.variations[0].item_variation_data.price_money.amount}
                                </p>
                            </div>
                            <p className="service_name">{service.item_data.name}</p>
                            <p className="service_des">{service.item_data.description}</p>
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