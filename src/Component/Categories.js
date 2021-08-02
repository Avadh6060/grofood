import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import { Link } from 'react-router-dom';
import './Style/Categories.css';


const Categories = () => {
    return (
        <>
            <div className="container categories-swiper">
                <Swiper slidesPerView={1} spaceBetween={10} pagination={{
                    "clickable": true
                }} breakpoints={{
                    "640": {
                        "slidesPerView": 2,
                        "spaceBetween": 20
                    },
                    "768": {
                        "slidesPerView": 4,
                        "spaceBetween": 40
                    },
                    "1024": {
                        "slidesPerView": 7,
                        "spaceBetween": 50
                    }
                }} className="mySwiper">
                    <SwiperSlide className="swiper-box">
                        <Link path="/"><img src="../images/Beverages.png"></img></Link><p>Beverages</p></SwiperSlide>
                    <SwiperSlide className="swiper-box"><Link path="/"><img src="../images/Canned_and_Packaged.png" className="cat_img"></img></Link><p>Canned & Packaged</p></SwiperSlide>
                    <SwiperSlide className="swiper-box"><Link path="/"><img src="../images/Condiments.png"></img></Link><p>Condiments</p></SwiperSlide>
                    <SwiperSlide className="swiper-box"><Link path="/"><img src="../images/Festival.png"></img></Link><p>Festival</p></SwiperSlide>
                    <SwiperSlide className="swiper-box"><Link path="/"><img src="../images/Freezer_Foods.png"></img></Link><p>Freezer & Foods</p></SwiperSlide>
                    <SwiperSlide className="swiper-box"><Link path="/"><img src="../images/Groceries.png"></img></Link><p>Groceries</p></SwiperSlide>
                    <SwiperSlide className="swiper-box"><Link path="/"><img src="../images/Health_Beauty.png"></img></Link><p>Health_Beauty</p></SwiperSlide>
                    <SwiperSlide className="swiper-box"><Link path="/"><img src="../images/Instant_Food.png"></img></Link><p>Instant_Food</p></SwiperSlide>
                    <SwiperSlide className="swiper-box"><Link path="/"><img src="../images/kitchen.png"></img></Link><p>kitchen</p></SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Categories
