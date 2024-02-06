import React from "react";
import '../../../css/MyntUniversity/myntFaq.css'
import SearchIcon from '../../../images/assets/search.svg'
import LeftArrow from '../../../images/assets/leftArrow.svg'
import { useNavigate } from "react-router-dom";
const data = [
    { id: 1, heading: 'STARTING OFF', subHeading: 'Embark on your journey to wealth creation', navigateTo: '/myntUniversity/faq/getting-started' },
    { id: 2, heading: 'STARTUP FUNDING ', subHeading: 'A guide to investing in startups', navigateTo: '/myntUniversity/faq/startup-invest' },
    { id: 3, heading: 'GENERAL FAQs', subHeading: 'A list of frequently asked queries.', navigateTo: '/myntUniversity/faq/general' },
    { id: 4, heading: 'ALLOCATION OF FUNDS', subHeading: 'Read more about the steps involved in enrolling to your favourite startups ', navigateTo: '/myntUniversity/faq/enrollment' },
    { id: 5, heading: 'DECODING TYPES OF CAMPAIGNS', subHeading: 'Decoding of all campaign enrollment instruments', navigateTo: '/myntUniversity/faq/campaigns' },
    { id: 6, heading: 'GAINS AND TAXATION IMPLICATIONS ', subHeading: 'Earnings from different instruments and the tax implications', navigateTo: '/myntUniversity/faq/returntax' },
    { id: 7, heading: 'FOR ENTREPRENEURS ', subHeading: 'Solutions to all your fundraising problems at one location', navigateTo: '/myntUniversity/faq/founder' },
]
export default function MyntFaqMain() {
    const navigate = useNavigate()
    return (
        <div className="faq-university-container">
            <div style={{ display: 'grid' }}>
                <span className="get-started-heading startup">MyntUniversity</span>
                <span className="sub-heading-mynt-faq">Mynt University is the ultimate source for answers to the most commonly asked questions.</span>
            </div>
            <div className="searchbar-mynt-faq">
                <input className="input-searchbar-mynt-faq" placeholder="Find Answers and Resources…" />
                <img src={SearchIcon} alt="" />
            </div>
            <div className="info-provider-faq-mynt">
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginTop: '1em' }}>
                    <div className="circular-do-info-numeric">1</div>
                    <span style={{ cursor: 'pointer' }} onClick={() => navigate('/myntUniversity/faq/getting-started')} className="text-info-faq-mynt">How to Sign Up?</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginTop: '1em' }}>
                    <div className="circular-do-info-numeric">2</div>
                    <span style={{ cursor: 'pointer' }} onClick={() => navigate('/myntUniversity/faq/campaigns')} className="text-info-faq-mynt">What are the different types of instruments available ?</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginTop: '1em' }}>
                    <div className="circular-do-info-numeric">3</div>
                    <span style={{ cursor: 'pointer' }} onClick={() => navigate('/myntUniversity/faq/startup-invest')} className="text-info-faq-mynt"> What are the advantages of startup investing?</span>
                </div>
            </div>
            <div style={{ fontSize: '22px', fontWeight: '600', marginTop: "60px" }}>FAQs</div>
            <div style={{ fontSize: '18px', fontWeight: '600', marginTop: "30px" }}>Browse by Topic</div>
            <div className="box-mynt-faq-sections">
                {data.map((item, index) => {
                    return (
                        <div onClick={() => navigate(item.navigateTo)} key={index} className="main-info-provider-mynt-faq">
                            <div style={{ display: 'grid' }}>
                                <span style={{ fontSize: '14px', fontWeight: '600' }}>{item.heading}</span>
                                <span style={{ fontSize: '14px', fontWeight: '500', color: 'gray' }}>{item.subHeading}</span>
                            </div>
                            <img src={LeftArrow} alt="" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}