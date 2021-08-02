import React, { useState } from 'react';
import '../Component/Style/Navbar.css';
import { BsSearch } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { FiShoppingCart } from 'react-icons/fi';
import { Badge } from '@material-ui/core';
import { FaUserCircle } from 'react-icons/fa';
import Card from '../Component/Card';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [click, setclick] = useState(false)
    const cardClick = (value) => {
        setclick(value);
        // console.log(value);
    }
    console.log(click)
    console.log(setclick)
    const cartItem = useSelector(state => state.allProduct.CartItem);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src="../images/header_logo.png" className="logo"></img></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto ">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <GoLocation className="nav-bar-icon" />Location
                                </a>
                                <ul class="dropdown-menu dropdown-menu-light dropdown-menu-lg-start" aria-labelledby="navbarDarkDropdownMenuLink">
                                    <div class="search-box">
                                        <h3 class="header">Where do you want the delivery?</h3>
                                        <div class="deliver-section">
                                            Deliver in : <span class="clr_green">Gurugram</span>
                                        </div>
                                        <div class="location-selection">
                                            <p>——— Or Select your city ———</p>
                                            <h1>Top Searched Cities</h1>
                                            <span class="city_tag">
                                                New York
                                            </span>
                                            <span class="city_tag">
                                                Brooklyn
                                            </span>
                                            <span class="city_tag">
                                                Chicago
                                            </span>
                                            <div class="location-search-box">
                                                <BsSearch className="ion-ios-search" />
                                                <input type="text" class="search-input"
                                                    placeholder="Address, city, zip code or state" />
                                                <button class="auto-detect-btn">Detect</button>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#" onClick={() => cardClick("true")}>
                                    <Badge badgeContent={cartItem.length} color="primary" anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}>
                                        <FiShoppingCart className="nav-bar-icon" />
                                    </Badge>
                                    My Cart</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link user-btn"><FaUserCircle /> Signin</a>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
            {console.log(click)}
            {click ? <Card sendFunction={cardClick} /> : <></>}

        </>
    )
}

export default Navbar
