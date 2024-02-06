import React from "react";
import DrawerMynt from "../../Dashboard/DrawerMynt";
import Footer from "../../Footer";
import BackButton from '../../../images/assets/backBtn.svg'
import { Container } from "@mui/material";
import { AccordionDetails, Accordion, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from "react-router-dom";
export default function CampaignsMynt() {
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
                            <div style={{ display: 'grid' }}>
                                <img src={BackButton} onClick={() => navigate('/myntUniversity/faqs')} alt='backbtn' style={{ marginBottom: '20px' }} />
                                <span className="get-started-heading startup">DECODING TYPES OF CAMPAIGNS</span>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header"
                                    >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                What are financial instruments?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Financial instruments are contracts for monetary assets that can be purchased, traded, created, modified, or settled for. The purchase and sale of these instruments lead to a flow of cash and capital.
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
                                                What are the different types of instruments available for enrollment on Myntinvest?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            You can enroll for the following campaigns - <br /><br />
                                            Compulsorily Convertible Debenture (CCD) campaigns <br />
                                            SAR campaigns <br />
                                            Compulsorily Convertible Preference Share (CCPS) campaigns <br />
                                            Non-Convertible Debenture (NCD) campaigns
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
                                                What is NCD (Non-Convertible Debenture)?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            An NCD refers to a type of debt security that provides a fixed rate of interest to the holder. These debentures have a fixed tenure, with a maximum of 10 years as per the Companies Act of 2013. The principal amount invested in the NCD can be repaid in installments during the tenure or at the end of the maturity period.
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
                                                What rules apply to NCD (Non-Convertible Debenture)?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            The regulations related to NCDs as per the Companies Act of 2013 and other guidelines are as follows: <br /><br />
                                            The minimum tenure of an NCD should be at least 1 year. <br />
                                            Unlisted NCDs must be fully secured by creating a charge against the movable or immovable assets of the company <br />
                                            The maximum tenure of an NCD cannot exceed 10 years, except for NBFCs, Infrastructure Companies, or Companies approved by the Central Government. <br />
                                            The company is required to appoint a Debenture Trustee and create a charge in favor of the trustee.
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
                                                What does the term 'coupon rate' mean in the context of NCDs?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            The interest rate that the issuing company must pay to the NCD enrollees is known as the coupon rate.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            {/* <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header"
                                    >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                What is SAR
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            The grant of Stock Appreciation Rights (SARs) of the company is attained by enrollment to a SAR. Similar to ESOPs, SARs give the grantee the right to receive money equal to growth in the market value of the company's equity shares. However, no equity shares are issued in this transaction.
                                            A SAR is a contract that the founder and an enroller have signed. The agreement grants the enroller rights to receive SAR (stock appreciation rights) and entitlement to other benefits.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div> */}
                            {/* <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header"
                                    >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                What are the benefits of enrolling in SAR?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            In addition to receiving SARs, your enrollment entitles you to community service benefits. Any of the following can be used to provide community services: <br /> <br />
                                            Special discounts or other deals on goods and services <br />
                                            The chance to take part in beta launch testing or give feedback on prototypes  <br />
                                            Entry to special events hosted by the startup
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div> */}
                            {/* <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header"
                                    >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                What is SAR (Stock Appreciation Rights)?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            The grant of Stock Appreciation Rights (SARs) of the company is attained by enrollment to a SAR. Similar to ESOPs, SARs give the grantee the right to receive money equal to growth in the market value of the company's equity shares. However, no equity shares are issued in this transaction.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div> */}
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header"
                                    >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                What is CCD?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            CCDs are debentures that are compulsorily convertible into the company's equity shares but do not enjoy voting privileges.

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
                                                When will my CCD convert to equity?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            At the time of issuance, the conditions of the CCD's conversion into equity shares are decided. However, according to regulations, this time frame must never go beyond 10 years from the date that CCDs were issued.
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
                                                What is discount cap?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            It's possible that early-stage startups don't yet have a formal valuation assigned to them. Thus, the issuance may have a discount cap to safeguard the interests of early-stage backers. Your enrollment will be priced at a discounted valuation for the startup's next priced round. For instance, let's assume that you have invested INR 1,00,000 in a startup that has a discount cap of 20%. Consequently, when the startup undergoes a priced round of funding in the future, the value of your enrollment will be calculated based on a discounted valuation. For example, if the startup receives a valuation of INR 1,00,00,000 in its next round of funding, your enrollment will be valued at 20% less (i.e. 0.80 * 1,00,00,000 = 80,00,000). This means that your enrollment will represent 1.25% (1,00,000/80,00,000) of the company's valuation instead of the usual 1% (1,00,000/1,00,00,000).
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
                                                What is valuation cap?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            A valuation cap serves a similar function as a discount cap. However, the valuation at which your enrollment is valued is capped rather than discounted from the company's valuation. For instance, suppose you have invested INR 2,00,000 in a startup that has a valuation cap of INR 70,00,000. If the startup undergoes a priced round in the future and is valued at INR 2,00,00,000, your enrollment will be worth 2.85% (2,00,000/70,00,000) rather than 1% (2,00,000/2,00,00,000).

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
                                                What is CCPS (Compulsorily Convertible Preference Shares )?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            They are a type of preference share that must be converted into equity shares at a predetermined time or event, such as a specified date, the occurrence of a particular event, or the company reaching a specific financial milestone. CCPS holders receive a fixed dividend and have a preference over common shareholders when it comes to liquidation preference.

                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            {/* <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header"
                                    >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                What advantages do SARs offer?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Granting stock appreciation rights (SARs) benefits both the grantee and the company in multiple ways. For the grantee, there is no additional consideration to be paid at the time of redemption, and there is no tax impact during the intervening period. For the company, there is no issuance of equity shares, which means there are no additional entries on the cap-table, and this saves time and effort involved in compliances and filing.

                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div> */}
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header"
                                    >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                Can you shed some light on what are ‘Convertible Notes’?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            The Indian government has introduced the concept of Convertible Notes to encourage enrollment in startups. A convertible note is an instrument issued by a startup company that acknowledges receipt of money initially as debt, which can be repaid at the option of the holder, or it can be converted into a specified number of equity shares of the company within a period not exceeding five years from the date of issue, upon the occurrence of specified events as per other terms and conditions agreed and indicated in the instrument. However, to be eligible to purchase Convertible Notes, enrollers must invest at least INR 25 lakhs. The definition of a startup has been provided by the Department of Industrial Promotion and Policy (DIPP), Ministry of Commerce and Industry.

                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel16'} onChange={handleChange('panel16')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header"
                                    >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                Does Mynt enable enrollment through Convertible Notes on its platform?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            We do not provide the facility for investing through Convertible Notes on our platform.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel17'} onChange={handleChange('panel17')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header"
                                    >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                what are the types of financial instruments?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            The financial instruments used to invest in a firm are mainly of two types - equity-based and debt-based instruments.

                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel18'} onChange={handleChange('panel18')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header"
                                    >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                what are debt instruments?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Debt instruments are a safer form of enrollment instrument as it generates and fixed returns and the buyer has to pay back the principal fully. Some of the debt instruments include bonds and debentures.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel19'} onChange={handleChange('panel19')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header"
                                    >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                what are equity instruments?
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            The equity-based instruments provide the holder with equity ownership of the firm and the returns are based on the profit capability of the firm and hold unlimited liability up to the invested money.

                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <Accordion expanded={expanded === 'panel20'} onChange={handleChange('panel20')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content" id="panel1a-header"
                                    >
                                        <div>
                                            <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                                How to choose the best instrument
                                            </span>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            The choice of the purchase of an instrument should be done on basis of the risk-bearing capacity of the investor and the potential of the business.

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