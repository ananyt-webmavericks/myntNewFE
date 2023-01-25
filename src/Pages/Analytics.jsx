import React from "react";
import { Container } from "@mui/material";
import DrawerMain from "../component/Dashboard/Drawer";
const Analytics = () => {
    
    const location = window.location.pathname;
    return (
        <div style={{ display: 'flex' }}>
            {location.includes('/dashboard') && <DrawerMain />}
            <div className="dashboard-container">
                <Container maxWidth="lg">
                </Container>
            </div>
        </div>
    )
}
export default Analytics;