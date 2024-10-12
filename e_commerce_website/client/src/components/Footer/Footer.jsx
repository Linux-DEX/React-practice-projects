import React from "react";
import "./Footer.scss";
import { FaEnvelope, FaLocationArrow, FaMobileAlt, Faenvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
return (
    <footer className="footer">
    <div className="footer-content">
        <div className="col">
        <div className="title">About</div>
        <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ullam.
            Voluptates hic rerum nulla quo eligendi earum tempore corporis
            dolores
        </div>
        </div>
        <div className="col">
        <div className="title">Contact</div>
        <div className="c-item">
            <FaLocationArrow />
            <div className="text">
            Bangalore road, bangalore, bangalure urban, bangalore, 000033
            </div>
        </div>
        <div className="c-item">
            <FaMobileAlt />
            <div className="text">
                Phone: 0234 324 0945
            </div>
        </div>
        <div className="c-item">
            <FaEnvelope />
            <div className="text"> Email: store@ldex.com </div>
        </div>
        </div>
        <div className="col">
            <div className="title">Categories</div>
            <span className="text"> Headphone </span>
            <span className="text"> Smart Watches </span>
            <span className="text"> Bluetooth Speakers </span>
            <span className="text"> Wireless Earbuds </span>
            <span className="text"> Home Theatre </span>
            <span className="text"> Projectors </span>
        </div>
        <div className="col">
            <div className="title"> Pages </div>
            <span className="text"> Home </span>
            <span className="text"> About </span>
            <span className="text"> Privacy Policy </span>
            <span className="text"> Returns </span>
            <span className="text"> terms & Conditions </span>
            <span className="text"> Contact Us </span>
        </div>
    </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    Linux-DEX 2023 CREATED BY Linux-Dex. PREMIUM E-COMMERCE SOLUTIONS.
                </div>
                <img src={Payment} alt="" />
        </div>
    </div>
    </footer>
);
};

export default Footer;
