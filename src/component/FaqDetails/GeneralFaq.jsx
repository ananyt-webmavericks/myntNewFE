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
    {id:1,head:"Who can subscribe via Tykeinvest?",content:"Any individual over the age of 18 years having a PAN and Aadhaar card can subscribe. However, subscribers should be aware of the risks associated with startup investing including the potential loss of capital. "},
    {id:2,head:"Can I subscribe as a company? ",content:"Yes, register yourself as company and fill out all the legal details of your organization. Mail us at support to update the GST and PAN."},
    {id:3,head:"What are the modes through which I can transfer subscription amount?",content:"You have two options - an online mode of payment or an offline mode. If you choose to pay through our website (online), you will be redirected to the checkout page, where you can subscribe through our payment gateway using UPI, credit/ debit cards or Net Banking. If you wish to make your subscription through the offline mode (direct bank transfer), please click on the pay offline button and you'll get access to the escrow account details. Please complete the direct bank transfer and we'll manually update your dashboard within 3-5 days of us receiving your subscription. "},
    {id:4,head:"Which address will be considered for the purpose of KYC?",content:"The address as per your address proof submitted as part of KYC (e.g. address on Aadhar) will be considered."},
    {id:5,head:"Can I edit my address?",content:"Yes, you can add your current address for communication by editing your profile details."},
    {id:6,head:"How can I edit my profile?",content:"You can login using email ID and access the 'Profile' section. You will be able to edit your details like email ID, mobile number, address and bank account details."},
    {id:7,head:"How does Tyke decide which startups can launch campaigns on the platform?",content:"Our team reviews several details of the startup before shortlisting it to go live on the platform. Some of the details reviewed are: i. Financial statements and cash balances ii. Founder pedigree including education qualifications, previous experience iii. Fundraising history and investors cohorts iv. Market position and potential v. Social media presence "},
    {id:8,head:"Where can I find all campaigns open to subscription currently?",content:"On the campaigns section. Here you will find details of campaigns across instruments. Coming soon section will give you a glimpse of campaigns that will go live soon.  "},
    {id:9,head:"Can I get in touch with the startup/founder? ",content:"Founder's email, number and the linkedin profile is mentioned in the people's section of every campaign. Please feel free to the get in touch with them for any queries."},
    {id:10,head:"Can I subscribe to more than one startup?",content:"Yes, you can subscribe to any number of startups. Portfolio diversification is always an advisable strategy and by offering you the ability to make smaller subscriptions we encourage you to subscribe to more than one startup. "},
    {id:11,head:"Can I subscribe more than once in the same startup?",content:"Yes, you can subscribe to a startup's campaign any number of times before the campaign closes. However, please note the minimum transaction amount thresholds will apply to each transaction.You won't be able to transact once the campaign closes. "},
    {id:12,head:"How can I delete my account on Tykeinvest?",content:"In case you want your account to be deleted, please reach out to us on support@tykeinvest.com. Our team will process the request and delete your account within 30 days"},
]

export default function GeneralFaq() {
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
                                General
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