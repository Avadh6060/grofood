import React from 'react';
import '../Component/Style/Header.css';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
    return (
        <>
            <div className="container header">
                <div className="Home-logo-icon">
                    <img src="../images/home_icon_logo.png" />
                </div>
                <h5 className="header_white">Discover <span className="clr_green">food</span> or
                    <span className="clr_orange"> grocery </span>
                    near by you
                </h5>
                <div className="search-box">
                    <div className="search-box-bg">
                        <img src="../images/home_search_image.png"></img><br />
                        <div className="input">
                            <input type="text" placeholder="Enter food Name"></input>
                        </div>
                        <button className="search-btn">Search</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header
