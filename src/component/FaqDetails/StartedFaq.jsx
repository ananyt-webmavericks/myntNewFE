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
   {id:1 , head:'How do I register as a subscriber on Tyke?',content:'To register on the platform all you need to do is signup using an email ID. To subscribe to any live campaign, you first need to complete your KYC by either visiting your profile section or by initiating the subscription process.'},
   {id:2 , head:'What is the subscription process?',content:'After completing your signup, you will get access to explore subscription opportunities on the Home page. To help you make a decision we have provided you detailed information about the startup along with financial information. Once you identify the right subscription opportunity for yourself, finalize the subscription amount and make the payment using your preferred mode.Once the startup achieves its target funding requirement and after closure of the campaign, we will share the documents with you for your signatures. '},
   {id:3 , head:'What is minimum subscription amount?  ',content:"To provide you with flexibility in choosing an subscription amount, we aim to keep the minimum subscription amount as low as possible. Tyke’s platform-wide minimum is INR 5,000 for CSOPs (Community Subscription Offer Plan)For CCDs, CCPS and NCD, the minimum subscription as per SEBI guidelines is INR 20,000. Subscriptions can be done in multiples of Rs. 1,000 beyond the minimum threshold. "},
   {id:4 , head:'What are the KYC documents needed to sign up on Tyke?',content:'A valid PAN card for identification and an Aadhaar for e-signing documents. Additionally, your bank account details will be required to process refunds or repayment of principal and interest.'},
]

export default function StartedFaq() {
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
                               Getting started
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