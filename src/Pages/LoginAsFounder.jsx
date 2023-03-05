import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import LoginMain from "../component/Login/Index";
import LoginFounder from "../component/Login/LoginFounder";
import { useEffect } from "react";
const LoginAsFounder = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <LoginFounder />
            </Container>

        </React.Fragment>
    )
}
export default LoginAsFounder;