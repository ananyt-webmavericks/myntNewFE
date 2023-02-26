import React, { useState } from "react";
import Portfolio from '../../images/assets/portfolio.png'
import { Card, CardContent, Button } from "@mui/material";
import '../../css/Dashboard/analytics.css'
import SearchBar from "../LiveDeals/SearchBar";
import BarChart from "../BarChart/BarChart";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from '../../images/assets/KycProfile.png'
import InfoIcon from '@mui/icons-material/Info';
import ScrollContainer from 'react-indiana-drag-scroll'

import StartupUpdateDialog from "./startupUpdateDialog";
import RepaymentReceived from "./RepaymentReceived";
export default function AnalyticsMain() {
    const [showContent, setShowContent] = useState(true)
    const [expanded, setExpanded] = useState(false);
    const [open , setOpen] = useState(false)
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const handleOpen = ()=>{
        setOpen(true)
    }
    const handleClose = ()=>{
        setOpen(false)
    }

    return (
        <>
            <div>
                <span className="get-started-heading">Analytics</span>
                <div className="analytics-main-container">
                    <div className="highchart-bar" >
                        <BarChart />
                    </div>
                    <div className="card-details-chart">
                        <span className="chart-detail-head">Lifetime Subscription value</span>
                        <span className="chart-detail-numbers">₹1,05,000</span>
                        <span className="chart-detail-description">As on 06 feb, 2023</span>
                    </div>
                </div>

            </div>
            <div>
                <div className="startup-updates-section">Startup Updates</div>


                <div style={{ maxWidth: '1000px' }}>
                <ScrollContainer className="scroll-container" style={{display:'flex'}}>
                    
                    <Card style={{ minWidth: '280px', background: '#FFFFFF 0% 0% no-repeat padding-box', boxShadow: '0px 0px 12px #0000001F', borderRadius: '7px', marginRight: '50px', marginTop: '10px', marginBottom: '10px', marginLeft: '10px' }}>
                        <CardContent>
                            <div style={{ display: 'grid', justifyContent: 'center', textAlign: 'center' }}>
                                <img src={Image} width={70} height={70} style={{ margin: 'auto' }}></img>
                                <span style={{ fontSize: '16px', fontWeight: '600', marginTop: '10px' }}>Desiwood updates</span>
                                <span style={{ fontSize: '14px', fontWeight: '500', marginTop: '10px', marginBottom: '10px' }}>12 Jan, 2023</span>

                            </div>
                        </CardContent>
                    </Card>
                    <Card style={{ minWidth: '280px', background: '#FFFFFF 0% 0% no-repeat padding-box', boxShadow: '0px 0px 12px #0000001F', borderRadius: '7px', marginRight: '50px', marginTop: '10px', marginBottom: '10px', marginLeft: '10px' }}>
                        <CardContent>
                            <div style={{ display: 'grid', justifyContent: 'center', textAlign: 'center' }}>
                                <img src={Image} width={70} height={70} style={{ margin: 'auto' }}></img>
                                <span style={{ fontSize: '16px', fontWeight: '600', marginTop: '10px' }}>Signo updates</span>
                                <span style={{ fontSize: '14px', fontWeight: '500', marginTop: '10px', marginBottom: '10px' }}>22 Dec, 2022</span>

                            </div>
                        </CardContent>
                    </Card>
                    <Card style={{ minWidth: '280px', background: '#FFFFFF 0% 0% no-repeat padding-box', boxShadow: '0px 0px 12px #0000001F', borderRadius: '7px', marginRight: '50px', marginTop: '10px', marginBottom: '10px', marginLeft: '10px' }}>
                        <CardContent>
                            <div style={{ display: 'grid', justifyContent: 'center', textAlign: 'center' }}>
                                <img src={Image} width={70} height={70} style={{ margin: 'auto' }}></img>
                                <span style={{ fontSize: '16px', fontWeight: '600', marginTop: '10px' }}>Naario updates</span>
                                <span style={{ fontSize: '14px', fontWeight: '500', marginTop: '10px', marginBottom: '10px' }}>18 Oct, 2022</span>

                            </div>
                        </CardContent>
                    </Card>
                    <Card style={{ minWidth: '280px', background: '#FFFFFF 0% 0% no-repeat padding-box', boxShadow: '0px 0px 12px #0000001F', borderRadius: '7px', marginRight: '50px', marginTop: '10px', marginBottom: '10px', marginLeft: '10px' }}>
                        <CardContent>
                            <div style={{ display: 'grid', justifyContent: 'center', textAlign: 'center' }}>
                                <img src={Image} width={70} height={70} style={{ margin: 'auto' }}></img>
                                <span style={{ fontSize: '16px', fontWeight: '600', marginTop: '10px' }}>Steelwork updates</span>
                                <span style={{ fontSize: '14px', fontWeight: '500', marginTop: '10px', marginBottom: '10px' }}>12 Oct, 2022</span>

                            </div>
                        </CardContent>
                    </Card>
                    </ScrollContainer>
                </div>
            </div>
            <div style={{ marginTop: '70px', width: '95%' , marginBottom:'5em' }}>
                <Accordion elevation={0} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        style={{ boxShadow: '0px 0px 6px #00000014', border: '1px solid #D1D1D1', borderRadius: '5px' }}
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            Desiwood
                        </Typography>

                    </AccordionSummary>
                    <AccordionDetails >
                        <div className="accordian-analytics-container">
                            <div className="company-info-section-analytics">
                                <img src={Image} width={43} height={43} />
                                <div style={{ display: 'grid', marginLeft: '20px' }}>
                                    <span style={{ fontSize: '16px', fontWeight: '600' }}>Deciwood</span>
                                    <span style={{ fontSize: '12px', color: '#AAAAAA' }}>CCD</span>
                                </div>
                                <hr style={{ marginLeft: '40px', border: '1px dashed gray', width: '1px', height: '43px' }} />
                                <Button onClick={handleOpen} variant='contained' className="active-btn-anaytics" >Active</Button>
                            </div>
                            <div className="card-details-analytics">
                            <ScrollContainer className="scroll-container" style={{display:'flex'}}>
                                <Card style={{ minWidth: '160px', width: '100%', background: '#FFFCE6 0% 0% no-repeat padding-box', boxShadow: 'none', borderRadius: '7px', marginRight: '50px', marginTop: '10px', marginBottom: '10px', marginLeft: '10px' }}>
                                    <CardContent>
                                        <div style={{ display: 'grid' }}>
                                            <span style={{ fontSize: '16px', fontWeight: '600' }}>₹00.00</span>
                                            <div style={{ display: 'flex', marginTop: '3px', alignItems: 'center' }}>
                                                <span style={{ fontSize: '12px', color: '#AAAAAA' }}>Gain/Loss </span>
                                                <InfoIcon style={{ width: '12px', height: '12px', marginLeft: '5px' }} />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card style={{ minWidth: '160px', width: '100%', background: '#EDF7FF 0% 0% no-repeat padding-box', boxShadow: 'none', borderRadius: '7px', marginRight: '50px', marginTop: '10px', marginBottom: '10px', marginLeft: '10px' }}>
                                    <CardContent>
                                        <div style={{ display: 'grid' }}>
                                            <span style={{ fontSize: '16px', fontWeight: '600' }}>₹100</span>

                                            <div style={{ display: 'flex', marginTop: '3px', alignItems: 'center' }}>
                                                <span style={{ fontSize: '12px', color: '#AAAAAA' }}>No. of Instruments</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card style={{ minWidth: '160px', width: '100%', background: '#E6FFF2 0% 0% no-repeat padding-box', boxShadow: 'none', borderRadius: '7px', marginRight: '50px', marginTop: '10px', marginBottom: '10px', marginLeft: '10px' }}>
                                    <CardContent>
                                        <div style={{ display: 'grid' }}>
                                            <span style={{ fontSize: '16px', fontWeight: '600' }}>₹1,00,000</span>
                                            <div style={{ display: 'flex', marginTop: '3px', alignItems: 'center' }}>
                                                <span style={{ fontSize: '12px', color: '#AAAAAA' }}>Subscription Value</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card style={{ minWidth: '160px', width: '100%', background: '#FFFCE6 0% 0% no-repeat padding-box', boxShadow: 'none', borderRadius: '7px', marginRight: '50px', marginTop: '10px', marginBottom: '10px', marginLeft: '10px' }}>
                                    <CardContent>
                                        <div style={{ display: 'grid' }}>
                                            <span style={{ fontSize: '16px', fontWeight: '600' }}>₹1,00,000</span>
                                            <div style={{ display: 'flex', marginTop: '3px', alignItems: 'center' }}>
                                                <span style={{ fontSize: '12px', color: '#AAAAAA' }}>Current Value</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                </ScrollContainer>
                            </div>
                           <RepaymentReceived />
                            <div className="highchart-bar last" >
                        <BarChart />
                    </div>
                        </div>

                    </AccordionDetails>
                </Accordion>

            </div>
            <StartupUpdateDialog open={open} handleClose={handleClose} />
        </>
    )
}