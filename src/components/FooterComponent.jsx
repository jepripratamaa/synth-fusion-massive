import React from "react"
import { Navbar,Container } from "react-bootstrap"
import logofooter from '../assets/SYNTH_FUSION_ACADEMY.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import tiktok from '../assets/tiktok.png'

const FooterComponent = () => {
    return (
                <div className="footer-bg">
                    <Container className="navbar-expand-xxl">
                        <footer className="page-footer font-small blue pt-4">
                            <div className="container-fluid text-center text-md-left">
                                <div className="row">
                                    <div className="col-md-3 mb-md-0 mb-3">
                                        <div className="center">
                                            <img className="" src={logofooter}/>
                                        </div>
                                    </div>

                                    <div className="col-md-3 mb-md-0 mb-3">
                                        <div className="">
                                            <h5 className="text-uppercase text-start">About Us</h5>
                                            <div className="text-start">
                                                <h6><a href="#!">Blog</a></h6>
                                                <h6><a href="#!">Testimoni</a></h6>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="clearfix w-100 d-md-none pb-0"/>

                                    <div className="col-md-3 mb-md-0 mb-3">
                                        <h5 className="text-uppercase text-start">Contact Us</h5>
                                        <ul className="list-unstyled text-start">
                                            <li>Email:</li>
                                            <li>synthfusionacademy@gmail.com</li>
                                            <li> </li>
                                            <li>Phone:</li>
                                            <li>081267899001</li>
                                        </ul>
                                    </div>

                                    <hr className="clearfix w-100 d-md-none pb-0"/>
                                    
                                    <div className="col-md-3 mb-md-0 mb-3 text-start">
                                        <h5 className="text-uppercase ">Follow Us</h5>
                                            <a href="#!"><img src={facebook} className="socmed" alt="" /></a>
                                            <a href="#!"><img src={tiktok} className="socmed" alt="" /></a>
                                            <a href="#!"><img src={instagram} className="socmed" alt="" /></a>
                                            <a href="#!"><img src={twitter} className="socmed" alt="" /></a>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="footer-copyright text-center py-3">Copyright © 2025 Synth Fusion Academy | All Rights Reserved
                            </div>

                        </footer>
                    </Container>
                </div>
    )
}

export default FooterComponent