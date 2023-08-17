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
    { id: 1, head: "Does Tyke guarantee any return on subscriptions?", content: "Tyke does not guarantee any returns on the subscriptions done via Tykeinvest. " },
    { id: 2, head: "How can investors earn returns from startup Subscriptions?", content: "Investors can realize returns on their Subscriptions through the following: a. Exits facilitated at the time of mergers or acquisitions b. Buyback of outstanding securities by the issuing company c. Sale of outstanding security to another investor for consideration " },
    { id: 3, head: "What is Internal Rate of Return (IRR)?", content: "The coupon rate does not take into account the time value of money of returns received on the NCD. In case interest or principal or both is paid at a frequency shorter than a year, then the IRR will be higher than the coupon rate. IRR is calculated assuming that the amounts received can be re-invested at the same coupon rate immediately. " },
    { id: 4, head: "What is Extended Rate of Return (XIRR)?", content: "In case the amounts are not paid back at similar intervals, then IRR has certain limitations. IRR does not take into account exact dates of payment of money. XIRR overcomes this problem and takes into account exact dates of payments of amounts to the investor. " },
    { id: 5, head: "How are SARs taxed?", content: "Subscription amount towards SAR will be categorized as an expense.At the time of repayments, income from SAR exit shall be taxed under the head 'Income from Other Sources'. The entire amount received shall be taxed as per the subscriber's income tax slab. " },
    { id: 6, head: "How are CCDs taxed?", content: "CCD subscription is required to be disclosed in ITR under the Schedule for Unlisted shares. On redemption in the form of buy-back, CCD exits will be taxed as Capital Gains. No tax is payable on the conversion of CCD into equity shares. " },
    { id: 7, head: "How are CCPs taxed?", content: "CCPS subscription is required to be disclosed in ITR under the Schedule for unlisted shares. On redemption in the form of buyback, CCPS exits to be taxed as Capital Gains. No tax is payable on the conversion of CCPS into equity shares. " },
    { id: 8, head: "How are NCDs taxed?", content: "Income from NCDs in the form of interest will be taxed under the head 'Income from Other Sources' and be taxed as per the tax slab of the individual." },
    { id: 9, head: "From which date does interest start accruing on the NCD?", content: "Interest will start accruing from the date of issuance of allotment certificate bearing stamp duty by the start-up. Following is the chain of events after the campaign ends on the platform: a. Debenture Trust Deed and Hypothecation/Mortgage agreement is executed between the start-up and the trustee b. Filing of offer letter in Form PAS-4 with the MCA c. Passing of board resolution by the start-up and filing of letter of allotment with the MCA d. Payment of requisite stamp duty and preparation of allotment certificate for investors These activities usually take between 7-10 working days for completion. " },
    { id: 10, head: "How is income from Discounting charges taxed?", content: "Income in the form Discounting charges are considered is as 'Income from other sources' and is taxed as per the subscriber's applicable tax slab." },
]

export default function TaxationFaq() {
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
                                Returns and Taxation
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