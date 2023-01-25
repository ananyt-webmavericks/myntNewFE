import React from "react";
import '../../css/Dashboard/drawer.css';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import AddchartOutlinedIcon from '@mui/icons-material/AddchartOutlined';
import { useNavigate } from "react-router-dom";
export default function DrawerMain() {
    const navigate = useNavigate()
    const location = window.location.pathname;

    return (
        <>
            <div className="dashboard-drawer-section">
                <div className="dashboard-fields-container">
                    <div className="dashboard-single-links" onClick={() => navigate('/dashboard')}>
                        <GridViewOutlinedIcon style={location === '/dashboard' ? { color: '#ECB92B' } : { color: 'gray' }} width={20} height={20} />
                        <span style={location === '/dashboard' ? { color: 'black' } : { color: 'gray' }} className="link-dashboard">Dashboard</span>
                    </div>
                    <div className="dashboard-single-links" onClick={() => navigate('/dashboard/live-deals')}>
                        <CampaignOutlinedIcon style={location === '/dashboard/live-deals' ? { color: '#ECB92B' } : { color: 'gray' }} width={20} height={20} />
                        <span style={location === '/dashboard/live-deals' ? { color: 'black' } : { color: 'gray' }} className="link-dashboard">Live Deals</span>
                    </div>
                    <div className="dashboard-single-links" onClick={() => navigate('/dashboard/portfolio')}>
                        <BusinessCenterOutlinedIcon style={location === '/dashboard/portfolio' ? { color: '#ECB92B' } : { color: 'gray' }} width={20} height={20} />
                        <span style={location === '/dashboard/portfolio' ? { color: 'black' } : { color: 'gray' }} className="link-dashboard">Portfolio</span>
                    </div>
                    <div className="dashboard-single-links" onClick={() => navigate('/dashboard/chat-with-expert')}>
                        <ChatBubbleOutlineOutlinedIcon style={location === '/dashboard/chat-with-expert' ? { color: '#ECB92B' } : { color: 'gray' }} width={20} height={20} />
                        <span style={location === '/dashboard/chat-with-expert' ? { color: 'black' } : { color: 'gray' }} className="link-dashboard">Chat with Expert</span>
                    </div>
                    <div className="dashboard-single-links" onClick={() => navigate('/dashboard/analytics')}>
                        <AddchartOutlinedIcon style={location === '/dashboard/analytics' ? { color: '#ECB92B' } : { color: 'gray' }} width={20} height={20} />
                        <span style={location === '/dashboard/analytics' ? { color: 'black' } : { color: 'gray' }} className="link-dashboard">Analytics</span>
                    </div>
                </div>

            </div>
            <div className="bottom-fixed-navbar-container">
                <div className="bottom-navbar-section">
                    <div className="main-navbar-section" onClick={() => navigate('/dashboard')}>
                        <div style={{ margin: 'auto' }}>
                            <GridViewOutlinedIcon style={location === '/dashboard' ? { color: '#ECB92B' } : { color: 'gray' }} width={20} height={20} />
                        </div>
                        <span style={{ fontSize: '10px', color: '#777777' }}>Dashboard</span>
                    </div>
                    <div className="main-navbar-section" onClick={() => navigate('/dashboard/live-deals')}>
                        <div style={{ margin: 'auto' }}>
                            <CampaignOutlinedIcon style={location === '/dashboard/live-deals' ? { color: '#ECB92B' } : { color: 'gray' }} width={20} height={20} />
                        </div>
                        <span style={{ fontSize: '10px', color: '#777777' }}>Dashboard</span>
                    </div>
                    <div className="main-navbar-section" onClick={() => navigate('/dashboard/portfolio')}>
                        <div style={{ margin: 'auto' }}>
                            <BusinessCenterOutlinedIcon style={location === '/dashboard/portfolio' ? { color: '#ECB92B' } : { color: 'gray' }} width={20} height={20} />
                        </div>
                        <span style={{ fontSize: '10px', color: '#777777' }}>Dashboard</span>
                    </div>
                    <div className="main-navbar-section" onClick={() => navigate('/dashboard/chat-with-expert')}>
                        <div style={{ margin: 'auto' }}>
                            <ChatBubbleOutlineOutlinedIcon style={location === '/dashboard/chat-with-expert' ? { color: '#ECB92B' } : { color: 'gray' }} width={20} height={20} />
                        </div>
                        <span style={{ fontSize: '10px', color: '#777777' }}>Dashboard</span>
                    </div>
                    <div className="main-navbar-section" onClick={() => navigate('/dashboard/analytics')}>
                        <div style={{ margin: 'auto' }}>
                            <AddchartOutlinedIcon style={location === '/dashboard/analytics' ? { color: '#ECB92B' } : { color: 'gray' }} width={20} height={20} />
                        </div>
                        <span style={{ fontSize: '10px', color: '#777777' }}>Dashboard</span>
                    </div>
                </div>
            </div>
        </>
    )
}