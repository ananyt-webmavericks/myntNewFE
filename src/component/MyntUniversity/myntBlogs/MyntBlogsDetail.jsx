import React from "react";
import { Container } from "@mui/material";
import DrawerMynt from "../../Dashboard/DrawerMynt";
import Footer from "../../Footer";
import BackButton from '../../../images/assets/backBtn.svg'
import { useNavigate } from "react-router-dom";
import ImageBlog1 from '../../../images/myntblogs/detailblog1.png'
import ImageBlog2 from '../../../images/myntblogs/detailblog2.png'
import LeftArrow from '../../../images/assets/leftArrow.svg'
import '../../../css/MyntUniversity/myntFaq.css'
export default function MyntBlogsDetail() {
    const location = window.location.pathname;
    const ratio = parseInt(window.innerWidth);
    const navigate = useNavigate()
    return (
        <>
            <div style={{ display: 'flex', position: 'relative' }}>
                {location.includes('/myntUniversity') && <DrawerMynt height={'inherit'} />}
                <div className="dashboard-container">
                    <Container maxWidth="lg">
                        <div className="faq-university-container">
                            <div style={{ display: 'grid' }}>
                                <img src={BackButton} onClick={() => navigate('/myntUniversity/blogs')} alt='backbtn' style={{ marginBottom: '20px' }} />
                                <span className="get-started-heading startup">Exploring Non-convertible Debentures (NCD Subscription): What You Need to know</span>
                                <span style={{ fontSize: '15px', color: '#777777', marginTop: '15px' }}>8th feb 2023</span>
                                <hr style={{ border: '0.5px solid gray', marginTop: '1em' }} />
                                <span style={{ marginTop: '30px', fontSize: '20px', fontWeight: '600' }}>Introduction:</span>
                            </div>

                            <div className="introduction-detail-blogs-container">
                                <div className="intro-txt-detail-blog">NCD Subscriptions are a popular asset type in India, primarily because of the guaranteed and fixed return on Subscription. Is there any Subscription option that may give a better-fixed return on your money, say 9-10%? <br /><br /> There will always be investors looking for a suitable NCD Subscription option that provides greater returns while managing risk and liquidity to a considerable degree. <br /><br />NCD Subscriptions (NCDs) have emerged as a favored asset among investors, giving a solid risk-return profile and ease of liquidity.</div>
                                <img src={ImageBlog1} alt="" className="image-section-detail-blog" />
                            </div>
                            <div style={{ display: 'grid', marginTop: '70px' }}>
                                <span style={{ marginBottom: '30px', fontSize: '20px', fontWeight: '600' }}>What exactly are Non-Convertible Debentures?</span>
                                <div style={{ fontSize: '16px' }}>Non-convertible debentures (NCDs) are debt instruments that cannot be converted into either equity or stock by the issuing firm. Typically, large corporations issue them to obtain funds without providing a conversion option into stock. NCDs are not typically secured by collateral. Investors may only depend on the creditworthiness of the issuing firm and the ratings provided by credit agencies. These ratings assist investors in understanding the issuer’s creditworthiness and prospects. <br /> <br />NCDs have a set interest rate. They mature and pay interest monthly, quarterly, half-yearly, or annually, depending on the terms of the issue. Investors get principal and interest at maturity. NCDs outperform convertible debentures in liquidity, risk, and tax benefits.</div>
                            </div>
                            <div style={{ display: 'grid', marginTop: '70px' }}>
                                <span style={{ marginBottom: '30px', fontSize: '20px', fontWeight: '600' }}>What is the significance of the term “non-convertible”?</span>
                                <img src={ImageBlog2} style={{width:'100%'}} />
                                <div style={{ fontSize: '16px',marginTop:'30px' }}>After a specific period, certain debentures may convert into shares. It is done at the owner’s discretion. It is, however, not practicable in the case of NCDs. That is why they are referred to as non-convertibles.<br /> <br />While NCDs cannot be converted into shares, they provide additional advantages. <br /><br />NCDs have a rate of return of 11-12%. It is high in comparison to the majority of investing possibilities. For example, fixed deposits (FDs) are another common place for consumers to park their money in exchange for regular returns. However, the rewards are far less. </div>
                            </div>
                            <div style={{ display: 'grid', marginTop: '70px' }}>
                                <span style={{ marginBottom: '30px', fontSize: '20px', fontWeight: '600' }}>Bond Characteristics:</span>
                                <div style={{display:'flex' , alignItems:'center'}}>
                                    <img src={LeftArrow} style={{marginRight:'1em'}} />
                                    <span style={{fontSize:'16px'}}>NRIs may make bond Subscriptions via the ‘NRI window.’</span>
                                </div>
                                <div style={{display:'flex' , alignItems:'center',marginTop:'1em'}}>
                                    <img src={LeftArrow} style={{marginRight:'1em'}} />
                                    <span style={{fontSize:'16px'}}>Capital bonds, public sector units, corporate bonds, NCDs, government tax-free NRI bonds, Treasury bills, municipal bonds, and other forms of bonds are accessible to NRIs.</span>
                                </div>
                                <div style={{display:'flex' , alignItems:'center',marginTop:'1em'}}>
                                    <img src={LeftArrow} style={{marginRight:'1em'}} />
                                    <span style={{fontSize:'16px'}}>NRIs may use a Demat account to purchase and sell bonds.</span>
                                </div>
                                <div style={{display:'flex' , alignItems:'center',marginTop:'1em'}}>
                                    <img src={LeftArrow} style={{marginRight:'1em'}} />
                                    <span style={{fontSize:'16px'}}>According to the ITA,1 961, interest derived from bond Subscriptions was taxed. There are, however, tax-free government bonds created for NRIs that provide tax exemptions.</span>
                                </div>
                                <div style={{display:'flex' , alignItems:'center',marginTop:'1em'}}>
                                    <img src={LeftArrow} style={{marginRight:'1em'}} />
                                    <span style={{fontSize:'16px'}}>Long-term capital gains and short-term capital gains are both taxed.</span>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
            {ratio < 1000 ? null : <Footer />}
        </>
    )
}