import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillSkype } from 'react-icons/ai';
import './Style/Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-md-9 col-xs-12">
                            <ul className="footer-link">
                                <li><Link href="aboutus.html" className="fotter-link-text">About Us</Link></li>
                                <li><Link href="faq.html" className="fotter-link-text">Help Center</Link></li>
                                <li><Link href="Business_contact_us.html" className="fotter-link-text">Contact Us</Link></li>
                                <li><Link href="policy.html" className="fotter-link-text">Privacy Policy</Link></li>
                                <li><Link href="blog.html" className="fotter-link-text">Blog</Link></li>
                                <li><Link href="Business_Home.html" className="fotter-link-text">Retailer login</Link></li>
                            </ul>
                        </div>
                        <div className="col-sm-3 col-md-3 col-xs-12 text-right">
                            <ul className="social-link">
                                {/* <li><FaFacebookF className="footer-icon" /></li>
                                <li><FaLinkedinIn className="footer-icon" /></li>
                                <li><AiOutlineTwitter className="footer-icon" /></li>
                                <li><AiFillSkype className="footer-icon" /></li> */}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer
