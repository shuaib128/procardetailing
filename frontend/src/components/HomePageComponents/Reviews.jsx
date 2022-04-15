import React from 'react'
import { HiOutlineArrowRight, HiOutlineArrowLeft } from 'react-icons/hi';
import gsap, { Power3 } from "gsap";

const Reviews = () => {
    var count = 0
    const tl = gsap.globalTimeline

    //Next review
    const nextReview = () => {
        var revcontent = document.querySelectorAll('.review')
        if (count >= revcontent.length - 1) {
            count = 0
        };
        count++

        tl.to(revcontent, .9, { x: (-100 * count) + '%', ease: Power3.easeInOut })
    }

    //Prev review
    const prevReview = () => {
        var revcontent = document.querySelectorAll('.review')
        if (count <= 0) return
        count--

        tl.to(revcontent, .9, { x: (-100 * count) + '%', ease: Power3.easeInOut })
    }

    return (
        <div className='Reviews'>
            <p className="wwoph1 wwoph1rev">
                Our customers say the nicest things about our service
            </p>
            <div className="ReviewsMain">
                <div className="review">
                    <div className="reviewTop">
                        <img src="images/revs/1.jpg" alt="revimage" />
                        <div className="nameandfrom">
                            <p className="revname">Ashley Donnell</p>
                            <p className="revlocation">December 14, 2021</p>
                        </div>
                    </div>

                    <div className="reviewdes">
                        <p className="mainrevdes">
                            Very happy with Laurance’s work. Car looks and smell like new,
                            in spite of my three dogs and my own farm and stable work.
                        </p>
                    </div>
                </div>

                <div className="review">
                    <div className="reviewTop">
                        <img src="images/revs/2.jpg" alt="revimage" />
                        <div className="nameandfrom">
                            <p className="revname">April Anderson</p>
                            <p className="revlocation">November 12 2021</p>
                        </div>
                    </div>

                    <div className="reviewdes">
                        <p className="mainrevdes">
                            Excellent, friendly, efficient service. Laurance pulls up with
                            everything ready to clean up your car! Highly recommend and will use again.
                            He didn't even mind working in the rain!👍
                        </p>
                    </div>
                </div>

                <div className="review">
                    <div className="reviewTop">
                        <img src="images/revs/3.jpg" alt="revimage" />
                        <div className="nameandfrom">
                            <p className="revname">Christin Loomis-Palmer</p>
                            <p className="revlocation">June 9 2021</p>
                        </div>
                    </div>

                    <div className="reviewdes">
                        <p className="mainrevdes">
                            Pro Car Detailing did an outstanding job on my daughter’s car.
                            It hadn’t been cleaned since she got it. Looks brand new.
                            Would definitely recommend their services again. Well worth the $.
                        </p>
                    </div>
                </div>

                <div className="review">
                    <div className="reviewTop">
                        <img src="images/revs/4.jpg" alt="revimage" />
                        <div className="nameandfrom">
                            <p className="revname">Danny Almeida</p>
                            <p className="revlocation">March 26 2021</p>
                        </div>
                    </div>

                    <div className="reviewdes">
                        <p className="mainrevdes">
                            Love this service! They come to you and make your car look like new!
                            I got both interior and exterior service from them and I was very impressed!
                            These guys are pro’s at what they do. My car came out looking nice and
                            clean when they were done with it. Literally spotless both inside and out.
                            Highly recommend this service!
                        </p>
                    </div>
                </div>
            </div>

            <div className="revbuttons">
                <div className="revbuttonleft"
                    onClick={prevReview}
                >
                    <HiOutlineArrowLeft size={23} color={"white"} />
                </div>

                <div className="revbuttonleft"
                    onClick={nextReview}
                >
                    <HiOutlineArrowRight size={23} color={"white"} />
                </div>
            </div>
        </div>
    )
}

export default Reviews