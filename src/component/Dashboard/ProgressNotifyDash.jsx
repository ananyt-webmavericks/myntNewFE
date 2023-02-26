import React, { useState } from "react";
import { Button } from "@mui/material";
import '../../css/Dashboard/dashboard.css';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
export default function ProgressNotifyDash(data) {

    const ratio = parseInt(window.innerWidth);
    const [showHr, setShowHr] = useState(true);
    const navigate = useNavigate()
    useEffect(() => {
        if (ratio < 775) {
            setShowHr(false)
        }

    }, [])
    const notifySuccess = (data) => {
        toast.success(data)
    }

    const handleNavigate = ()=>{
        if(data.bank_account ===''){
            navigate('/complete-your-profile')
        }
        else{
           
            notifySuccess("Already verified Please check profile")
        }
    }


    return (
        <div className="completion-status-round-dashed">
            <div className="main-container-dashboard-part">
                <div className="sub-main-container-dashboard">
                    <div className="outer-circle-dash first">
                        <div className="inner-circle-dashed">
                            <span className="font-inner-circle">1</span>
                        </div>
                    </div>
                    <hr className="dashed-line-new" />
                </div>
                <div className="specific-info-section first">
                    <span className="header-info-section-dash">Create Profile</span>
                    <span className="sub-header-info-section-dash">Provide your general information to create a Mynt user account.</span>
                    <Button  sx={{
                        borderRadius: '20px', background: '#01965D',
                        width: '200px', margin: 'auto', color: 'white', fontSize: '16px', fontWeight: '600'
                        , '&:hover': { background: '#01965D', color: 'white', boxShadow: '0px 0px 23px #00000029' },
                    }}>Completed</Button>
                </div>
            </div>

            {/* <hr className="dashed-line" /> */}
            <div className="main-container-dashboard-part">
                <div className="sub-main-container-dashboard">
                    {showHr && <hr className="dashed-line-new" />}
                    <div className="outer-circle-dash not-completed">
                        <div style={data.bank_account ===''? {background: '#EBEBEB' }: {background: '#F8DA36'}} className="inner-circle-dashed not-completed">
                            <span className="font-inner-circle" >2</span>
                        </div>
                    </div>
                    <hr className="dashed-line-new" />
                </div>
                <div className="specific-info-section second">
                    <span className="header-info-section-dash">Complete KYC & Share Bank Details</span>
                    <span className="sub-header-info-section-dash">Provide some identification information and the bank account in which transfer returns.</span>
                    <Button  
                    onClick={handleNavigate}
                    style={data.bank_account ===''? {background: '#EBEBEB',color:'black' }: {background: '#01965D' , color:'white'}}
                    sx={{
                        borderRadius: '20px',
                        width: '200px', margin: 'auto', fontSize: '16px', fontWeight: '600'
                        , '&:hover': { background: '#F8DA36', color: 'black', boxShadow: '0px 0px 23px #F4DC5991' },
                    }}>
                        {data.bank_account ==='' ? "Complete It ": "Completed"}
                    
                        </Button>
                </div>
            </div>
            {/* <hr className="dashed-line-two" /> */}
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
                    <span className="sub-header-info-section-dash">Learn more about what our platform has to offer and start investing by signing the necessary documents. </span>
                    <Button 
                    sx={{
                        borderRadius: '20px', background: '#9A9A9A',
                        width: '200px', margin: 'auto', color: 'black', fontSize: '16px', fontWeight: '600'
                        , '&:hover': { background: '#9A9A9A', color: 'black', boxShadow: '0px 0px 23px #00000029' },
                    }}>Explore</Button>
                </div>
            </div>
        </div>
    )
}