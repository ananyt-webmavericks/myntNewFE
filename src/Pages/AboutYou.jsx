import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AboutYouMain from "../component/AboutYou";

const AboutYou = ()=>{
    return(
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
        <AboutYouMain />
        </Container>
        
    </React.Fragment>
    )
}
export default AboutYou;