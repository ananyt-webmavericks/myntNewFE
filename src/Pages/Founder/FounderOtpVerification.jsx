import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import OtpVerificationMainFounder from "../../component/OptVerification/FounderIndex";
import { useLocation } from "react-router";
const FounderOtpVerification = () => {
    const location = useLocation()
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <OtpVerificationMainFounder email={location.state?.email} isNewCreate={location.state.isNewCreate} founderLoginData={location.state.founderLoginData} />
            </Container>

        </React.Fragment>
    )
}
export default FounderOtpVerification;