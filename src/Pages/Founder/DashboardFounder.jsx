
import { Button, Card, Container, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import Footer from "../../component/Footer";
import DrawerFounder from "../../component/FounderDrawer/DrawerFounder";
import '../../css/FounderDrawer/Dashboard/RaiseWithMint.css'

const DashboardFounder = () => {
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
                            <Typography className="raise-with-mint">Raise with Myntinvest!</Typography>
                            <Typography className="raise-with-mint-desc">Provide us with all the data required to make your campaign! Make sure to include all the important details to make your campaign as attractive as possible to our investors. </Typography>
                        </div>

                        <Card className="raise-with-mint-card" elevation={5}>
                            <div>
                                <Typography className="e-sign-title">E-sign</Typography>
                                <Typography>E-sign your agreements to finalize Subscriptions in your campaign</Typography>
                            </div>
                            <div>
                                <Button sx={{ color: 'white', fontFamily: 'poppins' }} className="download-button">Download</Button>
                                <span style={{ fontSize: "12px" }} className="action-pending-text">(Action Pending by Mynt)</span>
                            </div>
                        </Card>
                    </Container>

                </div>

            </div>
            {ratio < 1000 ? null : <Footer />}
        </>
    )
}
export default DashboardFounder;