import React from "react";
import DrawerMynt from "../../Dashboard/DrawerMynt";
import Footer from "../../Footer";
import BackButton from '../../../images/assets/backBtn.svg'
import { Container } from "@mui/material";
import { AccordionDetails, Accordion, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from "react-router-dom";
export default function ReturnTaxMynt() {
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
                                <span className="get-started-heading startup">GAINS AND TAXATION IMPLICATIONS </span>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header"
                                    >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                How are my equity Subscriptions taxed?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            According to the Income Tax Act, equity Subscriptions are subject to tax liability on capital gains and dividend income and various tax slabs exist basis on the listed or unlisted company and the holding period.

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
                                                What are the tax implications on debt instruments?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            The debt instruments are taxed basis on the interest income and depends upon different instruments and interest amount
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
                                                How risky is investing in startups

                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Investing in startups is considerably riskier than the other publicly traded companies because they are more speculative and illiquid in nature. Thus, it is recommended to perform your own research before investing.

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
                                                Why should I invest in a startup?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Although of high risky in nature, startups have the potential to reap higher rewards and let you become an angel investor and support the founders.

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
                                                How can enrollers earn returns?

                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Enrollers may attain returns on their enrollment amount via the following methods: <br /> <br />
                                            a. Exiting facilitated during mergers or acquisitions <br />
                                            b. Repurchasing of securities or buying back enrollment by the company. <br />
                                            c. Selling of enrollment or security to another user in exchange for payment.

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
                                                How do I keep a check on a startup?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            You can keep in touch directly with the founders and also review the MIS report regularly on your Mynt dashboard. We shall also be engaging in quarterly meetings with the founder to keep you apprised of growth.
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
                                                Does Mynt guarantee returns on the enrollment amount?

                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Mynt does not guarantee any returns on the enrollment done via myntinvest.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header"
                                    >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                What is Internal Rate of Return (IRR)?

                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            The coupon rate does not factor in the time value of money regarding returns earned on the NCD. If interest or principal, or both, are paid more frequently than once a year, the IRR will exceed the coupon rate. This is because the IRR calculation assumes that the received amounts can be reinvested immediately at the same coupon rate.

                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header"
                                    >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                What is Extended Rate of Return (XIRR)?

                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            IRR has some restrictions if the sums are not reimbursed at regular intervals. The precise dates of money payments are not taken into account by IRR.
                                            This issue is solved by XIRR, which also takes into account the precise dates on which enrollers are paid amounts.

                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header"
                                    >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                How is income from discounted charges taxed?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Discounting charges are regarded as "Income from other sources" and are taxed in accordance with the enrollers applicable tax bracket.

                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header"
                                    >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                How are NCDs taxed?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            The interest income earned from NCDs will be subject to taxation under the category of 'Income from Other Sources' and will be taxed based on the individual's applicable tax slab. As per Section 193 of the IT Act, a TDS of 10% may be deducted on the interest received from NCDs.

                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header"
                                    >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                When does the interest starts accruing on NCD?

                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            The interest on the Subscription will begin to accrue from the date of issuance of the allotment certificate, which includes stamp duty, by the start-up. After the campaign concludes on the platform, the following series of events occur:<br /><br />
                                            a. The start-up and trustee execute the Debenture Trust Deed and Hypothecation/Mortgage agreement. <br />
                                            b. Form PAS-4, which is the offer letter, is filed with the MCA. <br />
                                            c. The start-up passes a board resolution and files a letter of allotment with the MCA.<br />
                                            d. Stamp duty is paid and an allotment certificate is prepared for investors.<br />
                                            Typically, these activities require 7-10 working days to complete.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header"
                                    >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                How are SARs taxed?


                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            The enrollment amount paid towards SAR will be classified as an expense. When repayments are made, the income earned from exiting SAR will be subject to taxation under the category of "Income from Other Sources". The entirety of the received amount will be taxed based on the enrollers applicable income tax slab.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header"
                                    >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                How are CCDs taxed?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Under the Schedule for Unlisted Shares, CCD enrollments must be reported in the ITR. When CCDs are redeemed through a buy-back, they will be taxed as capital gains. However, no taxes are required to be paid when CCDs are converted into equity shares.

                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header"
                                    >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                How are CCPs taxed?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            To comply with the Schedule for Unlisted Shares, CCPS enrollments must be disclosed in the ITR. When CCPSs are redeemed via buyback, they will be subject to capital gains tax. However, there is no tax liability when CCPSs are converted into equity shares.
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