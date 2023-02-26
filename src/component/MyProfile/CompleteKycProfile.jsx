import { Card, CardContent } from "@mui/material";
import React from "react";
import '../../css/MyProfile/myProfile.css';
import KycProfile from '../../images/assets/KycProfile.png'
import { useNavigate } from "react-router-dom";
export default function CompleteKycProfile({data}) {
    const navigate = useNavigate()

    const handleNavigate=()=>{
        localStorage.setItem('navigateToVerifyBank' , true)
        navigate('/complete-your-profile/payment-details')
    }
    return (
        <>
            <Card className="card-complete-kyc-notice">
                <CardContent>
                    <div className="card-complete-container">
                        <img className="image-of-kyc-container" src={KycProfile} width={112} height={112}></img>
                        <div className="text-container-card-kyc">
                            <span className="head-txt-kyc-card">Complete your KYC</span>
                            <span className="sub-txt-kyc-card">As per RBI Mandate, you need to complete your KYC to start investing</span>
                        </div>
                            <button onClick={handleNavigate} className="submit-btn-startup kyc" style={{ maxWidth: '320px' }}>Complete KYC</button>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}