import React from "react";
import '../../css/CompleteYourProfile/completeYourProfile.css';
import { Card, CardContent } from "@mui/material";
import BankDetails from "./BankDetails";
import Footer from "../Footer";



export default function PaymentDetails() {
   
    const ratio = parseInt(window.innerWidth);

    return (
        <>
        <div className="complete-your-profile-container">
            <Card className="card-complete-profile">
                <CardContent style={{ padding: '16px 0' }}>
                    <div className="card-complete-heading-section">
                        <span className="heading-top-complete">Complete your profile</span>
                        <span className="heading-below-complete">Hey! Let’s get your KYC done quickly</span>
                        <div className="completion-profile-container">
                            <div className="outer-circle-dash">
                                <div className="inner-circle-dashed" style={{ background: '#01965D', color: 'white' }}>
                                    <span className="font-inner-circle">1</span>
                                </div>
                            </div>
                            <hr className="dashed-line-profile" />
                            <div className="outer-circle-dash not-completed">
                                <div className="inner-circle-dashed">
                                    <span className="font-inner-circle">2</span>
                                </div>
                            </div>
                        </div>
                        <div className="completion-profile-container second">
                            <span className="dahed-completion-status first">KYC</span>
                            <span className="dahed-completion-status second">Payment Details</span>
                        </div>
                    </div>
                    <hr className="dashed-line-profile main" />
                    <BankDetails />

                </CardContent>
            </Card>
        </div>
        {ratio < 768 ? null : <Footer />}
        </>
    )
}