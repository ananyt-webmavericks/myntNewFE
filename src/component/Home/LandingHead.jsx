import React from "react";
import { Typography, Box, Button } from "@mui/material";
import '../../css/Home/landingHead.css'
import Banner from '../../images/assets/banner.png'
import { useNavigate } from "react-router-dom";
import Lottie from 'react-lottie';
import bgLine from '../../images/investors/headerBgLine.png'
import animationData from '../../lotties/homePage';
export default function LandingHead() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const navigate = useNavigate()
    return (
        <Box sx={{ minHeight: '500px', marginBottom: '1em' }}>
            <div className="landing-head-container">
                <div className="landing-head-txt-section">
                    <Typography className="test-script-regular-makingbest">MAKING THE BEST</Typography>
                    <Typography className="test-script-bold"><span className="test-script-bg">STARTUP </span> OPPORTUNITIES</Typography>
                    <Typography className="test-script-regular-makingbest">ACCESSIBLE</Typography>
                    <div className="landing-head-section">
                        <span className="head-description">
                            Own a small stake in the next big startup and diversify your portfolio tenfolds.
                        </span>
                        <Button
                            variant="contained"
                            onClick={() => navigate('/get-started')} className="getStarted-landing-btn">
                            Get Started
                        </Button>
                        <Typography className="subhead-description" style={{ fontWeight: "bold" }}>
                            Are you a founder?
                            <span
                                className="test-script-bg"
                                style={{ cursor: 'pointer' }}
                                onClick={() => navigate('/founder/application')}> Raise Capital on Mynt
                            </span>
                        </Typography>
                    </div>
                </div>
                <img className="homeHeaderBgline" src={bgLine} width={'100%'} height={'200px'}/>
                <div className="image-section-landing">
                    <div className="banner-home-main">
                        <Lottie

                            options={defaultOptions}

                        />
                    </div>
                </div>
            </div>
        </Box>
    )
}