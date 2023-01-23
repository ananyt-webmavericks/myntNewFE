import React from "react";
import '../../css/GetStarted/getStarted.css'
import { Card, CardContent } from "@mui/material";
import Google from '../../images/assets/google.png';
import Facebook from '../../images/assets/facebook.png';
import Username from '../../images/assets/username.png';
import Email from '../../images/assets/email.png';
export default function GetStartedSection() {
    return (
        <div className="get-started-container">
            <div className="get-started-section">
                <span className="get-started-heading">Get Started</span>
                <span className="get-started-subheading">Please enter your details</span>
                <Card  className="card-get-started">
                    <CardContent>
                        <div className="button-container-getStarted">
                            <div className="google-signIn-getStarted">
                                <img className="logo-sign-in" src={Google}></img>
                                <span className="sign-in-txt">Sign up with Google</span>
                            </div>
                            <div className="google-signIn-getStarted">
                                <img className="logo-sign-in" src={Facebook}></img>
                                <span className="sign-in-txt">Sign up with Facebook</span>
                            </div>

                        </div>
                        <div className="button-below-heading">
                            <span >Or Continue with</span>
                        </div>
                        <div className="input-container">
                            <div className="name-input-get-started">
                                <img src={Username} width={16} height={16} style={{ marginLeft: '10px' }}></img>
                                <input className="in-input-name" placeholder="First Name" />
                            </div>
                            <div className="name-input-get-started">
                                <input className="in-input-name" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="input-container-second">
                            <div className="email-input-get-started">
                                <img src={Email} width={16} height={16} style={{ marginLeft: '10px' }}></img>
                                <input className="in-input-email" placeholder="Email Address" />
                            </div>
                        </div>
                        <button className="sign-up-btn">Sign Up</button>
                    </CardContent>
                </Card>
                <div className="bottom-most-txt-get-started">
                    <div className="footer-get-started-txt-head">Already have an account? <span className="colored-text-get-started">Log in instead</span></div>
                    <div className="footer-get-started-txt-head">Are you a founder looking to raise funds? <span className="colored-text-get-started">Apply Here</span></div>
                </div>
            </div>
        </div>
    )
}