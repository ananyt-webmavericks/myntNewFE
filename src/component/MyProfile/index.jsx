import React, { useState } from "react";
import '../../css/MyProfile/myProfile.css';
import { Button } from "@mui/material";
import BrownArrow from '../../images/assets/brownArrow.png'
import CompleteKycProfile from "./CompleteKycProfile";
import BankDetailsAfterKyc from "./BankDetailsAfterKyc";
export default function MyProfileMain() {
    const [activeBtn, setActiveBtn] = useState(1)
    const [hideDivShow,setHideDivShow] = useState(true)
    return (
        <div className="my-profile-container">
            <span className="get-started-heading">My Profile</span>
            <div className="btn-section-my-profile">
                <div className="active-btn-container" style={activeBtn === 1 ? { background: 'black', color: 'white' } : { background: '#F4F4F4', color: 'black' }} onClick={() => {setActiveBtn(1); setHideDivShow(true)}}>
                    General Details
                </div>
                <div className="active-btn-container" style={activeBtn === 2 ? { background: 'black', color: 'white' } : { background: '#F4F4F4', color: 'black' }} onClick={() => {setActiveBtn(2); setHideDivShow(false)}}>
                    Bank Details
                </div>
            </div>
           {hideDivShow ?
            <>
            <div className="details-conatiner-myprofile">
                <span className="heading-personal-details" >Personal Details</span>
                <div className="verifyAddress-input">
                    <input type="text" placeholder="Full Name" className="verifyAddress-input-section" />
                </div>
                <div className="verifyAddress-input">
                    <input type="text" placeholder="Email Address" className="verifyAddress-input-section" />
                </div>
                <div style={{ marginTop: '20px' }} className="input-number-box-section">
                    <div className="country-code-container" > <input placeholder="+91" type="number" className="phoneNumberInput" name="countryCode" /></div>
                    <div className="number-verify-container" style={{ width: '100%' }}><input type="number" style={{ position: 'static' }} placeholder="Contact Number" className="phoneNumberInput" name="countryCode" /></div>
                </div>
            </div>
            <div className="details-conatiner-myprofile second">
                <span className="heading-personal-details" >KYC Details</span>
                <div style={{ display: 'flex', marginTop: '20px', alignItems: 'center' }}>
                    <Button variant="contained" className="kyc-pending-btn-my-profile" >KYC Pending</Button>
                    <a href="#" className="link-for-complete-kyc">Complete KYC   <img src={BrownArrow} width={10} height={10}></img></a>
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
                <div className="verifyAddress-input">
                    <input type="text" placeholder="Full Address" className="verifyAddress-input-section" />
                </div>
            </div>
            </>
            :
            <>
            <CompleteKycProfile />
            <BankDetailsAfterKyc />
            </>
            }
        </div>
    )
}