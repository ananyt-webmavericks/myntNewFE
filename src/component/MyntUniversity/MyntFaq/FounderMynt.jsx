import React from "react";
import DrawerMynt from "../../Dashboard/DrawerMynt";
import Footer from "../../Footer";
import BackButton from '../../../images/assets/backBtn.svg'
import { Container } from "@mui/material";
import { AccordionDetails, Accordion, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from "react-router-dom";
export default function FounderMynt() {
    const location = window.location.pathname;
    const ratio = parseInt(window.innerWidth);
    const navigate = useNavigate()
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
            <div className="founder-wrapper" style={{ display: 'flex', position: 'relative' }}>
                {location.includes('/myntUniversity') && <DrawerMynt height={'inherit'} />}
                <div className="dashboard-container">
                    <Container maxWidth="lg">
                        <div className="faq-university-container">
                            <div style={{display:'grid'}}>
                            <img src={BackButton} onClick={()=>navigate('/myntUniversity/faqs')} alt='backbtn' style={{marginBottom:'20px'}}/>
                            <span className="get-started-heading startup">FOR ENTREPRENEURS </span>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header"
                                    >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                            How can I apply as a startup founder to Mynt invest?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                        You need to visit the ‘raise’ page and click on the apply now button. Fill out the application form by providing us with all the requisite information. Our team will reach out to you and conduct the necessary due diligence to see if your startup is the right fit for the platform. 
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header"
                                    >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                            How can I start a campaign on MYNT INVEST?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                        Creating a campaign on Mynt is a simple process. Once we have conducted due diligence on your startup, you can sign up as a founder and provide us with all the relevant information that appears on your dashboard, such as pitch deck, team, investors, etc. From there, you can create your campaign. Once you've done that, our team will conduct due diligence once again and approve your campaign.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header"
                                    >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                            What documents/information is required to start a campaign?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                        You will need to fill out your company details which include a brief bio, your company's logo, information about your company directors, your registered address, and your incorporation details. To make your campaign informative and engaging, we also ask that you provide a pitch deck, a campaign video, and a list of FAQs that will help users learn more about your company. These additional elements are important for creating a strong campaign that meets the high standards of our platform.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header"
                                    >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                            What kind of instruments can be used to start a campaign on MYNT INVEST?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                        Instruments include, NCD campaign, CSOP campaign, CCD campaign and CCPS campaign.

                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header"
                                    >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                            What are the fees charged by the platform for listing a campaign?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                        To list a campaign on our platform, we require a standard listing fee from the startup as well as a success fee based on the total amount raised through a successful campaign. For specific information on fees, please contact our team who can curate a tailored fee structure for your campaign.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header"
                                    >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                            What kind of campaign will be most suited for my company?                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                        To find the campaign that best suits your needs, please contact our support team for more details. 
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header"
                                    >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                            What is the expected amount of time that will be needed for the campaign to go live once all documents are provided?

                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                        After our team reviews the startup, we allocate a slot for the campaign to go live on the platform within two working days.
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