import React from 'react';
import './Footer.css'; 

const Footer = () => {
    return (
        <div className="footer-1">
            <div className="footer-2 back-to-top">
                <a href="#">Back to top</a>
            </div>
            <div className="footer-3 content">
                <div className="footer-4 section">
                    <h3>Get to Know Us</h3>
                    <ul>
                        <li><a href="#">About Amazon</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press Releases</a></li>
                        <li><a href="#">Amazon Science</a></li>
                    </ul>
                </div>
                <div className="footer-5 section">
                    <h3>Connect with Us</h3>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
                <div className="footer-6 section">
                    <h3>Make Money with Us</h3>
                    <ul>
                        <li><a href="#">Sell on Amazon</a></li>
                        <li><a href="#">Sell under Amazon Accelerator</a></li>
                        <li><a href="#">Protect and Build Your Brand</a></li>
                        <li><a href="#">Amazon Global Selling</a></li>
                        <li><a href="#">Supply to Amazon</a></li>
                        <li><a href="#">Become an Affiliate</a></li>
                        <li><a href="#">Fulfilment by Amazon</a></li>
                        <li><a href="#">Advertise Your Products</a></li>
                        <li><a href="#">Amazon Pay on Merchants</a></li>
                    </ul>
                </div>
                <div className="footer-7 section">
                    <h3>Let Us Help You</h3>
                    <ul>
                        <li><a href="#">Your Account</a></li>
                        <li><a href="#">Returns Centre</a></li>
                        <li><a href="#">Recalls and Product Safety Alerts</a></li>
                        <li><a href="#">100% Purchase Protection</a></li>
                        <li><a href="#">Amazon App Download</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-8 bottom-links">
                <div className="footer-9 countries">
                    <a href="#">AbeBooks</a> | <a href="#">Amazon Web Services</a> | <a href="#">Audible</a> | <a href="#">IMDb</a> | <a href="#">Shopbop</a> | <a href="#">Amazon Business</a> | <a href="#">Prime Now</a> | <a href="#">Amazon Prime Music</a>
                </div>
                <div className="footer-10 policies">
                    <a href="#">Conditions of Use & Sale</a> | <a href="#">Privacy Notice</a> | <a href="#">Interest-Based Ads</a>
                </div>
                <div className="footer-11 copyright">
                    <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
