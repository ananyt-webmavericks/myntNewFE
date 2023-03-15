import React, { useState, useEffect } from "react";
import '../../css/MyProfile/myProfile.css';
import { Button } from "@mui/material";
import BrownArrow from '../../images/assets/brownArrow.png'
import CompleteKycProfile from "./CompleteKycProfile";
import BankDetailsAfterKyc from "./BankDetailsAfterKyc";
import { useDispatch, useSelector } from "react-redux";
import services from "../../service/investor.kyc";
import { useNavigate } from "react-router-dom";
import { storeKycDetailsAction } from "../../Redux/actions/verifyKycAction";
import { toast } from "react-toastify";

export default function MyProfileMain() {
    const _ = require('lodash');
    const [activeBtn, setActiveBtn] = useState(1)
    const navigate = useNavigate()
    const [hideDivShow, setHideDivShow] = useState(true)
    const [data, setData] = useState({})
    const dispatch = useDispatch()
    const { userData } = useSelector((state) => state.loginData)
    const { userKycData } = useSelector(state => state.kycData)
    useEffect(() => {
        if (_.isEmpty(userData)) {
            console.log('data not found')
        } else {
            services.getInvestorKycData(userData?.id).then((response) => {
                dispatch(storeKycDetailsAction(response.data))
                setData(response.data)
            })
        }

    }, [userData])


    const handleNavigate = () => {
        localStorage.setItem("kycDonePath", '/my-profile')

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
                        : toast.success("Your KYC is already completed!")
    }

    const handleMobileNavigation = () => {
        localStorage.setItem("navigateToVerifyMobile", true)
        navigate('/complete-your-profile')
    }

    const handleAddressNavigation = () => {
        localStorage.setItem("navigateToVerifyAddress", true)
        navigate('/complete-your-profile/verify-address')
    }
    console.log(userKycData)
    return (
        <div className="my-profile-container">
            <span className="get-started-heading">My Profile</span>
            <div className="btn-section-my-profile">
                <div className="active-btn-container" style={activeBtn === 1 ? { background: 'black', color: 'white', width: 'auto' } : { background: '#F4F4F4', color: 'black', width: 'auto' }} onClick={() => { setActiveBtn(1); setHideDivShow(true) }}>
                    General Details
                </div>
                <div className="active-btn-container" style={activeBtn === 2 ? { background: 'black', color: 'white', width: 'auto' } : { background: '#F4F4F4', color: 'black', width: 'auto' }} onClick={() => { setActiveBtn(2); setHideDivShow(false) }}>
                    Bank Details
                </div>
            </div>
            {hideDivShow ?
                <>
                    <div className="details-conatiner-myprofile">
                        <span className="heading-personal-details" >Personal Details</span>
                        <div className="verifyAddress-input">
                            <input
                                type="text"
                                disabled
                                value={
                                    (_.isEmpty(data))
                                        ? userData?.first_name?.length > 0
                                            ? (userData?.first_name).toUpperCase() + " " + (userData?.last_name).toUpperCase()
                                            : ""
                                        : data?.name
                                            ? (data?.first_name).toUpperCase() + " " + (data?.last_name).toUpperCase()
                                            : ""} placeholder="Full Name" className="verifyAddress-input-section" />
                        </div>
                        <div className="verifyAddress-input">
                            <input
                                type="text"
                                disabled
                                value={(_.isEmpty(data))
                                    ? userData?.email?.length > 0
                                        ? userData?.email
                                        : ""
                                    : data?.email
                                        ? data?.email
                                        : ""}
                                placeholder="Email Address"
                                className="verifyAddress-input-section" />
                        </div>
                        <div style={{ marginTop: '20px' }} className="input-number-box-section">
                            <div className="country-code-container" >
                                <input value={_.isEmpty(data) ? '' : data?.mobile_number} disabled placeholder="+91" type="number" className="phoneNumberInput" name="countryCode" />
                            </div>
                            <div className="number-verify-container" style={{ width: '100%' }}>
                                <input disabled value={_.isEmpty(data) ? '' : data?.mobile_number.slice(3)} type="text" placeholder="contact number" style={{ width: '95%' }} className="verifyAddress-input-section" />
                                <span style={{ cursor: 'pointer', color: 'gray' }} onClick={handleMobileNavigation} >Edit</span>
                            </div>
                        </div>
                    </div>
                    <div className="details-conatiner-myprofile second">
                        <span className="heading-personal-details" >KYC Details</span>
                        <div style={{ display: 'flex', marginTop: '20px', alignItems: 'center' }}>
                            {_.isEmpty(data) ?
                                <>
                                    <Button variant="contained" className="kyc-pending-btn-my-profile" >KYC Pending</Button>
                                    <a href="#" onClick={handleNavigate} style={{ cursor: 'pointer' }} className="link-for-complete-kyc">Complete KYC   <img src={BrownArrow} width={10} height={10}></img></a>
                                </>
                                : !userKycData?.bank_account
                                    || !userKycData?.pan_card
                                    // && !userKycData?.pan_card_verified
                                    || !userKycData?.address_line_1
                                    || !userKycData?.city
                                    || !userKycData?.state
                                    || !userKycData?.country
                                    || !userKycData?.pincode
                                    || !userKycData?.bank_name
                                    || !userKycData?.bank_account
                                    || !userKycData?.ifsc_code
                                    // && !userKycData?.bank_account_verified
                                    || !userKycData?.mobile_number
                                    ?
                                    <>
                                        <Button variant="contained" className="kyc-pending-btn-my-profile" >KYC Pending</Button>
                                        <a href="#" onClick={handleNavigate} style={{ cursor: 'pointer' }} className="link-for-complete-kyc">Complete KYC   <img src={BrownArrow} width={10} height={10}></img></a>
                                    </>
                                    :
                                    <>
                                        <Button variant="contained" className="kyc-pending-btn-my-profile completed" >KYC Completed</Button>
                                    </>
                            }
                        </div>
                    </div>
                    <div className="details-conatiner-myprofile">
                        <span className="heading-personal-details" >Linkedin Profile</span>
                        <div className="verifyAddress-input">
                            <input type="text" placeholder="Linkedin Profile" className="verifyAddress-input-section" />
                        </div>
                    </div>
                    <div className="details-conatiner-myprofile">
                        <span className="heading-personal-details" >Address Details</span>
                        <div className="verifyAddress-input" style={{ width: '100%' }}>
                            <input disabled value={_.isEmpty(data) ? '' : data.address_line_1 + "," + data.address_line_2 + "," + data.city + "," + data.state + "," + data.country + "," + data.pincode} type="text" placeholder="Full Address" style={{ width: '95%' }} className="verifyAddress-input-section" />
                            <span style={{ cursor: 'pointer', color: 'gray' }} onClick={handleAddressNavigation} >Edit</span>
                        </div>
                    </div>
                </>
                :
                <>
                    {_.isEmpty(data) ?
                        <CompleteKycProfile data={data} />
                        :
                        <BankDetailsAfterKyc data={data} />
                    }

                </>
            }
        </div>
    )
}