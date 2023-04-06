import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import '../../css/LiveDealsDetails/liveDetails.css'
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import Pinterest from '../../images/highlights/pinterest.png';
import Twitter from '../../images/highlights/twitter.png';
import Facebook from '../../images/highlights/facebook.png';
import Linkdin from '../../images/highlights/linkdin.png';
export default function DealTerm({ blurAmount, dealTermData, companyData }) {
    const [gridxsMainFirst, setGridxsMainFirst] = useState(3)
    const [gridxsMainSecond, setGridxsMainSecond] = useState(4)
    const [gridxsMainThird, setGridxsMainThird] = useState(3)
    const [gridxsFirst, setGridxsFirst] = useState(4)
    const [gridxsSecond, setGridxsSecond] = useState(3)
    const [gridxsThird, setGridxsThird] = useState(4)
    const ratio = parseInt(window.innerWidth);
    console.log(dealTermData)
    useEffect(() => {

        if (ratio < 1000) {
            setGridxsMainThird(2)
            setGridxsThird(6)
        }
        if (ratio < 760) {
            setGridxsMainSecond(2)
            setGridxsSecond(6)
        }
        if (ratio < 630) {
            setGridxsMainFirst(2)
            setGridxsFirst(6)
            setGridxsMainThird(1)
            setGridxsThird(12)
        }
        if (ratio < 400) {
            setGridxsMainSecond(1)
            setGridxsSecond(12)
            setGridxsMainFirst(1)
            setGridxsFirst(12)
        }

    }, [])
    return (
        <>
            <Grid container spacing={gridxsMainFirst} style={{ filter: `blur(${blurAmount}px)` }}>
                <Grid item xs={gridxsFirst}>
                    <div className="deal-terms-conatiner">
                        <span className="header-main-deal-terms">Type Of Security</span>
                        <span className="mainHead-main-deal-terms">{dealTermData.deal_type}</span>
                        <span className="subHead-main-deal-terms">CSOP is a contractual agreement executed between a subscriber and the startup that entitles the subscriber to community benefits and grant of SAR in exchange</span>
                    </div>
                </Grid>
                <Grid item xs={gridxsFirst}>
                    <div className="deal-terms-conatiner">
                        <span className="header-main-deal-terms">Discount %</span>
                        <span className="mainHead-main-deal-terms">{dealTermData.discount}</span>
                    </div>
                </Grid>
                <Grid item xs={gridxsFirst}>
                    <div className="deal-terms-conatiner">
                        <span className="header-main-deal-terms">Valuation Cap</span>
                        <span className="mainHead-main-deal-terms">{dealTermData.valuation_cap}</span>
                        <span className="subHead-main-deal-terms">A valuation cap is a maximum value that a company is willing to accept for a round of financing or Subscription. It is the highest price at which a company is willing to sell its equity to investors</span>
                    </div>
                </Grid>
                <Grid item xs={gridxsFirst}>
                    <div className="deal-terms-conatiner">
                        <span className="header-main-deal-terms">Min Subscription</span>
                        <span className="mainHead-main-deal-terms">{dealTermData.min_subscription}</span>
                        <span className="subHead-main-deal-terms">This is the minimum amount that can be subscribe in the current deal. Only amounts equal to or greater than this will be accepted</span>
                    </div>
                </Grid>
                <Grid item xs={gridxsFirst}>
                    <div className="deal-terms-conatiner">
                        <span className="header-main-deal-terms">Target</span>
                        <span className="mainHead-main-deal-terms">{dealTermData.target}</span>
                        <span className="subHead-main-deal-terms">This is the amount a startup is looking to raise</span>
                    </div>
                </Grid>
                <Grid item xs={gridxsFirst}>
                    <div className="deal-terms-conatiner">
                        <span className="header-main-deal-terms">End Date</span>
                        <span className="mainHead-main-deal-terms">{dealTermData.end_date}</span>
                    </div>
                </Grid>

            </Grid>
            <div className="documents-deal-terms-section">
                <span style={{ fontSize: '18px', fontWeight: 600 }}>Documents</span>
                <span style={{ fontSize: '16px', marginTop: '21px', marginBottom: '43px' }}>A due diligence report is a document prepped by an independent third party due diligence team which includes information related to financials compliance, key risks and a lot more.</span>
                <Grid container spacing={gridxsMainSecond}>
                    <Grid item xs={gridxsSecond}>
                        <div className="box-documents-download-pdf"><span className="live-deals-details-decription" style={{ marginRight: '10px', color: 'black' }}>Company Certificates</span><DownloadForOfflineIcon style={{ color: '#EBB429', width: '35px', height: '35px' }} /></div>
                    </Grid>
                    <Grid item xs={gridxsSecond}>
                        <div className="box-documents-download-pdf"><span className="live-deals-details-decription" style={{ marginRight: '10px', color: 'black' }}>Company Certificates</span><DownloadForOfflineIcon style={{ color: '#EBB429', width: '35px', height: '35px' }} /></div>
                    </Grid>
                    <Grid item xs={gridxsSecond}>
                        <div className="box-documents-download-pdf"><span className="live-deals-details-decription" style={{ marginRight: '10px', color: 'black' }}>Company Certificates</span><DownloadForOfflineIcon style={{ color: '#EBB429', width: '35px', height: '35px' }} /></div>
                    </Grid>
                    <Grid item xs={gridxsSecond}>
                        <div className="box-documents-download-pdf"><span className="live-deals-details-decription" style={{ marginRight: '10px', color: 'black' }}>Company Certificates</span><DownloadForOfflineIcon style={{ color: '#EBB429', width: '35px', height: '35px' }} /></div>
                    </Grid>
                </Grid>
            </div>
            <div className="documents-deal-terms-section">
                <span style={{ fontSize: '18px', fontWeight: 600 }}>About company</span>
                <Grid container spacing={gridxsMainThird}>
                    <Grid item xs={gridxsThird}>
                        <div className="about-company-cards-deal-terms">
                            <span className="header-main-deal-terms">Legal Name</span>
                            <span style={{ fontSize: '22px', fontWeight: '600' }}>{companyData.company_name}</span>
                        </div>
                    </Grid>
                    <Grid item xs={gridxsThird}>
                        <div className="about-company-cards-deal-terms">
                            <span className="header-main-deal-terms">Founded</span>
                            <span style={{ fontSize: '22px', fontWeight: '600' }}>{companyData.invested_so_far}</span>
                        </div>
                    </Grid>
                    <Grid item xs={gridxsThird}>
                        <div className="about-company-cards-deal-terms">
                            <span className="header-main-deal-terms">Form</span>
                            <span style={{ fontSize: '22px', fontWeight: '600' }}>{companyData.incorporation_type}</span>
                        </div>
                    </Grid>
                    <Grid item xs={gridxsThird}>
                        <div className="about-company-cards-deal-terms">
                            <span className="header-main-deal-terms">{companyData.number_of_employees}</span>
                            <span style={{ fontSize: '22px', fontWeight: '600' }}>10</span>
                        </div>
                    </Grid>
                    <Grid item xs={gridxsThird}>
                        <div className="about-company-cards-deal-terms">
                            <span className="header-main-deal-terms">Website</span>
                            <span style={{ fontSize: '22px', fontWeight: '600' }}>
                                {companyData.website_url}
                            </span>
                        </div>
                    </Grid>
                    <Grid item xs={gridxsThird}>
                        <div className="about-company-cards-deal-terms">
                            <span className="header-main-deal-terms">Location</span>
                            <span style={{ fontSize: '22px', fontWeight: '600' }}> {companyData.company_address
                            }</span>
                        </div>
                    </Grid>
                    <Grid item xs={gridxsThird}>
                        <div className="about-company-cards-deal-terms">
                            <span className="header-main-deal-terms">Social Media</span>
                            <span style={{ fontSize: '22px', fontWeight: '600' }}></span>
                        </div>
                    </Grid>
                </Grid>
                <div className="social-media-icons-deal-terms">
                    <a href={companyData.company_linked_in_profile} target="_blank" rel="noopener noreferrer">  <img src={Linkdin} style={{ width: '40px', height: '40px', marginRight: '51px' }}></img>   </a>

                    <a href={companyData.company_linked_in_profile} target="_blank" rel="noopener noreferrer">
                        <img src={Facebook} style={{ width: '40px', height: '40px', marginRight: '51px' }}></img>   </a>

                    <a href={companyData.company_linked_in_profile} target="_blank" rel="noopener noreferrer">
                        <img src={Pinterest} style={{ width: '40px', height: '40px', marginRight: '51px' }}></img>   </a>

                    <a href={companyData.company_linked_in_profile} target="_blank" rel="noopener noreferrer">
                        <img src={Twitter} style={{ width: '40px', height: '40px', marginRight: '51px' }}></img>   </a>
                </div>
            </div >
        </>
    )
}