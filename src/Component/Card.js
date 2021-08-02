import React, { useState, useEffect } from 'react';
import '../Component/Style/Card.css';
import { FaProductHunt, FaTimes } from 'react-icons/fa';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { FaTimesCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeCardItem } from '../Redux/Action/ProductAction';
import { Link } from 'react-router-dom';

const Card = ({ sendFunction }) => {
    const cartItem = useSelector(state => state.allProduct.CartItem);
    console.log(cartItem);
    const dispatch = useDispatch()

    // const onChangeProductQuantity = (index, event) => {
    //     const value = event.target.value;
    //     const valueInt = parseInt(value);
    //     const cloneProducts = [...cartItem];

    //     // Minimum quantity is 1, maximum quantity is 100, can left blank to input easily
    //     if (value === "") {
    //         cloneProducts[index].quantity = value;
    //     } else if (valueInt > 0 && valueInt < 100) {
    //         cloneProducts[index].quantity = valueInt;
    //         const totalPrice = cloneProducts[index].quantity * 15;
    //         setproductPrice(totalPrice);

    //     }
    // };
    const removeItem = (id) => {
        dispatch(removeCardItem(id));

    }



    return (

        <>

            <div className="cart-content">
                <div className="cart-box">
                    <div className="cart-header">
                        <p>My Cart</p>
                        <button onClick={() => sendFunction()} className="btn"><FaTimes /></button>
                    </div>
                    <div class="cart-list-scroll">
                        {
                            cartItem.map((item, index) => {
                                return (
                                    <div class="cart-list-box">
                                        <img class="cart-img" src={item.food.image} />
                                        <div class="cart-details">
                                            <div className="name-delete">
                                                <h1 class="product-name">{item.food.label}</h1>
                                                <Link className="delete-icon" onClick={() => removeItem(item.food.foodId)}><FaTimesCircle /></Link>
                                            </div>
                                            <div class="product-items">
                                                <div class="increment-decrement">
                                                    <button className="button" > <AiFillMinusCircle /></button>
                                                    <span>1</span>
                                                    <button className="button" ><AiFillPlusCircle /></button>
                                                    <span class="new-price">X Rs.15.99</span>
                                                </div>
                                                <div class="total-price">
                                                    $15.99
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                    <div className="summary">
                        <div className="card_summary">
                            Card Summary
                        </div>
                        <div className="card_price">
                            <p>Totol Amount :</p>
                            <p>$1000</p>
                        </div>
                        <div className="tex_amount">
                            <p> 18% GST :</p>
                            <p>$1000</p>
                        </div>
                        <div className="total_amount">
                            <p>Totol Amount :</p>
                            <p>$1000</p>
                        </div>
                        <button className="btn">PLACE ORDER</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
