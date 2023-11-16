import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <div className="footerSection bg-green-600 mt-10">
                <footer className="text-white footer mt-auto py-3 bg-dark text-light">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16 text-center mt-4">
                        <div>
                            <b className="block mb-3">
                                <h6 className="text-white hover:cursor-pointer">CUSTOMER SERVICE</h6>
                            </b>
                            <ul className="list-unstyled hover:cursor-pointer text-white">
                                <li>Help & FAQs</li>
                                <li>Order Tracking</li>
                                <li>Shipping & Delivery</li>
                                <li>Order History</li>
                                <li>Advanced Search</li>
                                <li>Login</li>
                            </ul>
                        </div>
                        <div>
                            <b className="block mb-3">
                                <h6 className="text-white hover:cursor-pointer">ABOUT US</h6>
                            </b>
                            <ul className="list-unstyled hover:cursor-pointer">
                                <li>About Us</li>
                                <li>Career</li>
                                <li>Our Stores</li>
                                <li>Coporate Sales</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div>
                            <b className="block mb-3">
                                <h6 className="text-white hover:cursor-pointer">MORE INFORMATION</h6>
                            </b>
                            <ul className="list-unstyled hover:cursor-pointer">
                                <li>Affiliates</li>
                                <li>Refer a Friend</li>
                                <li>Student Beans Offers</li>
                                <li>Gift Vouchers</li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="text-white hover:cursor-pointer">Social media</h6>
                            <BsFacebook className="inline-block me-4 hover:cursor-pointer" />
                            <BsTwitter className="inline-block me-4 hover:cursor-pointer" />
                            <BsInstagram className="inline-block me-4 hover:cursor-pointer" />
                            <BsYoutube className="inline-block me-4 hover:cursor-pointer" />
                            <BsLinkedin className="inline-block me-4 hover:cursor-pointer" />
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <p className="text-white">© Copyright 2022. All Rights Reserved.</p>
                    </div>
                </footer>
            </div>

        </>
    );
};

export default Footer;
