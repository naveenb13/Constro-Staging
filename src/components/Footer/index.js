import React from "react";
// reactstrap components
import {
    Row,
    Col
} from "reactstrap";
import { FaDiscord, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { useHistory } from "react-router-dom";

export default function Footer() {
    const history = useHistory()
    return (
        <div className="bg-footer p-4">
            <Row className="border-bottom pb-4 mb-4">
                <Col lg="4">
                    <img src={require('../../assets/img/E-commerce/logo.png').default} alt='logo' className='img-fluid' width={160} />
                    <p className="text-dark ff-bold">Chennai's First Construction Materials E-mart</p>
                    <div className="d-flex flex-row justify-content-start align-items-center">
                        <a href="https://www.instagram.com/the.constro" target="_blank" className="cursor-pointer"><img src={require('../../assets/img/E-commerce/instagram.png').default} alt='instagram' className='img-fluid rounded-circle' width={30} /></a>
                        <a href="https://twitter.com/TeamConstro" target="_blank" className="cursor-pointer"><img src={require('../../assets/img/E-commerce/twitter.png').default} alt='twitter' className='img-fluid mx-3 rounded-circle' width={30} /></a>
                        <a href="https://www.facebook.com/team.constro" target="_blank" className="cursor-pointer"><img src={require('../../assets/img/E-commerce/facebook.png').default} alt='facebook' className='img-fluid rounded-circle' width={30} /></a>
                    </div>
                    <h3 className="text-dark ff-bold mt-5 mb-3">Contact Us</h3>
                    <div className="d-flex">
                        <img src={require('../../assets/img/E-commerce/whatsapp.png').default} alt='whatsapp' className='img-fluid rounded-circle' width={50} />
                        <div className="ml-3">
                            <p className="text-dark ff-bold">Whats App</p>
                            <p className="text-dark">9840635535</p>
                        </div>
                    </div>
                    <div className="d-flex mt-3">
                        <img src={require('../../assets/img/E-commerce/phone.png').default} alt='phone' className='img-fluid rounded-circle' width={50} />
                        <div className="ml-3">
                            <p className="text-dark ff-bold">Call Us</p>
                            <p className="text-dark">9940345635</p>
                        </div>
                    </div>
                </Col>
                <Col lg="4">
                    <h3 className="text-dark ff-bold">Most Popular Categories</h3>
                    <ul>
                        <li className="text-dark cursor-pointer" role="button" onClick={() => history.push("/products/#cement")}>Cement</li>
                        <li className="mt-2 text-dark cursor-pointer" role="button" onClick={() => history.push("/products/#cement")}>Bricks and Blocks</li>
                        <li className="mt-2 text-dark cursor-pointer" role="button" onClick={() => history.push("/products/#cement")}>Steel Bars</li>
                        <li className="mt-2 text-dark cursor-pointer" role="button" onClick={() => history.push("/products/#cement")}>Natural Stones</li>
                        <li className="mt-2 text-dark cursor-pointer" role="button" onClick={() => history.push("/products/#cement")}>Sand and Aggregates</li>
                        <li className="mt-2 text-dark cursor-pointer" role="button" onClick={() => history.push("/products/#cement")}>RMC</li>
                    </ul>
                </Col>
                <Col lg="4">
                    <h3 className="text-dark ff-bold">Customer Services</h3>
                    <ul>
                        <li className="text-dark">About Us</li>
                        <li className="mt-2 text-dark">Terms &amp; Conditions</li>
                        <li className="mt-2 text-dark">FAQ</li>
                        <li className="mt-2 text-dark">Privacy Policy</li>
                        <li className="mt-2 text-dark">Cancellation &amp; Return Policy</li>
                    </ul>
                </Col>
            </Row>
            <p className="text-dark text-center">© 2022 All rights reserved. Constro.</p>
        </div>
    );
}
