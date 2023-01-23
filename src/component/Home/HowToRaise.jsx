import { Grid,Button } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import '../../css/Home/howToRaise.css'
import Screen1 from '../../images/assets/screen1.png';
import Screen2 from '../../images/assets/screen2.png';
import Screen3 from '../../images/assets/screen3.png';
import Screen4 from '../../images/assets/screen4.png';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function HowToRaise() {
    const [gridxsFirst, setGridxsFirst] = useState(4)
    const [gridxsSecond, setgridxsSecond] = useState(3)
    const ratio = parseInt(window.innerWidth);

    useEffect(() => {

        if (ratio < 1042) {
            setGridxsFirst(3)
            setgridxsSecond(4)
        }
        if (ratio < 800) {
            setGridxsFirst(2)
            setgridxsSecond(6)
        }
        if (ratio < 454) {
            setGridxsFirst(1)
            setgridxsSecond(12)
        }
    }, [])
    return (
        <div className="how-to-raise-container">
            <div className="investor-home-heading">How to <span className="colored-investor-home-heading"> Raise? </span></div>
            <span className="investors-subheading">Enjoy the benefits of a completely online and seamless process</span>
            <Grid container spacing={gridxsFirst}>
                <Grid item xs={gridxsSecond}>
                    <div className="first-raise-card">
                        <div className="head-container-raise">
                            <div className="head-section-first">1</div>
                            <div className="head-section-second">
                                <span className="card-header-txt">Sign up using your Email ID</span>
                                <span className="card-sub-header-txt">Register on the platform by entering your email address and finishing the one-time password (OTP) authentication process.</span>
                            </div>
                        </div>
                        <div className="raise-card-image-container">
                            <img src={Screen1} className="raise-card-image" ></img>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={gridxsSecond}>
                    <div className="first-raise-card">
                        <div className="head-container-raise">
                            <div className="head-section-non-active">2</div>
                            <div className="head-section-second">
                                <span className="card-header-txt">Complete KYC and add Bank details</span>
                                <span className="card-sub-header-txt">Complete your Know Your Customer (KYC) process by providing your PAN and add your bank account details.</span>
                            </div>
                        </div>
                        <div className="raise-card-image-container">
                            <img src={Screen2} className="raise-card-image" ></img>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={gridxsSecond}>
                    <div className="first-raise-card">
                        <div className="head-container-raise">
                            <div className="head-section-non-active">3</div>
                            <div className="head-section-second">
                                <span className="card-header-txt">Subscribe to your favourite opportunities</span>
                                <span className="card-sub-header-txt">Browse through the live campaigns and choose the one that is most suitable for you. Once you have selected a campaign, proceed for payment and complete the subscription process</span>
                            </div>
                        </div>
                        <div className="raise-card-image-container">
                            <img src={Screen3} className="raise-card-image" ></img>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={gridxsSecond}>
                    <div className="first-raise-card">
                        <div className="head-container-raise">
                            <div className="head-section-non-active">4</div>
                            <div className="head-section-second">
                                <span className="card-header-txt">See your wealth grow</span>
                                <span className="card-sub-header-txt">Your subscription process is now complete, and you can track your subscriptions to see how your investment is growing as the startups you have invested in succeed.</span>
                            </div>
                        </div>
                        <div className="raise-card-image-container-last">
                            <img src={Screen4} className="raise-card-image" ></img>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <div className="investor-home-heading">FAQs</div>
            <span className="investors-subheading">Mynt Academy is your destination for the most Frequently Asked Questions</span>
            <div style={{marginTop:'2em'}}>
            <Accordion style={{boxShadow:'none',border: '1px solid #D1D1D1'}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{color:'#AB7905'}}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <div>
                    <span style={{color:'#EBB429',fontWeight:600,fontSize:'16px'}}>01.</span>
                    <span style={{fontWeight:600,fontSize:'16px'}}> What is the meaning of early-stage or startup investments?</span>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            </div>
            <div style={{marginTop:'2em'}}>
            <Accordion style={{boxShadow:'none',border: '1px solid #D1D1D1'}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{color:'#AB7905'}}/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                   <div>
                    <span style={{color:'#EBB429',fontWeight:600,fontSize:'16px'}}>02.</span>
                    <span style={{fontWeight:600,fontSize:'16px'}}>  Who can subscribe via Mynt? Can I subscribe as a company?</span>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            </div>
            <div style={{marginTop:'2em'}}>
            <Accordion style={{boxShadow:'none',border: '1px solid #D1D1D1'}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{color:'#AB7905'}}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <div>
                    <span style={{color:'#EBB429',fontWeight:600,fontSize:'16px'}}>03.</span>
                    <span style={{fontWeight:600,fontSize:'16px'}}> How do I register as a subscriber on Mynt?</span>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            </div>
            <div style={{marginTop:'2em'}}>
            <Accordion style={{boxShadow:'none',border: '1px solid #D1D1D1'}}>
                <AccordionSummary
                    
                    expandIcon={<ExpandMoreIcon  style={{color:'#AB7905'}}/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                   <div>
                    <span style={{color:'#EBB429',fontWeight:600,fontSize:'16px'}}>04.</span>
                    <span style={{fontWeight:600,fontSize:'16px'}}> What are the different instruments available for subscription on Mynt?</span>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <div className="get-started-btn-investor">
                    <Button variant="contained" className="getStarted-landing-btn">Need More Helps</Button>
                    </div>
            </div>
        </div>
    )
}