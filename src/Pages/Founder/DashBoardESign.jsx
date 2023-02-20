import { Box } from "@material-ui/core";
import { Button, Card, Container, Typography } from "@mui/material";
import { borderRadius, height, padding } from "@mui/system";
import React from "react";
import { useState } from "react";
import Footer from "../../component/Footer";
import DrawerFounder from "../../component/FounderDrawer/DrawerFounder";
import '../../css/FounderDrawer/Dashboard/E-Sign.css'
import E_Singbg from "../../images/founder/E_SingBg.png"
import CopanyLogo from "../../images/founder/companylogo.png"

const DashBoardESign = () => {
    const location = window.location.pathname;
    const ratio = parseInt(window.innerWidth);
    const [showDeals, setShowDeals] = useState(false)

    const fetchValue = (value) => {
        setShowDeals(value)
    }

    return (
        <>
            <div style={{ display: 'flex', position: 'relative' }}>
                {location.includes('/dashboard') && <DrawerFounder />}
                <div className="dashboard-container">
                    <Container maxWidth="lg">
                        <div>
                            <Typography className="raise-with-mint">E-Sing Document</Typography>
                        </div>

                        <Card className="raise-with-mint-cards" elevation={5}>
                            <div>
                                <Typography className="e-sign-title">E-sign</Typography>
                                <Typography>E-sign your agreements to finalize investments in your campaign</Typography>
                            </div>
                            <div className="download-btn-Active">
                                <Button style={{ borderRadius: "50px", backgroundColor: "#fbdf35", color: "black" }} variant="contained"><b>Download</b></Button>
                            </div>
                        </Card>

                        <Box className="companyAddbox" style={{ display: "flex", gap: "5rem", marginBottom: "5rem", marginTop: "2rem" }}>
                            <div>
                                <Typography>Campaign</Typography>
                                <div className="AddCompany">
                                    <div className="Add-new-campaign">
                                        <div className="campaign-Icon-Box">
                                            <Typography className="plus-icon">+</Typography>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Typography>Previous Campaigns</Typography>
                                <div className="AddCompany2">
                                    <Box className="companylogoimg">
                                        <Box className="setCornerIcon">
                                            <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: "center", width: "100%", padding: "10px 20px" }}>
                                                <img src={CopanyLogo} alt="not found" />
                                                <div style={{ height: "30px", width: "100px", backgroundColor: "yellow", textAlign: "center", marginTop: "15px", borderRLeft: "50%", borderRight: "50%", borderRadius: "1rem", zIndex: "444499" }}>CSOP</div>
                                            </div>
                                        </Box>
                                        <b className="settleindex" style={{ marginLeft: "3rem", zIndex: "90000000 !important" }}>Settl</b>

                                    </Box>
                                    <div>
                                        <img src={E_Singbg} alt="not found" className="settlimg" />
                                        <div>
                                            <Typography className="settlpara" style={{ fontSize: "12px" }}>
                                                Settl. is a technology-driven accommodation platform focused on providing a convenient and high-quality living expe…
                                            </Typography>
                                            <button className="colivingBtn">Coliving</button>
                                        </div>
                                    </div>
                                    <Box className="raisedflex">
                                        <div >
                                            <b>206.01%</b><br />
                                            <span>Raised</span>
                                        </div>
                                        <div>
                                            <b>3 days</b><br />
                                            <span>Closes in</span>
                                        </div>
                                        <div>
                                            <b>₹10,000</b><br />
                                            <span>Min invest</span>
                                        </div>
                                    </Box>
                                </div>
                            </div>
                        </Box>

                        <div>
                            <Typography>Analytics</Typography><br />
                            <Box className="AnalyticsBox">
                                <Typography>Analytics</Typography>
                            </Box>
                        </div>

                    </Container>

                </div>

            </div>
            {ratio < 1000 ? null : <Footer />}
        </>
    )
}
export default DashBoardESign;