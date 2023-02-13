import React from 'react'
import '../../css/FounderHome/HowToSub.css'
import Screen1 from '../../images/assets/screen1.png';
import Screen2 from '../../images/assets/screen2.png';
import Screen3 from '../../images/assets/screen3.png';
import Screen4 from '../../images/assets/screen4.png';

const HowToSubscribe = () => {
    return (
        <div className="how-to-raise-container">
            <div className="how-to-sub-heading">How to <span className="colored-investor-home-heading"> Subscribe? </span></div>
            <div className="how-to-sub-subheading">Enjoy the benefits of a completely online and seamless process</div>
            <div style={{ overflow: 'hidden', overflowX: 'scroll', display: 'flex', alignItems: 'center' }}>
                <div className="first-raise-card">
                    <div className="head-container-raise">
                        <div className="head-section-first">1</div>
                        <div className="head-section-second">
                            <span className="card-header-txt">Sign up using your Email ID</span>
                            <span className="card-sub-header-txt">Register on the platform by entering your email address and finishing the one-time password (OTP) authentication process.</span>
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
                            <span className="card-header-txt">Complete KYC and add Bank details</span>
                            <span className="card-sub-header-txt">Complete your Know Your Customer (KYC) process by providing your PAN and add your bank account details.</span>
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
                            <span className="card-header-txt">Subscribe to your favourite opportunities</span>
                            <span className="card-sub-header-txt">Browse through the live campaigns and choose the one that is most suitable for you. Once you have selected a campaign, proceed for payment and complete the subscription process</span>
                        </div>
                    </div>
                    <div className="raise-card-image-container">
                        <img src={Screen3} className="raise-card-image" ></img>
                    </div>
                </div>

                <div className="first-raise-card">
                    <div className="head-container-raise">
                        <div className="head-section-non-active">4</div>
                        <div className="head-section-second">
                            <span className="card-header-txt">See your wealth grow</span>
                            <span className="card-sub-header-txt">Your subscription process is now complete, and you can track your subscriptions to see how your investment is growing as the startups you have invested in succeed.</span>
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