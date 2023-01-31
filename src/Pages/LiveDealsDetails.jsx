import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import LiveDetailsMain from "../component/LiveDealsDetails";
const LiveDealsDetails = ()=>{
    return(
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
        <LiveDetailsMain />
        </Container>
        
    </React.Fragment>
    )
    
}
export default LiveDealsDetails;