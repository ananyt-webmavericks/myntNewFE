import React, { useState, useEffect } from "react";
import { Button, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import services from "../../service/investor.kyc";
import { toast } from 'react-toastify';
import { storeKycDetailsAction } from "../../Redux/actions/verifyKycAction";
import { useFormik } from "formik";
import AadharValSchema from "../../Validations/AadharValSchema";
const data = {
    pan_card: '',
    birth_date: '',
    birth_month: '',
    birth_year: ''
}
export default function KycAadharUid() {

    const [value, setValue] = useState(data)
    const { userData } = useSelector((state) => state.loginData)
    const { userKycData } = useSelector(state => state.kycData)
    const ratio = parseInt(window.innerWidth);
    const kycDonePath = localStorage.getItem('kycDonePath')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            user_id: userData?.id,
            aadhaar_card_number: '',
        },

        validationSchema: AadharValSchema,

        onSubmit: (values) => {
            console.log(values)
            services.verifyAadharKyc(values).then(async res => {
                console.log(res)
                if (res.status === 200 || res.status === 201) {
                    console.log(res.data.data.aadhaar_card_verified)
                    if (res.data.data.aadhaar_card_verified) {
                        toast.success("Aadhar verified  successfully!")
                        await dispatch(storeKycDetailsAction(res.data.data))
                        handleNavigate()
                    } else {
                        toast.error("Invalid aadhar number, please enter valid aadhar number")
                        await dispatch(storeKycDetailsAction(res.data.data))
                    }
                } else {
                    toast.error("Something went wrong, please try again later")
                }
            })
        }
    });
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
                        <form onSubmit={formik.handleSubmit}>
                            <div className="verify-number-container">
                                <span className="verify-number-head">Enter your Aadhar UID</span>
                                <div className="number-verify-container kyc">
                                    <input
                                        type="text"
                                        name="aadhaar_card_number"
                                        value={formik.values.aadhaar_card_number}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="Enter Aadhar UID"
                                        className="phoneNumberInput" />
                                </div>
                                {formik.touched.aadhaar_card_number && <div style={{ marginTop: '4px' }} className="raise-err-text">{formik.errors.aadhaar_card_number}</div>}

                            </div>
                            <div className="verify-button-container" style={{ paddingTop: '28px' }}>
                                <Button type="submit" varient="contained" className="verify-button">Submit</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
            {ratio < 768 ? null : <Footer />}
        </>
    )
}