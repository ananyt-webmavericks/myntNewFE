import React from "react";
import '../../css/Dashboard/drawer.css';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import AddchartOutlinedIcon from '@mui/icons-material/AddchartOutlined';
import dashboardIcon from './../../images/founder/dashboardIcon.png'
import dashboardIconBlack from './../../images/founder/dashboardIconBlack.png'
import campaignsIcon from './../../images/founder/campaignsIcon.png'
import campaignsIconBlack from './../../images/founder/campaignsIconBlack.png'
import analyticsIcon from './../../images/founder/analyticsIcon.png'
import { useNavigate } from "react-router-dom";
export default function DrawerFounder({ height, display }) {
    const navigate = useNavigate()
    const location = window.location.pathname;

    return (
        <>
            {display !== 'none' && <div className="dashboard-drawer-section" style={{ height: height }}>
                <div className="dashboard-fields-container">
                    <div className="dashboard-single-links" onClick={() => navigate('/dashboard-founder')}>
                        {/* <GridViewOutlinedIcon style={location === '/dashboard-founder' ? { color: '#ECB92B' } : { color: 'gray' }} width={20} height={20} /> */}

                        <img src={location === '/dashboard-founder' ? dashboardIcon : dashboardIconBlack} alt="dashboard-icon" width={20} height={20} />
                        <span style={location === '/dashboard-founder' ? { color: 'black' } : { color: 'gray' }} className="link-dashboard">Dashboard</span>
                    </div>

                    <div className="dashboard-single-links" onClick={() => navigate('/dashboard-founder/campaigns')}>
                        {/* <CampaignOutlinedIcon
                            style={location === '/dashboard-founder/campaigns' || location === '/dashboard-founder/campaigns-tabs'
                                ? { color: '#ECB92B' }
                                : { color: 'gray' }} width={20} height={20} /> */}
                        <img src={location === '/dashboard-founder/campaigns' || location === '/dashboard-founder/campaigns-tabs' ? campaignsIcon : campaignsIconBlack} alt="dashboard-icon" width={20} height={20} />
                        <span
                            style={location === '/dashboard-founder/campaigns' || location === '/dashboard-founder/campaigns-tabs'
                                ? { color: 'black' }
                                : { color: 'gray' }} className="link-dashboard">Campaign</span>
                    </div>

                    <div className="dashboard-single-links"
                    // onClick={() => navigate('/dashboard/analytics')}
                    >
                        {/* <AddchartOutlinedIcon style={location === '/dashboard/analytics' ? { color: '#ECB92B' } : { color: 'gray' }} width={20} height={20} /> */}

                        <img src={location === '/dashboard/analytics' ? analyticsIcon : analyticsIcon} alt="dashboard-icon" width={20} height={20} />
                        <span style={location === '/dashboard/analytics' ? { color: 'black' } : { color: 'gray' }} className="link-dashboard">Analytics</span>
                    </div>
                </div>

            </div>}


            <div className="bottom-fixed-navbar-container">
                <div className="bottom-navbar-section">
                    <div className="main-navbar-section" onClick={() => navigate('/dashboard-founder')}>
                        <div style={{ margin: 'auto' }}>
                            <img src={location === '/dashboard-founder' ? dashboardIcon : dashboardIconBlack} alt="dashboard-icon" width={20} height={20} />
                        </div>
                        <span style={{ fontSize: '10px', color: '#777777' }}>Dashboard</span>
                    </div>
                    <div className="main-navbar-section" onClick={() => navigate('/dashboard-founder/campaigns')}>
                        <div style={{ margin: 'auto' }}>
                            <img src={location === '/dashboard-founder/campaigns' ? campaignsIcon : campaignsIconBlack} alt="dashboard-icon" width={20} height={20} />
                        </div>
                        <span style={{ fontSize: '10px', color: '#777777' }}>Campaign</span>
                    </div>

                    <div className="main-navbar-section"
                    // onClick={() => navigate('/dashboard/analytics')}
                    >
                        <div style={{ margin: 'auto' }}>
                            <img src={location === '/dashboard/analytics' ? analyticsIcon : analyticsIcon} alt="dashboard-icon" width={20} height={20} />
                        </div>
                        <span style={{ fontSize: '10px', color: '#777777' }}>Analytics</span>
                    </div>
                </div>
            </div>
        </>
    )
}