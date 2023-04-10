import React, { useState } from "react";
import { Button } from "@mui/material";
import '../../css/Dashboard/dashboard.css';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
let myEmptyObj = {};
export default function ProgressNotifyDash({ data }) {
    const _ = require('lodash');
    const ratio = parseInt(window.innerWidth);
    const [showHr, setShowHr] = useState(true);
    const [noData, setNoData] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (ratio < 775) {
            setShowHr(false)
        }

    }, [])

    useEffect(() => {
        if (_.isEmpty(data)) {
            setNoData(true)
        } else {
            setNoData(false)
        }
    }, [data])

    // console.log((data))

    const notifySuccess = (data) => {
        toast.success(data)
    }

    const { userKycData } = useSelector(state => state.kycData)

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
                            : notifySuccess("Already verified! Please check profile")
    }
    // if (noData) {
    //     navigate('/complete-your-profile/verify-address')
    // } else if (!data?.bank_name || !data?.bank_account || !data?.ifsc_code || !data?.bank_account_verified) {
    //     navigate('/complete-your-profile/verify-address')
    // } else {
    //     notifySuccess("Already verified Please check profile")
    // }


    return (
        <>
            <div className="completion-status-round-dashed">
                <div className="main-container-dashboard-part">
                    <div className="sub-main-container-dashboard">
                        <div className="outer-circle-dash first">
                            <div className="inner-circle-dashed" style={{ backgroundColor: '#01965D' }}>
                                <span className="font-inner-circle">1</span>
                            </div>
                        </div>
                        <hr className="dashed-line-new" />
                    </div>
                    <div className="specific-info-section first">
                        <span className="header-info-section-dash">Create Profile</span>
                        <span className="sub-header-info-section-dash">
                            Provide your general information to create a Mynt user account.
                        </span>
                        <Button sx={{
                            borderRadius: '20px', background: '#01965D',
                            width: '200px', margin: 'auto', color: 'white', fontSize: '16px', fontWeight: '600'
                            , '&:hover': { background: '#01965D', color: 'white', boxShadow: '0px 0px 23px #00000029' },
                        }}>Completed</Button>
                    </div>
                </div>

                <div className="main-container-dashboard-part">
                    <div className="sub-main-container-dashboard">
                        {showHr && <hr className="dashed-line-new" />}
                        <div className="outer-circle-dash not-completed">
                            {noData ?
                                <div style={noData
                                    ? { background: '#F8DA36 ', color: 'black' }
                                    :
                                    data?.bank_account
                                        && data?.pan_card
                                        && data?.pan_card_verified
                                        && data?.address_line_1
                                        && data?.city
                                        && data?.state
                                        && data?.country
                                        && data?.pincode
                                        && data?.bank_name
                                        && data?.bank_account
                                        && data?.ifsc_code
                                        && data?.bank_account_verified
                                        && data?.mobile_number
                                        && data?.mobile_number_verified
                                        && data?.aadhaar_card_verified
                                        && data?.aadhaar_card_number
                                        ? { background: '#01965D', color: 'white' }
                                        : { background: '#F8DA36', color: 'black' }} className="inner-circle-dashed not-completed">
                                    <span className="font-inner-circle"  >2</span>
                                </div>
                                :
                                <div style={noData
                                    ? { background: '#F8DA36' }
                                    : data?.bank_account
                                        && data?.pan_card
                                        && data?.pan_card_verified
                                        && data?.address_line_1
                                        && data?.city
                                        && data?.state
                                        && data?.country
                                        && data?.pincode
                                        && data?.bank_name
                                        && data?.bank_account
                                        && data?.ifsc_code
                                        && data?.bank_account_verified
                                        && data?.mobile_number
                                        && data?.mobile_number_verified
                                        && data?.aadhaar_card_verified
                                        && data?.aadhaar_card_number
                                        ? { background: '#01965D' }
                                        : { background: '#F8DA36' }}
                                    className="inner-circle-dashed not-completed">
                                    <span className="font-inner-circle" >2</span>
                                </div>}
                        </div>
                        <hr className="dashed-line-new" />
                    </div>
                    <div className="specific-info-section second">
                        <span className="header-info-section-dash">Complete KYC & Share Bank Details</span>
                        <span className="sub-header-info-section-dash">Provide some identification information and the bank account in which transfer returns.</span>
                        <Button
                            onClick={() => {
                                handleNavigate()
                                localStorage.setItem("kycDonePath", '/dashboard')
                            }}
                            style={noData
                                ? { background: '#F8DA36 ', color: 'black' }
                                :
                                data?.bank_account
                                    && data?.pan_card
                                    && data?.pan_card_verified
                                    && data?.address_line_1
                                    && data?.city
                                    && data?.state
                                    && data?.country
                                    && data?.pincode
                                    && data?.bank_name
                                    && data?.bank_account
                                    && data?.ifsc_code
                                    && data?.bank_account_verified
                                    && data?.mobile_number
                                    && data?.mobile_number_verified
                                    && data?.aadhaar_card_verified
                                    && data?.aadhaar_card_number
                                    ? { background: '#01965D', color: 'white' }
                                    : { background: '#F8DA36', color: 'black' }}
                            sx={{
                                borderRadius: '20px',
                                width: '200px', margin: 'auto', fontSize: '16px', fontWeight: '600'
                                , '&:hover': { background: '#EBEBEB', color: 'black', boxShadow: '0px 0px 23px #00000029' },
                            }}>
                            {noData ? "Complete It " :
                                data?.bank_account
                                    && data?.pan_card
                                    && data?.pan_card_verified
                                    && data?.address_line_1
                                    && data?.city
                                    && data?.state
                                    && data?.country
                                    && data?.pincode
                                    && data?.bank_name
                                    && data?.bank_account
                                    && data?.ifsc_code
                                    && data?.bank_account_verified
                                    && data?.mobile_number
                                    && data?.mobile_number_verified
                                    && data?.aadhaar_card_verified
                                    && data?.aadhaar_card_number
                                    ? "Completed"
                                    : "Complete It "}

                        </Button>
                    </div>
                </div>

                <div className="main-container-dashboard-part">
                    <div className="sub-main-container-dashboard">
                        {showHr && <hr className="dashed-line-new" />}
                        <div className="outer-circle-dash not-completed">
                            <div className="inner-circle-dashed not-completed">
                                <span className="font-inner-circle">3</span>
                            </div>
                        </div>
                    </div>
                    <div className="specific-info-section third">
                        <span className="header-info-section-dash">Explore Deals, Invest and Sign Documents</span>
                        <span className="sub-header-info-section-dash">Learn more about what our platform has to offer and start enrolling by signing the necessary documents.
                        </span>
                        <Button
                            onClick={() => {
                                (data?.bank_account
                                    && data?.pan_card
                                    && data?.pan_card_verified
                                    && data?.address_line_1
                                    && data?.city
                                    && data?.state
                                    && data?.country
                                    && data?.pincode
                                    && data?.bank_name
                                    && data?.bank_account
                                    && data?.ifsc_code
                                    && data?.bank_account_verified
                                    && data?.mobile_number
                                    && data?.mobile_number_verified
                                    && data?.aadhaar_card_verified
                                    && data?.aadhaar_card_number)
                                    && navigate('/dashboard/live-deals')
                            }}
                            sx={{
                                borderRadius: '20px', background: '#9A9A9A',
                                width: '200px', margin: 'auto', color: 'black', fontSize: '16px', fontWeight: '600'
                                , '&:hover': { background: '#9A9A9A', color: 'black', boxShadow: '0px 0px 23px #00000029' },
                            }}>Explore</Button>
                    </div>
                </div>
            </div >
        </>
    )
}