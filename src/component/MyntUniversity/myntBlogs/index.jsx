import React, { useState, useEffect } from "react";
import '../../../css/MyntUniversity/myntFaq.css'
import SearchIcon from '../../../images/assets/search.svg'
import LeftArrow from '../../../images/assets/leftArrow.svg'
import { useNavigate } from "react-router-dom";
import { Grid, Card } from "@mui/material";
import ScrollContainer from 'react-indiana-drag-scroll'

import blogs from "./blogs.json";
import Maximizing1 from "../../../images/blogs/Maximizing Your Tax Savings_ The Art of Legally Reducing Your Tax Liability.png";
import Maximizing2 from "../../../images/blogs/Maximizing Your Tax Savings_ The Art of Legally Reducing Your Tax Liability (2).png";
import Maximizing3 from "../../../images/blogs/Maximizing Your Tax Savings_ The Art of Legally Reducing Your Tax Liability (3).png";
import FinancialInstruments1 from "../../../images/blogs/Financial Instruments vs Equity-Based Financial Instruments.png"
import FinancialInstruments2 from "../../../images/blogs/Financial Instruments vs Equity-Based Financial Instruments (2).png"
import FinancialInstruments3 from "../../../images/blogs/Financial Instruments vs Equity-Based Financial Instruments (3).png"
import FinancialInstruments4 from "../../../images/blogs/Financial Instruments vs Equity-Based Financial Instruments (4).png"
import FinancialInstruments5 from "../../../images/blogs/Financial Instruments vs Equity-Based Financial Instruments (5).png"
import LoanSyndication1 from '../../../images/blogs/Loan Syndication vs Consortium Finance_ Understanding the Differences and Benefits.png'
import LoanSyndication2 from '../../../images/blogs/Loan Syndication vs Consortium Finance_ Understanding the Differences and Benefits (2).png'
import LoanSyndication3 from '../../../images/blogs/Loan Syndication vs Consortium Finance_ Understanding the Differences and Benefits (3).png'
import WhyPortfolio1 from '../../../images/blogs/Why Portfolio Diversification is Crucial for Long-Term Investment Growth.png'
import WhyPortfolio2 from '../../../images/blogs/Portfolio Diversification.png'
import InvestingInStartup1 from '../../../images/blogs/Startup1.png'
import InvestingInStartup2 from '../../../images/blogs/personal-finance1.png'
import Dividends1 from '../../../images/blogs/Dividends in Startups_ Benefits, Challenges, and Considerations.png'
import Dividends2 from '../../../images/blogs/Dividends in Startups_ Benefits, Challenges, and Considerations (2).png'
import Dividends3 from '../../../images/blogs/Dividends in Startups_ Benefits, Challenges, and Considerations (3).png'
import Dividends4 from '../../../images/blogs/Dividends in Startups_ Benefits, Challenges, and Considerations (4).png'
import Dividends5 from '../../../images/blogs/Dividends in Startups_ Benefits, Challenges, and Considerations (5).png'
import InvestInEmerging from '../../../images/blogs/Invest in Emerging Markets like a Financial Genius.png'
import AngelInvestor2 from '../../../images/blogs/Angel Investors vs Venture Capitalists_ Understanding the Key Differences for Startup Funding (2).png'
import AngelInvestor1 from '../../../images/blogs/Angel Investors vs Venture Capitalists_ Understanding the Key Differences for Startup Funding.png'
import PrivateEquity1 from '../../../images/blogs/Private equity - a forward-looking approach.png'
import PrivateEquity2 from '../../../images/blogs/Private equity - a forward-looking approach (2).png'
import HowToRide1 from '../../../images/blogs/startup2.png'
import HowToRide2 from '../../../images/blogs/economy1.png'
import FromRagsToRiches1 from '../../../images/blogs/investment1.png'
import FromRagsToRiches2 from '../../../images/blogs/startup3.png'
import AngelInvesting1 from '../../../images/blogs/investment2.png'
import AngelInvesting2 from '../../../images/blogs/personal-finance2.png'
import Fintech1 from '../../../images/blogs/Fintech.png'
import Fintech2 from '../../../images/blogs/Fintech (2).png'
import Fintech3 from '../../../images/blogs/Fintech (3).png'
import Insights1 from '../../../images/blogs/Insights.png'
import Insights2 from '../../../images/blogs/Insights (2).png'
import Insights3 from '../../../images/blogs/Insights (3).png'
import RealEstateFund1 from '../../../images/blogs/real estate fund.png'
import RealEstateFund2 from '../../../images/blogs/real estate fund (2).png'
import UnderstandingRight1 from '../../../images/blogs/Understanding the Right of First Refusal in Startup Investments.png'
import UnderstandingRight2 from '../../../images/blogs/Understanding the Right of First Refusal in Startup Investments (2).png'
import UnderstandingRight3 from '../../../images/blogs/Understanding the Right of First Refusal in Startup Investments (3).png'
import GrowingYourBusiness1 from '../../../images/blogs/personal-finance3.png'
import GrowingYourBusiness2 from '../../../images/blogs/investment3.png'
import Accredited1 from '../../../images/blogs/economy2.png'
import Accredited2 from '../../../images/blogs/investment4.png'
import TheImpact1 from '../../../images/blogs/startup4.png'
import TheImpact2 from '../../../images/blogs/insights1.png'
import IndianStartupSuccess1 from '../../../images/blogs/economy3.png'
import IndianStartupSuccess2 from '../../../images/blogs/insights2.png'
import EmergingTrends1 from '../../../images/blogs/economy4.png'
import EmergingTrends2 from '../../../images/blogs/insigts3.png'

// const data = [
//     {id:1 , heading:'The Impact of the 2023 Budget on the Indian Startup Ecosystem' , date:'8th jan 2023' , image:Image1},
//     {id:2 , heading:'Fixed Income Instruments: Help You Reach Your Financial Goals' , date:'15th jan 2023' , image:Image2},
//     {id:3 , heading:'Exploring Non-convertible Debentures (NCD Subscription): What You Need to know' , date:'20th jan 2023' , image:Image3},
//     {id:4 , heading:'The Impact of the 2023 Budget on the Indian Startup Ecosystem' , date:'5th jan 2023' , image:Image1},
//     {id:5 , heading:'Fixed Income Instruments: Help You Reach Your Financial Goals' , date:'16th feb 2023' , image:Image2},
//     {id:6 , heading:'Exploring Non-convertible Debentures (NCD Subscription): What You Need to know' , date:'25th feb 2023' , image:Image3},
//     {id:7 , heading:'The Impact of the 2023 Budget on the Indian Startup Ecosystem' , date:'3th mar 2023' , image:Image1},
//     {id:8 , heading:'Fixed Income Instruments: Help You Reach Your Financial Goals' , date:'16th feb 2023' , image:Image2},
//     {id:9 , heading:'Exploring Non-convertible Debentures (NCD Subscription): What You Need to know' , date:'23th mar 2023' , image:Image3},
// ]
export default function MyntBlogsMain() {
    const navigate = useNavigate()
    const [activeBtn, setActiveBtn] = useState(1)
    const [gridxsMainFirst, setGridxsMainFirst] = useState(3)
    const [gridxsMainSecond, setGridxsMainSecond] = useState(4)
    const [btnType, setBtnType] = useState('All')
    const ratio = parseInt(window.innerWidth);

    useEffect(() => {

        if (ratio < 1350) {
            setGridxsMainFirst(2)
            setGridxsMainSecond(6)
        }
        if (ratio < 670) {
            setGridxsMainFirst(1)
            setGridxsMainSecond(12)
        }


    }, [])

    const getImageList = (id) => {
        let newImageArray;
        switch (id) {
            case 1:
                newImageArray = Maximizing1;
                break;
            case 2:
                newImageArray = FinancialInstruments1;
                break;
            case 3:
                newImageArray = LoanSyndication1;
                break;
            case 4:
                newImageArray = WhyPortfolio1;
                break;
            case 5:
                newImageArray = InvestingInStartup1;
                break;
            case 6:
                newImageArray = Dividends1;
                break;
            case 7:
                newImageArray = InvestInEmerging;
                break;
            case 8:
                newImageArray = AngelInvestor1;
                break;
            case 9:
                newImageArray = PrivateEquity1;
                break;
            case 10:
                newImageArray = HowToRide1;
                break;
            case 11:
                newImageArray = FromRagsToRiches1;
                break;
            case 12:
                newImageArray = AngelInvesting1;
                break;
            case 13:
                newImageArray = Fintech1;
                break;
            case 14:
                newImageArray = Insights1;
                break;
            case 15:
                newImageArray = RealEstateFund1;
                break;
            case 16:
                newImageArray = UnderstandingRight1;
                break;
            case 17:
                newImageArray = GrowingYourBusiness1;
                break;
            case 18:
                newImageArray = Accredited1;
                break;
            case 19:
                newImageArray = TheImpact1;
                break;
            case 20:
                newImageArray = IndianStartupSuccess1;
                break;
            case 21:
                newImageArray = EmergingTrends1;
                break;

            default:
                break;
        }
        return newImageArray
    }


    return (
        <div className="faq-university-container">
            <div className="margin-fix-text" style={{ marginLeft: '-1.5em', display: 'grid' }}>
                <span className="get-started-heading startup">Browse by Topic</span>
            </div>

            <div className="button-container-liveDeals blogs" style={{ marginLeft: '-1.7em' }}>
                <ScrollContainer className="scroll-bar-blogs" style={{ overflow: 'scroll', width: '100%', justifyContent: 'flex-start', display: 'flex' }}>
                    <div className="active-btn-container blogs" style={activeBtn === 1 ? { background: 'black', color: 'white' } : { background: '#F4F4F4', color: 'black' }} onClick={() => { setActiveBtn(1); setBtnType('All') }}>
                        All
                    </div>
                    <div className="active-btn-container blogs" style={activeBtn === 2 ? { background: 'black', color: 'white' } : { background: '#F4F4F4', color: 'black' }} onClick={() => { setActiveBtn(2); setBtnType('Startups') }}>
                        Startups
                    </div>
                    <div className="active-btn-container blogs" style={activeBtn === 3 ? { background: 'black', color: 'white' } : { background: '#F4F4F4', color: 'black' }} onClick={() => { setActiveBtn(3); setBtnType('Investment') }}>
                        Investment
                    </div>
                    <div className="active-btn-container blogs" style={activeBtn === 4 ? { background: 'black', color: 'white' } : { background: '#F4F4F4', color: 'black' }} onClick={() => { setActiveBtn(4); setBtnType('Personal Finance') }}>
                        Personal Finance
                    </div>
                    <div className="active-btn-container blogs" style={activeBtn === 5 ? { background: 'black', color: 'white' } : { background: '#F4F4F4', color: 'black' }} onClick={() => { setActiveBtn(5); setBtnType('Economy and Markets') }}>
                        Economy and Markets
                    </div>
                    {/* <div className="active-btn-container blogs" style={activeBtn === 6 ? { background: 'black', color: 'white' } : { background: '#F4F4F4', color: 'black' }} onClick={() => setActiveBtn(6)}>
                        Mynt Insights
                    </div> */}
                    <div className="active-btn-container blogs" style={activeBtn === 6 ? { background: 'black', color: 'white' } : { background: '#F4F4F4', color: 'black' }} onClick={() => { setActiveBtn(6); setBtnType('Industry insights') }}>
                        Industry insights
                    </div>

                </ScrollContainer>
            </div>

            <div className="blogs-container-mynt">
                <Grid className="video-grid-wrapper" container spacing={gridxsMainFirst}>
                    {blogs.filter((val => val.type.includes(btnType))).map((item, index) => {

                        return (
                            <Card style={{ marginRight: '1em', marginBottom: '1em' }} item xs={gridxsMainSecond} key={index}>
                                <div onClick={() => navigate(`/myntUniversity/blogs/detail/${item.id}`)} className="blogs-des-image-container">
                                    <div className="mynt-text-image-blogs" >Mynt</div>
                                    <img src={getImageList(item?.id)} style={{ width: 'inherit', height: '192px' }}></img>
                                    <div style={{ padding: '1em' }}>
                                        <span style={{ fontSize: '15px' }}>{item?.title ?? ""}</span>
                                        <span style={{ fontSize: '12px', position: 'absolute', bottom: '1em', left: '1em' }} >{item?.date ?? ""}</span>
                                    </div>
                                </div>
                            </Card>
                        )
                    })}
                </Grid>
            </div>


        </div>
    )
}
