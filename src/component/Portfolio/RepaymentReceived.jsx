import React from "react";
import '../../css/Dashboard/analytics.css'
import Repayment from '../../images/assets/repayment.png'
import { Card, CardContent, Grid } from "@mui/material";
import ScrollContainer from 'react-indiana-drag-scroll'
export default function RepaymentReceived() {
    return (
        <div className="repayment-received-analytics-container">

            <Card className="card-repayment">
                <CardContent>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={Repayment} className='image-repayments' alt="" width={143} height={143} style={{ objectFit: 'contain' }} />
                        <div className="repayment-section-detail-horizontal" style={{ marginLeft: '1em' }}>
                            <span style={{ fontSize: '16px', fontWeight: '600' }}>Repayment Received</span>
                            <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center', marginTop: '30px' }}>
                                <Grid container spacing={6}>
                                    <Grid item xs={2}>
                                        <div style={{ display: 'grid', alignItems: 'center' }}>
                                            <div className="box-payments">₹0</div>
                                            <hr style={{ width: '1px', height: '25px', border: '1px solid gray', margin: 'auto' }} />
                                            <span style={{ width: 'fit-content', fontSize: '11px', color: 'gray', margin: 'auto' }}>12 jan 23</span>
                                        </div>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <div style={{ display: 'grid', alignItems: 'center', marginTop: '32px' }}>
                                            <hr style={{ width: '1px', height: '25px', border: '1px solid gray', margin: 'auto' }} />
                                            <span style={{ width: 'fit-content', fontSize: '11px', color: 'gray', margin: 'auto' }}>17 jan 23</span>
                                        </div>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <div style={{ display: 'grid', alignItems: 'center' }}>
                                            <div className="box-payments">₹5,400</div>
                                            <hr style={{ width: '1px', height: '25px', border: '1px solid gray', margin: 'auto' }} />
                                            <span style={{ width: 'fit-content', fontSize: '11px', color: 'gray', margin: 'auto' }}>25 jan 23</span>
                                        </div>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <div style={{ display: 'grid', alignItems: 'center', marginTop: '32px' }}>
                                            <hr style={{ width: '1px', height: '25px', border: '1px solid gray', margin: 'auto' }} />
                                            <span style={{ width: 'fit-content', fontSize: '11px', color: 'gray', margin: 'auto' }}>31 jan 23</span>
                                        </div>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <div style={{ display: 'grid', alignItems: 'center', marginTop: '32px' }}>
                                            <hr style={{ width: '1px', height: '25px', border: '1px solid gray', margin: 'auto' }} />
                                            <span style={{ width: 'fit-content', fontSize: '11px', color: 'gray', margin: 'auto' }}>06 jan 23</span>
                                        </div>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <div style={{ display: 'grid', alignItems: 'center' }}>
                                            <div className="box-payments final">₹10,178</div>
                                            <hr style={{ width: '1px', height: '25px', border: '1px solid gray', margin: 'auto' }} />
                                            <span style={{ width: 'fit-content', fontSize: '11px', color: 'gray', margin: 'auto' }}>12 Feb 23</span>
                                        </div>
                                    </Grid>
                                </Grid>
                                <div style={{ position: 'absolute', width: 'inherit', height: '13px', borderRadius: '10px', background: 'black', top: '38px' }}></div>
                            </div>
                        </div>
                        <div className="repayment-detail-section-vertical">
                        <span style={{ fontSize: '16px', fontWeight: '600' }}>Repayment Received</span>
                            <div style={{ display: 'flex', alignItems: 'center',marginBottom:'50px',marginTop:'2em' }}>
                                <span style={{ width: 'fit-content', fontSize: '11px', color: 'gray' }}>12 jan 23</span>
                                <hr style={{ width: '40px', height: '1px', border: '1px solid gray' }} />
                                <div className="box-payments">₹0</div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center',marginBottom:'50px' }}>
                                <span style={{ width: 'fit-content', fontSize: '11px', color: 'gray' }}>17 jan 23</span>
                                <hr style={{ width: '40px', height: '1px', border: '1px solid gray' }} />
                          
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center',marginBottom:'50px' }}>
                                <span style={{ width: 'fit-content', fontSize: '11px', color: 'gray' }}>25 jan 23</span>
                                <hr style={{ width: '40px', height: '1px', border: '1px solid gray' }} />
                                <div className="box-payments">₹5,400</div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center',marginBottom:'50px' }}>
                                <span style={{ width: 'fit-content', fontSize: '11px', color: 'gray' }}>31 jan 23</span>
                                <hr style={{ width: '40px', height: '1px', border: '1px solid gray' }} />
                             
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center',marginBottom:'50px' }}>
                                <span style={{ width: 'fit-content', fontSize: '11px', color: 'gray' }}>06 Feb 23</span>
                                <hr style={{ width: '40px', height: '1px', border: '1px solid gray' }} />
                           
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center',marginBottom:'50px' }}>
                                <span style={{ width: 'fit-content', fontSize: '11px', color: 'gray' }}>12 Feb 23</span>
                                <hr style={{ width: '40px', height: '1px', border: '1px solid gray' }} />
                                <div className="box-payments final">₹10,178</div>
                            </div>
                            <div style={{ position:'absolute',width: '13px', height: '450px', borderRadius: '10px', background: 'black',top:'3em', left: '60px' }}></div>
                        </div>
                    </div>
                </CardContent>
            </Card>

        </div>
    )
}