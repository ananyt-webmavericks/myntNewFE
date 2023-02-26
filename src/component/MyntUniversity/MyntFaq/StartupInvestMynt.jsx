import React from "react";
import DrawerMynt from "../../Dashboard/DrawerMynt";
import Footer from "../../Footer";
import BackButton from '../../../images/assets/backBtn.svg'
import { Container } from "@mui/material";
import { AccordionDetails, Accordion, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from "react-router-dom";
export default function StartupInvestMynt() {
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
                            <span className="get-started-heading startup">STARTUP FUNDING </span>
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content"id="panel1a-header">
                                            <div>
                                                <span style={{ fontWeight: 600, fontSize: '16px' }}> 
                                                What do you understand by early-stage startups?                                                </span>
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            Investing in young startups that are developing their revenue, increasing their customer base, and rapidly expanding is considered early-stage startup investing. These startups hold great growth potential and offer the possibility of substantial returns.
                                            <br /><br />
                                            A recent study by the Cambridge Associates Venture Capital Index found that venture capital Subscriptions delivered an average annual return of 22.3% between 2006 and 2018. And Blackstone Group a leading global Subscription firm has generated an average net internal rate of return of 20% since its inception in 1985. Outperforming the modest returns of 7.5% and 5.9% from bonds, FDs and public equities respectively. 
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                                <div style={{ marginTop: '2em' }}>
                                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content"id="panel1a-header">
                                            <div>
                                                <span style={{ fontWeight: 600, fontSize: '16px' }}> 
                                                What are the advantages of investing in startups?
                                                </span>
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            Aside from the opportunity for substantial profits, investing in early-stage companies offers several other advantages, including: 
                                            <br /><br />
                                            -  Investing in startups can help you gain access to new technology and ideas <br />
                                            -  Startups have lower overhead costs than large businesses <br />
                                            -  There is a great upcoming future for start-ups and investing in them will give them a chance to flourish while also resulting in profits for one.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                                <div style={{ marginTop: '2em' }}>
                                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content"id="panel1a-header">
                                            <div>
                                                <span style={{ fontWeight: 600, fontSize: '16px' }}> 
                                                Is there any risk factor associated with investing startups?
                                                </span>
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            Investing in startups comes with its fair share of risks. Many of these companies are still in the process of discovering their target market or building a customer base. Not all early-stage startups will succeed and grow into established businesses. Some startups may face challenges such as insufficient funding, unsound business models, or a limited target market, which could lead to their closure. 
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                                <div style={{ marginTop: '2em' }}>
                                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content"id="panel1a-header">
                                            <div>
                                                <span style={{ fontWeight: 600, fontSize: '16px' }}> 
                                                What are Alternative Subscription Funds (AIF)?                                                </span>
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            Alternative Subscription Funds (AIFs) bring together money from multiple investors to invest in unconventional assets such as real estate, private equity, hedge funds, or other alternative Subscription options. This offers investors a broader range of Subscription choices and the possibility of higher returns, but also entails a greater level of risk compared to traditional Subscription options.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                                <div style={{ marginTop: '2em' }}>
                                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content"id="panel1a-header">
                                            <div>
                                                <span style={{ fontWeight: 600, fontSize: '16px' }}> 
                                                Who is eligible to invest in alternative Subscription funds (AIFs)?
                                                </span>
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            Investors willing to diversify their portfolio can invest in AIFs if they meet the following eligibility criteria: 
                                            <br /><br />
                                            -  Resident Indians, NRIs, foreign nationals can invest in these funds. <br />
                                            -  The minimum Subscription limit is Rs. 1 crore for investors, whereas the minimum Subscription amount for directors, employees, and fund managers are Rs. 25 lakh.  <br />
                                            -  The number of investors in every scheme is restricted to 1000, except angel funds, where the number of investors goes up to 49.  <br />
                                            -  AIFs come with a minimum lock-in period of three years <br />
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                                <div style={{ marginTop: '2em' }}>
                                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content"id="panel1a-header">
                                            <div>
                                                <span style={{ fontWeight: 600, fontSize: '16px' }}> 
                                                Does Mynt use an AIF for Subscription?
                                                </span>
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            On our platform, Subscriptions are made directly in startups and not through an Alternative Subscription Fund (AIF).We however have tieups with AIF for the convenience of founders who wish to conduct a private fundraising. 
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                                <div style={{ marginTop: '2em' }}>
                                <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content"id="panel1a-header">
                                            <div>
                                                <span style={{ fontWeight: 600, fontSize: '16px' }}> 
                                                What is capitalization table?
                                                </span>
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            A capitalization table is a document that outlines the ownership distribution of a company. In general, the capitalization table is an intricate breakdown of a company’s shareholders’ equity.
                                            <br /><br />Cap tables often include all of a company’s equity ownership capital, such as common equity shares, preferred equity shares, warrants, and convertible equity.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                                <div style={{ marginTop: '2em' }}>
                                <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content"id="panel1a-header">
                                            <div>
                                                <span style={{ fontWeight: 600, fontSize: '16px' }}> 
                                                What does private placement of securities refer to?
                                                </span>
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            Private placement refers to the process of raising capital that involves selling of securities to a selected group of investors.
                                            In a private placement, a company sells shares of stock in the company or other interest in the company, such as warrants or bonds, in exchange for cash.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                                <div style={{ marginTop: '2em' }}>
                                <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} style={{ boxShadow: ' 0px 0px 10px #0000000D', border: '1px solid #D1D1D1' }}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />} aria-controls="panel1a-content"id="panel1a-header">
                                            <div>
                                                <span style={{ fontWeight: 600, fontSize: '16px' }}> 
                                                What laws regulate the private placement of securities?
                                                </span>
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                            The private placement of securities is governed by Section 42 of the Companies Act 2013, which limits the issuance of securities to a maximum of 200 people in a financial year. The regulations for private placements by companies are outlined in Rule 14 of the Companies (Prospectus and Allotment of Securities) Rules, 2014. The company must make the offer of securities through a private placement offer letter in the form of PAS-4 and the private placement offer letter must be sent to the intended recipient.

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