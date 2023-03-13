import React from "react";
import { AccordionDetails, Accordion, AccordionSummary, Typography, Button } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from "react-router-dom";
export default function DashBoardFaq() {
    const [expanded, setExpanded] = React.useState(false);
    const navigate = useNavigate()
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
            <div style={{ marginBottom: '2em' }}>
                <div className="investor-home-heading">FAQS</div>
                <span className="investors-subheading">Mynt University is the ultimate source for answers to the most commonly asked questions.</span>
                <div style={{ marginTop: '2em' }}>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ boxShadow: 'none', border: '1px solid #D1D1D1' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <div>
                                <span style={{ color: '#EBB429', fontWeight: 600, fontSize: '16px' }}>01. </span>
                                <span style={{ fontWeight: 600, fontSize: '16px', fontFamily: 'poppins' }}> What do you understand by early-stage startups? </span>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Startup investing is the process of investing in a business which is in its nascent stage. For your Subscription, you receive equity, a piece of ownership, and a cut of any future earnings.

                                <br /> <br /> Early startup Subscription has the potential to be both profitable and unsuccessful. If the startup fails, your Subscription is lost. If it succeeds, you will get a good return on your Subscription.

                                <br /> <br />Startups typically make an early effort to raise capital. When the startup is farther along and is in its growth phase, Subscriptions can also be raised.

                                <br /> <br /> It can be risky to invest in startups. But many people nowadays seem willing to take this chance. When looking at the bright side, this risk may be quite valuable.

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
                                <span style={{ fontWeight: 600, fontSize: '16px' }}> What are the different ways I can transfer the enrollment amount?</span>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                - There is enormous growth potential. It is risky, but it may also be rewarding <br /> <br />
                                - Startup investing is a wonderful idea since it encourages you to support an appealing idea that you want to see in the world and by investing you instill a sense of belief in a novel idea. <br /> <br />
                                - It promotes the growth of deeper interpersonal bonds. You feel more like a part of the startup when you own stock in it. <br /> <br />
                                - Seeing a concept come to reality while having a hand in it brings a sensation that a lot of people enjoy having.

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
                                <span style={{ fontWeight: 600, fontSize: '16px' }}> Where can I find all the campaigns currently open for investment?</span>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Equity Shares, Compulsorily Convertible Preference Shares, Optionally Convertible Preference Shares, and Compulsorily Convertible Debentures are the instruments that are frequently used for startup equity fundraising.

                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div style={{ marginTop: '2em', marginBottom: '40px' }}>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style={{ boxShadow: 'none', border: '1px solid #D1D1D1' }}>
                        <AccordionSummary

                            expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <div>
                                <span style={{ color: '#EBB429', fontWeight: 600, fontSize: '16px' }}>04.</span>
                                <span style={{ fontWeight: 600, fontSize: '16px' }}> What are the different types of instruments available for enrollment on Myntinvest?</span>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                - Risk Inherent in Startup Subscriptions: <br />
                                Subscriptions in startups are highly risky. Startups are subject to significant operational and financial risks. While desired returns in every Subscription situation ought to reflect the perceived level of risk, they might be insufficient to make up for the risks incurred by an investor or a fund. The loss of an investor's whole Subscription is possible and likely. The timing of the return on Subscription is also unknown.
                                <br /><br />
                                - Dynamic Economic Conditions:<br />
                                The state of the economy as a whole has an impact on any Subscription project's performance to some level. A Startup or a Fund may depend on external credit markets, stock markets, and other economic systems to achieve its goals, but these systems may be inaccessible, inactive, or unavailable, which can have a negative impact on their operations and profitability.
                                <br /><br />
                                - Absence of Investor Control:<br />
                                Investors in a startup will not have any say in the management, disposition, or other realization of any Subscription made by the relevant Fund, or in any other aspect of the startup's operations

                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                </div>
                <div style={{ marginTop: '2em' }}>
                    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} style={{ boxShadow: 'none', border: '1px solid #D1D1D1' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: '#AB7905' }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <div>
                                <span style={{ color: '#EBB429', fontWeight: 600, fontSize: '16px' }}>05.</span>
                                <span style={{ fontWeight: 600, fontSize: '16px' }}> What is the minimum enrollment amount for various campaigns?</span>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                - Initial Public Offering(IPO)<br />
                                Investors' access to public markets, which also guarantees free transferability of shares, is one of the primary reasons that IPOs are a favoured method of exit. To that end, the timing and execution of an IPO must be carefully planned at the time that contracts (such as shareholders' agreements) are signed, taking into consideration the economic conditions and their effects on the IPO. Therefore, IPO terms must be carefully articulated so that investors have the freedom to adjust their exit plan as necessary.
                                <br /><br />
                                - Merger or Acquisition<br />
                                We frequently come across investors initiating an exit event if the investee company plans to merge with or acquire a company operating in a similar industry. Through this manner of exit, investors may look for a full or a partial exit. A merger between an unlisted investee firm and a publicly traded company is another exit strategy, but it may involve significant regulatory procedures.
                                <br /><br />
                                -  Buyback<br />
                                Similar to a merger of an unlisted investee company with a publicly traded company, a buyback is subject to stringent regulatory requirements that must be met before it can be carried out. These requirements include, among others: (a) limitations on the sources of funds for the buyback and the redistribution of profits; (b) a buyback that cannot exceed 25% of the company's free reserves and paid-up capital; and (c) the requirement that the offer is made to all shareholders. As a result, exiting through a buyback is frequently seen as a last resort.
                                <br /><br />
                                -  Sale<br />
                                This exit strategy has become more popular, mainly because it does not involve promoter intervention. Any restrictions on private sales are also typically contractual. However, a transfer made by a non-resident will be subject to the applicable pricing guidelines outlined in the Indian laws governing foreign exchange controls and/or the applicable SEBI regulations, in the case of a listed company, which may limit their ability to demand a high price when selling their stakes. Investors might also think about selling their ownership to other strategic or monetary investors/funds in a secondary buy-out.


                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="get-started-btn-investor">
                    <Button variant="contained" onClick={() => navigate('/myntUniversity/faqs')} className="getStarted-landing-btn">Need More Help</Button>
                </div>
            </div>
        </>
    )
}