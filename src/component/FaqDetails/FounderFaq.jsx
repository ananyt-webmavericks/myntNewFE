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
    { id: 1, head: 'How do I setup a new campaign on Tykeinvest?', content: "Setting up a campaign on Tykeinvest is very easy. Signup as a founder, give us the company's details, upload a pitch deck and create a campaign. Our team then performs the due diligence and approves the campaign" },
    { id: 2, head: 'What information is required to start a campaign on Tykeinvest?', content: "To start a campaign on Tykeinvest, we require the company details to be filled out: i. A brief bio, ii. The company's logo iii. Details of the company directors, iv. Registered address; and v. Incorporation details. Additionally, we require a pitch deck, a campaign video and a list of FAQs relevant to make users aware about the company " },
    { id: 3, head: "How much time it takes for the campaign to go live once the documents are given from the startup's end?", content: "Our team reviews and contacts the startups within two working days and gives a slot for the campaign to go live on the platform" },
    { id: 4, head: 'How much fees does Tykeinvest charges for listing a campaign?', content: "We charge a standard listing fee from the startup and a success fee on the total amount raised via a successful campaign. Please speak to our team to get a fee curated for your campaign." },
    { id: 5, head: 'For what types of instruments can I run a campaign on Tykeinvest?', content: 'On Tykeinvest, you can choose to do a SAR campaign, a CCD campaign, a CCPS campaign or an NCD campaign' },
    { id: 6, head: 'How do I decide which campaign is the most suited for my startup?', content: 'Please reach out to the support team. The support team will get you in touch with someone from Tyke who can help you decide the most suited campaign.' },
]

export default function FounderFaq() {
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
                                For Founders
                            </Link>
                        </Breadcrumbs>
                    </div>

                    <div style={{ marginTop: '2em' }}>
                        {data.map((item, index) => {
                            return (
                                <Accordion key={index} expanded={expanded === `panel${item.id}`} style={{ marginTop: '1em', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} onChange={handleChange(`panel${item.id}`)}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"

                                    >
                                        <Typography width='100%' sx={{ flexShrink: 0, color: expanded === `panel${item.id}` ? '#ffbf00' : 'black' }}>
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