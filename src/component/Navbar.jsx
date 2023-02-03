import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/navbar.css';
import logo from '../images/mynt1.png'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { useSelector } from "react-redux";
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
const Navbar = () => {
    const navigate = useNavigate()
    const location = window.location.pathname;
    const ratio = parseInt(window.innerWidth);
    const { userData } = useSelector((state) => state.loginData)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        navigate('/login')
        window.location.reload()
    };
    return (
        <nav class="navbar">
            <div class="navbar-container container">
                {location.includes('/complete-your-profile') && ratio < 768 && <ArrowBackIosRoundedIcon style={{ marginTop: '1em' }} onClick={() => navigate('/')} />}

                {!location.includes('/complete-your-profile') && ratio < 768 && <img src={logo} className='ham-menu-img'></img>}
                {location.includes('/complete-your-profile') && ratio < 768 && <img src={logo} style={{ width: '78px', height: '35px', position: 'sticky', left: '40%', top: '1em' }}></img>}
                <input type="checkbox" name="" id="" />
                {!location.includes('/complete-your-profile') && <div class="hamburger-lines">
                    <span class="line line1"></span>
                    <span class="line line2"></span>
                    <span class="line line3"></span>
                </div>}

                <ul class="menu-items">
                    <li><a href="/">Home</a></li>
                    <hr className="ruler-navbar" />
                    <li><a href="/dashboard/live-deals">Deals</a></li>
                    <hr className="ruler-navbar" />
                    <li><a href="#">Raise</a></li>
                    <hr className="ruler-navbar" />
                    <li><a href="#">MyntUniversity</a></li>
                    <hr className="ruler-navbar" />
                    {Object.keys(userData).length !== 0 ?
                        <>
                            <li><a href="#">{userData.name}</a></li>

                            { (ratio > 768) ?
                                <> <Tooltip title={userData.name}>

                                    <Avatar alt="Remy Sharp" src={userData.accessToken ? userData.picture.data.url : userData.picture} style={{ margin: '0 10px' }} />

                                </Tooltip>
                                    <KeyboardArrowDownOutlinedIcon onClick={handleClick} style={{ margin: '8px 0px' }} />
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                                    </Menu>
                                </>
                                :
                            <div className="btn-section-navbar">
                                <li><button className="get-started-btn-mobile" onClick={() => navigate('/login')} >Logout</button></li>
                                
                            </div>
                            }
                        </>
                        :
                        <>
                            <li><button className="login-btn" onClick={() => navigate('/login')}>Login</button></li>
                            <li><button className="get-started-btn" onClick={() => navigate('/get-started')} >Get Started</button></li>
                            <div className="btn-section-navbar">
                                <li><button className="get-started-btn-mobile" onClick={() => navigate('/get-started')} >Get Started</button></li>
                                <li><button className="login-btn-mobile" onClick={() => navigate('/login')}>Login</button></li>
                            </div>
                        </>
                    }

                </ul>
                <img class="logo-web" src={logo}></img>
            </div>
        </nav>
    )
}
export default Navbar