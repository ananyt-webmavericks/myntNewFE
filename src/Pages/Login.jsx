import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import LoginMain from "../component/Login/Index";
const Login = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
            <LoginMain />
            </Container>
            
        </React.Fragment>
    )
}
export default Login;