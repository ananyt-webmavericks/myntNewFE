import { Box, Button, Typography } from '@mui/material'
import RaiseBanner from '../../images/assets/RaiseBanner.png'
import '../../css/FounderHome/LandingTop.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Lottie from 'react-lottie'
import animationData from '../../lotties/HomeFounder.json';
import { useSelector } from 'react-redux'

const AutomatedStreamlined = () => {
  const navigate = useNavigate()
  const { userData } = useSelector((state) => state.loginData)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <>
      <Box sx={{ minHeight: '500px', marginBottom: '1em' }}>
        <div className="founderhome-landing-head-container">
          <div className="founderhome-landing-head-txt-section">
            {/* <Typography className="test-script-regular">MAKING THE BEST</Typography> */}
            <Typography className="founderhome-test-script-bold">
              <h2><b className="test-script-bg">AUTOMATED,</b> STREAMLINED</h2>
            </Typography>
            <Typography className="founderhome-test-script-regular">
              VENTURE CAPITAL
              {/* <span className='founderhome-text-script-smallgray'>  AMT.Raised </span>
                            <span className='founderhome-text-script-million'>2.4 Million</span> */}
            </Typography>
            <div className="founderhome-landing-head-section">
              <span className="founderhome-head-description">Use the power of community and raise funds while growing your brand & <br /> increasing sales. </span>
              {userData?.user_type === 'INVESTOR' ?
                null :

                < Button variant="contained" onClick={() => { userData?.user_type === 'FOUNDER' ? navigate('/dashboard-founder') : navigate('/founder/application') }} className="founderhome-getStarted-landing-btn">
                  {userData?.user_type === 'FOUNDER' ? 'Go To Dashboard' : 'Apply Now'}
                </Button>
              }

            </div>
          </div>
          <div className="founderhome-image-section-landing">
            <Lottie
              options={defaultOptions}
            />
          </div>
        </div>
      </Box >
    </>
  )
}
export default AutomatedStreamlined
