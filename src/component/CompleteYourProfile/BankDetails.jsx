import React from "react";
import { Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function BankDetails() {
    const navigate = useNavigate()
    return (
        <div className="verify-number-container">
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <div className="verifyAddress-input">
                        <input type="text" placeholder="Bank Account No." className="verifyAddress-input-section" />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className="verifyAddress-input">
                        <input type="text" placeholder="IFSC Code" className="verifyAddress-input-section" />
                    </div>
                </Grid>
            </Grid>
            <div className="verify-button-container">
                <Button varient="contained" className="verify-button" onClick={() => navigate('/payment-details')}>Submit</Button>
            </div>
        </div>
    )
}