import React from "react";
import GetStartedSection from "../component/GetStarted";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
const GetStarted = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">

                <GetStartedSection />
            </Container>

        </React.Fragment>
    )
}
export default GetStarted;