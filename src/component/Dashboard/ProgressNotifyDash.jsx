import React , {useState} from "react";
import { Button } from "@mui/material";
import '../../css/Dashboard/dashboard.css';
import { useEffect } from "react";
export default function ProgressNotifyDash() {
    const ratio = parseInt(window.innerWidth);
    const [showHr, setShowHr] = useState(true);

     useEffect(() => {
        if (ratio < 775) {
            setShowHr(false)
        }
        
    }, [])

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
                    <span className="sub-header-info-section-dash">Some description will come Here about the profile</span>
                    <Button sx={{
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
                        <div className="inner-circle-dashed not-completed">
                            <span className="font-inner-circle">2</span>
                        </div>
                    </div>
                    <hr className="dashed-line-new" />
                </div>
                <div className="specific-info-section second">
                    <span className="header-info-section-dash">Complete KYC & Share Bank Details</span>
                    <span className="sub-header-info-section-dash">Provide some identification details and The bank account in which we should credit returns</span>
                    <Button sx={{
                        borderRadius: '20px', background: '#F8DA36',
                        width: '200px', margin: 'auto', color: 'black', fontSize: '16px', fontWeight: '600'
                        , '&:hover': { background: '#F8DA36', color: 'black', boxShadow: '0px 0px 23px #F4DC5991' },
                    }}>Complete It</Button>
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
                    <span className="sub-header-info-section-dash">Some description will come Here about the profile</span>
                    <Button sx={{
                        borderRadius: '20px', background: '#9A9A9A',
                        width: '200px', margin: 'auto', color: 'black', fontSize: '16px', fontWeight: '600'
                        , '&:hover': { background: '#9A9A9A', color: 'black', boxShadow: '0px 0px 23px #00000029' },
                    }}>Explore</Button>
                </div>
            </div>
        </div>
    )
}