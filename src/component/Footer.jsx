import React, { useState, useEffect } from "react";
import '../css/footer.css';
import Grid from '@mui/material/Grid';
import logo from '../images/mynt1.png';
import facebook from '../images/social-logos/facebook.png';
import linkdin from '../images/social-logos/linkdin.png';
import instagram from '../images/social-logos/instagram.png'
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate()
    const [space, setSpace] = useState(2)
    const [gridxsFirst, setGridxsFirst] = useState(4)
    const [gridxsSecond, setgridxsSecond] = useState(8)
    const ratio = parseInt(window.innerWidth);


    useEffect(() => {

        if (ratio > 920) {
            setSpace(2)
            setGridxsFirst(4)
            setgridxsSecond(8)
        }
        else {
            setSpace(1)
            setGridxsFirst(12)
            setgridxsSecond(12)
        }
    }, [])


    return (
        <div className="footer-container">

            <Grid container spacing={space}>
                <Grid item xs={gridxsFirst}>
                    <div className="footer-head-section">
                        <img src={logo} alt="Mynt logo" className="logo-web-footer" />
                        <span className="footer-text-header">Mynt Invest is a technology & transparency
                            -focused alternate Subscription platform that is
                            making accessible the best Subscription
                            opportunities across the entire risk-reward
                            spectrum that can best add value to a investor's
                            wealth creation goals.
                        </span>
                        <div className="button-container-footer">
                            <div className="logo-footer">
                                <img src={facebook} width='10px'></img>
                            </div>
                            <div className="logo-footer">
                                <img src={instagram} width='20px'></img>
                            </div>
                            <div className="logo-footer">
                                <img src={linkdin} width='20px'></img>
                            </div>
                        </div>
                    </div>

                </Grid>
                <Grid item xs={gridxsSecond}>
                    <div className="all-link-section">
                        <div className="footer-links-section-first">
                            <div className="investor-university-section">
                                <span className="heading-link">Investors</span>
                                <span onClick={()=>navigate('/dashboard/live-deals')} className="Detail-link">Deals</span>
                                <span onClick={()=>navigate('/login')} className="Detail-link">Invest</span>
                                <span onClick={()=>navigate('/myntUniversity/faqs')} className="Detail-link">Learn</span>
                            </div>
                            <div className="investor-university-section">
                                <span className="heading-link">Mynt University</span>
                                <span onClick={()=>navigate('/faq-details')} className="Detail-link">FAQs</span>
                                <span onClick={()=>navigate('/myntUniversity/blogs')} className="Detail-link">Blogs</span>
                            </div>
                        </div>
                        <div className="footer-links-section-Second">
                            <div className="investor-university-section">
                                <span className="heading-link">Fine Print</span>
                                <span onClick={()=>navigate('/privacy-policy')} className="Detail-link">Privacy Policy</span>
                                <span onClick={()=>navigate('/terms-and-condition')} className="Detail-link">Terms & Condition</span>
                                <span onClick={()=>navigate('/risk-investment')} className="Detail-link">Risk of Subscription</span>
                            </div>
                            <div className="investor-university-section">
                                <span className="heading-link">Startups</span>
                                <span onClick={()=>navigate('/founder')} className="Detail-link">Raise</span>
                                <span onClick={()=>navigate('/login-founder')} className="Detail-link">Log In</span>
                                <span onClick={()=>navigate('/myntUniversity/faqs')} className="Detail-link">Learn</span>
                            </div>
                        </div>
                        <div className="contact-us-at">
                            <div className="investor-university-section-second">
                                <span className="heading-link">Contact Us</span>
                                <span className="Detail-link">5686B,Phase-4.</span>
                                <span className="Detail-link">Connaught Place</span>
                                <span className="Detail-link">Delhi-110023</span>
                                <span className="Detail-link">CIN: U74999RJ2022PTC079102</span>
                            </div>
                            <div className="contact-us-at-mail">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <MailOutlineRoundedIcon style={{ width: '30px', height: '30px', color: '#fbdf35', paddingBottom: '8px' }} />
                                    <span className="Detail-link">Info@myntinvest.com</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <LocalPhoneSharpIcon style={{ width: '30px', height: '30px', color: '#fbdf35', paddingBottom: '8px' }} />
                                    <span className="Detail-link">+91 9811200000</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </Grid>

            </Grid>
            <div className="footer-bottom-section">
                <span style={{fontWeight:'600' ,fontSize:'15px'}}>Disclaimer:</span>
                <span className="footer-text-header">All trademarks and logos or registered trademarks and logos found on this Site or mentioned herein belong to their respective owners and are solely being used for informational
                    purposes.

                    Information provided herein has been gathered from public sources. Mynt Technologies Pvt Ltd disclaims any and all responsibility in connection with veracity of this data. Information
                    presented on this website is for educational purposes only and should not be treated as legal, financial, or any other form of advice. MXi Technologies Pvt Ltd is not liable for financial or
                    any other form of loss incurred by the user or any affiliated party on the basis of information provided herein.

                    MXi Technologies Pvt Ltd is neither a stock exchange nor does it intend to get recognized as a stock exchange under the Securities Contracts Regulation Act, 1956. MXi Technologies Pvt Ltd
                    is not authorized by the capital markets regulator to solicit Subscriptions. The securities traded on these platforms are not traded on any regulated exchange. Mynt also provides that it

                    does not facilitate any online or offline buying, selling, or trading of securities.

                    This Site will be updated on a regular basis.

                </span>
            </div>
            <div className="bottomMost-bar">
                <span className="bottomMost-text">MXi Technologies Pvt. Ltd. 2023 All Rights Reserved</span>
            </div>

        </div>
    );
};

export default Footer;