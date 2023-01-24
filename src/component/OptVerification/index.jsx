import React, { useState } from "react";
import '../../css/OptVerification/otpVerification.css';
import { Card, CardContent, Button } from "@mui/material";
import MobilePng from '../../images/assets/otpMobile.png'
import OTPInput, { ResendOTP } from "otp-input-react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    menuItem: {
             marginTop:'11px',
             display:'flex-root',
        },
    }));

export default function OtpVerificationMain() {
    const [OTP, setOTP] = useState("");
    const classes = useStyles();
    const renderButton = buttonProps => {
        return <button style={{background:'none' , border:'none',float:'right' , marginRight:'20px'}} {...buttonProps}>Resend</button>;
      };
    const renderTime = remainingTime => {
        return <span style={{display:'none'}}>{remainingTime} seconds remaining</span>;
      };
    return (
        <div className="verification-container ">
            <div className="get-started-section">
                <span className="get-started-heading">OTP Verification</span>
                <Card className="card-get-started">
                    <CardContent>
                        <div className="otp-verify-container">
                            <img src={MobilePng} className="otp-verification-image"></img>
                        </div>
                        <span className="get-started-subheading">We’ve sent an OTP to your registered email ID. Enter it here to verify your email and continue!</span>
                        <div className="otp-verification-section">
                        <OTPInput
                            value={OTP}
                            onChange={setOTP}
                            autoFocus
                            OTPLength={6}
                            otpType="number"
                            disabled={false}
                            // secure
                            inputStyles={{width:'35px' , height:'35px',background: '#F4F4F4 0% 0% no-repeat padding-box',border:'none' , fontWeight:'600',fontSize:'20px'}}
                        />
                        <ResendOTP className={classes.menuItem} style={{display:'flex-root'}} renderTime={renderTime} renderButton={renderButton} disable={false} handelResendClick={() => console.log("Resend clicked")} />
                        </div>
                        <button  className="sign-up-btn">Sign Up</button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}