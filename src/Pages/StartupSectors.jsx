import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import StartupSectorsMain from "../component/StartupSectors/Index";
const StartupSectors = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
            <StartupSectorsMain />
            </Container>
            
        </React.Fragment>
    )
}
export default StartupSectors;