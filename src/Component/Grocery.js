import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css";
import { Link } from 'react-router-dom';
import './Style/Grocery.css';
import { AiOutlineShareAlt, AiOutlineEye, AiOutlineStar } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FaRegComment } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addAllProduct, addToCart } from '../Redux/Action/ProductAction';



const Grocery = () => {

    const dispatch = useDispatch();
    const options = {
        method: 'GET',
        url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/parser',
        params: { ingr: 'Trending Grocery' },
        headers: {
            'x-rapidapi-key': 'ea08be3fc6msh420291768b58982p13f2c5jsn6915183d2a2e',
            'x-rapidapi-host': 'edamam-food-and-grocery-database.p.rapidapi.com'
        }
    };

    const fatchData = async () => {
        await axios.request(options).then(function (response) {
            dispatch(addAllProduct(response.data.hints))

        })

    }
    useEffect(() => {

        fatchData();

    }, [])

    const fatch_grocery_data = useSelector(state => state.allProduct.Products);

    const AddToCard = (id) => {
        const cart_item_data = fatch_grocery_data.find(item => item.food.foodId === id);
        dispatch(addToCart(cart_item_data));
    }


    return (
        <>
            <div className="container Grocery-swiper">
                <Swiper slidesPerView={1} spaceBetween={0} pagination={{
                    "clickable": true
                }} breakpoints={{
                    "640": {
                        "slidesPerView": 2,
                        "spaceBetween": 0
                    },
                    "768": {
                        "slidesPerView": 3,
                        "spaceBetween": 0
                    },
                    "1024": {
                        "slidesPerView": 5,
                        "spaceBetween": 0
                    }
                }} className="mySwiper">

                    {

                        fatch_grocery_data.map((item) => {
                            return (
                                <SwiperSlide className="Grocery-swiper-box">
                                    <Link to={`/ProductDetails/${item.food.foodId}`} style={{ textDecoration: "none" }}>
                                        <div class="treding">
                                            <Link to="/" style={{ borderRight: '1px solid #ddd', textDecoration: 'none' }} className="treding-icon"><AiOutlineShareAlt className="group_icon" />12K</Link>
                                            <Link to="/" style={{ borderRight: '1px solid #ddd', textDecoration: 'none' }} className="treding-icon"><AiOutlineEye className="group_icon" />12K</Link>
                                            <Link to="/" style={{ textDecoration: 'none' }} className="treding-icon"><HiOutlineShoppingBag className="group_icon" />12K</Link>
                                        </div>
                                        <div className="product-img">
                                            <img src={item.food.image}></img>
                                        </div>
                                        <div class="review pull-right">
                                            <Link to="#" style={{ borderRight: '1px solid #ddd', textDecoration: 'none' }} class="treding-icon"><AiOutlineStar className="review-icon" />12K</Link>
                                            <Link to="#" style={{ textDecoration: 'none' }} class="treding-icon"><FaRegComment className="review-icon" />12K</Link>
                                        </div>
                                        <div className="content">
                                            <h5 className="product-title">
                                                {item.food.label}
                                            </h5>
                                            <div className="price-btn-block">
                                                <div className="product-name">12 KG </div>
                                                <span className="price_cut">$ 15.99</span><br />
                                                <span className="price">$ 15.99</span>
                                                <Link to="#" style={{ textDecoration: 'none' }} onClick={() => AddToCard(item.food.foodId)} className="theme-btn-dash pull-right"><FiShoppingCart /> Add to cart</Link>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            )
                        })
                    }

                    {/* <SwiperSlide className="Grocery-swiper-box">
                        <Link path="/" style={{ textDecoration: "none" }}>
                            <div class="treding">
                                <Link to="/" style={{ borderRight: '1px solid #ddd', textDecoration: 'none' }} className="treding-icon"><AiOutlineShareAlt className="group_icon" />12K</Link>
                                <Link to="/" style={{ borderRight: '1px solid #ddd', textDecoration: 'none' }} className="treding-icon"><AiOutlineEye className="group_icon" />12K</Link>
                                <Link to="/" style={{ textDecoration: 'none' }} className="treding-icon"><HiOutlineShoppingBag className="group_icon" />12K</Link>
                            </div>
                            <div className="product-img">
                                <img src="../images/23664a.jpg"></img>
                            </div>
                            <div class="review pull-right">
                                <Link to="#" style={{ borderRight: '1px solid #ddd', textDecoration: 'none' }} class="treding-icon"><AiOutlineStar className="review-icon" />12K</Link>
                                <Link to="#" style={{ textDecoration: 'none' }} class="treding-icon"><FaRegComment className="review-icon" />12K</Link>
                            </div>
                            <div className="content">
                                <h5 className="product-title">
                                    Aashirvaad Shudh Chakki Whole Wheat Atta
                                </h5>
                                <div className="price-btn-block">
                                    <div className="product-name">12 KG </div>
                                    <span className="price_cut">Rs 15,99</span><br />
                                    <span className="price">Rs 15,99</span>
                                    <Link to="#" style={{ textDecoration: 'none' }} className="theme-btn-dash pull-right"><FiShoppingCart /> Add to cart</Link>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="Grocery-swiper-box">
                        <Link path="/" style={{ textDecoration: "none" }}>
                            <div class="treding">
                                <Link to="/" style={{ borderRight: '1px solid #ddd', textDecoration: 'none' }} className="treding-icon"><AiOutlineShareAlt className="group_icon" />12K</Link>
                                <Link to="/" style={{ borderRight: '1px solid #ddd', textDecoration: 'none' }} className="treding-icon"><AiOutlineEye className="group_icon" />12K</Link>
                                <Link to="/" style={{ textDecoration: 'none' }} className="treding-icon"><HiOutlineShoppingBag className="group_icon" />12K</Link>
                            </div>
                            <div className="product-img">
                                <img src="../images/pro_14626.jpg"></img>
                            </div>
                            <div class="review pull-right">
                                <Link to="#" style={{ borderRight: '1px solid #ddd', textDecoration: 'none' }} class="treding-icon"><AiOutlineStar className="review-icon" />12K</Link>
                                <Link to="#" style={{ textDecoration: 'none' }} class="treding-icon"><FaRegComment className="review-icon" />12K</Link>
                            </div>
                            <div className="content">
                                <h5 className="product-title">
                                    Aashirvaad Shudh Chakki Whole Wheat Atta
                                </h5>
                                <div className="price-btn-block">
                                    <div className="product-name">12 KG </div>
                                    <span className="price_cut">Rs 15,99</span><br />
                                    <span className="price">Rs 15,99</span>
                                    <Link to="#" style={{ textDecoration: 'none' }} className="theme-btn-dash pull-right"><FiShoppingCart /> Add to cart</Link>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="Grocery-swiper-box">
                        <Link path="/" style={{ textDecoration: "none" }}>
                            <div class="treding">
                                <Link to="/" style={{ borderRight: '1px solid #ddd', textDecoration: 'none' }} className="treding-icon"><AiOutlineShareAlt className="group_icon" />12K</Link>
                                <Link to="/" style={{ borderRight: '1px solid #ddd', textDecoration: 'none' }} className="treding-icon"><AiOutlineEye className="group_icon" />12K</Link>
                                <Link to="/" style={{ textDecoration: 'none' }} className="treding-icon"><HiOutlineShoppingBag className="group_icon" />12K</Link>
                            </div>
                            <div className="product-img">
                                <img src="../images/pro_20189.jpg"></img>
                            </div>
                            <div class="review pull-right">
                                <Link to="#" style={{ borderRight: '1px solid #ddd', textDecoration: 'none' }} class="treding-icon"><AiOutlineStar className="review-icon" />12K</Link>
                                <Link to="#" style={{ textDecoration: 'none' }} class="treding-icon"><FaRegComment className="review-icon" />12K</Link>
                            </div>
                            <div className="content">
                                <h5 className="product-title">
                                    Aashirvaad Shudh Chakki Whole Wheat Atta
                                </h5>
                                <div className="price-btn-block">
                                    <div className="product-name">12 KG </div>
                                    <span className="price_cut">Rs 15,99</span><br />
                                    <span className="price">Rs 15,99</span>
                                    <Link to="#" style={{ textDecoration: 'none' }} className="theme-btn-dash pull-right"><FiShoppingCart /> Add to cart</Link>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="Grocery-swiper-box">
                        <Link path="/" style={{ textDecoration: "none" }}>
                            <div class="treding">
                                <Link to="/" style={{ borderRight: '1px solid #ddd', textDecoration: 'none' }} className="treding-icon"><AiOutlineShareAlt className="group_icon" />12K</Link>
                                <Link to="/" style={{ borderRight: '1px solid #ddd', textDecoration: 'none' }} className="treding-icon"><AiOutlineEye className="group_icon" />12K</Link>
                                <Link to="/" style={{ textDecoration: 'none' }} className="treding-icon"><HiOutlineShoppingBag className="group_icon" />12K</Link>
                            </div>
                            <div className="product-img">
                                <img src="../images/124472a.jpg"></img>
                            </div>
                            <div class="review pull-right">
                                <Link to="#" style={{ borderRight: '1px solid #ddd', textDecoration: 'none' }} class="treding-icon"><AiOutlineStar className="review-icon" />12K</Link>
                                <Link to="#" style={{ textDecoration: 'none' }} class="treding-icon"><FaRegComment className="review-icon" />12K</Link>
                            </div>
                            <div className="content">
                                <h5 className="product-title">
                                    Aashirvaad Shudh Chakki Whole Wheat Atta
                                </h5>
                                <div className="price-btn-block">
                                    <div className="product-name">12 KG </div>
                                    <span className="price_cut">Rs 15,99</span><br />
                                    <span className="price">Rs 15,99</span>
                                    <Link to="#" style={{ textDecoration: 'none' }} className="theme-btn-dash pull-right"><FiShoppingCart /> Add to cart</Link>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="Grocery-swiper-box">
                        <Link path="/" style={{ textDecoration: "none" }}>
                            <div class="treding">
                                <Link to="/" style={{ borderRight: '1px solid #ddd', textDecoration: 'none' }} className="treding-icon"><AiOutlineShareAlt className="group_icon" />12K</Link>
                                <Link to="/" style={{ borderRight: '1px solid #ddd', textDecoration: 'none' }} className="treding-icon"><AiOutlineEye className="group_icon" />12K</Link>
                                <Link to="/" style={{ textDecoration: 'none' }} className="treding-icon"><HiOutlineShoppingBag className="group_icon" />12K</Link>
                            </div>
                            <div className="product-img">
                                <img src="../images/124472a.jpg"></img>
                            </div>
                            <div class="review pull-right">
                                <Link to="#" style={{ borderRight: '1px solid #ddd', textDecoration: 'none' }} class="treding-icon"><AiOutlineStar className="review-icon" />12K</Link>
                                <Link to="#" style={{ textDecoration: 'none' }} class="treding-icon"><FaRegComment className="review-icon" />12K</Link>
                            </div>
                            <div className="content">
                                <h5 className="product-title">
                                    Aashirvaad Shudh Chakki Whole Wheat Atta
                                </h5>
                                <div className="price-btn-block">
                                    <div className="product-name">12 KG </div>
                                    <span className="price_cut">Rs 15,99</span><br />
                                    <span className="price">Rs 15,99</span>
                                    <Link to="#" style={{ textDecoration: 'none' }} className="theme-btn-dash pull-right"><FiShoppingCart /> Add to cart</Link>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className="Grocery-swiper-box">
                        <Link path="/" style={{ textDecoration: "none" }}>
                            <div class="treding">
                                <Link to="/" style={{ borderRight: '1px solid #ddd', textDecoration: 'none' }} className="treding-icon"><AiOutlineShareAlt className="group_icon" />12K</Link>
                                <Link to="/" style={{ borderRight: '1px solid #ddd', textDecoration: 'none' }} className="treding-icon"><AiOutlineEye className="group_icon" />12K</Link>
                                <Link to="/" style={{ textDecoration: 'none' }} className="treding-icon"><HiOutlineShoppingBag className="group_icon" />12K</Link>
                            </div>
                            <div className="product-img">
                                <img src="../images/124472a.jpg"></img>
                            </div>
                            <div class="review pull-right">
                                <Link to="#" style={{ borderRight: '1px solid #ddd', textDecoration: 'none' }} class="treding-icon"><AiOutlineStar className="review-icon" />12K</Link>
                                <Link to="#" style={{ textDecoration: 'none' }} class="treding-icon"><FaRegComment className="review-icon" />12K</Link>
                            </div>
                            <div className="content">
                                <h5 className="product-title">
                                    Aashirvaad Shudh Chakki Whole Wheat Atta
                                </h5>
                                <div className="price-btn-block">
                                    <div className="product-name">12 KG </div>
                                    <span className="price_cut">Rs 15,99</span><br />
                                    <span className="price">Rs 15,99</span>
                                    <Link to="#" style={{ textDecoration: 'none' }} className="theme-btn-dash pull-right"><FiShoppingCart /> Add to cart</Link>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide> */}
                </Swiper>

            </div>
        </>
    )
}

export default Grocery
