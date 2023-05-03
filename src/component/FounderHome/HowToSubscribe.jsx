import React from 'react'
import '../../css/FounderHome/HowToSub.css'
import Screen1 from '../../images/assets/screen1.png';
import Screen2 from '../../images/assets/screen2.png';
import Screen3 from '../../images/assets/screen3.png';
import Screen4 from '../../images/assets/screen4.png';

const HowToSubscribe = () => {
    return (
        <div className="how-to-raise-container">
            <div className="how-to-sub-heading">How to&nbsp;<span className="colored-investor-home-heading"> raise? </span></div>
            <div className="how-to-sub-subheading">Experience the advantages of a fully digital and hassle-free process.</div>
            <div style={{ overflow: 'hidden', overflowX: 'scroll', display: 'flex', alignItems: 'center' }}>
                <div className="first-raise-card" style={{ marginLeft: '5px' }}>
                    <div className="head-container-raise">
                        <div className="head-section-non-active">1</div>
                        <div className="head-section-second">
                            <span className="card-header-txt">Contact us </span>
                            <span className="card-sub-header-txt">Connect with our team and specify your requirements for raising funds. Our team will assist you in navigating the process and answering any questions you may have.
                            </span>
                        </div>
                    </div>
                    <div className="raise-card-image-container">
                        <img src={Screen1} className="raise-card-image" ></img>
                    </div>
                </div>

                <div className="first-raise-card">
                    <div className="head-container-raise">
                        <div className="head-section-non-active">2</div>
                        <div className="head-section-second">
                            <span className="card-header-txt">We recommend a model that aligns with your financial needs.</span>
                            <span className="card-sub-header-txt">Based on your requirements and our prior experience with effective campaigns, we recommend a model.
                            </span>
                        </div>
                    </div>
                    <div className="raise-card-image-container">
                        <img src={Screen2} className="raise-card-image" ></img>
                    </div>
                </div>

                <div className="first-raise-card">
                    <div className="head-container-raise">
                        <div className="head-section-non-active">3</div>
                        <div className="head-section-second">
                            <span className="card-header-txt">Create a unique campaign and go live</span>
                            <span className="card-sub-header-txt">Use our powerful tools to create your campaign, include key information such as your pitch deck, deal terms, team and investor information.
                            </span>
                        </div>
                    </div>
                    <div className="raise-card-image-container">
                        <img src={Screen3} className="raise-card-image" ></img>
                    </div>
                </div>

                <div className="first-raise-card" style={{ marginRight: '5px' }}>
                    <div className="head-container-raise">
                        <div className="head-section-non-active">4</div>
                        <div className="head-section-second">
                            <span className="card-header-txt">Grow your customer base while you receive funds
                            </span>
                            <span className="card-sub-header-txt">Gain a new set of clients for your product or service while you raise funds from the platform. Digitally sign all relevant documents and receive your capital.</span>
                        </div>
                    </div>
                    <div className="raise-card-image-container-last">
                        <img src={Screen4} className="raise-card-image" ></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowToSubscribe