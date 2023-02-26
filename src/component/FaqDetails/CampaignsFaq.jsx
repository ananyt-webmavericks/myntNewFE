import React from "react";
import { Container, CssBaseline } from "@mui/material";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useNavigate } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const data = [
    {id:1 , head:'What are the different types of instruments available for subscription on Tykeinvest?' , content:'On Tykeinvest, you can subscribe to a CSOP campaign, a Compulsorily Convertible Debenture (CCD) campaign, a Compulsorily Convertible Preference Share (CCPS) campaign or a Non-Convertible Debenture (NCD) campaign'},
    {id:2, head:'What is CSOP?' ,content:'A CSOP is a contractual agreement executed between a subscriber and the founder. The agreement entitles the subscriber to community benefits and grant of SAR in exchange for subscription to the startups CSOP campaign.'},
    {id:3, head:'What are the benefits I am entitled to as a result of my subscription to CSOP?' ,content:'Your subscription entitles you to benefits in the form of community services in addition to the grant of SARs. Community services can take any of the following forms: i. Discounts or other exclusive offers on products and services ii. Access to exclusive events organized by the startup iii. Opportunity to participate in testing of beta launches or provide feedback on prototypes iv. Brand ambassador benefits and engagement with the founders '},
    {id:4, head:'What is Stock Appreciation Right (SAR)?' ,content:'Subscription to a CSOP entitles the subscriber to grant of Stock Appreciation Rights (SARs) of the company. SARs entitles the grantee to receive value equivalent to appreciation in the fair market value of equity shares of the company and works similar to ESOPs. However, there is no issuance of equity shares involved. The value of SARs can be settled by payment of cash.'},
    {id:5, head:'What is a discount cap?' ,content:'Early-stage startups may not necessarily have a formal valuation assigned at this stage. Thus, to protect the interests of early-stage backers, the issuuance might have a discount cap. To illustrate this, assume you have subscribed INR 1,00,000 in a startup at a 30% discount cap. Thus, when the startup enters into a priced round in the future, your subscription will be priced at a discounted valuation. If the startup enters its next round of funding at a valuation of INR 1,00,00,000, you will be priced at the 30% discounted valuation (i.e. 0.70 * 1,00,00,000 = 70,00,000). Effectively, your subscription is worth 1.429% (1,00,000/70,00,000) of the companys valuation instead of 1% (1,00,000/1,00,00,000). '},
    {id:6, head:'What is valuation cap?' ,content:"The purpose of a valuation cap is very similar to that of a discount cap. However, instead of a discount on the company's valuation, the valuation at which your subscription is valued is capped. As an illustration, assume you have subscribed INR 1,00,000 to a startup with a valuation cap of INR 50,00,000. In case the valuation at the time of the next priced round is INR 1,00,00,000, your subscription will be valued at 2% (1,00,000/50,00,000) as opposed to 1% (1,00,000/1,00,00,000) "},
    {id:7, head:'What is a Compulsorily Convertible Debenture (CCD)?' ,content:'CCDs are hybrid instruments. They are debentures that are compulsorily convertible into equity shares of the company. These do not carry any voting rights.'},
    {id:8, head:'When will my Subscription in CCD convert into equity shares?' ,content:'The terms of conversion of CCD into equity shares is determined at the time of issuance. However, as per regulations, this time limit cannot in any case exceed 10 years from the date of issuance of CCDs.'},
    {id:9, head:'What is a Compulsorily Convertible Preference Share (CCPS)?' ,content:'Compulsorily Convertible Preference Shares (CCPS) are securities that offer a fixed income to the holder till the time of conversion into equity shares. These convert into a predetermined number of equity shares at a pre-determined date agreed at the time of issue.'},
    {id:10, head:'What is a Non-Convertible Debenture (NCD)?' ,content:"An NCD is a secured fixed-income debt instrument that entitles the holder to regular payment of income in the form of interest. These debentures have a fixed tenure; the maximum tenure as per the Companies Act'2013 is 10 years. The principal amount, which is the amount invested in the debenture, may be repaid in tranches during the tenure of the instrument or at the end of the maturity period."},
    {id:11, head:'What are the regulations pertaining to NCD?' ,content:"Regulations relevant to NCD as per Companies Act'2013 and other guidelines are as below: i. Maximum tenure cannot exceed 10 years other than NBFCs or Infrastructure Companies or Companies approved by the Central Government. ii. Minimum tenure should be at least 1 year. iii. Unlisted NCD have to be fully secured by creation of the charge against the movable or immovable assets of the company. iv. Company must appoint a Debenture Trustee and charge has to be created in favour of "},
    {id:12, head:'What is coupon rate?' ,content:'Coupon rate is the rate of interest that is payable by the issuing company to the subscribers of the NCD. '},
    {id:12, head:'Do all instruments come on the cap table?' ,content:'No. CSOP, CCD and NCD do not come on the cap table. Equity shares issued as a result of conversion of CCD will come on the cap table.'},
    {id:13, head:'What are Convertible Notes?' ,content:"The Government of India, with a view to promote Subscriptions in startups, introduced the concept of Convertible Notes. Convertible note means an instrument issued by a start-up company acknowledging receipt of money initially as debt, repayable at the option of the holder, or which is convertible into such number of equity shares of that company, within a period not exceeding five years from the date of issue of the convertible note, upon occurrence of specified events as per other terms and conditions agreed and indicated in the instrument. However, the eligible subscriber has to purchase Convertible Notes for an amount of at least INR 25 lakhs. Startup has been defined by the Department of Industrial Promotion and Policy (DIPP), Ministry of Commerce and Industry. "},
    {id:14, head:'Does Tyke help facilitate Subscriptions via Convertible Notes?' ,content:'No, we do not facilitate Subscriptions via Convertible Notes on our platform.'},
    {id:15, head:'What is the benefit of a SAR?' ,content:"There are multiple benefits to both the grantee as well as the company granting the SAR: To the grantee: a. There is no additional consideration to be paid at the time of redemption unlike in ESOPs b. There is no tax impact on the grantee in the intervening period unlike in an ESOP c. Lastly, it is an efficient way for people to participate in the growth of a startup. Practically, it is very difficult for organizations to issue equity shares to so many people as it will crowd the cap-table. Given there is no actual issue of equity shares involved, the subscription amount can be kept low To the company: a. There is no issuance of equity shares involved and thus, no additional entries on the cap-table. This also saves time and effort involved in compliances and filing b. The amount granted as SAR can be recognized as an expense for the purposes of income-tax "},
]

export default function CampaignsFaq() {
    const navigate = useNavigate()
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                <div className="detailed-faq-section">
                    <div role="presentation" onClick={handleClick}>
                        <Breadcrumbs fontSize="large" aria-label="breadcrumb">
                            <Link onClick={() => navigate('/')} style={{ cursor: 'pointer', textDecoration: 'none' }} color="#F0C127">
                                Home
                            </Link>
                            <Link
                                color="#F0C127"
                                style={{ cursor: 'pointer', textDecoration: 'none' }}
                                onClick={() => navigate('/faq-details')}
                            >
                                Faq
                            </Link>
                            <Link
                                style={{ cursor: 'pointer', textDecoration: 'none' }}
                                color="text.primary"
                                aria-current="page"
                            >
                                Types of campaigns
                            </Link>
                        </Breadcrumbs>
                    </div>

                    <div style={{marginTop:'2em'}}>
                        {data.map((item , index)=>{
                            return(
                                <Accordion key={index} expanded={expanded === `panel${item.id}`} style={{marginTop:'1em',boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}} onChange={handleChange(`panel${item.id}`)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    
                                >
                                    <Typography width='100%' sx={{  flexShrink: 0,color: expanded ===`panel${item.id}` ? '#ffbf00':'black' }}>
                                    {item.head}
                                    </Typography>
                                   
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                   {item.content}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            )
                        })}
                       
                        
                    </div>
                </div>
            </Container>
        </>
    )
}