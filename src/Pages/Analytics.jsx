import React from "react";
import { Container } from "@mui/material";
import DrawerMain from "../component/Dashboard/Drawer";
import AnalyticsMain from "../component/Portfolio";
import Footer from "../component/Footer";
const Analytics = () => {
    const ratio = parseInt(window.innerWidth);
    const location = window.location.pathname;
    return (
        <>
            <div style={{ display: 'flex' }}>
                {location.includes('/dashboard') && <DrawerMain height={'inherit'} />}
                <div className="dashboard-container">
                    <Container maxWidth="lg" style={{ overflowY: 'scroll' }}>
                        <AnalyticsMain />
                    </Container>
                </div>
            </div>
            {ratio < 1000 ? null : <Footer />}
        </>
    )
}
export default Analytics;