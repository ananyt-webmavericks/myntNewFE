import { Box, Button, Typography } from "@mui/material";
import RaiseBanner from "../../images/assets/RaiseBanner.png";
import "../../css/FounderHome/LandingTop.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../../lotties/HomeFounder.json";
import graphline from "../../images/founder/graphLines.png";
const AutomatedStreamlined = () => {
  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Box sx={{ minHeight: "500px", marginBottom: "1em" }}>
        <div className="founderhome-landing-head-container">
          <div className="founderhome-landing-head-txt-section">
            {/* <Typography className="test-script-regular">MAKING THE BEST</Typography> */}
            <Typography className="founderhome-test-script-bold">
              <h2>
                <b className="test-script-bg">AUTOMATED,</b> STREAMLINED
              </h2>
            </Typography>
            <Typography className="founderhome-test-script-regular">
              VENTURE CAPITAL
              {/* <span className='founderhome-text-script-smallgray'>  AMT.Raised </span>
                            <span className='founderhome-text-script-million'>2.4 Million</span> */}
            </Typography>
            
            <div className="founderhome-landing-head-section">
              <span className="founderhome-head-description">
                Use the power of community and raise funds while growing your
                brand & <br /> increasing sales.{" "}
              </span>
              <div className="founderhome-image-section-landing-raise-banner">
              <img style={{ width: "100%" }} src={RaiseBanner} />
            </div>
            <div className="founderhome-getStarted-landing-btn-wrapper"  >
              <Button
                variant="contained"
                onClick={() => navigate("/founder/application")}
                className="founderhome-getStarted-landing-btn"
              >
                Apply Now
              </Button>
              </div>
            </div>
          </div>
          <div className="founderhome-image-section-landing">
            <img
              style={{ position: "absolute", height: 470 }}
              src={graphline}
            />
            <Lottie style={{ marginLeft: 20 }} options={defaultOptions} />
          </div>
        </div>
      </Box>
    </>
  );
};

export default AutomatedStreamlined;
