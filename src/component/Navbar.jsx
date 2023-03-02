import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/navbar.css';
import logo from '../images/mynt1.png'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { useDispatch, useSelector } from "react-redux";
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import Logout from '@mui/icons-material/Logout';
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
    };
    const handleProfile=()=>{
        navigate('/my-profile')
    }
    const handleLogout=()=>{
        navigate('/login')
        localStorage.clear();
        window.location.reload()
    }
    return (
        <nav class="navbar">
            <div class="navbar-container container">
                {location.includes('/complete-your-profile') && ratio < 768 && <ArrowBackIosRoundedIcon style={{ marginTop: '1em' }} onClick={() => navigate('/')} />}

                {!location.includes('/complete-your-profile') && ratio < 768 && <img src={logo} className='ham-menu-img'></img>}
                {location.includes('/complete-your-profile') && ratio < 768 && <img  src={logo} style={{ width: '78px', height: '35px', position: 'sticky', left: '40%', top: '1em' }}></img>}
                <input type="checkbox" name="" id="" />
                {!location.includes('/complete-your-profile') && <div class="hamburger-lines">
                    <span class="line line1"></span>
                    <span class="line line2"></span>
                    <span class="line line3"></span>
                </div>}

                <ul class="menu-items">
                    <li><span onClick={() => navigate('/')}>Home</span></li>
                    <hr className="ruler-navbar" />
                    <li><span onClick={() => navigate('/dashboard/live-deals')}>Deals</span></li>
                    <hr className="ruler-navbar" />
                    <li><span onClick={() => navigate('/founder')} >Raise</span></li>
                    <hr className="ruler-navbar" />
                    <li><span onClick={() => navigate('/myntUniversity/faqs')}>MyntUniversity</span></li>
                    <hr className="ruler-navbar" />
                    {Object.keys(userData).length !== 0 ?
                        <>
                            <li><span onClick={() => navigate('/')}>{userData.name ? userData.name: userData?.first_name + " " + userData?.last_name}</span></li>

                            {(ratio > 768) ?
                                <> <Tooltip title={userData.name}>
                                    <Tooltip title="Account settings">
                                        <IconButton
                                            onClick={handleClick}
                                            size="small"
                                            sx={{ ml: 2 }}
                                            aria-controls={open ? 'account-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                        >
                                            <Avatar alt="Remy Sharp" src={userData.accessToken ? userData.picture.data.url : userData.picture} style={{ margin: '0 10px' }} />
                                        </IconButton>
                                    </Tooltip>


                                </Tooltip>
                                    <Menu
                                        anchorEl={anchorEl}
                                        id="account-menu"
                                        open={open}
                                        onClose={handleClose}
                                        onClick={handleClose}
                                        PaperProps={{
                                            elevation: 0,
                                            sx: {
                                                overflow: 'visible',
                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                mt: 1.5,
                                                '& .MuiAvatar-root': {
                                                    width: 32,
                                                    height: 32,
                                                    ml: -0.5,
                                                    mr: 1,
                                                },
                                                '&:before': {
                                                    content: '""',
                                                    display: 'block',
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 14,
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: 'background.paper',
                                                    transform: 'translateY(-50%) rotate(45deg)',
                                                    zIndex: 0,
                                                },
                                            },
                                        }}
                                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                    >
                                        <MenuItem onClick={handleProfile}>
                                            <Avatar /> Profile
                                        </MenuItem>
                                        <MenuItem onClick={()=>navigate('/dashboard')}>
                                        <ListItemIcon>
                                                <GridViewOutlinedIcon fontSize="small" />
                                            </ListItemIcon>
                                           Dashboard
                                        </MenuItem>
                                        <Divider />
                                        <MenuItem onClick={handleLogout}>
                                            <ListItemIcon>
                                                <Logout fontSize="small" />
                                            </ListItemIcon>
                                            Logout
                                        </MenuItem>
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
                <img onClick={() => navigate('/')} class="logo-web" src={logo}></img>
            </div>
        </nav>
    )
}
export default Navbar