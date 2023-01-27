import React from "react";
import { CssBaseline } from "@material-ui/core";
import { Container } from "@mui/material";
import '../css/CompleteYourProfile/completeYourProfile.css'
import VerifyNumber from "../component/CompleteYourProfile/VerifyNumber";
const CompleteYourProfile = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
             <VerifyNumber />
            </Container>
        </React.Fragment>
    )
}
export default CompleteYourProfile;