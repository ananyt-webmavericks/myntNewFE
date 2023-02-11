import React from "react";
import { Typography, Box, Button } from "@mui/material";
import '../../css/Home/landingHead.css'
import Banner from '../../images/assets/banner.png'
export default function LandingHead() {

    return (
        <Box sx={{ minHeight: '500px', marginBottom: '1em' }}>
            <div className="landing-head-container">
                <div className="landing-head-txt-section">
                    <Typography className="test-script-regular">MAKING THE BEST</Typography>
                    <Typography className="test-script-bold"><span className="test-script-bg">STARTUP</span> OPPORTUNITIES</Typography>
                    <Typography className="test-script-regular">ACCESSIBLE</Typography>
                    <div className="landing-head-section">
                        <span className="head-description">Own a small stake in the next big startup and diversify your portfolio ten folds.</span>
                        <Button variant="contained" className="getStarted-landing-btn">Get Started</Button>
                        <Typography className="subhead-description">Are you a founder?<span className="test-script-bg"> Raise Capital on Mynt</span></Typography>
                    </div>
                </div>
                <div className="image-section-landing">
                    <img  className="banner-home-main" src={Banner} alt="banner" />
                </div>
            </div>
        </Box>
    )
}
