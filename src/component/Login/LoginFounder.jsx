import React from "react";
import '../../css/GetStarted/getStarted.css'
import { Card, CardContent } from "@mui/material";
import Google from '../../images/assets/google.png';
import Facebook from '../../images/assets/facebook.png';
import Username from '../../images/assets/username.png';
import Email from '../../images/assets/email.png';
import Loginlogo from '../../images/assets/loginlogo.png';
import { useNavigate } from "react-router-dom";

export default function LoginFounder() {

    const navigate = useNavigate();
    return (
        <div className="get-started-container">
            <div className="get-started-section">
                <span className="get-started-heading">Log In as Founder</span>
                <span className="get-started-subheading">Please enter your details</span>
                <Card className="card-get-started">
                    <CardContent>
                        <div style={{ display: 'flex', justifyContent: 'center', margin: 'auto', marginBottom: '13px',marginLeft: '2em' }}>
                            <img src={Loginlogo} width={172} height={76} style={{ objectFit: 'contain' }}></img>
                        </div>
                        <div className="input-container-second">
                            <div className="email-input-get-started">
                                <img src={Email} width={16} height={16} style={{ marginLeft: '10px' }}></img>
                                <input className="in-input-email" placeholder="Email Address" />
                            </div>
                            <div className="email-input-get-started">
                                <img src={Email} width={16} height={16} style={{ marginLeft: '10px' }}></img>
                                <input className="in-input-email" placeholder="Password" />
                            </div>
                        </div>
                        <button onClick={() => navigate('/otp-verification')} className="sign-up-btn">Login</button>
                    </CardContent>
                </Card>
                <div className="bottom-most-txt-get-started">
                    <div className="footer-get-started-txt-head">
                        <span onClick={() => navigate('/login')} style={{cursor:'pointer'}} className="colored-text-get-started">Log in </span>as Investor</div>
                </div>
            </div>
        </div>
    )
}