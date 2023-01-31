import React, { useState, useEffect } from "react";
import { Button, Card, CardContent, Grid } from "@mui/material";
import logo from '../../images/investments/logo1.png';
import Share from '../../images/assets/share.png';
import Arrow from '../../images/assets/yellowArrow.png';
import Group1 from '../../images/highlights/group1.png';
import Group2 from '../../images/highlights/group2.png';
import Group3 from '../../images/highlights/group3.png';
import Group4 from '../../images/highlights/group4.png';
import FirstImage from '../../images/highlights/firstGroup.png';
import SecondImage from '../../images/highlights/secondGroup.png';
import ThirdImage from '../../images/highlights/thirdGroup.png';
import '../../css/LiveDealsDetails/liveDetails.css';
import DealsFaqs from "./DealsFaqs";
import YoutubeEmbed from "./YouTubeEmbed";
import DealTerm from "./DealTerms";
import Team from "./Team";
export default function LiveDetailsMain() {
    const [activeTab, setActiveTab] = useState(1)
    const [gridxsFirst, setGridxsFirst] = useState(2)
    const [gridxsSecond, setgridxsSecond] = useState(6)
    const ratio = parseInt(window.innerWidth);

    useEffect(() => {

        if (ratio < 850) {
            setGridxsFirst(1)
            setgridxsSecond(12)
        }

    }, [])
    return (
        <div className="get-started-container">
            <div style={{ paddingTop: '8em' }}>
                <Grid container spacing={gridxsFirst}>
                    <Grid item xs={gridxsSecond}>
                        <YoutubeEmbed width={gridxsFirst === 2 ? '90%' : '100%'} height={'357px'} embedId={"g_aELYEBc4Q"} />

                    </Grid>
                    <Grid item xs={gridxsSecond}>
                        <div className="header-section-deals-detail">
                            <img src={logo} height={39}></img>
                            <span className="live-details-deals-txt-head">MildCares - GynoCup</span>
                        </div>
                        <div className="header-section-deals-detail">
                            <div className="chipset-details-live">Health</div>
                            <div className="chipset-details-live">Personal Health</div>
                            <div className="chipset-details-live">WELLNESS</div>
                        </div>
                        <div className="live-deals-details-decription-conatiner">
                            <span className="live-deals-details-decription">We at MildCares strive to empower womanhood! By building high-quality Hygiene and personal care products, our mission is to create a life-changing impact through our cost-effective, chemical free & high-quality range of products available to all. Together, we aim to create an impactful experience and a better tomorrow for every woman across the country.</span>
                        </div>
                        <div className="footer-card-section live-details">
                            <div className="numbers-investors live-details">
                                <span className="percentage-investment">14.6%</span>
                                <span className="investment-status">Raised</span>
                            </div>
                            <div className="vertical-line-invest live-details" ></div>
                            <div className="numbers-investors live-details">
                                <span className="percentage-investment live" style={{ fontSize: '20px' }}>10 days</span>
                                <span className="investment-status live">Closes in</span>
                            </div>
                            <div className="vertical-line-invest live-details" ></div>
                            <div className="numbers-investors live-details">
                                <span className="percentage-investment live" style={{ fontSize: '20px' }}>₹5,000</span>
                                <span className="investment-status live">Min Invest</span>
                            </div>
                        </div>
                        <div className="outline-progress-bar-live-deals">
                            <div className="inline-progress-bar-live-deals"></div>
                        </div>
                        <div className="header-section-deals-detail btn-section" >
                            <Button className="invest-btn-section-deals">Invest</Button>
                            <div className="rounded-container-share-btn"><img src={Share} width={25} height={27}></img></div>
                        </div>
                    </Grid>
                </Grid>
                <div className="heading-live-deals-details">
                    <span className="header-txt-deals-details">Ask Me Anything</span>
                    <span className="sub-header-txt-deals" style={{ maxWidth: '645px', margin: 'auto' }}>Investors can interact directly with the founders in a 45 minute online zoom session and ask any questions that they have regarding the campaign.</span>
                </div>
                <div className="date-booked-register-section">
                    <div className="live-deals-box-date">
                        <span style={{ fontSize: '14px' }}>Save the Date</span>
                        <span className="header-txt-deals-details">07:00 PM</span>
                        <span className="live-deals-details-decription">24 Dec 2022</span>
                    </div>
                    <div className="live-deals-box-date second">
                        <span style={{ fontSize: '14px' }}>Booked A Spot</span>
                        <div className="btn-register-live-deals"><span>Register</span><img style={{ marginLeft: '10px' }} src={Arrow} width={8} height={10}></img></div>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                    <YoutubeEmbed width={gridxsFirst === 2 ? '486px' : '100%'} height={'271.6px'} embedId={"g_aELYEBc4Q"} />
                </div>
                <div className="heading-live-deals-details">
                    <span className="header-txt-deals-details">Highlights</span>
                </div>
                <div style={{ marginTop: '30px' }}>
                    <Grid container spacing={gridxsFirst}>
                        <Grid item xs={gridxsSecond}>
                            <Card className="card-content-live-details">
                                <CardContent>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src={Group1} height={68}></img>
                                        <span style={{ fontSize: '18px', marginLeft: '25px' }}>10,000 + Strong community, Build organically</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={gridxsSecond}>
                            <Card className="card-content-live-details">
                                <CardContent>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src={Group2} height={68}></img>
                                        <span style={{ fontSize: '18px', marginLeft: '25px' }}>200 + Host, creators and venue partners</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={gridxsSecond}>
                            <Card className="card-content-live-details">
                                <CardContent>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src={Group3} height={68}></img>
                                        <span style={{ fontSize: '18px', marginLeft: '25px' }}>Community events & Experiences</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={gridxsSecond}>
                            <Card className="card-content-live-details">
                                <CardContent>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src={Group4} height={68}></img>
                                        <span style={{ fontSize: '18px', marginLeft: '25px' }}>A full stack product for community assisted connections</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
                <div className="tabs-section-details-deals">
                    <div className="horizontal-ruler-tabs"></div>
                    <div className="btn-section-my-profile details">

                        <div className="active-btn-container details" style={activeTab === 1 ? { background: 'black', color: 'white' } : { background: '#F4F4F4', color: 'black' }} onClick={() => { setActiveTab(1); }}>
                            Pitch
                        </div>
                        <div className="active-btn-container details" style={activeTab === 2 ? { background: 'black', color: 'white' } : { background: '#F4F4F4', color: 'black' }} onClick={() => { setActiveTab(2); }}>
                            FAQs
                        </div>
                        <div className="active-btn-container details" style={activeTab === 3 ? { background: 'black', color: 'white' } : { background: '#F4F4F4', color: 'black' }} onClick={() => { setActiveTab(3); }}>
                            Deal Terms
                        </div>
                        <div className="active-btn-container details" style={activeTab === 4 ? { background: 'black', color: 'white' } : { background: '#F4F4F4', color: 'black' }} onClick={() => { setActiveTab(4); }}>
                            People
                        </div>
                    </div>
                    <div className="horizontal-ruler-tabs"></div>
                </div>
                {activeTab === 2 && <DealsFaqs />}
                {activeTab === 1 &&
                    <div>
                        <div className="investor-home-heading" style={{ fontSize: '24px', marginTop: '60px' }}>MildCares - Pitch</div>
                            <div style={{display:'grid' , justifyContent:'center',marginTop: '40px'}}>
                            <img src={FirstImage} height={gridxsFirst === 1 ? '193' : '592'} style={gridxsFirst===1 ? {width:'90%',margin:'auto'} : {width:'90%',margin:'auto'}}></img>
                            <img src={SecondImage} height={gridxsFirst === 1 ? '171' : '592'}style={gridxsFirst===1 ? {width:'90%',margin:'auto',paddingTop:'30px'} : {width:'90%',margin:'auto',paddingTop:'30px'}}></img>
                            <img src={ThirdImage}  height={gridxsFirst === 1 ? '179' : '592'} style={gridxsFirst===1 ? {width:'90%',margin:'auto',paddingTop:'30px'} : {width:'90%',margin:'auto',paddingTop:'30px'}}></img>
                        </div>
                    </div>
                }
                {
                    activeTab === 3 &&
                    <div>
                         <div className="investor-home-heading" style={{ fontSize: '24px', marginTop: '60px' }}>Deal Terms</div>
                         <DealTerm />
                    </div>
                }
                {
                    activeTab === 4 &&
                    <div>
                         <div className="investor-home-heading" style={{ fontSize: '24px', marginTop: '60px',marginBottom:'30px' }}>Meet the Team</div>
                        <Team />
                    </div>
                }
            </div>
        </div>
    )
}