import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/navbar.css';
import logo from '../images/mynt1.png'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
const Navbar = () => {
    const navigate = useNavigate()
    const location = window.location.pathname;
    const ratio = parseInt(window.innerWidth);

    return (
        <nav class="navbar">
            <div class="navbar-container container">
               {location.includes('/complete-your-profile') && ratio < 768 && <ArrowBackIosRoundedIcon style={{marginTop:'1em'}} onClick={()=>navigate('/')} />}
               
                {!location.includes('/complete-your-profile')&& ratio < 768 && <img src={logo} className='ham-menu-img'></img>}
                {location.includes('/complete-your-profile') && ratio < 768 && <img src={logo} style={{width:'78px',height:'35px',position:'sticky',left:'40%',top:'1em'}}></img>}
                <input type="checkbox" name="" id="" />
                {!location.includes('/complete-your-profile') &&  <div class="hamburger-lines">
                    <span class="line line1"></span>
                    <span class="line line2"></span>
                    <span class="line line3"></span>
                </div>}
                
                <ul class="menu-items">
                    <li><a  href="/">Home</a></li>
                    <hr  className="ruler-navbar"/>
                    <li><a href="/dashboard/live-deals">Deals</a></li>
                    <hr className="ruler-navbar"/>
                    <li><a href="#">Raise</a></li>
                    <hr className="ruler-navbar"/>
                    <li><a href="#">MyntUniversity</a></li>
                    <hr className="ruler-navbar"/>
                
                    <li><button className="login-btn" onClick={()=> navigate('/login')}>Login</button></li>
                    <li><button className="get-started-btn" onClick={()=> navigate('/get-started')} >Get Started</button></li>
                    <div className="btn-section-navbar">
                    <li><button className="get-started-btn-mobile" onClick={()=> navigate('/get-started')} >Get Started</button></li>
                    <li><button className="login-btn-mobile" onClick={()=> navigate('/login')}>Login</button></li>
                    </div>
                </ul>
                <img class="logo-web" src={logo}></img>
            </div>
        </nav>
    )
}
export default Navbar