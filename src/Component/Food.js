import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css"
import { Link } from 'react-router-dom';
import './Style/Food.css';

const Food = () => {
    return (
        <>
            <div className="container food-poster-swiper">
                <Swiper slidesPerView={1} spaceBetween={0} pagination={{
                    "clickable": true
                }} breakpoints={{
                    "640": {
                        "slidesPerView": 2,
                        "spaceBetween": 0
                    },
                    "768": {
                        "slidesPerView": 4,
                        "spaceBetween": 0
                    },
                    "1024": {
                        "slidesPerView": 5,
                        "spaceBetween": 0
                    }
                }} className="mySwiper">
                    <SwiperSlide className="food-swiper-box">
                        <Link path="/" className="food_poster">
                            <img src="../images/rest_img1.jpeg.jpg"></img></Link>
                    </SwiperSlide>
                    <SwiperSlide className="food-swiper-box">
                        <Link path="/" className="food_poster">
                            <img src="../images/rest_img2.jpeg.jpg" className="cat_img"></img>
                        </Link></SwiperSlide>
                    <SwiperSlide className="food-swiper-box">
                        <Link path="/" className="food_poster">
                            <img src="../images/rest_img3.jpeg.jpg"></img>
                        </Link></SwiperSlide>
                    <SwiperSlide className="food-swiper-box">
                        <Link path="/" className="food_poster">
                            <img src="../images/rest_img4.jpeg.jpg"></img>
                        </Link></SwiperSlide>
                    <SwiperSlide className="food-swiper-box">
                        <Link path="/" className="food_poster">
                            <img src="../images/rest_img5.jpeg.jpg"></img>
                        </Link></SwiperSlide>
                    <SwiperSlide className="food-swiper-box">
                        <Link path="/" className="food_poster"><img src="../images/rest_img6.jpeg.jpg"></img>
                        </Link></SwiperSlide>


                </Swiper>
            </div>
        </>
    )
}

export default Food
