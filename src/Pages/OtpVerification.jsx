import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import OtpVerificationMain from "../component/OptVerification";
const OtpVerification = ()=>{
    return(
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
        <OtpVerificationMain />
        </Container>
        
    </React.Fragment>
    )
}
export default OtpVerification;