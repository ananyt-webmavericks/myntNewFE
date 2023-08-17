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
    { id: 1, head: "What is the meaning of early-stage or startup Subscriptions?", content: "Investing in startups that are still building a revenue model, growing their customer base and scaling rapidly will qualify as early-stage startup Subscriptions. These startups have a huge growth potential and provide an opportunity to earn handsome returns. The Thomson Reuters Venture Capital Research Index replicated the performance of venture capital industry in 2015 and found that overall venture capital has returned an annual rate of 20.6% since 1996 – far outperforming modest returns of 7.5% and 5.9% from public equities and bonds respectively. " },
    { id: 2, head: "What are the potential benefits of investing in startups?", content: "There are numerous benefits other than the potential to earn very high returns. These include the following: a. The ability to play the role of evangelists and back the future disruptors that are meant to address problems that exist today b. Great networking opportunities with other early stage investors and founders " },
    { id: 3, head: "Is investing in startups risky?", content: "Investing in startups can be risky. These businesses may still be trying to find a product-market fit or may be trying to establish a market. Not all early-stage startups grow to become well-establishes businesses. Some of the startup may even close down due to a variety of reasons such as lack of funding, lack of sustainable margins or even a lack of a big enough market. " },
    { id: 4, head: "What is a private placement of securities?", content: "Private placement is a funding round of securities which are sold not through a public offering, but rather through a private offering, mostly to a small number of investors." },
    { id: 5, head: "What are the provisions that govern private placement of securities?", content: "Private placement of securities is governed by Section 42 of Companies Act'2013. The maximum number of persons who can subscribe to a particular security in a financial year cannot exceed 200.Rule 14 of the Companies (Prospectus and Allotment of Securities) Rules, 2014 (‘Rules’) provides the regulations relating to the private placement by companies. The Rules state that the company should offer its securities through a private placement offer letter in Form PAS-4. The company should send the private placement offer letter to the person to whom the offer is made. " },
    { id: 6, head: "What is cap table?", content: "Capitalization table is a document that details the breakdown of the ownership structure of a company. It contains details of each shareholder, the respective stake and the valuation at which each round was raised. It is critical for founders, existing as well as potential investors to understand the impact of a potential fund-raise on the ownership structure." },
    { id: 7, head: "What is an Alternative Subscription Fund (AIF)?", content: "AIFs are pooled Subscription vehicles that invest in private equity, venture capital or private debt. It can be established in the form of a body corporate, a trust or an LLP.As per SEBI, this is the only vehicle permissible in case funds from multiple investors are to be pooled for the purpose of Subscription in an entity, i.e. the pooled funds will appear as only one line on the cap table. " },
    { id: 8, head: "Who can invest in an AIF?", content: "As per SEBI regulations, an investor has to satisfy the following criteria to invest in an AIF: i. Minimum Enrollment of INR 1 crores (INR 25 lakhs for directors, employees or fund managers of if the person is investing in an Angel Fund) ii. Minimum lock-in period of 3 years iii. Number of investors is restricted to 1,000 in a scheme (except Angel Funds in which the number is restricted to 49) " },
    { id: 9, head: "Does Tyke route Subscriptions via an AIF?", content: "No, all Subscriptions on our platform are direct Subscriptions in the startup and are not routed via an AIF. However, we have partnered with an AIF in case a founder wants to facilitate a private fund raise with own identified list of investors. These opportunities will not be visible on the platform." },
]

export default function StartedInvestFaq() {
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
                                Startup Investing
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