import React, { useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import WhatsAppLogo from '../../images/assets/whatsapp.png'
import { Button, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import OtpServices from "../../service/OtpService";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userEmailAction } from "../../Redux/actions/auth";
import { useEffect } from "react";
import services from "../../service/investor.kyc";
import { storeKycDetailsAction } from "../../Redux/actions/verifyKycAction";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function VerifyNumber() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { userData } = useSelector((state) => state.loginData)
    const { userInfo } = useSelector((state) => state.loginData)
    const [kycData, setkycData] = useState(false)
    const [mobile, setMobile] = useState('')
    const handleChange = (e) => {
        setMobile(e.target.value)
    }

    const { userKycData } = useSelector(state => state.kycData)
    console.log(userKycData)
    const notify = (data) => {
        toast.error(data,{
            position: "top-right",
            style: {
              borderRadius: "3px",
              background: "red",
              color: "#fff",
            },
          })
    }
    const handleSubmit = () => {

        const data = {
            user_id: userData.id,
            mobile_number: "+91" + mobile
        }
        if (mobile === '') {
            notify('Please enter your number')
        } else if (mobile.length !== 10) {
            notify('Please enter valid number')
        } else {
            try {
                !kycData
                    ? OtpServices.VerifyMobileOtp(data).then(
                        async (response) => {
                            console.log(response)
                            if (response.status === 201 || response.status === 200) {
                                await dispatch(storeKycDetailsAction(response.data.data))
                                await dispatch(userEmailAction(data.mobile_number))
                                navigate('/complete-your-profile/verify-otp')
                            }
                            else {
                                console.log("error")
                            }
                        })
                    : OtpServices.VerifyMobileOtpPatch(data).then(
                        async (response) => {
                            console.log(response)
                            if (response.status === 201 || response.status === 200) {
                                await dispatch(storeKycDetailsAction(response.data.data))
                                await dispatch(userEmailAction(data.mobile_number))
                                navigate('/complete-your-profile/verify-otp')
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
    }
    console.log(kycData)
    useEffect(() => {
        const handleNavigate = () => {
            (!userKycData?.mobile_number_verified)
                ? navigate('/complete-your-profile')
                : (
                    !userKycData?.pan_card_verified || !userKycData?.pan_card
                )
                    ? navigate('/complete-your-profile/verify-kyc')
                    : (!userKycData?.address_line_1 || !userKycData?.city || !userKycData?.state || !userKycData?.pincode)
                        ? navigate('/complete-your-profile/verify-address')
                        : (!userKycData?.aadhaar_card_verified || !userKycData?.aadhaar_card_number)
                            ? navigate('/complete-your-profile/verify-kyc/aadhar-uid')
                            : (!userKycData?.bank_account_verified || !userKycData?.ifsc_code || !userKycData?.bank_account || !userKycData?.bank_name)
                                ? navigate('/complete-your-profile/payment-details')
                                : navigate('/dashboard')
        }
        // handleNavigate()
        services.getInvestorKycData(userData.id).then((response, error) => {
            if (response.status === 200 || response.status === 201) {
                setkycData(true)
            } else {
                setkycData(false)
            }
        })
    }, [])
    return (
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
                    <div className="verify-number-container">

                        <span className="verify-number-head">Verify Mobile Number</span>
                        <div className="input-number-box-section">
                            <div className="country-code-container"> <input placeholder="+91" type="number" className="phoneNumberInput" name="countryCode" /></div>
                            <div className="number-verify-container"><input name="mobile_number" value={mobile} onChange={handleChange} type="number" className="phoneNumberInput" /></div>
                        </div>
                        {/* <div className="checkbox-whatsapp-group-verify">
                            <Checkbox
                                {...label}
                                defaultChecked
                                sx={{
                                    color: '#F8DA36',
                                    padding: '0px',
                                    marginRight: '20px',
                                    '&.Mui-checked': {
                                        color: '#F8DA36',
                                    },
                                }}
                            />
                            <img src={WhatsAppLogo} width={17} height={17} style={{ marginRight: '8px' }}></img>
                            <span style={{ fontSize: '14px', color: '#666666' }}>Reach out to me over Whatsapp</span>
                        </div> */}

                    </div>
                    <div className="verify-button-container">
                        <Button varient="contained" onClick={handleSubmit} className="verify-button">Verify</Button>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}
