import { Box, Typography, Grid } from "@mui/material";
import React, { useRef } from "react";
import '../../css/Home/subscribegraph.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import YellowArrow from '../../images/assets/yellowArrow.png';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Equity from './../../images/founder/Equity.png'
import Debt from './../../images/founder/Debt.png'

export default function SubscribegGraph() {
    const navigate = useNavigate()
    const [gridxsFirst, setGridxsFirst] = useState(4)
    const [gridxsSecond, setgridxsSecond] = useState(6)
    const ratio = parseInt(window.innerWidth);
    const [firstGStyle, setfirstGStyle] = useState({ height: '0px', right: '11.9em' })
    const [secondGStyle, setsecondGStyle] = useState({ height: '0px', right: '6.5em' })
    const [thirdGStyle, setthirdGStyle] = useState({ height: '0px', right: '1em' })
    const [fourthGStyle, setfourthGStyle] = useState({ height: '0px', right: '11.8em' })
    const [fifthGStyle, setfifthGStyle] = useState({ height: '0px', right: '6.5em' })
    const [sixthGStyle, setsixthGStyle] = useState({ height: '0px', right: '1em' })

    useEffect(() => {

        if (ratio < 920) {
            setGridxsFirst(1)
            setgridxsSecond(12)
        }
        else if (ratio < 600) {
            setGridxsFirst(1)
            setgridxsSecond(6)
        }
    }, [])





    const contentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setfirstGStyle({ height: '176px', right: '11.9em', transition: '1.2s' })
                setsecondGStyle({ height: '122px', right: '6.5em', transition: '1.2s' })
                setthirdGStyle({ height: '282px', right: '1em', transition: '1.2s' })
                setfourthGStyle({ height: '100px', right: '11.8em', transition: '1.2s' })
                setfifthGStyle({ height: '282px', right: '6.5em', transition: '1.2s' })
                setsixthGStyle({ height: '150px', right: '1em', transition: '1.2s' })
            } else {
                setfirstGStyle({ height: '0px', right: '11.9em', transition: '0.5s' })
                setsecondGStyle({ height: '0px', right: '6.5em', transition: '0.5s' })
                setthirdGStyle({ height: '0px', right: '1em', transition: '0.5s' })
                setfourthGStyle({ height: '0px', right: '11.8em', transition: '0.5s' })
                setfifthGStyle({ height: '0px', right: '6.5em', transition: '0.5s' })
                setsixthGStyle({ height: '0px', right: '1em', transition: '0.5s' })
            }
        });

        observer.observe(contentRef.current);

        return () => {
            observer.unobserve(contentRef.current);
        };
    }, []);
    return (
        <Box sx={{ minHeight: '60vh', marginTop: '90px' }}>
            <div className="subscribe-graph-heading">
                <Typography className="test-script-regular">Signup to<span className="test-script-bg"> opportunities curated</span> for you</Typography>
            </div>
            <Grid sx={{ marginTop: '40px' }} container spacing={gridxsFirst}>
                <Grid item xs={gridxsSecond}>
                    <Card className="card-container" >
                        <CardContent>
                            <div className="card-content-graph" >
                                <div className="card-sub-content" >
                                    <Typography className="card-bold-txt" >Startup Opportunities</Typography>
                                    <Typography style={{ width: '90%' }} className="regular-txt">Acquire access to exclusive high-yield opportunities in emerging businesses.</Typography>
                                </div>
                                <div className="container-for-text-and-graph">
                                    <div className="text-section-subscribe">
                                        <div >
                                            <img src={Equity} alt="equity_logo" className="graphs-logo" />
                                        </div>
                                        <Button
                                            ref={contentRef}
                                            style={{ textTransform: 'none' }}
                                            className="learn-more-btn"
                                            onClick={() => navigate('/myntUniversity/faqs')} varient='outlined'>
                                            Learn More
                                            <img style={{ marginLeft: '5px' }} width={5} height={10} src={YellowArrow}></img>
                                        </Button>
                                    </div>
                                    <div className="aditya-ahda" style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
                                        <p className="risk-factor">Risk</p>
                                        <div className="bar-graph-container one" style={firstGStyle}>
                                        </div>
                                        <p className="risk-factor two">Liquidity</p>
                                        <div className="bar-graph-container two" style={secondGStyle}>
                                        </div>
                                        <p className="risk-factor three">Expected Gain</p>
                                        <div className="bar-graph-container three" style={thirdGStyle}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xs={gridxsSecond}>
                    <Card className="card-container">
                        <CardContent>
                            <div className="card-content-graph" >
                                <div className="card-sub-content" >
                                    <Typography className="card-bold-txt" >Fixed-return Opportunities</Typography>
                                    <Typography className="regular-txt">Profit from lucrative opportunities with regular payouts and high returns. </Typography>
                                </div>
                                <div className="container-for-text-and-graph">
                                    <div className="text-section-subscribe">
                                        <div>
                                            <img src={Debt} alt="equity_logo" className="graphs-logo" />
                                        </div>
                                        <Button style={{ textTransform: 'none' }} className="learn-more-btn" onClick={() => navigate('/myntUniversity/faqs')} varient='outlined'>Learn More  <img style={{ marginLeft: '5px' }} width={5} height={10} src={YellowArrow}></img> </Button>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
                                        <p className="risk-factor fixed">Risk</p>
                                        <div className="bar-graph-container one" style={fourthGStyle}>
                                        </div>
                                        <p className="risk-factor fixed-two">Liquidity</p>
                                        <div className="bar-graph-container two" style={fifthGStyle}>
                                        </div>
                                        <p className="risk-factor fixed-three ">Expected Gain</p>
                                        <div className="bar-graph-container three" style={sixthGStyle}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>

                    </Card>
                </Grid>
            </Grid>

        </Box >
    )
}