import { Box, Button, Typography } from '@mui/material'
import RaiseBanner from '../../images/assets/RaiseBanner.png'
import '../../css/FounderHome/LandingTop.css'
import React from 'react'

const AutomatedStreamlined = () => {
    return (
        <>
            <Box sx={{ minHeight: '500px', marginBottom: '1em' }}>
                <div className="founderhome-landing-head-container">
                    <div className="founderhome-landing-head-txt-section">
                        {/* <Typography className="test-script-regular">MAKING THE BEST</Typography> */}
                        <Typography className="founderhome-test-script-bold"><span className="test-script-bg">AUTOMATED</span> STREAMLINED</Typography>
                        <Typography className="founderhome-test-script-regular">
                            VENTURE CAPITAL
                            <span className='founderhome-text-script-smallgray'>  AMT.Raised </span>
                            <span className='founderhome-text-script-million'>2.4 Million</span>
                        </Typography>
                        <div className="founderhome-landing-head-section">
                            <span className="founderhome-head-description">Seed to Series C and beyond, Mynt Invest is invested in your success and Growth. Achieve the following benefits by partnering smart, from the start.</span>
                            <Button variant="contained" className="founderhome-getStarted-landing-btn">Apply Now</Button>
                        </div>
                    </div>
                    <div className="founderhome-image-section-landing">
                        <img className="founderhome-banner-home-main" src={RaiseBanner} alt="raise-banner" />
                    </div>
                </div>
            </Box>
        </>
    )
}

export default AutomatedStreamlined