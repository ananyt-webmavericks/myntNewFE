import { Button } from "@mui/material";
import React from "react";
import '../css/navbar.css';
import logo from '../images/mynt1.png'
const Navbar = () => {

    return (
        <nav class="navbar">
            <div class="navbar-container container">
                <input type="checkbox" name="" id="" />
                <div class="hamburger-lines">
                    <span class="line line1"></span>
                    <span class="line line2"></span>
                    <span class="line line3"></span>
                </div>
                <ul class="menu-items">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Deals</a></li>
                    <li><a href="#">Raise</a></li>
                    <li><a href="#">MintUniversity</a></li>
                    <li><button className="login-btn">Login</button></li>
                    <li><button className="get-started-btn">Get Started</button></li>
                </ul>
                <img class="logo-web" src={logo}></img>
            </div>
        </nav>
    )
}
export default Navbar