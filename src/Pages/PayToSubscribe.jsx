import React from "react";
import { CssBaseline, Container } from "@mui/material";
import PayToSubscribeMain from "../component/PayToSubscribe";
import Footer from "../component/Footer";
const PayToSubscribe = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <PayToSubscribeMain />
            </Container>
            <Footer/>
        </React.Fragment>
    )
}
export default PayToSubscribe;