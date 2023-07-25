import React from "react";
import "../../css/Dashboard/drawer.css";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import AddchartOutlinedIcon from "@mui/icons-material/AddchartOutlined";

import analytics from "./../../images/dashboard/icons/analytics.png";
import analytics_yellow from "./../../images/dashboard/icons/analytics_yellow.png";

import chat from "./../../images/dashboard/icons/chat.png";
import chat_yellow from "./../../images/dashboard/icons/chat_yellow.png";

import dashboard from "./../../images/dashboard/icons/dashboard.png";
import dashboard_yellow from "./../../images/dashboard/icons/dashboard_yellow.png";

import livedeals from "./../../images/dashboard/icons/livedeals.png";
import livedeals_yellow from "./../../images/dashboard/icons/livedeals_yellow.png";

import portfolio from "./../../images/dashboard/icons/portfolio.png";
import portfolio_yellow from "./../../images/dashboard/icons/portfolio_yellow.png";

import { useNavigate } from "react-router-dom";
export default function DrawerMain({ height, display }) {
  const navigate = useNavigate();
  const location = window.location.pathname;

  return (
    <>
      {display !== 'none' && <div className="dashboard-drawer-section" style={{ height: height }}>
        <div className="dashboard-fields-container">
          <div className="dashboard-single-links" onClick={() => navigate('/dashboard')}>
            {/* <GridViewOutlinedIcon style={location === '/dashboard' ? { color: '#ECB92B' } : { color: 'gray' }} width={20} height={20} /> */}
            <img src={location === '/dashboard' ? dashboard_yellow : dashboard} alt="analytics_icon" width={20} height={20} />
            <span style={location === '/dashboard' ? { color: 'black' } : { color: 'gray' }} className="link-dashboard">Dashboard</span>
          </div>
          <div className="dashboard-single-links" onClick={() => navigate('/dashboard/live-deals')}>
            <img src={location === '/dashboard/live-deals' ? livedeals_yellow : livedeals} alt="analytics_icon" width={20} height={20} />
            <span style={location === '/dashboard/live-deals' ? { color: 'black' } : { color: 'gray' }} className="link-dashboard">Live Deals</span>
          </div>

          <div className="dashboard-single-links" onClick={() => navigate('/dashboard/portfolio')}>
            <img src={location === '/dashboard/portfolio' ? portfolio_yellow : portfolio} alt="analytics_icon" width={20} height={20} />
            <span style={location === '/dashboard/portfolio' ? { color: 'black' } : { color: 'gray' }} className="link-dashboard">Portfolio</span>
          </div>

          {/* <div
            className="dashboard-single-links"
            onClick={() => navigate("/dashboard/portfolio")}
          >
            <img
              src={
                location === "/dashboard/portfolio"
                  ? portfolio_yellow
                  : portfolio
              }
              alt="analytics_icon"
              width={20}
              height={20}
            />
            <span
              style={
                location === "/dashboard/portfolio"
                  ? { color: "black" }
                  : { color: "gray" }
              }
              className="link-dashboard"
            >
              Portfolio
            </span>
          </div> */}
          <a
            style={{ textDecoration: "none" }}
            href="https://wa.me/+918769740854"
            target="_blank"
            className="dashboard-single-links"
          // onClick={() => navigate('/dashboard/chat-with-expert')}
          >
            <img
              src={
                location === "/dashboard/chat-with-expert"
                  ? chat_yellow
                  : chat
              }
              alt="analytics_icon"
              width={20}
              height={20}
            />
            <span
              style={
                location === "/dashboard/chat-with-expert"
                  ? { color: "black" }
                  : { color: "gray" }
              }
              className="link-dashboard"
            >
              Chat with Expert
            </span>
          </a>
          <div className="dashboard-single-links"
          // onClick={() => navigate('/dashboard/analytics')}
          >
            <img src={location === '/dashboard/analytics' ? analytics_yellow : analytics} alt="analytics_icon" width={20} height={20} />
            <span style={location === '/dashboard/analytics' ? { color: 'black' } : { color: 'gray' }} className="link-dashboard">Analytics (Coming Soon)</span>
          </div>
        </div>

      </div>}
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
            <span style={{ fontSize: '10px', color: '#777777' }}>Live Deals</span>
          </div>
          <div className="main-navbar-section" onClick={() => navigate('/dashboard/portfolio')}>
            <div style={{ margin: 'auto' }}>
              <BusinessCenterOutlinedIcon style={location === '/dashboard/portfolio' ? { color: '#ECB92B' } : { color: 'gray' }} width={20} height={20} />
            </div>
            <span style={{ fontSize: '10px', color: '#777777' }}>Portfolio</span>
          </div>
          <div className="main-navbar-section" onClick={() => navigate('/dashboard/chat-with-expert')}>
            <div style={{ margin: 'auto' }}>
              <ChatBubbleOutlineOutlinedIcon style={location === '/dashboard/chat-with-expert' ? { color: '#ECB92B' } : { color: 'gray' }} width={20} height={20} />
            </div>
            <span style={{ fontSize: '10px', color: '#777777' }}>Chat with Expert</span>
          </div>
          <div className="main-navbar-section"
          // onClick={() => navigate('/dashboard/analytics')}
          >
            <div style={{ margin: 'auto' }}>
              <AddchartOutlinedIcon style={location === '/dashboard/analytics' ? { color: '#ECB92B' } : { color: 'gray' }} width={20} height={20} />
            </div>
            <span style={{ fontSize: '10px', color: '#777777' }}>Coming soon</span>
          </div>
        </div>
      </div>
    </>
  )
}
