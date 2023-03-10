
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
import DashboardDeals from "../component/Dashboard/DasboardDeals";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashBoardFaq from "../component/FaqDetails/DashBoardFaq";
import { useEffect } from "react";
import { storeKycDetailsAction } from "../Redux/actions/verifyKycAction";
const Dashboard = () => {
    const location = window.location.pathname;
    const ratio = parseInt(window.innerWidth);
    const [showDeals, setShowDeals] = useState({})
    const dispatch = useDispatch()

    const { userData } = useSelector(state => state.loginData)

    const fetchValue = (value) => {
        setShowDeals(value)
        dispatch(storeKycDetailsAction(value))
    }
    console.log(showDeals)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return (
        <>
            <div style={{ display: 'flex', position: 'relative' }}>
                {location.includes('/dashboard') && <DrawerMain height={'inherit'} />}
                <div className="dashboard-container">
                    <Container maxWidth="lg">
                        <div style={{ display: 'grid' }}>
                            <span className="get-started-heading startup">Welcome {userData.first_name}!</span>
                            <ProgressBarDash fetchValue={fetchValue} />
                        </div>
                        <ProgressNotifyDash data={showDeals} />
                        <DashboardCard />
                        <DashboardDeals />
                        <div style={{ marginTop: '92px' }}>
                            <DashBoardFaq />
                        </div>
                    </Container>

                </div>

            </div>
            {ratio < 1000 ? null : <Footer />}
        </>
    )
}
export default Dashboard;