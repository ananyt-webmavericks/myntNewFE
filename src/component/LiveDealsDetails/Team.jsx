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
export default function Team({ blurAmount, peopleData }) {
    return (
        <>
            <div className="investor-home-heading" style={{ fontSize: '24px', marginTop: '60px' }}>Meet the Team</div>
            <div className="hide-scroll" style={{ filter: `blur(${blurAmount}px)`, overflow: 'hidden', overflowX: 'scroll', display: 'flex', }}>
                {
                    peopleData?.filter(item => item.type === "TEAM").length > 0
                        ? peopleData?.filter(item => item.type === "TEAM").slice(0).reverse().map((item, index) => <Card key={index} style={{ minWidth: '280px', background: '#FFFFFF 0% 0% no-repeat padding-box', boxShadow: '0px 0px 12px #0000001F', borderRadius: '7px', marginRight: '50px', marginTop: '10px', marginBottom: '10px', marginLeft: '10px' }}>
                            <CardContent>
                                <div style={{ display: 'grid', justifyContent: 'center', textAlign: 'center' }}>
                                    <img src={item.profile_image} width={183} height={183}></img>
                                    <span style={{ fontSize: '16px', fontWeight: '600', marginTop: '10px' }}>{item.name}</span>
                                    <span style={{ fontSize: '12px', fontWeight: '600', marginTop: '10px', marginBottom: '10px' }}>{item.position}</span>
                                    <img src={Linkdin} width={25} height={25} style={{ margin: 'auto' }}></img>
                                </div>
                            </CardContent>
                        </Card>)
                        : <div className="investor-home-heading" style={{ fontSize: '14px', marginTop: '10px' }}>No team members to show</div>
                }
            </div>

            <div className="investor-home-heading" style={{ fontSize: '24px', marginTop: '60px' }}>Investors & Advisors</div>

            <div className="hide-scroll" style={{ filter: `blur(${blurAmount}px)`, overflow: 'hidden', overflowX: 'scroll', display: 'flex' }}>
                {
                    peopleData?.filter(item => item.type === "INVESTOR" || item.type === "ADVISOR").length > 0
                        ? peopleData?.filter(item => item.type === "INVESTOR" || item.type === "ADVISOR").slice(0).reverse().map((item, index) => <Card key={index} style={{ minWidth: '280px', background: '#FFFFFF 0% 0% no-repeat padding-box', boxShadow: '0px 0px 12px #0000001F', borderRadius: '7px', marginRight: '50px', marginTop: '10px', marginBottom: '10px', marginLeft: '10px' }}>
                            <CardContent>
                                <div style={{ display: 'grid', justifyContent: 'center', textAlign: 'center' }}>
                                    <img src={item.profile_image} width={183} height={183}></img>
                                    <span style={{ fontSize: '16px', fontWeight: '600', marginTop: '10px' }}>{item.name}</span>
                                    <span style={{ fontSize: '12px', fontWeight: '600', marginTop: '10px', marginBottom: '10px' }}>{item.position}</span>
                                    <img src={Linkdin} width={25} height={25} style={{ margin: 'auto' }}></img>
                                </div>
                            </CardContent>
                        </Card>)
                        : <div className="investor-home-heading" style={{ fontSize: '14px', marginTop: '10px' }}>No advisors or investors to show</div>
                }
            </div>
        </>
    )
}