import { Card, CardContent, Grid } from "@mui/material";
import React,{useState , useEffect} from "react";
import '../../css/MyProfile/myProfile.css';
import KycProfile from '../../images/assets/KycProfile.png'


export default function BankDetailsAfterKyc({data}) {
    const _ = require('lodash');
    
    return (
        <>
            <div style={{ marginTop: '60px' }} >
                <span className="heading-personal-details"  >KYC Details</span>
                <Card className="card-complete-kyc-notice brief">
                    <CardContent>
                        <Grid style={{paddingTop:'20px'}} container spacing={8}>
                            <Grid item xs={3}>
                                <span className="txt-bank-details">Bank Name</span>
                            </Grid>
                            <Grid item xs={1}>
                                <span className="txt-bank-details">:</span>  
                            </Grid>
                            <Grid item xs={2}>
                                    <span className="txt-bank-details">{_.isEmpty(data) ? '' : data?.bank_name}</span>
                                </Grid>
                        </Grid>
                        <Grid style={{paddingTop:'20px'}} container spacing={8}>
                            <Grid item xs={3}>
                                <span className="txt-bank-details">Bank Account no.</span>
                            </Grid>
                            <Grid item xs={1}>
                                <span className="txt-bank-details">:</span>  
                            </Grid>
                            <Grid item xs={2}>
                                    <span className="txt-bank-details">{_.isEmpty(data) ? '' : data?.bank_account}</span>
                                </Grid>
                        </Grid>
                        <Grid style={{paddingTop:'20px'}} container spacing={8}>
                            <Grid item xs={3}>
                                <span className="txt-bank-details">IFSC Code</span>
                            </Grid>
                            <Grid item xs={1}>
                                <span className="txt-bank-details">:</span>  
                            </Grid>
                            <Grid item xs={2}>
                                    <span className="txt-bank-details">{_.isEmpty(data) ? '' : data.ifsc_code}</span>
                                </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}