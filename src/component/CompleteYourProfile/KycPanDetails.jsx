import React, { useState, useEffect } from "react";
import { Button, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import services from "../../service/investor.kyc";
import { toast } from "react-hot-toast";
import { storeKycDetailsAction } from "../../Redux/actions/verifyKycAction";
import { useRef } from "react";
const data = {
    pan_card: '',
    birth_date: '',
    birth_month: '',
    birth_year: ''
}
export default function KycPanDetails() {

    const [value, setValue] = useState(data)
    const { userData } = useSelector((state) => state.loginData)
    const { userKycData } = useSelector(state => state.kycData)
    const ratio = parseInt(window.innerWidth);
    console.log(userKycData)
    const kycDonePath = localStorage.getItem('kycDonePath')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const inputRefs = [useRef(null), useRef(null), useRef(null)];

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }
    const notify = (data) => {
        toast.error(data)
    }
    const handleSubmit = async () => {
        const val = {
            user_id: userData.id,
            pan_card: value.pan_card.toUpperCase(),
            birth_date: value.birth_date,
            birth_month: value.birth_month,
            birth_year: value.birth_year
        }
        if (value.pan_card === '' && value.birth_date === "" && value.birth_month === "" && value.birth_year === '') {
            notify('Please enter pan details')
        } else if (value.pan_card === '') {
            notify('Please enter pan number')
        } else if (value.birth_date === '') {
            notify('Please enter  date')
        } else if (value.birth_month === '') {
            notify('Please enter  month')
        } else if (value.birth_year === '') {
            notify('Please enter  year')
        } else {
            try {
                services.VerifyKycPan(val).then(
                    async (response) => {
                        console.log(response)
                        if (response.status === 201 || response.status === 200) {
                            const kycDetails = await services.getInvestorKycData(userData.id)
                            if (kycDetails.status === 200) {
                                toast.success("Pan card verified!")
                                await dispatch(storeKycDetailsAction(response.data.data))
                            } else {
                                toast.error("Please enter valid details!")
                            }
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

    const handleInput = (index, event) => {
        const input = event.target;
        if (input.value.length === 2) {
            inputRefs[index + 1]?.current?.focus();
        }
        if (input.value.length === 4 && index < 2) {
            inputRefs[index + 1]?.current?.focus();
        }
    };

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
                            : navigate(kycDonePath ? kycDonePath : '/dashboard')
    }

    useEffect(() => {
        handleNavigate()
    }, [userKycData])

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

                        <div className="verify-number-container">
                            <span className="verify-number-head">Kyc</span>
                            <div className="number-verify-container kyc"><input type="text" name="pan_card" value={value.pan_card} onChange={handleChange} placeholder="Enter PAN Number" className="phoneNumberInput" /></div>
                            <div className="input-number-box-section kyc">
                                <div className="number-verify-container kyc small">
                                    <input
                                        ref={inputRefs[0]}
                                        onInput={(e) => handleInput(0, e)}
                                        name="birth_date" value={value.birth_date} onChange={handleChange} type="number" placeholder="DD" className="phoneNumberInput" />
                                </div>
                                <div className="number-verify-container kyc small">
                                    <input
                                        ref={inputRefs[1]}
                                        onInput={(e) => handleInput(1, e)}
                                        name="birth_month" value={value.birth_month} onChange={handleChange} type="number" placeholder="MM" className="phoneNumberInput" />
                                </div>
                                <div className="number-verify-container kyc small">
                                    <input
                                        ref={inputRefs[2]}
                                        onInput={(e) => handleInput(2, e)}
                                        name="birth_year" value={value.birth_year} onChange={handleChange} type="number" placeholder="YYYY" className="phoneNumberInput" />
                                </div>
                            </div>
                        </div>
                        <div className="verify-button-container" style={{ paddingTop: '28px' }}>
                            <Button varient="contained" className="verify-button" onClick={handleSubmit}>Submit</Button>
                        </div>

                    </CardContent>
                </Card>
            </div>
            {ratio < 768 ? null : <Footer />}
        </>
    )
}