import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import '../../css/Home/openinvestment.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import Eveez from '../../images/investments/Eveez.png';
import BG1 from '../../images/investments/image1.png';
import Logo1 from '../../images/investments/logo1.png';
import BG2 from '../../images/investments/image2.png';
import Logo2 from '../../images/investments/logo2.png';
import BG3 from '../../images/investments/image3.png';
import Logo3 from '../../images/investments/logo3.png';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
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
        id: 3, backgroundImage: BG3, logo: Logo3, logoName: 'Harvest 20%', logoText: 'NCD', heading: '', subHeading: 'This is not the actual text for this section of this card, something else will come here', description: 'Diversify your portfolio with Agri-Investments & Earn Tax-free fixed income Diversify your portfolio',
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
        id: 7, backgroundImage: BG3, logo: Logo3, logoName: 'Harvest 20%', logoText: 'NCD', heading: '', subHeading: 'This is not the actual text for this section of this card, something else will come here', description: 'Diversify your portfolio with Agri-Investments & Earn Tax-free fixed income Diversify your portfolio',
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


export default function OpenInvestment() {
    const [data, setData] = useState(values)
    const [spaceing, setSpaceing] = useState(4)
    const [gridxsFirst, setGridxsFirst] = useState(3)
    const ratio = parseInt(window.innerWidth);
    const [showItem, setShowItem] = useState(4)
    const [showBtn, setShowBtn] = useState(true)
    const [showSkeleton, setShowSkeleton] = useState(false)
    const handleLoadMore = () => {
        setShowSkeleton(true)
        setShowBtn(false)
        const timer = setTimeout(() => {
            setShowSkeleton(false)
            setShowItem(data.length)
        }, 2000);

        return () => clearTimeout(timer);
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
    return (
        <>
            <Box sx={{ minHeight: '80vh', marginTop: '60px', marginBottom: '2em' }}>
                <div className="subscribe-graph-heading">
                    <Typography className="test-script-regular">Open<span className="test-script-bg"> Deals</span></Typography>
                    <Typography style={{ fontSize: '18px', color: 'gray' }}>Get access to highly vetted opportunities - register now available now!</Typography>
                </div>
                <Grid sx={{ marginTop: '5px' }} container spacing={spaceing}>
                    {data.slice(0, showItem).map((item, index) => {
                        return (
                            <Grid key={index} item xs={gridxsFirst}>
                                <Card className="investment-card-container" sx={{ minWidth: '100%', padding: '0', marginTop: '1em' }} >
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
                {showSkeleton &&
                    <Grid sx={{ marginTop: '20px' }} container spacing={spaceing}>
                        {data.slice(0, 4).map((item, index) => {
                            return (
                                <Grid key={index} item xs={gridxsFirst}>
                                    <Stack spacing={1}>
                                        <Skeleton variant="rectangular" width={265} height={192} />
                                        <Skeleton variant="text" width={210} sx={{ fontSize: '1rem' }} />
                                        <Skeleton variant="rounded" width={80} height={40} />
                                        <Skeleton variant="rectangular" width={265} height={60} />
                                    </Stack>
                                </Grid>
                            )
                        })}

                    </Grid>
                }

                {showBtn && <div className="view-all-btn-invest">
                    <Button variant="contained" className="invest-load-btn" onClick={handleLoadMore}>View All</Button>
                </div>}
            </Box>
        </>
    )

}
