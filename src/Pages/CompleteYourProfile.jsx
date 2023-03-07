import React from "react";
import { CssBaseline } from "@material-ui/core";
import { Container } from "@mui/material";
import '../css/CompleteYourProfile/completeYourProfile.css'
import VerifyNumber from "../component/CompleteYourProfile/VerifyNumber";
import Footer from "../component/Footer";
const CompleteYourProfile = () => {
    const ratio = parseInt(window.innerWidth);
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <VerifyNumber />
            </Container>
            {ratio < 768 ? null : <Footer />}
        </React.Fragment>
    )
}
export default CompleteYourProfile;