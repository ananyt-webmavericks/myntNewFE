import React, { useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import { makeStyles } from "@material-ui/styles";
import { Button, Card, CardContent } from "@mui/material";
import '../../css/CompleteYourProfile/completeYourProfile.css';
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import { useDispatch, useSelector } from "react-redux";
import OtpServices from "../../service/OtpService";
import { toast } from 'react-toastify';
import { storeKycDetailsAction } from "../../Redux/actions/verifyKycAction";
import services from "../../service/investor.kyc";

const useStyles = makeStyles((theme) => ({
    menuItem: {
        marginTop: '11px',
        display: 'flex',
        justifyContent: 'space-between'
    },
}));
export default function VerifyNumberOtp() {
    const ratio = parseInt(window.innerWidth);
    const navigate = useNavigate();
    const [OTP, setOTP] = useState("");
    const { userData } = useSelector((state) => state.loginData)
    const { userMail } = useSelector((state) => state.userInfo)
    const { userKycData } = useSelector(state => state.kycData)
    const classes = useStyles();
    const dispatch = useDispatch()
    const kycDonePath = localStorage.getItem('kycDonePath')
    // const navigateToProfile = localStorage.getItem('navigateToVerifyMobile')
    const notify = (data) => {
        toast.error(data)
    }

    const handleResendOtp = () => {
        const data = {
            user_id: userData.id,
            mobile_number: userMail
        }
        try {
            OtpServices.VerifyMobileOtp(data).then(
                (response) => {
                    console.log(response)
                    if (response.status === 201 || response.status === 200) {
                        console.log("success")
                    }
                    else {
                        console.log("error")
                    }
                })
        }
        catch {
            notify("Try after few minutes")
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = { user_id: userData.id, otp: OTP }
        try {
            OtpServices.MobileOtp(data).then(
                (response) => {
                    if (response.data.status !== 'false') {

                        services.getInvestorKycData(userData.id).then((response) => {
                            if (response.status === 200) {
                                dispatch(storeKycDetailsAction(response.data))
                                handleNavigate()
                                console.log(response.data)
                            }
                        })

                        // navigateToProfile ? navigate('/my-profile') : navigate('/complete-your-profile/verify-kyc')
                        localStorage.removeItem('navigateToVerifyMobile')
                    }
                    else {
                        setOTP('')
                    }

                })
        }
        catch {
            notify("Try after few minutes")
        }

    }


    const handleNavigate = () => {
        (!userKycData?.address_line_1 || !userKycData?.city || !userKycData?.state || !userKycData?.pincode)
            ? navigate('/complete-your-profile/verify-address')
            : (!userKycData?.mobile_number)
                ? navigate('/complete-your-profile')
                : (
                    // !userKycData?.bank_account_verified ||
                    !userKycData?.ifsc_code || !userKycData?.bank_account || !userKycData?.bank_name)
                    ? navigate('/complete-your-profile/payment-details')
                    : (!userKycData?.pan_card
                        // || !userKycData?.pan_card_verified
                    )
                        ? navigate('/complete-your-profile/verify-kyc')
                        : navigate(kycDonePath ? kycDonePath : '/dashboard')
    }

    const renderButton = buttonProps => {
        return <button style={{ background: 'none', border: 'none', float: 'right', marginRight: '20px' }} {...buttonProps}>Resend</button>;
    };
    const renderTime = remainingTime => {
        return <span style={{ color: '#777777' }}>resend after {remainingTime} s</span>;
    };
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
                        <div className="verify-number-otp-section">
                            <span className="verify-number-head">Verify Mobile Number</span>
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
                            <ResendOTP maxTime={90} className={classes.menuItem} style={{ width: '330px', display: 'flex-root' }} renderTime={renderTime} renderButton={renderButton} disable={false} onResendClick={() => handleResendOtp()} />
                        </div>
                        <div className="verify-button-container">
                            <Button varient="contained" onClick={handleSubmit} className="verify-button">Verify</Button>
                        </div>

                    </CardContent>
                </Card>
            </div>
            {ratio < 768 ? null : <Footer />}
        </>

    )
}