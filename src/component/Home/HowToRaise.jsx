import { Grid, Button } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import '../../css/Home/howToRaise.css'
import Screen1 from '../../images/assets/screen1.png';
import Screen2 from '../../images/assets/screen2.png';
import Screen3 from '../../images/assets/screen3.png';
import Screen4 from '../../images/assets/screen4.png';
import Faqs from "./Faqs";

export default function HowToRaise() {
    const [gridxsFirst, setGridxsFirst] = useState(4)
    const [gridxsSecond, setgridxsSecond] = useState(3)
    const ratio = parseInt(window.innerWidth);

    // useEffect(() => {

    //     if (ratio < 1042) {
    //         setGridxsFirst(3)
    //         setgridxsSecond(4)
    //     }
    //     if (ratio < 800) {
    //         setGridxsFirst(2)
    //         setgridxsSecond(6)
    //     }
    //     if (ratio < 454) {
    //         setGridxsFirst(1)
    //         setgridxsSecond(12)
    //     }
    // }, [])
    return (
        <div className="how-to-raise-container">
            <div className="investor-home-heading">How to <span className="colored-investor-home-heading"> register? </span></div>
            <span className="investors-subheading">Experience the advantages of a fully digital and smooth process.</span>
                <div style={{overflow:'hidden',overflowX:'scroll',display:'flex' , alignItems:'center'}}>
                    <div className="first-raise-card">
                        <div className="head-container-raise">
                            <div className="head-section-first">1</div>
                            <div className="head-section-second">
                                <span className="card-header-txt">Signup with your email address</span>
                                <span className="card-sub-header-txt">Sign up on the platform by providing your email and completing the one-time password (OTP) verification procedure.</span>
                            </div>
                        </div>
                        <div className="raise-card-image-container">
                            <img src={Screen1} className="raise-card-image" ></img>
                        </div>
                    </div>
                
                    <div className="first-raise-card">
                        <div className="head-container-raise">
                            <div className="head-section-non-active">2</div>
                            <div className="head-section-second">
                                <span className="card-header-txt">Complete KYC and add bank details</span>
                                <span className="card-sub-header-txt">Finish the Know Your Customer (KYC) procedure by submitting your PAN (Permanent Account Number) and adding your bank account information.</span>
                            </div>
                        </div>
                        <div className="raise-card-image-container">
                            <img src={Screen2} className="raise-card-image" ></img>
                        </div>
                    </div>
              
                    <div className="first-raise-card">
                        <div className="head-container-raise">
                            <div className="head-section-non-active">3</div>
                            <div className="head-section-second">
                                <span className="card-header-txt">Register to your preferred opportunities</span>
                                <span className="card-sub-header-txt">Examine the ongoing campaigns and select the one that fits your needs best. Upon choosing a campaign, proceed with payment and finalize the process.</span>
                            </div>
                        </div>
                        <div className="raise-card-image-container">
                            <img src={Screen3} className="raise-card-image" ></img>
                        </div>
                    </div>
             
                    <div className="first-raise-card">
                        <div className="head-container-raise">
                            <div className="head-section-non-active">4</div>
                            <div className="head-section-second">
                                <span className="card-header-txt">Grow Your Wealth</span>
                                <span className="card-sub-header-txt">Your process is now complete and you can monitor your Subscriptions to see the growth as the startups you have backed achieve success.</span>
                            </div>
                        </div>
                        <div className="raise-card-image-container-last">
                            <img src={Screen4} className="raise-card-image" ></img>
                        </div>
                    </div>
                </div>
            <Faqs />
        </div>
    )
}