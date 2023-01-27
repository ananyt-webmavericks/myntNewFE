import React from "react";
import { Container } from "@mui/material";
import DrawerMain from "../component/Dashboard/Drawer";
import Footer from "../component/Footer";
import SearchBar from "../component/LiveDeals/SearchBar";
const LiveDeals = () => {
    const ratio = parseInt(window.innerWidth);
    const location = window.location.pathname;
    return (
        <>
            <div style={{ display: 'flex' }}>
                {location.includes('/dashboard') && <DrawerMain />}
                <div className="dashboard-container">
                    <Container maxWidth="lg">
                        <div style={{ display: 'grid' }}>
                            <span className="get-started-heading startup">Live Deals</span>
                            <span style={{ fontSize: '16px', color: '#777777' }}>Browse current subscription opportunities on Mynt.</span>
                        </div>
                        <SearchBar />
                    </Container>
                </div>
            </div>
            {ratio < 1000 ? null : <Footer />}
        </>
    )
}
export default LiveDeals;