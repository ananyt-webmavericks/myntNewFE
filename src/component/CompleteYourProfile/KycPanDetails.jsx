import React from "react";
import { Button, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
export default function KycPanDetails() {
    const ratio = parseInt(window.innerWidth);
    const navigate = useNavigate()
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
                                    <div className="inner-circle-dashed">
                                        <span className="font-inner-circle">1</span>
                                    </div>
                                </div>
                                <hr className="dashed-line-profile" />
                                <div className="outer-circle-dash not-completed">
                                    <div className="inner-circle-dashed not-completed">
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

                        <div className="verify-number-container">
                            <span className="verify-number-head">Kyc</span>
                            <div className="number-verify-container kyc"><input type="number" placeholder="Enter PAN Number" className="phoneNumberInput" name="countryCode" /></div>
                            <div className="input-number-box-section kyc">
                                <div className="number-verify-container kyc small"><input type="number" placeholder="DD" className="phoneNumberInput" name="countryCode" /></div>
                                <div className="number-verify-container kyc small"><input type="number" placeholder="MM" className="phoneNumberInput" name="countryCode" /></div>
                                <div className="number-verify-container kyc small"><input type="number" placeholder="YYYY" className="phoneNumberInput" name="countryCode" /></div>
                            </div>
                        </div>
                        <div className="verify-button-container" style={{ paddingTop: '28px' }}>
                            <Button varient="contained" className="verify-button" onClick={() => navigate('/complete-your-profile/verify-address')}>Submit</Button>
                        </div>

                    </CardContent>
                </Card>
            </div>
            {ratio < 768 ? null : <Footer />}
        </>
    )
}