import React, { useState, useEffect } from "react";
import { Card, Grid, CardContent } from "@mui/material";
import Raghav from '../../images/highlights/raghav.png';
import Shradha from '../../images/highlights/shradha.png';
import Mukesh from '../../images/highlights/mukesh.png';
import Linkdin from '../../images/highlights/linkdin.png';
import Nitish from '../../images/highlights/Nitish.png';
import Kunal from '../../images/highlights/Kunal.png';
import Blue from '../../images/highlights/Blue.png';
import Lead from '../../images/highlights/Lead.png';
export default function Team() {

    return (
        <>
            <div  style={{overflow:'hidden',overflowX:'scroll', display:'flex'}}>
                <Card style={{ background: '#FFFFFF 0% 0% no-repeat padding-box', boxShadow: '0px 0px 12px #0000001F', borderRadius: '7px',marginRight:'50px' ,marginTop:'10px',marginBottom:'10px',marginLeft:'10px',width:'280px'}}>
                    <CardContent>
                        <div style={{ display: 'grid', justifyContent: 'center', textAlign: 'center' }}>
                            <img src={Raghav} width={183} height={183}></img>
                            <span style={{ fontSize: '16px', fontWeight: '600', marginTop: '10px' }}>Raghav Himatsingka</span>
                            <span style={{ fontSize: '12px', fontWeight: '600', marginTop: '10px', marginBottom: '10px' }}>Founder & CEO</span>
                            <img src={Linkdin} width={25} height={25} style={{ margin: 'auto' }}></img>
                        </div>
                    </CardContent>
                </Card>

                <Card style={{ background: '#FFFFFF 0% 0% no-repeat padding-box', boxShadow: '0px 0px 12px #0000001F', borderRadius: '7px',marginRight:'50px',marginTop:'10px',marginBottom:'10px' }}>
                    <CardContent>
                        <div style={{ display: 'grid', justifyContent: 'center', textAlign: 'center' }}>
                            <img src={Shradha} width={183} height={183}></img>
                            <span style={{ fontSize: '16px', fontWeight: '600', marginTop: '10px' }}>Sharddha Himatsingka</span>
                            <span style={{ fontSize: '12px', fontWeight: '600', marginTop: '10px', marginBottom: '10px' }}>Founder</span>
                            <img src={Linkdin} width={25} height={25} style={{ margin: 'auto' }}></img>
                        </div>
                    </CardContent>
                </Card>

                <Card style={{ background: '#FFFFFF 0% 0% no-repeat padding-box', boxShadow: '0px 0px 12px #0000001F', borderRadius: '7px',marginRight:'50px',marginTop:'10px',marginBottom:'10px' }}>
                    <CardContent>
                        <div style={{ display: 'grid', justifyContent: 'center', textAlign: 'center' }}>
                            <img src={Mukesh} width={183} height={183}></img>
                            <span style={{ fontSize: '16px', fontWeight: '600', marginTop: '10px' }}>Mukesh Sunda</span>
                            <span style={{ fontSize: '12px', fontWeight: '600', marginTop: '10px', marginBottom: '10px' }}>CEO</span>
                            <img src={Linkdin} width={25} height={25} style={{ margin: 'auto' }}></img>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="investor-home-heading" style={{ fontSize: '24px', marginTop: '60px' }}>Investors & Advisors</div>

            <div>
                <Card style={{ background: '#FFFFFF 0% 0% no-repeat padding-box', boxShadow: '0px 0px 12px #0000001F', borderRadius: '7px' }}>
                    <CardContent>
                        <div style={{ display: 'grid', justifyContent: 'center', textAlign: 'center' }}>
                            <img src={Kunal} width={183} height={183}></img>
                            <span style={{ fontSize: '16px', fontWeight: '600', marginTop: '10px' }}>Kunal Shah</span>
                            <span style={{ fontSize: '12px', fontWeight: '600', marginTop: '10px', marginBottom: '10px' }}>Investor</span>
                            <img src={Linkdin} width={25} height={25} style={{ margin: 'auto' }}></img>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <div style={{ display: 'grid', justifyContent: 'center', textAlign: 'center' }}>
                            <img src={Lead} width={183} height={183}></img>
                            <span style={{ fontSize: '16px', fontWeight: '600', marginTop: '10px' }}>Lead Angels</span>
                            <span style={{ fontSize: '12px', fontWeight: '600', marginTop: '10px', marginBottom: '10px' }}>Investor</span>
                            <img src={Linkdin} width={25} height={25} style={{ margin: 'auto' }}></img>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <div style={{ display: 'grid', justifyContent: 'center', textAlign: 'center' }}>
                            <img src={Nitish} width={183} height={183}></img>
                            <span style={{ fontSize: '16px', fontWeight: '600', marginTop: '10px' }}>Nitish Mittersain</span>
                            <span style={{ fontSize: '12px', fontWeight: '600', marginTop: '10px', marginBottom: '10px' }}>Investor || MD - Nazara</span>
                            <img src={Linkdin} width={25} height={25} style={{ margin: 'auto' }}></img>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <div style={{ display: 'grid', justifyContent: 'center', textAlign: 'center' }}>
                            <img src={Blue} width={183} height={183}></img>
                            <span style={{ fontSize: '16px', fontWeight: '600', marginTop: '10px' }}>Blue Ashva Capital</span>
                            <span style={{ fontSize: '12px', fontWeight: '600', marginTop: '10px', marginBottom: '10px' }}>Investor</span>
                            <img src={Linkdin} width={25} height={25} style={{ margin: 'auto' }}></img>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}