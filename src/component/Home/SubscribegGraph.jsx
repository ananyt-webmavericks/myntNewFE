import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import '../../css/Home/subscribegraph.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import YellowArrow from '../../images/assets/yellowArrow.png';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SubscribegGraph() {
    const navigate = useNavigate()
    const [gridxsFirst, setGridxsFirst] = useState(4)
    const [gridxsSecond, setgridxsSecond] = useState(6)
    const ratio = parseInt(window.innerWidth);

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
    return (
        <Box sx={{ minHeight: '60vh', marginTop: '90px' }}>
            <div className="subscribe-graph-heading">
                <Typography className="test-script-regular">Subscribe to<span className="test-script-bg"> opportunities curated</span> for you</Typography>
            </div>
            <Grid sx={{ marginTop: '40px' }} container spacing={gridxsFirst}>
                <Grid item xs={gridxsSecond}>
                    <Card className="card-container" >
                        <CardContent>
                            <div className="card-content-graph" >
                                <div className="card-sub-content" >
                                    <Typography className="card-bold-txt" >Equity linked Securities</Typography>
                                    <Typography style={{ width: '90%' }} className="regular-txt">Sign up to gain access to exclusive high-return opportunities in growing businesses.</Typography>
                                </div>
                                <div className="container-for-text-and-graph">
                                    <div className="text-section-subscribe">
                                        <Typography className="card-bold-number-text">28%+</Typography>
                                        <Typography className="regular-bold-text">Expected IRR</Typography>
                                        <Button className="learn-more-btn" onClick={() => navigate('/myntUniversity/faqs')} varient='outlined'>Learn More  <img style={{ marginLeft: '5px' }} width={5} height={10} src={YellowArrow}></img> </Button>
                                    </div>
                                    <div className="aditya-ahda" style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
                                        <p className="risk-factor">Risk</p>
                                        <div className="bar-graph-container one" style={{ height: '160px', right: '11.9em' }}>
                                        </div>
                                        <p className="risk-factor two">Liquidity</p>
                                        <div className="bar-graph-container two" style={{ height: '122px', right: '6.5em' }}>
                                        </div>
                                        <p className="risk-factor three">Expected return</p>
                                        <div className="bar-graph-container three" style={{ height: '282px', right: '1em' }}>
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
                                    <Typography className="card-bold-txt" >Fixed-return securities</Typography>
                                    <Typography className="regular-txt">Profit from lucrative Subscription opportunities with regular payouts and high returns. </Typography>
                                </div>
                                <div className="container-for-text-and-graph">
                                    <div className="text-section-subscribe">
                                        <Typography className="card-bold-number-text">10-25%</Typography>
                                        <Typography className="regular-bold-text">Expected IRR</Typography>
                                        <Button className="learn-more-btn" onClick={() => navigate('/myntUniversity/faqs')} varient='outlined'>Learn More  <img style={{ marginLeft: '5px' }} width={5} height={10} src={YellowArrow}></img> </Button>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
                                        <p className="risk-factor fixed">Risk</p>
                                        <div className="bar-graph-container one" style={{ height: '100px', right: '11.8em' }}>
                                        </div>
                                        <p className="risk-factor fixed-two">Liquidity</p>
                                        <div className="bar-graph-container two" style={{ height: '282px', right: '6.5em' }}>
                                        </div>
                                        <p className="risk-factor fixed-three ">Expected return</p>
                                        <div className="bar-graph-container three" style={{ height: '150px', right: '1em' }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>

                    </Card>
                </Grid>
            </Grid>

        </Box>
    )
}