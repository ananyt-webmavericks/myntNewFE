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
    {id:1 , head:"What's next after the payment? When will i receive my instrument?" , content:"Once the startup completes its campaign successfully, we'll work with the startup to get your CSOP agreement/T-SAFE ready to be signed. A CSOP/T-SAFE agreement governs the legality behind your subscription in the corresponding startup. This CSOP agreement/T-SAFE will be available on your dashboard. For T-SAFE, the formalities for filing documents with MCA will start. The offer letter will be uploaded and be accessible from the portfolio section. "},
    {id:2 , head:"What is an offer letter?" , content:"Offer letter is a document issued by a company while making a private placement offer to a specified group of persons. The offer letter has to be filed in Form PAS-4 and needs to be circulated to persons to whom the offer is made. "},
    {id:3 , head:"I received invoice only for Tyke's fees?    " , content:"As a tech platform that smoothens your subscription process, we charge a 2% convenience fee on your subscription. We are allowed to invoice you only on the fee charged by us and not on your subscription. "},
    {id:4 , head:"What is the proof I will receive for my subscription?" , content:"Documents will depend on the type of subscription: 1.For CSOP: CSOP agreement and SAR Letter. 2. For CCD/CCPS/NCD: Subscription agreement and Offer Letter 3. For Discounting: An acknowledgement email"},
    {id:5 , head:"My e-sign button is not working? Not able to e-sign?" , content:"Please email us with your query at support@tykeinvest.com. Our customer support team will help you out. "},
    {id:6 , head:"Can the startup reject my subscription?" , content:"Yes, every company reserves the right to reject, in whole or in part, any subscription commitment at any time before the proceeds are drawn from the account. Any rejected subscriptions will be returned to the subscriber in full along with the convenience fees. "},
    {id:7 , head:"What happens when a deal is oversubscribed?   " , content:"In such a situation, the startup has options to: i. Accept all the funds raised till the time of closure of the campaign, ii. Reduce the amount subscribed by each subscriber by a certain ratio (pro-rata reduction), iii. Randomly allot subscriptions based on draw of lots; or iv. Close the campaign prematurely as soon as the target is achieved The decision lies completely with the company and its stakeholders and the decision will be communicated to you over email. "},
    {id:8 , head:"When is a start up successfully funded?    " , content:"If a startup reaches 75% of its target then the startup successfully gets funded. "},
    {id:9 , head:"What is the next step after I have completed subscription to a CSOP campaign?" , content:"You will receive an acknowledgement towards subscription and an invoice for payment of convenience fees on the platform. Post that, you will be able to sign the CSOP agreement to be executed between you and the founder of the startup. This agreement, along with SAR letter signed by the founder, will be visible on the portfolio section. "},
    {id:10 , head:"How do I transfer funds towards subscription to a private placement of securities?" , content:"Subscription can be transferred only from a bank account in the name of the subscriber or a joint account in which one of the joint owners is the subscriber. The company is obliged to maintain a record of bank accounts from which monies have been transferred. "},
    {id:11, head:"What is the minimum investment required to subscribe to a CCD or CCPS?" , content:"There is no threshold value. The minimum subscription to a CCD or CCSP campaign is determined by the company raising funds with inputs from us based on our experience. "},
    {id:12 , head:"Can I claim a refund of the amount of subscription if I change my mind?" , content:"You may cancel or reduce your subscription within 48 hours of subscribing by writing to us at support@tykeinvest.com. The amount will be credited within 2-3 working days from receipt of the request.  Cancelling your subscription in the final 48 hours of a campaign is not permitted.  Subscriptions to discounting campaigns cannot be refunded."},
    {id:13 , head:"Can I make the subscription payment from someone else's Bank account?" , content:"We recommend you to make the subscription payments only from your own Bank account. Payments from other's Bank accounts may lead to subscription getting rejected.Any refunds or repayments will be credited to the bank account whose details have been shared at the time of creating an account or completing KYC. "},
]

export default function SubscribtionFaq() {
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
                                Subscriptions
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