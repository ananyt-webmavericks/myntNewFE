
import { Container } from "@mui/material";
import React from "react";
import AboutYouMain from "../component/AboutYou";
import DashboardCard from "../component/Dashboard/DashboardCards";
import DrawerMain from "../component/Dashboard/Drawer";
import ProgressBarDash from "../component/Dashboard/ProgressBarDash";
import ProgressNotifyDash from "../component/Dashboard/ProgressNotifyDash";
import '../css/Dashboard/dashboard.css';
import Faqs from '../component/Home/Faqs'
import Footer from "../component/Footer";
const Dashboard = () => {
    const location = window.location.pathname;
    const ratio = parseInt(window.innerWidth);
    return (
        <>
            <div style={{ display: 'flex', position: 'relative' }}>
                {location.includes('/dashboard') && <DrawerMain />}
                <div className="dashboard-container">
                    <Container maxWidth="lg">
                        <div style={{ display: 'grid' }}>
                            <span className="get-started-heading startup">Welcome Asad!</span>
                            <ProgressBarDash />
                        </div>
                        <ProgressNotifyDash />
                        <DashboardCard />
                        <div style={{ marginTop: '92px' }}>
                            <Faqs />
                        </div>
                    </Container>


                </div>

            </div>
            {ratio < 1000 ? null : <Footer />}
        </>
    )
}
export default Dashboard;