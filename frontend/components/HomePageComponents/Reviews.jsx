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
                        <img src="https://assets.website-files.com/612fdeb7f6d78c5ad5dc23f8/6142ff7c6369541c54dff0eb_Testimonials%202-p-500.jpeg" alt="revimage" />
                        <div className="nameandfrom">
                            <p className="revname">Jonathan Vallem</p>
                            <p className="revlocation">New York</p>
                        </div>
                    </div>

                    <div className="reviewdes">
                        <p className="mainrevdes">
                            I have got my car repaired at Finsweet many times before,
                            they are good at what they do. Not only did they repair my
                            car in a short comprehensive look on all the working
                        </p>
                    </div>
                </div>

                <div className="review">
                    <div className="reviewTop">
                        <img src="https://assets.website-files.com/612fdeb7f6d78c5ad5dc23f8/6142ff7c6369541c54dff0eb_Testimonials%202-p-500.jpeg" alt="revimage" />
                        <div className="nameandfrom">
                            <p className="revname">Jonathan Vallem</p>
                            <p className="revlocation">New York</p>
                        </div>
                    </div>

                    <div className="reviewdes">
                        <p className="mainrevdes">
                            I have got my car repaired at Finsweet many times before,
                            they are good at what they do. Not only did they repair my
                            car in a short comprehensive look on all the working
                        </p>
                    </div>
                </div>

                <div className="review">
                    <div className="reviewTop">
                        <img src="https://assets.website-files.com/612fdeb7f6d78c5ad5dc23f8/6142ff7c6369541c54dff0eb_Testimonials%202-p-500.jpeg" alt="revimage" />
                        <div className="nameandfrom">
                            <p className="revname">Jonathan Vallem</p>
                            <p className="revlocation">New York</p>
                        </div>
                    </div>

                    <div className="reviewdes">
                        <p className="mainrevdes">
                            I have got my car repaired at Finsweet many times before,
                            they are good at what they do. Not only did they repair my
                            car in a short comprehensive look on all the working
                        </p>
                    </div>
                </div>

                <div className="review">
                    <div className="reviewTop">
                        <img src="https://assets.website-files.com/612fdeb7f6d78c5ad5dc23f8/6142ff7c6369541c54dff0eb_Testimonials%202-p-500.jpeg" alt="revimage" />
                        <div className="nameandfrom">
                            <p className="revname">Jonathan Vallem</p>
                            <p className="revlocation">New York</p>
                        </div>
                    </div>

                    <div className="reviewdes">
                        <p className="mainrevdes">
                            I have got my car repaired at Finsweet many times before,
                            they are good at what they do. Not only did they repair my
                            car in a short comprehensive look on all the working
                        </p>
                    </div>
                </div>

                <div className="review">
                    <div className="reviewTop">
                        <img src="https://assets.website-files.com/612fdeb7f6d78c5ad5dc23f8/6142ff7c6369541c54dff0eb_Testimonials%202-p-500.jpeg" alt="revimage" />
                        <div className="nameandfrom">
                            <p className="revname">Jonathan Vallem</p>
                            <p className="revlocation">New York</p>
                        </div>
                    </div>

                    <div className="reviewdes">
                        <p className="mainrevdes">
                            I have got my car repaired at Finsweet many times before,
                            they are good at what they do. Not only did they repair my
                            car in a short comprehensive look on all the working
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