import React from "react";
import { AccordionDetails, Accordion, AccordionSummary, Typography, Button } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
export default function DealsFaqs({ faqData, companyData }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
            <div style={{ marginBottom: '2em', marginTop: '60px' }}>
                <div className="investor-home-heading" style={{ fontSize: '24px' }}>About {companyData.company_name}</div>
                {
                    faqData.length > 0
                        ? faqData?.map((item, index) => <div key={index} style={{ marginTop: '2em' }}>
                            <Accordion expanded={expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)} style={{ boxShadow: 'none', border: '1px solid #D1D1D1', padding:'0px 20px' }}>
                                <AccordionSummary
                                style={{padding: 0}}
                                    expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <div style={{display:'flex',gap:10}}>
                                        <span style={{ color: '#EBB429', fontWeight: 600, fontSize: '16px' }}>{index + 1}.</span>
                                        <span style={{ fontWeight: 600, fontSize: '16px' }}>
                                            {item.question}
                                        </span>
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {item.answer}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>)
                        : <div className="investor-home-heading" style={{ fontSize: '14px' }}>No FAQs to show</div>
                }
                <div className="get-started-btn-investor" style={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}>

                    <KeyboardDoubleArrowDownIcon style={{ margin: 'auto' }} />

                    <span style={{ color: '#EBB429', fontSize: '13px' }}>VIEW MORE</span>
                </div>
            </div>
        </>
    )
}