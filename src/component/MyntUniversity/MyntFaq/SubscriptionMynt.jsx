import React from "react";
import DrawerMynt from "../../Dashboard/DrawerMynt";
import Footer from "../../Footer";
import BackButton from '../../../images/assets/backBtn.svg'
import { Container } from "@mui/material";
import { AccordionDetails, Accordion, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from "react-router-dom";
export default function SubscriptionMynt() {
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
                                <span className="get-started-heading startup">ALLOCATION OF FUNDS</span>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header" >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                Can my enrollment be rejected?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Yes, the companies can reject any fund commitment before the proceeds are withdrawn.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header" >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                How to proceed after the payment?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Upon completion of the campaign, our team will work with the startup to prepare the M-SAFE / SAR agreement for signing. This agreement governs the legal aspect of your Subscription in the startup. You'll be able to find the M-SAFE / SAR agreement on your dashboard. If you have a T-SAFE, we'll start the process of filing the necessary documents with the MCA. You'll be able to view the offer letter in the portfolio section of your dashboard.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header" >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                What is the minimum enrollment amount for various campaigns?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Our minimum enrollment amounts for say CCDs and CCSPs are determined by startups raising funds with inputs from our team.

                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header" >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                When can a start-up be called successfully funded?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Startups that reach 65% of their target are considered successful.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header" >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                How will I receive a confirmation for my Subscription?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Documents you will receive will vary on the type of instrument used: <br /> <br />
                                            CCD/CCPS/NCD: Agreement and Offer Letter <br />
                                            SAR: Agreement and SAR Letter <br />
                                            For Discounting: An acknowledgment email
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header" >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                How does a Offer Letter look like?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            When a company makes a private placement offer to a specific group of people, it issues an Offer Letter. This document must be filed in Form PAS-4 and distributed to the individuals to whom the offer is being extended.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header" >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                What to do if I cannot access my e-sign function?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            You can reach out to our customer support team at contact@myntinvest.com
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header" >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                What is the procedure in case of over-enrollment?

                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            In a case of over-enrollment, the startup can choose either of the following options - <br /><br />
                                            End the campaign early once the target has been met. <br />
                                            Accept all funds raised until the campaign's closure. <br />
                                            Decrease the enrollment amount for each investor by a specific ratio (pro-rata reduction). <br />
                                            Randomly allocate enrollments through a lottery system.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header" >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                How to move forward upon allocating funds to SAR campaign?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Upon transfer of funds, you will receive an acknowledgement email with the invoice. Afterward, you can sign the SAR agreement with the startup's founder, which will be displayed in the portfolio section along with a SAR letter signed by the founder.

                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header" >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>

                                                What is the process for transferring funds for enrollment to a private placement of securities?

                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            The company is responsible for maintaining a record of the bank accounts used for the transfer of funds.Hence the amount enrolled can only be transferred from a bank account in the enroller's name or from a joint account where the enroller is one of the joint owners.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header" >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                Is it possible to transfer funds from someone else's bank account?

                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            We strongly advise you to make payments only from your personal bank account. Using someone else's bank account may result in the rejection of your enrollment. Refunds or repayments will be credited to the bank account provided during account creation or the completion of KYC procedures.
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