import React, { useState } from "react";
import Portfolio from '../../images/assets/portfolio.png'
import { Card, CardContent } from "@mui/material";
import '../../css/Dashboard/analytics.css'
import SearchBar from "../LiveDeals/SearchBar";
import BarChart from "../BarChart/BarChart";
export default function AnalyticsMain() {
    const [showContent, setShowContent] = useState(true)
    return (
        <>
            <div>
                <span className="get-started-heading">Analytics</span>
                <div className="analytics-main-container">
                    <div className="highchart-bar" >
                        <BarChart />
                    </div>
                    <div className="card-details-chart">
                        <span className="chart-detail-head">Lifetime Subscription value</span>
                        <span className="chart-detail-numbers">₹1,05,000</span>
                        <span className="chart-detail-description">As on 06 feb, 2023</span>
                    </div>
                </div>

            </div>
            <div>
                <div className="startup-updates-section">Startup Updates</div>
                <div style={{ overflow: 'hidden', overflowX: 'scroll', display: 'flex' }}>
                    <Card style={{ minWidth: '280px', background: '#FFFFFF 0% 0% no-repeat padding-box', boxShadow: '0px 0px 12px #0000001F', borderRadius: '7px', marginRight: '50px', marginTop: '10px', marginBottom: '10px', marginLeft: '10px' }}>
                        <CardContent>
                        <div style={{ display: 'grid', justifyContent: 'center', textAlign: 'center' }}>
                                <div style={{borderRadius:'50%' , width:'70px' , height:'70px' , background:"transparent url('img/b05ebec50bfdbf9c6ecf20d857f4062c.png') 0% 0% no-repeat padding-box" , margin:'auto'}}></div>
                                <span style={{ fontSize: '16px', fontWeight: '600', marginTop: '10px' }}>Desiwood updates</span>
                                <span style={{ fontSize: '14px', fontWeight: '500', marginTop: '10px', marginBottom: '10px' }}>12 Jan, 2023</span>

                            </div>
                        </CardContent>
                    </Card>
                    <Card style={{ minWidth: '280px', background: '#FFFFFF 0% 0% no-repeat padding-box', boxShadow: '0px 0px 12px #0000001F', borderRadius: '7px', marginRight: '50px', marginTop: '10px', marginBottom: '10px', marginLeft: '10px' }}>
                        <CardContent>
                        <div style={{ display: 'grid', justifyContent: 'center', textAlign: 'center' }}>
                                <div style={{borderRadius:'50%' , width:'70px' , height:'70px' , background:"transparent url('img/9f999f919cffc5c4d68e24d115c60ebe.png') 0% 0% no-repeat padding-box;" , margin:'auto'}}></div>
                                <span style={{ fontSize: '16px', fontWeight: '600', marginTop: '10px' }}>Signo updates</span>
                                <span style={{ fontSize: '14px', fontWeight: '500', marginTop: '10px', marginBottom: '10px' }}>12 Jan, 2023</span>

                            </div>
                        </CardContent>
                    </Card>
                    <Card style={{ minWidth: '280px', background: '#FFFFFF 0% 0% no-repeat padding-box', boxShadow: '0px 0px 12px #0000001F', borderRadius: '7px', marginRight: '50px', marginTop: '10px', marginBottom: '10px', marginLeft: '10px' }}>
                        <CardContent>
                        <div style={{ display: 'grid', justifyContent: 'center', textAlign: 'center' }}>
                                <div style={{borderRadius:'50%' , width:'70px' , height:'70px' , background:"transparent url('img/30aa0453a1db94c2faee4961b8e49da1.png') 0% 0% no-repeat padding-box" , margin:'auto'}}></div>
                                <span style={{ fontSize: '16px', fontWeight: '600', marginTop: '10px' }}>Naario updates</span>
                                <span style={{ fontSize: '14px', fontWeight: '500', marginTop: '10px', marginBottom: '10px' }}>12 Jan, 2023</span>

                            </div>
                        </CardContent>
                    </Card>
                    <Card style={{ minWidth: '280px', background: '#FFFFFF 0% 0% no-repeat padding-box', boxShadow: '0px 0px 12px #0000001F', borderRadius: '7px', marginRight: '50px', marginTop: '10px', marginBottom: '10px', marginLeft: '10px' }}>
                        <CardContent>
                        <div style={{ display: 'grid', justifyContent: 'center', textAlign: 'center' }}>
                                <div style={{ borderRadius:'50%' , width:'70px' , height:'70px' , background:"transparent url('img/5d284bdd7fc59181276a025bbd42168f.png') 0% 0% no-repeat padding-box" , margin:'auto'}}></div>
                                <span style={{ fontSize: '16px', fontWeight: '600', marginTop: '10px' }}>Steelwork updates</span>
                                <span style={{ fontSize: '14px', fontWeight: '500', marginTop: '10px', marginBottom: '10px' }}>12 Jan, 2023</span>

                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}