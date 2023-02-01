import { Button, Grid ,Card , CardContent} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import '../../css/CompleteYourProfile/verifyAddress.css'
export default function VerifyAddress() {
    const navigate = useNavigate();
    const [gridxsMain, setGridxsMain] = useState(2)
    const [gridxsSmall, setGridxsSmall] = useState(6)
    const ratio = parseInt(window.innerWidth);

    useEffect(() => {

        if (ratio < 600) {

            setGridxsMain(1)
            setGridxsSmall(12)
        }
    }, [])
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
                    <div className="verify-number-container address">
                        <Grid container spacing={gridxsMain}>
                            <Grid item xs={12}>
                                <div className="verifyAddress-input">
                                    <input type="text" placeholder="name" className="verifyAddress-input-section" />
                                </div>
                            </Grid>
                            <Grid item xs={gridxsSmall}>
                                <div className="verifyAddress-input">
                                    <input type="text" placeholder="Address Line 01" className="verifyAddress-input-section" />
                                </div>
                            </Grid>
                            <Grid item xs={gridxsSmall}>
                                <div className="verifyAddress-input">
                                    <input type="text" placeholder="Address Line 02" className="verifyAddress-input-section" />
                                </div>
                            </Grid>
                            <Grid item xs={gridxsSmall}>
                                <div className="verifyAddress-input">
                                    <input type="text" placeholder="City" className="verifyAddress-input-section" />
                                </div>
                            </Grid>
                            <Grid item xs={gridxsSmall}>
                                <div className="verifyAddress-input">
                                    <input type="text" placeholder="State" className="verifyAddress-input-section" />
                                </div>
                            </Grid>
                            <Grid item xs={gridxsSmall}>
                                <div className="verifyAddress-input">
                                    <input type="text" placeholder="Pincode" className="verifyAddress-input-section" />
                                </div>
                            </Grid>
                            {gridxsSmall === 12 &&
                                <Grid item xs={12}>
                                    <div className="save-changes-mobile-view">
                                        <span>Cancel</span>
                                        <Button varient="contained" className="verify-address-btn" >Save Changes</Button>
                                    </div>
                                </Grid>
                            }
                            <Grid item xs={12}>
                                <div className="verifyAddress-input">
                                    <input type="text" placeholder="Father’s Name" className="verifyAddress-input-section" />
                                </div>
                            </Grid>
                        </Grid>
                        <div className="verify-button-container">
                            <Button varient="contained" className="verify-button" onClick={() => navigate('/payment-details')}>Next</Button>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
        {ratio < 768 ? null : <Footer />}
        </>
    )
}