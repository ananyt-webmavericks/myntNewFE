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
                                <div className="card-image-container-dash" style={{ background: '#F7E1CF 0% 0% no-repeat padding-box' }}>
                                    <img src={Investment} width={36} height={33} className="image-card-dashboard"></img>
                                </div>
                                <div className="text-card-container">
                                    <span style={{ fontSize: '26px', fontWeight: '600' }}>0.0K</span>
                                    <span style={{ fontSize: '14px', color: '#777777' }}>Total Investments Value</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={gridxsSecond}>
                    <Card className="card-main-dash">
                        <CardContent>
                            <div className="dash-card-section">
                                <div className="card-image-container-dash" style={{ background: '#F7F5CF 0% 0% no-repeat padding-box' }}>
                                    <img src={Startup} width={29} height={29} className="image-card-dashboard"></img>
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
                                <div className="card-image-container-dash" style={{ background: '#CFECF7 0% 0% no-repeat padding-box' }}>
                                    <img src={Performance} width={30} height={30} className="image-card-dashboard"></img>
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