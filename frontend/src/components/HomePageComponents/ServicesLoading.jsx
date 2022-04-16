import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ServicesLoading = () => {
    return (
        <>
            <p className="wwOsp">What we Offer</p>
            <p className="wwoph1">
                We offer full service auto repair & maintenance
            </p>
            <div className='ServicesLoadings'>
                <Skeleton height={"400px"} />
                <Skeleton height={"400px"} />
                <Skeleton height={"400px"} />
            </div>
        </>
    )
}

export default ServicesLoading