import React from "react";
import { Container } from "@mui/material";
import DrawerMain from "../component/Dashboard/Drawer";
import PortfolioMain from "../component/Dashboard/PortfolioMain";
import Footer from "../component/Footer";
const PortFolio = () => {
    const ratio = parseInt(window.innerWidth);
    const location = window.location.pathname;
    return (
        <>
        <div style={{ display: 'flex' }}>
            {location.includes('/dashboard') && <DrawerMain height={1000} />}
            <div className="dashboard-container">
                <Container maxWidth="lg">
                    <PortfolioMain />
                </Container>
            </div>
        </div>
         {ratio < 1000 ? null : <Footer />}
         </>
    )
}
export default PortFolio;