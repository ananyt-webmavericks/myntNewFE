import React, { useState } from "react";
import '../../css/OptVerification/otpVerification.css';
import { Card, CardContent, Button, Typography } from "@mui/material";
import MobilePng from '../../images/assets/otpMobile.png'
import OTPInput, { ResendOTP } from "otp-input-react";
import { makeStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";
import OtpServices from "../../service/OtpService";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLoginAction } from "../../Redux/actions/auth";
import ConsentSerivce from "../../service/ConsentService";
import UserServices from "../../service/UserService";
const useStyles = makeStyles((theme) => ({
    menuItem: {
        marginTop: '11px',
        //  display:'flex-root',

        display: 'flex',
        justifyContent: 'space-between'
    },
}));

export default function OtpVerificationMain() {
    const [OTP, setOTP] = useState("");
    const [WarnMsg, setWarnMsg] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const classes = useStyles();
    let loginType = localStorage.getItem('loginType')
    const { userMail } = useSelector((state) => state.userInfo)
    const { userData } = useSelector((state) => state.loginData)


    const notify = (data) => {
        toast.error(data)
    }
    const notifySuccess = (data) => {
        toast.success(data)
    }
    const handleResendOtp = () => {
        const usernames = userMail ? userMail : userData.email
        try {
            OtpServices.ResendOtpMail(usernames).then(
                (response) => {
                    console.log(response?.data.message)
                })
        }
        catch {
            notify("Try after few minutes")
        }
    }
    console.log(loginType)
    const handleSubmit = (e) => {
        e.preventDefault();
        const usernames = userMail ? userMail : userData.email
        let data = { email: usernames, otp: OTP }
        try {
            OtpServices.VerifyEmailOtp(data).then(
                (response) => {
                    if (response.data.status !== 'false') {
                        localStorage.setItem("access_token", response.data.access_token)
                        dispatch(userLoginAction(response.data.data))
                        if (loginType === 'new') {
                            navigate('/about-you')
                        } else {
                            UserServices.getUserById(response.data.data.id).then(({ data }) => {
                                console.log(data.nationality)
                                if (!data.nationality) {
                                    navigate('/about-you')
                                } else {
                                    ConsentSerivce.getUserConsent(response.data.data.id).then(({ data }) => {
                                        console.log(data)
                                        navigate(data ? '/dashboard' : '/become-investor')
                                    })
                                }
                            })

                        }
                    }
                    else {
                        setOTP('')
                        setWarnMsg(true)
                    }

                })
        }
        catch {
            notify("Try after few minutes")
        }

    }

    const renderButton = buttonProps => {
        return <button style={{ background: 'none', border: 'none', float: 'right', marginRight: '20px', cursor: 'pointer' }} {...buttonProps}>Resend</button>;
    };
    const renderTime = remainingTime => {
        return <span style={{ color: '#777777' }}>Resend after {remainingTime} s</span>;
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
                                inputStyles={{ width: '35px', outline: 'none', height: '35px', background: '#F4F4F4 0% 0% no-repeat padding-box', border: 'none', fontWeight: '600', fontSize: '20px' }}
                            />
                            {WarnMsg &&
                                <Typography style={{ fontSize: '14px', textAlign: 'left', color: '#FF9494', paddingTop: '10px' }}>Invalid OTP! please enter correct OTP.</Typography>}
                            <ResendOTP maxTime={90} onResendClick={() => handleResendOtp()} className={classes.menuItem} renderTime={renderTime} renderButton={renderButton} disable={false} />
                        </div>

                        <button className="sign-up-btn" onClick={handleSubmit} > {loginType === 'new' ? "Sign Up" : "Sign In"}</button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}