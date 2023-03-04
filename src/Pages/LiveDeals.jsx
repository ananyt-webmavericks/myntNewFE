import React, { useState, useEffect } from "react";
import { Container, Grid, Card, CardContent } from "@mui/material";
import DrawerMain from "../component/Dashboard/Drawer";
import Footer from "../component/Footer";
import '../css/Dashboard/liveDeals.css'
import SearchBar from "../component/LiveDeals/SearchBar";
import OpenInvestment from "../component/Home/OpenInvestment";
import Eveez from '../images/investments/Eveez.png';
import BG1 from '../images/investments/image1.png';
import Logo1 from '../images/investments/logo1.png';
import BG2 from '../images/investments/image2.png';
import Logo2 from '../images/investments/logo2.png';
import BG3 from '../images/investments/image3.png';
import Logo3 from '../images/investments/logo3.png';
import infoIcon from '../images/assets/info-icon.png';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
const values = [
    {
        id: 1, backgroundImage: BG1, logo: Logo1, logoName: '', logoText: 'CCD', heading: 'MildCares - GynoCup', subHeading: 'This is not the actual text for this section of this card, something else will come here', description: 'We at Mildcares strive to empower womanhood! By building high-quality hygiene and personal care products our…',
        chip: [{ id: 1, name: 'health' }, { id: 2, name: 'Personal Health' }],
        raised: '14.16%',
        closesIn: '10 days',
        invest: '₹5,000',
        checked: false
    },
    {
        id: 2, backgroundImage: BG2, logo: Logo2, logoName: 'Settl', logoText: 'CSOP', heading: '', subHeading: 'This is not the actual text for this section', description: 'Settl. is a technology-driven accommodation platform focused on providing a convenient and high-quality living expe…',
        chip: [{ id: 1, name: 'Coliving' }],
        raised: '206.01%',
        closesIn: '3 days',
        invest: '₹10,000',
        checked: false
    },
    {
        id: 3, backgroundImage: BG3, logo: Logo3, logoName: 'Harvest 20%', logoText: 'NCD', heading: '', subHeading: 'This is not the actual text for this section of this card, something else will come here', description: 'Diversify your portfolio with Agri-Subscriptions & Earn Tax-free fixed income Diversify your portfolio',
        chip: [{ id: 1, name: 'Managed Farmland' }],
        raised: '206.01%',
        closesIn: '3 days',
        invest: '₹10,000',
        checked: false
    },
    {
        id: 1, backgroundImage: BG1, logo: Logo1, logoName: '', logoText: 'CCD', heading: 'MildCares - GynoCup', subHeading: 'This is not the actual text for this section of this card, something else will come here', description: 'We at Mildcares strive to empower womanhood! By building high-quality hygiene and personal care products our…',
        chip: [{ id: 1, name: 'health' }, { id: 2, name: 'Personal Health' }],
        raised: '14.16%',
        closesIn: '10 days',
        invest: '₹5,000',
        checked: false
    },
    {
        id: 5, backgroundImage: BG1, logo: Logo1, logoName: '', logoText: 'CCD', heading: 'MildCares - GynoCup', subHeading: 'This is not the actual text for this section of this card, something else will come here', description: 'We at Mildcares strive to empower womanhood! By building high-quality hygiene and personal care products our…',
        chip: [{ id: 1, name: 'health' }, { id: 2, name: 'Personal Health' }],
        raised: '14.16%',
        closesIn: '10 days',
        invest: '₹5,000',
        checked: false
    },
    {
        id: 6, backgroundImage: BG2, logo: Logo2, logoName: 'Settl', logoText: 'CSOP', heading: '', subHeading: 'This is not the actual text for this section', description: 'Settl. is a technology-driven accommodation platform focused on providing a convenient and high-quality living expe…',
        chip: [{ id: 1, name: 'Coliving' }],
        raised: '206.01%',
        closesIn: '3 days',
        invest: '₹10,000',
        checked: false
    },
    {
        id: 7, backgroundImage: BG3, logo: Logo3, logoName: 'Harvest 20%', logoText: 'NCD', heading: '', subHeading: 'This is not the actual text for this section of this card, something else will come here', description: 'Diversify your portfolio with Agri-Subscriptions & Earn Tax-free fixed income Diversify your portfolio',
        chip: [{ id: 1, name: 'Managed Farmland' }],
        raised: '206.01%',
        closesIn: '3 days',
        invest: '₹10,000',
        checked: false
    },
    {
        id: 8, backgroundImage: BG1, logo: Logo1, logoName: '', logoText: 'CCD', heading: 'MildCares - GynoCup', subHeading: 'This is not the actual text for this section of this card, something else will come here', description: 'We at Mildcares strive to empower womanhood! By building high-quality hygiene and personal care products our…',
        chip: [{ id: 1, name: 'health' }, { id: 2, name: 'Personal Health' }],
        raised: '14.16%',
        closesIn: '10 days',
        invest: '₹5,000',
        checked: false
    },
]
const LiveDeals = () => {
    const [data, setData] = useState(values)
    const [activeBtn, setActiveBtn] = useState(1)
    const [spaceing, setSpaceing] = useState(4)
    const [gridxsFirst, setGridxsFirst] = useState(3)
    const ratio = parseInt(window.innerWidth);
    const location = window.location.pathname;
    const navigate = useNavigate()

    const [tab1, settab1] = useState(
        <>
            <span style={{ fontSize: '20px', fontWeight: '600' }}>Live Deals</span>
            <Grid sx={{ marginTop: '5px', marginBottom: '5rem' }} container spacing={spaceing}>
                {data.map((item, index) => {
                    return (
                        <Grid key={index} item xs={gridxsFirst}>
                            <Card onClick={() => navigate('/live-deals-details')} className="investment-card-container" sx={{ minWidth: '100%', padding: '0', marginTop: '1em' }} >
                                <CardContent sx={{ padding: '0' }}>
                                    <div style={{ position: 'relative' }}>
                                        <img src={item.backgroundImage} width='100%' height={192} />
                                        <div className="card-header-logo">
                                            <div className="company-logo-section">
                                                <img src={Logo1} width={102} height={34} />
                                            </div>
                                            <div className="logo-txt-script">{item.logoText}</div>
                                        </div>
                                        <div className="info-card-txt">
                                            <span className="company-name">{item.logoName}</span>
                                        </div>
                                        <div className="centered-txt-card">
                                            <span className="company-name">{item.heading}</span>
                                        </div>
                                        <div className="bottom-txt-card">
                                            <span>{item.subHeading}</span>
                                        </div>
                                    </div>
                                    <div className="body-card-section">
                                        <span className="card-description">{item.description}</span>
                                        <div style={{ display: 'flex' }}>
                                            {item.chip.map((item, index) => {
                                                return (
                                                    <div key={index} className="chip-status"><span>{item.name}</span></div>
                                                )
                                            })}
                                        </div>
                                        <div className="footer-card-section">
                                            <div className="numbers-investors">
                                                <span className="percentage-investment">{item.raised}</span>
                                                <span className="investment-status">Raised</span>
                                            </div>
                                            <div className="vertical-line-invest"></div>
                                            <div className="numbers-investors">
                                                <span className="percentage-investment">{item.closesIn}</span>
                                                <span className="investment-status">Closes in</span>
                                            </div>
                                            <div className="vertical-line-invest"></div>
                                            <div className="numbers-investors">
                                                <span className="percentage-investment">{item.invest}</span>
                                                <span className="investment-status">Min Invest</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overlay">
                                        <div className="card-header-logo hover">
                                            <div className="company-logo-section">
                                                <img src={Eveez} width={54} height={54} />
                                            </div>
                                            <span className="company-name hover" style={{ marginLeft: '10px' }}>Eveez</span>
                                        </div>
                                        <div style={{ display: 'grid', marginTop: '4em', marginLeft: '10px' }}>
                                            <span className="investment-txt hover">Investors</span>
                                            <span className="investment-sub-txt hover">18</span>
                                            <hr style={{ marginTop: '11.5px' }} />
                                            <span className="investment-txt hover">Raised</span>
                                            <span className="investment-sub-txt hover">16.5%</span>
                                            <hr style={{ marginTop: '11.5px' }} />
                                            <span className="investment-txt hover">Minimum Subscription</span>
                                            <span className="investment-sub-txt hover">5000</span>
                                            <hr style={{ marginTop: '11.5px' }} />
                                            <span className="investment-txt hover">Closes in</span>
                                            <span className="investment-sub-txt hover">14 days</span>
                                            <div className="chip-status hover"><span>Personal Health</span></div>
                                        </div>
                                    </div>
                                    {item.checked && <div className="overlay responsive">
                                        <div className="card-header-logo hover">
                                            <div className="company-logo-section">
                                                <img src={Eveez} width={54} height={54} />
                                            </div>
                                            <span className="company-name hover" style={{ marginLeft: '10px' }}>Eveez</span>
                                        </div>
                                        <div style={{ display: 'grid', marginTop: '4em', marginLeft: '10px' }}>
                                            <span className="investment-txt hover">Investors</span>
                                            <span className="investment-sub-txt hover">18</span>
                                            <hr style={{ marginTop: '11.5px' }} />
                                            <span className="investment-txt hover">Raised</span>
                                            <span className="investment-sub-txt hover">16.5%</span>
                                            <hr style={{ marginTop: '11.5px' }} />
                                            <span className="investment-txt hover">Minimum Subscription</span>
                                            <span className="investment-sub-txt hover">5000</span>
                                            <hr style={{ marginTop: '11.5px' }} />
                                            <span className="investment-txt hover">Closes in</span>
                                            <span className="investment-sub-txt hover">14 days</span>
                                            <div className="chip-status hover"><span>Personal Health</span></div>
                                        </div>
                                    </div>}
                                    <div onClick={() => handleRotate(index)} className="mobile-view-arrow-responsive">
                                        <KeyboardArrowDownRoundedIcon className="move-arrow-upside-down" style={item.checked ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0deg)' }} />

                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
    const [tab2, settab2] = useState(
        <>
            <span style={{ fontSize: '20px', fontWeight: '600' }}>CCD</span>
            <Grid sx={{ marginTop: '5px', marginBottom: '5rem' }} container spacing={spaceing}>
                {data.map((item, index) => {
                    return (
                        <Grid key={index} item xs={gridxsFirst}>
                            <Card onClick={() => navigate('/live-deals-details')} className="investment-card-container" sx={{ minWidth: '100%', padding: '0', marginTop: '1em' }} >
                                <CardContent sx={{ padding: '0' }}>
                                    <div style={{ position: 'relative' }}>
                                        <img src={item.backgroundImage} width='100%' height={192} />
                                        <div className="card-header-logo">
                                            <div className="company-logo-section">
                                                <img src={Logo1} width={102} height={34} />
                                            </div>
                                            <div className="logo-txt-script">{item.logoText}</div>
                                        </div>
                                        <div className="info-card-txt">
                                            <span className="company-name">{item.logoName}</span>
                                        </div>
                                        <div className="centered-txt-card">
                                            <span className="company-name">{item.heading}</span>
                                        </div>
                                        <div className="bottom-txt-card">
                                            <span>{item.subHeading}</span>
                                        </div>
                                    </div>
                                    <div className="body-card-section">
                                        <span className="card-description">{item.description}</span>
                                        <div style={{ display: 'flex' }}>
                                            {item.chip.map((item, index) => {
                                                return (
                                                    <div key={index} className="chip-status"><span>{item.name}</span></div>
                                                )
                                            })}
                                        </div>
                                        <div className="footer-card-section">
                                            <div className="numbers-investors">
                                                <span className="percentage-investment">{item.raised}</span>
                                                <span className="investment-status">Raised</span>
                                            </div>
                                            <div className="vertical-line-invest"></div>
                                            <div className="numbers-investors">
                                                <span className="percentage-investment">{item.closesIn}</span>
                                                <span className="investment-status">Closes in</span>
                                            </div>
                                            <div className="vertical-line-invest"></div>
                                            <div className="numbers-investors">
                                                <span className="percentage-investment">{item.invest}</span>
                                                <span className="investment-status">Min Invest</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overlay">
                                        <div className="card-header-logo hover">
                                            <div className="company-logo-section">
                                                <img src={Eveez} width={54} height={54} />
                                            </div>
                                            <span className="company-name hover" style={{ marginLeft: '10px' }}>Eveez</span>
                                        </div>
                                        <div style={{ display: 'grid', marginTop: '4em', marginLeft: '10px' }}>
                                            <span className="investment-txt hover">Investors</span>
                                            <span className="investment-sub-txt hover">18</span>
                                            <hr style={{ marginTop: '11.5px' }} />
                                            <span className="investment-txt hover">Raised</span>
                                            <span className="investment-sub-txt hover">16.5%</span>
                                            <hr style={{ marginTop: '11.5px' }} />
                                            <span className="investment-txt hover">Minimum Subscription</span>
                                            <span className="investment-sub-txt hover">5000</span>
                                            <hr style={{ marginTop: '11.5px' }} />
                                            <span className="investment-txt hover">Closes in</span>
                                            <span className="investment-sub-txt hover">14 days</span>
                                            <div className="chip-status hover"><span>Personal Health</span></div>
                                        </div>
                                    </div>
                                    {item.checked && <div className="overlay responsive">
                                        <div className="card-header-logo hover">
                                            <div className="company-logo-section">
                                                <img src={Eveez} width={54} height={54} />
                                            </div>
                                            <span className="company-name hover" style={{ marginLeft: '10px' }}>Eveez</span>
                                        </div>
                                        <div style={{ display: 'grid', marginTop: '4em', marginLeft: '10px' }}>
                                            <span className="investment-txt hover">Investors</span>
                                            <span className="investment-sub-txt hover">18</span>
                                            <hr style={{ marginTop: '11.5px' }} />
                                            <span className="investment-txt hover">Raised</span>
                                            <span className="investment-sub-txt hover">16.5%</span>
                                            <hr style={{ marginTop: '11.5px' }} />
                                            <span className="investment-txt hover">Minimum Subscription</span>
                                            <span className="investment-sub-txt hover">5000</span>
                                            <hr style={{ marginTop: '11.5px' }} />
                                            <span className="investment-txt hover">Closes in</span>
                                            <span className="investment-sub-txt hover">14 days</span>
                                            <div className="chip-status hover"><span>Personal Health</span></div>
                                        </div>
                                    </div>}
                                    <div onClick={() => handleRotate(index)} className="mobile-view-arrow-responsive">
                                        <KeyboardArrowDownRoundedIcon className="move-arrow-upside-down" style={item.checked ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0deg)' }} />

                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}


            </Grid>

        </>
    )
    const [tab3, settab3] = useState(
        <>
            <span style={{ fontSize: '20px', fontWeight: '600' }}>NCD</span>
            <Grid sx={{ marginTop: '5px', marginBottom: '5rem' }} container spacing={spaceing}>
                {data.map((item, index) => {
                    return (
                        <Grid key={index} item xs={gridxsFirst}>
                            <Card onClick={() => navigate('/live-deals-details')} className="investment-card-container" sx={{ minWidth: '100%', padding: '0', marginTop: '1em' }} >
                                <CardContent sx={{ padding: '0' }}>
                                    <div style={{ position: 'relative' }}>
                                        <img src={item.backgroundImage} width='100%' height={192} />
                                        <div className="card-header-logo">
                                            <div className="company-logo-section">
                                                <img src={Logo1} width={102} height={34} />
                                            </div>
                                            <div className="logo-txt-script">{item.logoText}</div>
                                        </div>
                                        <div className="info-card-txt">
                                            <span className="company-name">{item.logoName}</span>
                                        </div>
                                        <div className="centered-txt-card">
                                            <span className="company-name">{item.heading}</span>
                                        </div>
                                        <div className="bottom-txt-card">
                                            <span>{item.subHeading}</span>
                                        </div>
                                    </div>
                                    <div className="body-card-section">
                                        <span className="card-description">{item.description}</span>
                                        <div style={{ display: 'flex' }}>
                                            {item.chip.map((item, index) => {
                                                return (
                                                    <div key={index} className="chip-status"><span>{item.name}</span></div>
                                                )
                                            })}
                                        </div>
                                        <div className="footer-card-section">
                                            <div className="numbers-investors">
                                                <span className="percentage-investment">{item.raised}</span>
                                                <span className="investment-status">Raised</span>
                                            </div>
                                            <div className="vertical-line-invest"></div>
                                            <div className="numbers-investors">
                                                <span className="percentage-investment">{item.closesIn}</span>
                                                <span className="investment-status">Closes in</span>
                                            </div>
                                            <div className="vertical-line-invest"></div>
                                            <div className="numbers-investors">
                                                <span className="percentage-investment">{item.invest}</span>
                                                <span className="investment-status">Min Invest</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overlay">
                                        <div className="card-header-logo hover">
                                            <div className="company-logo-section">
                                                <img src={Eveez} width={54} height={54} />
                                            </div>
                                            <span className="company-name hover" style={{ marginLeft: '10px' }}>Eveez</span>
                                        </div>
                                        <div style={{ display: 'grid', marginTop: '4em', marginLeft: '10px' }}>
                                            <span className="investment-txt hover">Investors</span>
                                            <span className="investment-sub-txt hover">18</span>
                                            <hr style={{ marginTop: '11.5px' }} />
                                            <span className="investment-txt hover">Raised</span>
                                            <span className="investment-sub-txt hover">16.5%</span>
                                            <hr style={{ marginTop: '11.5px' }} />
                                            <span className="investment-txt hover">Minimum Subscription</span>
                                            <span className="investment-sub-txt hover">5000</span>
                                            <hr style={{ marginTop: '11.5px' }} />
                                            <span className="investment-txt hover">Closes in</span>
                                            <span className="investment-sub-txt hover">14 days</span>
                                            <div className="chip-status hover"><span>Personal Health</span></div>
                                        </div>
                                    </div>
                                    {item.checked && <div className="overlay responsive">
                                        <div className="card-header-logo hover">
                                            <div className="company-logo-section">
                                                <img src={Eveez} width={54} height={54} />
                                            </div>
                                            <span className="company-name hover" style={{ marginLeft: '10px' }}>Eveez</span>
                                        </div>
                                        <div style={{ display: 'grid', marginTop: '4em', marginLeft: '10px' }}>
                                            <span className="investment-txt hover">Investors</span>
                                            <span className="investment-sub-txt hover">18</span>
                                            <hr style={{ marginTop: '11.5px' }} />
                                            <span className="investment-txt hover">Raised</span>
                                            <span className="investment-sub-txt hover">16.5%</span>
                                            <hr style={{ marginTop: '11.5px' }} />
                                            <span className="investment-txt hover">Minimum Subscription</span>
                                            <span className="investment-sub-txt hover">5000</span>
                                            <hr style={{ marginTop: '11.5px' }} />
                                            <span className="investment-txt hover">Closes in</span>
                                            <span className="investment-sub-txt hover">14 days</span>
                                            <div className="chip-status hover"><span>Personal Health</span></div>
                                        </div>
                                    </div>}
                                    <div onClick={() => handleRotate(index)} className="mobile-view-arrow-responsive">
                                        <KeyboardArrowDownRoundedIcon className="move-arrow-upside-down" style={item.checked ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0deg)' }} />

                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
    const [tab4, settab4] = useState(
        <>
            <span style={{ fontSize: '20px', fontWeight: '600' }}>ID</span>
            <Grid sx={{ marginTop: '5px', marginBottom: '5rem' }} container spacing={spaceing}>
                {data.map((item, index) => {
                    return (
                        <Grid key={index} item xs={gridxsFirst}>
                            <Card onClick={() => navigate('/live-deals-details')} className="investment-card-container" sx={{ minWidth: '100%', padding: '0', marginTop: '1em' }} >
                                <CardContent sx={{ padding: '0' }}>
                                    <div style={{ position: 'relative' }}>
                                        <img src={item.backgroundImage} width='100%' height={192} />
                                        <div className="card-header-logo">
                                            <div className="company-logo-section">
                                                <img src={Logo1} width={102} height={34} />
                                            </div>
                                            <div className="logo-txt-script">{item.logoText}</div>
                                        </div>
                                        <div className="info-card-txt">
                                            <span className="company-name">{item.logoName}</span>
                                        </div>
                                        <div className="centered-txt-card">
                                            <span className="company-name">{item.heading}</span>
                                        </div>
                                        <div className="bottom-txt-card">
                                            <span>{item.subHeading}</span>
                                        </div>
                                    </div>
                                    <div className="body-card-section">
                                        <span className="card-description">{item.description}</span>
                                        <div style={{ display: 'flex' }}>
                                            {item.chip.map((item, index) => {
                                                return (
                                                    <div key={index} className="chip-status"><span>{item.name}</span></div>
                                                )
                                            })}
                                        </div>
                                        <div className="footer-card-section">
                                            <div className="numbers-investors">
                                                <span className="percentage-investment">{item.raised}</span>
                                                <span className="investment-status">Raised</span>
                                            </div>
                                            <div className="vertical-line-invest"></div>
                                            <div className="numbers-investors">
                                                <span className="percentage-investment">{item.closesIn}</span>
                                                <span className="investment-status">Closes in</span>
                                            </div>
                                            <div className="vertical-line-invest"></div>
                                            <div className="numbers-investors">
                                                <span className="percentage-investment">{item.invest}</span>
                                                <span className="investment-status">Min Invest</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overlay">
                                        <div className="card-header-logo hover">
                                            <div className="company-logo-section">
                                                <img src={Eveez} width={54} height={54} />
                                            </div>
                                            <span className="company-name hover" style={{ marginLeft: '10px' }}>Eveez</span>
                                        </div>
                                        <div style={{ display: 'grid', marginTop: '4em', marginLeft: '10px' }}>
                                            <span className="investment-txt hover">Investors</span>
                                            <span className="investment-sub-txt hover">18</span>
                                            <hr style={{ marginTop: '11.5px' }} />
                                            <span className="investment-txt hover">Raised</span>
                                            <span className="investment-sub-txt hover">16.5%</span>
                                            <hr style={{ marginTop: '11.5px' }} />
                                            <span className="investment-txt hover">Minimum Subscription</span>
                                            <span className="investment-sub-txt hover">5000</span>
                                            <hr style={{ marginTop: '11.5px' }} />
                                            <span className="investment-txt hover">Closes in</span>
                                            <span className="investment-sub-txt hover">14 days</span>
                                            <div className="chip-status hover"><span>Personal Health</span></div>
                                        </div>
                                    </div>
                                    {item.checked && <div className="overlay responsive">
                                        <div className="card-header-logo hover">
                                            <div className="company-logo-section">
                                                <img src={Eveez} width={54} height={54} />
                                            </div>
                                            <span className="company-name hover" style={{ marginLeft: '10px' }}>Eveez</span>
                                        </div>
                                        <div style={{ display: 'grid', marginTop: '4em', marginLeft: '10px' }}>
                                            <span className="investment-txt hover">Investors</span>
                                            <span className="investment-sub-txt hover">18</span>
                                            <hr style={{ marginTop: '11.5px' }} />
                                            <span className="investment-txt hover">Raised</span>
                                            <span className="investment-sub-txt hover">16.5%</span>
                                            <hr style={{ marginTop: '11.5px' }} />
                                            <span className="investment-txt hover">Minimum Subscription</span>
                                            <span className="investment-sub-txt hover">5000</span>
                                            <hr style={{ marginTop: '11.5px' }} />
                                            <span className="investment-txt hover">Closes in</span>
                                            <span className="investment-sub-txt hover">14 days</span>
                                            <div className="chip-status hover"><span>Personal Health</span></div>
                                        </div>
                                    </div>}
                                    <div onClick={() => handleRotate(index)} className="mobile-view-arrow-responsive">
                                        <KeyboardArrowDownRoundedIcon className="move-arrow-upside-down" style={item.checked ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0deg)' }} />

                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}

            </Grid>
        </>
    )

    const [showTab1, setshowTab1] = useState(tab1)
    const [showTab2, setshowTab2] = useState(tab2)
    const [showTab3, setshowTab3] = useState(tab3)
    const [showTab4, setshowTab4] = useState(tab4)

    const handleOrderTabs = (tabNo) => {
        setActiveBtn(tabNo)
        if (tabNo === 1) {
            setshowTab1(tab1)
            setshowTab2(tab2)
            setshowTab3(tab3)
            setshowTab4(tab4)
        } else if (tabNo === 2) {
            setshowTab1(tab2)
            setshowTab2(tab1)
            setshowTab3(tab3)
            setshowTab4(tab4)
        } else if (tabNo === 3) {
            setshowTab1(tab3)
            setshowTab2(tab1)
            setshowTab3(tab2)
            setshowTab4(tab4)
        } else if (tabNo === 4) {
            setshowTab1(tab4)
            setshowTab2(tab1)
            setshowTab3(tab2)
            setshowTab4(tab3)
        } else {
            setshowTab1(tab1)
            setshowTab2(tab2)
            setshowTab3(tab3)
            setshowTab4(tab4)
        }
    }

    useEffect(() => {

        if (ratio < 1230) {
            setSpaceing(3)
            setGridxsFirst(4)
        }
        if (ratio < 830) {
            setSpaceing(2)
            setGridxsFirst(6)
        }
        if (ratio < 550) {
            setSpaceing(1)
            setGridxsFirst(12)
        }
    }, [])
    const handleRotate = (index) => {
        let new_array = data;
        new_array[index].checked = !new_array[index].checked;
        console.log(new_array[index].checked)
        setData([...new_array])
    }

    const LightTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: theme.palette.common.white,
            color: 'rgba(0, 0, 0, 0.87)',
            boxShadow: theme.shadows[1],
            fontSize: 11,
            fontFamily: 'poppins'
        },
    }));

    return (
        <>
            <div style={{ display: 'flex', position: 'relative' }}>
                {location.includes('/dashboard') && <DrawerMain display={'none'} />}
                <div className="dashboard-container" style={{ height: '100%', marginBottom: '5em' }}>
                    <Container maxWidth="lg">
                        <div style={{ display: 'grid' }}>
                            <span className="get-started-heading startup">Live Deals</span>
                            <span style={{ fontSize: '16px', color: '#777777' }}>Browse current subscription opportunities on Mynt.</span>
                        </div>
                        <SearchBar />
                        <div className="button-container-liveDeals">
                            <div className="active-btn-container" style={activeBtn === 1 ? { background: 'black', color: 'white' } : { background: '#F4F4F4', color: 'black' }} onClick={() => handleOrderTabs(1)}>
                                <div>
                                    <span >CSOP</span>
                                    <div className="mini-active-btn-highliter">Live</div>
                                </div>
                                <LightTooltip title="Community Subscription Offer Plan is a contractual agreement executed between a subscriber and the startup that entitles the subscriber to community benefits and grant of SAR in exchange">
                                    <img height={20} width={20} src={infoIcon} alt="info" />
                                </LightTooltip>
                            </div>

                            <div className="active-btn-container" style={activeBtn === 2 ? { background: 'black', color: 'white' } : { background: '#F4F4F4', color: 'black' }} onClick={() => handleOrderTabs(2)}>
                                <span>CCD</span>
                                {/* <div className="mini-active-btn-highliter">Live</div> */}
                                <LightTooltip title="Compulsory convertible debentures are hybrid securities that have the same financial rights like equity share but no voting rights.">
                                    <img height={20} width={20} src={infoIcon} alt="info" />
                                </LightTooltip>
                            </div>


                            <div className="active-btn-container" style={activeBtn === 3 ? { background: 'black', color: 'white' } : { background: '#F4F4F4', color: 'black' }} onClick={() => handleOrderTabs(3)}>
                                <span>NCD</span>
                                <LightTooltip title="Short-term offering that involves funding a company's unpaid invoice or purchase order in exchange for a fixed rate of return.">
                                    <img height={20} width={20} src={infoIcon} alt="info" />
                                </LightTooltip>
                            </div>
                            <div className="active-btn-container" style={activeBtn === 4 ? { background: 'black', color: 'white' } : { background: '#F4F4F4', color: 'black' }} onClick={() => handleOrderTabs(4)}>
                                <span>ID</span>
                                <LightTooltip title=" NCD (Non-Convertible Debenture) is a type of debt security issued by companies that pays a fixed rate of interest and has a maturity date.">
                                    <img height={20} width={20} src={infoIcon} alt="info" />
                                </LightTooltip>
                            </div>
                        </div>
                        <div style={{ textAlign: 'center', marginBottom: '2em' }}>
                            {activeBtn === 1 &&
                                <div style={{ display: 'grid' }}>
                                    <span style={{ fontSize: '18px' }}>Subscribe to rapidly growing companies with a low minimum Subscription requirement.</span>
                                </div>
                            }
                            {activeBtn === 2 &&
                                <div style={{ display: 'grid' }}>
                                    <span style={{ fontSize: '18px' }}>Hybrid securities convertible into equity</span>
                                </div>
                            }
                            {activeBtn === 3 &&
                                <div style={{ display: 'grid' }}>
                                    <span style={{ fontSize: '18px' }}>Short term fixed income opportunities</span>
                                </div>
                            }
                            {activeBtn === 4 &&
                                <div style={{ display: 'grid' }}>
                                    <span style={{ fontSize: '18px' }}>Short term fixed income opportunities</span>
                                </div>
                            }
                        </div>

                        {showTab1}

                        {showTab2}

                        {showTab3}

                        {showTab4}
                    </Container>
                </div>
            </div>
            {ratio < 1000 ? null : <Footer />}
        </>
    )
}
export default LiveDeals;