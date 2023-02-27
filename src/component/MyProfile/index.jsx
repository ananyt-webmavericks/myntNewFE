import React, { useState, useEffect } from "react";
import '../../css/MyProfile/myProfile.css';
import { Button } from "@mui/material";
import BrownArrow from '../../images/assets/brownArrow.png'
import CompleteKycProfile from "./CompleteKycProfile";
import BankDetailsAfterKyc from "./BankDetailsAfterKyc";
import { useSelector } from "react-redux";
import services from "../../service/investor.kyc";
import { useNavigate } from "react-router-dom";

export default function MyProfileMain() {
    const _ = require('lodash');
    const [activeBtn, setActiveBtn] = useState(1)
    const navigate = useNavigate()
    const [hideDivShow, setHideDivShow] = useState(true)
    const [data, setData] = useState({})
    const { userData } = useSelector((state) => state.loginData)
    useEffect(() => {
        if(_.isEmpty(userData)){
            console.log('data not found')
        }else{
            services.getInvestorKycData(userData?.id).then((response) => {
                setData(response.data)
            })
        }
       
    }, [])

    const handleMobileNavigation = () => {
        localStorage.setItem("navigateToVerifyMobile", true)
        navigate('/complete-your-profile')
    }

    const handleAddressNavigation = () => {
        localStorage.setItem("navigateToVerifyAddress", true)
        navigate('/complete-your-profile/verify-address')
    }
    console.log(data)
    return (
        <div className="my-profile-container">
            <span className="get-started-heading">My Profile</span>
            <div className="btn-section-my-profile">
                <div className="active-btn-container" style={activeBtn === 1 ? { background: 'black', color: 'white' } : { background: '#F4F4F4', color: 'black' }} onClick={() => { setActiveBtn(1); setHideDivShow(true) }}>
                    General Details
                </div>
                <div className="active-btn-container" style={activeBtn === 2 ? { background: 'black', color: 'white' } : { background: '#F4F4F4', color: 'black' }} onClick={() => { setActiveBtn(2); setHideDivShow(false) }}>
                    Bank Details
                </div>
            </div>
            {hideDivShow ?
                <>
                    <div className="details-conatiner-myprofile">
                        <span className="heading-personal-details" >Personal Details</span>
                        <div className="verifyAddress-input">
                            <input type="text" disabled value={_.isEmpty(data) ? '' : userData?.name ? userData?.name : (userData?.first_name).toUpperCase() + " " + (userData?.last_name).toUpperCase()} placeholder="Full Name" className="verifyAddress-input-section" />
                        </div>
                        <div className="verifyAddress-input">
                            <input type="text" disabled value={_.isEmpty(data) ? '' : userData?.email} placeholder="Email Address" className="verifyAddress-input-section" />
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
                            <a href="#" onClick={()=>navigate('/complete-your-profile/verify-address')} style={{cursor:'pointer'}} className="link-for-complete-kyc">Complete KYC   <img src={BrownArrow} width={10} height={10}></img></a>
                            </>
                            : data?.bank_account === "" && data?.pan_card === "" && data?.address_line_1 === ""
                                ?
                                <>
                                    <Button variant="contained" className="kyc-pending-btn-my-profile" >KYC Pending</Button>
                                    <a href="#" onClick={()=>navigate('/complete-your-profile/verify-address')} style={{cursor:'pointer'}} className="link-for-complete-kyc">Complete KYC   <img src={BrownArrow} width={10} height={10}></img></a>
                                </>
                                :
                                <>
                                    <Button variant="contained"  className="kyc-pending-btn-my-profile completed" >KYC Completed</Button>

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
                            <input disabled value={ _.isEmpty(data) ? '' :data.address_line_1 + "," + data.address_line_2 + "," + data.city + "," + data.state + "," + data.country + "," + data.pincode} type="text" placeholder="Full Address" style={{ width: '95%' }} className="verifyAddress-input-section" />
                            <span style={{ cursor: 'pointer', color: 'gray' }} onClick={handleAddressNavigation} >Edit</span>
                        </div>
                    </div>
                </>
                :
                <>
                    { _.isEmpty(data) ?
                        <CompleteKycProfile data={data} />
                        :
                        <BankDetailsAfterKyc data={data} />
                    }

                </>
            }
        </div>
    )
}