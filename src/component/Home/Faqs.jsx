import React from "react";
import { AccordionDetails , Accordion , AccordionSummary  ,Typography , Button } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function Faqs (){
    return(
        <>
        <div style={{marginBottom:'2em'}}>
        <div className="investor-home-heading">FAQs</div>
            <span className="investors-subheading">Mynt Academy is your destination for the most Frequently Asked Questions</span>
            <div style={{ marginTop: '2em' }}>
                <Accordion style={{ boxShadow: 'none', border: '1px solid #D1D1D1' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <div>
                            <span style={{ color: '#EBB429', fontWeight: 600, fontSize: '16px' }}>01.</span>
                            <span style={{ fontWeight: 600, fontSize: '16px' }}> What is the meaning of early-stage or startup investments?</span>
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
            <div style={{ marginTop: '2em' }}>
                <Accordion style={{ boxShadow: 'none', border: '1px solid #D1D1D1' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <div>
                            <span style={{ color: '#EBB429', fontWeight: 600, fontSize: '16px' }}>02.</span>
                            <span style={{ fontWeight: 600, fontSize: '16px' }}>  Who can subscribe via Mynt? Can I subscribe as a company?</span>
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
            <div style={{ marginTop: '2em' }}>
                <Accordion style={{ boxShadow: 'none', border: '1px solid #D1D1D1' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <div>
                            <span style={{ color: '#EBB429', fontWeight: 600, fontSize: '16px' }}>03.</span>
                            <span style={{ fontWeight: 600, fontSize: '16px' }}> How do I register as a subscriber on Mynt?</span>
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
            <div style={{ marginTop: '2em' }}>
                <Accordion style={{ boxShadow: 'none', border: '1px solid #D1D1D1' }}>
                    <AccordionSummary

                        expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <div>
                            <span style={{ color: '#EBB429', fontWeight: 600, fontSize: '16px' }}>04.</span>
                            <span style={{ fontWeight: 600, fontSize: '16px' }}> What are the different instruments available for subscription on Mynt?</span>
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
        </>
    )
}