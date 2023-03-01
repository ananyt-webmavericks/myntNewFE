import { Card, CardContent, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import Investment from '../../images/dashboard/investment.png';
import Performance from '../../images/dashboard/performance.png';
import Startup from '../../images/dashboard/startup.png';
import '../../css/Dashboard/dashboard.css'
export default function DashboardCard() {

    const [gridxsFirst, setGridxsFirst] = useState(3)
    const [gridxsSecond, setgridxsSecond] = useState(4)
    const ratio = parseInt(window.innerWidth);
    useEffect(() => {

        if (ratio < 1200) {

            setGridxsFirst(2)
            setgridxsSecond(6)
        }
        if (ratio <= 1000) {

            setGridxsFirst(3)
            setgridxsSecond(4)
        }
        if (ratio <= 775) {

            setGridxsFirst(1)
            setgridxsSecond(12)
        }
    }, [])

    return (
        <div className="dashboard-card-container">
            <Grid container spacing={gridxsFirst}>
                <Grid item xs={gridxsSecond}>
                    <Card className="card-main-dash">
                        <CardContent>
                            <div className="dash-card-section">
                                <div className="card-image-container-dash">
                                    <img src={Investment} width={59} height={54} className="image-card-dashboard"></img>
                                </div>
                                <div className="text-card-container">
                                    <span style={{ fontSize: '26px', fontWeight: '600' }}>0.0K</span>
                                    <span style={{ fontSize: '14px', color: '#777777' }}>Total Subscriptions Value</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={gridxsSecond}>
                    <Card className="card-main-dash">
                        <CardContent>
                            <div className="dash-card-section">
                                <div className="card-image-container-dash" >
                                    <img src={Startup} width={50} height={48} className="image-card-dashboard"></img>
                                </div>
                                <div className="text-card-container">
                                    <span style={{ fontSize: '26px', fontWeight: '600' }}>0</span>
                                    <span style={{ fontSize: '14px', color: '#777777' }}>Startups in my portfolio</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={gridxsSecond}>
                    <Card className="card-main-dash">
                        <CardContent>
                            <div className="dash-card-section">
                                <div className="card-image-container-dash" >
                                    <img src={Performance} width={47} height={47} className="image-card-dashboard"></img>
                                </div>
                                <div className="text-card-container">
                                    <span style={{ fontSize: '14px', color: '#777777' }}>Portfolio Analytics </span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}