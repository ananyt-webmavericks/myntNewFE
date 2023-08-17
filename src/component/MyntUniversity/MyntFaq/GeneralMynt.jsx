import React from "react";
import DrawerMynt from "../../Dashboard/DrawerMynt";
import Footer from "../../Footer";
import BackButton from '../../../images/assets/backBtn.svg'
import { Container } from "@mui/material";
import { AccordionDetails, Accordion, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from "react-router-dom";
export default function GeneralMynt() {
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
                            <div style={{ display: 'grid' }}>
                                <img src={BackButton} onClick={() => navigate('/myntUniversity/faqs')} alt='backbtn' style={{ marginBottom: '20px' }} />
                                <span className="get-started-heading startup">GENERAL FAQs</span>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header" >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                What is the process for determining which startups will be featured on the platform?                                                     </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Before giving the green light to go live on the platform, our team thoroughly evaluates various aspects of the startup. Among the key criteria we consider are:
                                            <br /><br />
                                            1. Financial reports and available funds <br />
                                            2. Market viability and growth prospects <br />
                                            3. Background information on the founding team, including educational backgrounds and prior work experience <br />
                                            4. Track record of fundraising and investor involvement <br />
                                            5. Online reputation and social media footprint
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header" >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                What are the different ways I can transfer the enrollment amount?                                                     </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            You have the choice between two payment methods: online or offline. If you opt for the online option, you will be taken to the checkout page on our website where you can complete your subscription through our payment gateway using UPI, credit/debit cards, or net banking. On the other hand, if you prefer to make your payment through the offline mode, simply click on the "pay offline" button to access the escrow account details.

                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header" >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                Would I be restricted to only one startup? And can I enroll more than once in the same startup?                                                     </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            You can invest in any number of startups you wish for. By diversifying your portfolio, you maximize your chances of success. Secondly, you can invest more than once in the same startup before the campaign closes. However, each transaction must meet the minimum Enrollment amount requirement.

                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header" >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                Can I enroll as a company?                                                     </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Yes,if you are a company form of organization ,then firstly register yourself as a company and fill out the legal details of your organization. Reach out to us at contact for more information.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header" >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                How can I get in touch with the founder of the Startup?                                                     </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Founder's email, number and the LinkedIn profile are mentioned in the people's section of every campaign.
                                            <br /> <br />You can get in touch with them for any queries you have.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header" >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                Can I edit my profile details such as address?                                                     </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Yes, you can edit your details in the profile section.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header" >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                Where can I find all the campaigns currently open for Subscription?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            The deals section provides information about all the different live opportunities.
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