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
        <div style={{ textAlign: 'center' }} className="how-to-raise-container">
            <div className="investor-home-heading">How to <span className="colored-investor-home-heading"> register? </span></div>
            <span className="investors-subheading">Experience the advantages of a fully digital and hassle-free process.</span>
            <div className="hide-scroll" style={{ height: 950, justifyContent: 'space-between', textAlign: 'start', display: 'flex', alignItems: 'center' }}>

                <div className="first-raise-card" style={{ marginLeft: '5px' }}>
                    <div className="head-container-raise">
                        <div className="head-section-non-active">1</div>
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
                            <span className="card-sub-header-txt">Finish the KYC procedure by submitting your PAN card, Aadhar card and bank account details.</span>
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
                            <span className="card-header-txt">Explore curated opportunities</span>
                            <span className="card-sub-header-txt">Discover unique enrollment opportunities qualified through comprehensive due diligence. Upon choosing a campaign, proceed with payment and finalize the process.</span>
                        </div>
                    </div>
                    <div className="raise-card-image-container">
                        <img src={Screen3} className="raise-card-image" ></img>
                    </div>
                </div>

                <div className="first-raise-card" style={{ marginRight: '5px' }}>
                    <div className="head-container-raise">
                        <div className="head-section-non-active">4</div>
                        <div className="head-section-second">
                            <span className="card-header-txt">Track your portfolio and grow your wealth </span>
                            <span className="card-sub-header-txt">Your process is now complete and you can monitor your portfolio to get periodic updates.</span>
                        </div>
                    </div>
                    <div className="raise-card-image-container-last">
                        <img style={{ width: '100%' }} src={Screen4} className="raise-card-image" ></img>
                    </div>
                </div>
            </div>
            <Faqs />
        </div>
    )
}