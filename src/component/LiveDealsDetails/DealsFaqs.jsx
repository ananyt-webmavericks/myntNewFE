import React from "react";
import { AccordionDetails, Accordion, AccordionSummary, Typography, Button } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
export default function DealsFaqs() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
            <div style={{ marginBottom: '2em',marginTop:'60px' }}>
                <div className="investor-home-heading" style={{fontSize:'24px'}}>About MildCares - GynoCup</div>
              
                <div style={{ marginTop: '2em' }}>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ boxShadow: 'none', border: '1px solid #D1D1D1' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <div>
                                <span style={{ color: '#EBB429', fontWeight: 600, fontSize: '16px' }}>01.</span>
                                <span style={{ fontWeight: 600, fontSize: '16px' }}> What does our company Mild Cares do?</span>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            Mild Cares is a FemTech Startup that builds high quality products for women hygiene and personal care. Our prime focus is to create an awareness and an impactful presence amongst the masses. Mild Cares’s Brand “GynoCup” is a game changer product. Moreover we offer a wide range of Intimate & Toilet Hygiene products like the Urination Device, Cramp Pain Relief, Female Hygiene wash, Toilet Seat Covers and many more.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div style={{ marginTop: '2em' }}>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{ boxShadow: 'none', border: '1px solid #D1D1D1' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <div>
                                <span style={{ color: '#EBB429', fontWeight: 600, fontSize: '16px' }}>02.</span>
                                <span style={{ fontWeight: 600, fontSize: '16px' }}> Who are the founders of Mild Care?</span>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div style={{ marginTop: '2em' }}>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{ boxShadow: 'none', border: '1px solid #D1D1D1' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <div>
                                <span style={{ color: '#EBB429', fontWeight: 600, fontSize: '16px' }}>03.</span>
                                <span style={{ fontWeight: 600, fontSize: '16px' }}> Funding Details of Mild Cares?</span>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div style={{ marginTop: '2em' ,marginBottom:'40px'}}>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style={{ boxShadow: 'none', border: '1px solid #D1D1D1' }}>
                        <AccordionSummary

                            expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <div>
                                <span style={{ color: '#EBB429', fontWeight: 600, fontSize: '16px' }}>04.</span>
                                <span style={{ fontWeight: 600, fontSize: '16px' }}>  What is the USP (Unique Selling Proposition) of your products?</span>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    
                </div>
                <div style={{ marginTop: '2em' ,marginBottom:'40px'}}>
                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} style={{ boxShadow: 'none', border: '1px solid #D1D1D1' }}>
                        <AccordionSummary

                            expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <div>
                                <span style={{ color: '#EBB429', fontWeight: 600, fontSize: '16px' }}>05.</span>
                                <span style={{ fontWeight: 600, fontSize: '16px' }}>  Where is Mild Cares based at?</span>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    
                </div>
                <div style={{ marginTop: '2em' ,marginBottom:'40px'}}>
                    <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} style={{ boxShadow: 'none', border: '1px solid #D1D1D1' }}>
                        <AccordionSummary

                            expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <div>
                                <span style={{ color: '#EBB429', fontWeight: 600, fontSize: '16px' }}>06.</span>
                                <span style={{ fontWeight: 600, fontSize: '16px' }}> What is the gross margin of the company?</span>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    
                </div>
                <div className="get-started-btn-investor" style={{display:'grid' ,justifyContent:'center',alignItems:'center' }}>

                        <KeyboardDoubleArrowDownIcon style={{margin:'auto'}} />
              
                        <span style={{color:'#EBB429' , fontSize:'13px'}}>VIEW MORE</span>
                </div>
            </div>
        </>
    )
}