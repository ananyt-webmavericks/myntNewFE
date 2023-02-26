import React from "react";
import DrawerMynt from "../../Dashboard/DrawerMynt";
import Footer from "../../Footer";
import BackButton from '../../../images/assets/backBtn.svg'
import { Container } from "@mui/material";
import { AccordionDetails, Accordion, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from "react-router-dom";

export default function GettingStartedMynt() {
    const location = window.location.pathname;
    const ratio = parseInt(window.innerWidth);
    const navigate = useNavigate()
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
            <div style={{ display: 'flex', position: 'relative' }}>
                {location.includes('/myntUniversity') && <DrawerMynt height={'inherit'} />}
                <div className="dashboard-container">
                    <Container maxWidth="lg">
                        <div className="faq-university-container">
                            <div style={{display:'grid'}}>
                            <img src={BackButton} onClick={()=>navigate('/myntUniversity/faqs')} alt='backbtn' style={{marginBottom:'20px'}}/>
                            <span className="get-started-heading startup">STARTING OFF</span>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content"  id="panel1a-header">
                                            <div>
                                                <span style={{ fontWeight: 600, fontSize: '16px' }}> How can I sign up on Mynt invest?</span>
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            Using an email ID, you can create a profile and register on the platform. Before enrolling in any live campaigns, it is necessary to complete your KYC process. You can do this by either visiting your profile page or starting the Subscription process.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                                <div style={{ marginTop: '2em' }}>
                                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content"  id="panel1a-header">
                                            <div>
                                                <span style={{ fontWeight: 600, fontSize: '16px' }}> What are the required documents for completing the KYC process during sign-up?</span>
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            The required documents are: <br /> <br />
                                            a PAN card for identification  <br />
                                            an Aadhaar for e-signing <br />
                                            as well as bank account information for processing refunds or repayment of principal and interest.


                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                                <div style={{ marginTop: '2em' }}>
                                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content"  id="panel1a-header">
                                            <div>
                                                <span style={{ fontWeight: 600, fontSize: '16px' }}> Who is eligible?</span>
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            Any individual above the age of 18 years having a PAN and AADHAR CARD can invest . The platform is presently catering to only Indian citizens.                                             </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                                <div style={{ marginTop: '2em' }}>
                                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content"  id="panel1a-header">
                                            <div>
                                                <span style={{ fontWeight: 600, fontSize: '16px' }}>  What is the minimum enrollment amount ?</span>
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            Minimum enrollment amount on the platform for startups is INR 4,000. However, the minimum amount for each campaign can be different and is disclosed on the campaign page.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                                <div style={{ marginTop: '2em' }}>
                                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content"  id="panel1a-header">
                                            <div>
                                                <span style={{ fontWeight: 600, fontSize: '16px' }}>  What does the process of backing a startup involve?</span>
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            After you complete your registration, you will have access to various campaigns on the deals page. To assist you in making an informed choice, we have supplied comprehensive information about the startup, including financial details. When you have found a suitable enrollment opportunity for you, determine the allocation amount and proceed with payment using your preferred method. Once the startup reaches its target funding goals and after the campaign closure, we will distribute the necessary documents for your signature."
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                         
                        </div>
                    </Container>
                </div>

            </div>
            {ratio < 1000 ? null : <Footer />}
        </>
    )
}