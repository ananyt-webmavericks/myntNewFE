import React from "react";
import { CssBaseline, Container } from "@mui/material";
import PayToSubscribeMain from "../component/PayToSubscribe";
const PayToSubscribe = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <PayToSubscribeMain />
            </Container>
        </React.Fragment>
    )
}
export default PayToSubscribe;