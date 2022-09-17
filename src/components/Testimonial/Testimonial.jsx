import React from 'react'
import { Data } from './Data'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from 'swiper'
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

import "./Testimonial.css"

export default function Testimonial() {
    return (
        <>
            <section className='testimonial container section'>
                <h2 className='section__title'> My Clients Say</h2>
                <span className='section__subtitle'>Testimonial</span>

                <div className='testimonial__container container '>
                    <Swiper className='testimonial__content'
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={24}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            576: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 48,
                            },
                        }}
                        modules={[Pagination, Autoplay]}>
                        {Data.map(({ id, image, title, description }) => {
                            return (
                                <SwiperSlide className="testimonial__card" key={id}>
                                    <img src={image} alt={title} className='testimonial__img' />
                                    <h3 className="name">{title}</h3>
                                    <p className="testimonial__description">{description}</p>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </section>
        </>
    )
}
