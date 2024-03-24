import React from "react";
import { CssBaseline, Container } from "@mui/material";
import MyProfileMain from "../component/MyProfile";
import Footer from "../component/Footer";
import DrawerMain from "../component/Dashboard/Drawer";

const MyProfile = () => {
    const ratio = parseInt(window.innerWidth);
    const location = window.location.pathname;

    return (
        <React.Fragment>
            <CssBaseline />
            {location.includes('/my-profile') && <DrawerMain height={'inherit'} hideWeb={true} />}
            <Container maxWidth="lg">
                <MyProfileMain />
            </Container>
            {ratio < 1000 ? null : <Footer />}
        </React.Fragment>
    )
}
export default MyProfile