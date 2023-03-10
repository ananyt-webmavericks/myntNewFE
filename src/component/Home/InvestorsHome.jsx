import React from "react";
import { useEffect, useState } from "react";
import { Box, Grid, Button } from "@mui/material";
import '../../css/Home/investorsHome.css';
import Abstract from '../../images/assets/abstract1.png';
import Investors from '../../images/assets/investors.png';
import Asad from '../../images/investors/asad.png';
import Oyo from '../../images/investors/oyo.png';
import Arpit from '../../images/investors/arpit.png';
import Leela from '../../images/investors/leela.png';
import Rajiv from '../../images/investors/rajiv.png';
import Samsung from '../../images/investors/samsung.png';
import Byju from '../../images/investors/byju.png';
import Farhat from '../../images/investors/farhat.png';
import Owl from '../../images/investors/owl.png';
import Kunal from '../../images/investors/kunal.png';
import Microsoft from '../../images/investors/microsoft.png';
import Manju from '../../images/investors/manju.png';
import Sg from '../../images/investors/sg.png';
import Ola from '../../images/investors/ola.svg';
import Uber from '../../images/investors/uber.svg';
import makemytrip from '../../images/investors/makemytrip.svg';
import { useNavigate } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import { useRef } from "react";

const data = [
    { id: 1, image: Asad, logo: Oyo, name: 'Akhil', amount: 'Invested INR 8000' },
    { id: 2, image: Arpit, logo: Leela, name: 'Dhurv', amount: 'Invested INR 10,000' },
    { id: 3, image: Rajiv, logo: Samsung, name: 'Asad', amount: 'Invested INR 7000' },
    { id: 4, image: Rajiv, logo: Byju, name: 'Rajeev', amount: 'Invested INR 9000' },
    { id: 5, image: Rajiv, logo: Owl, name: 'Gaurav', amount: 'Invested INR 18,000' },
    { id: 6, image: Kunal, logo: makemytrip, name: 'Kunal', amount: 'Invested INR 6000' },
    { id: 7, image: Manju, logo: Uber, name: 'Manju', amount: 'Invested INR 8000' },
    { id: 8, image: Kunal, logo: Ola, name: 'Sanjay', amount: 'Invested INR 15,000' },

]
export default function InvestorsHome() {
    const [gridxsFirst, setGridxsFirst] = useState(2)
    const [gridxsSecond, setgridxsSecond] = useState(6)
    const ratio = parseInt(window.innerWidth);
    const navigate = useNavigate()
    useEffect(() => {

        if (ratio < 1042) {
            setGridxsFirst(1)
            setgridxsSecond(12)
        }
        else if (ratio < 600) {
            setGridxsFirst(1)
            setgridxsSecond(6)
        }
    }, [])

    const [items, setItems] = useState([1]);

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
    ];

    const carouselRef = useRef(null);
    let resetTimeout;

    return (
        <Box className="investor-home-container-main">
            <Grid container spacing={gridxsFirst}>
                <Grid item xs={gridxsSecond}>
                    <div className="subscribe-graph-heading">
                        <div className="investor-home-heading">Trusted and<span className="colored-investor-home-heading"> Backed </span>by</div>
                        <span className="investors-subheading">Collaboration with highly reputed Investors in the market</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                        <Carousel
                            enableAutoPlay={true}
                            showArrows={false}
                            autoPlaySpeed={3000}
                            easing="ease"
                            transitionMs={1000}
                            enableMouseSwipe={true}
                            pagination={true}
                            itemsToShow={1}
                            ref={carouselRef}
                            // breakPoints={breakPoints}
                            onNextEnd={({ index }) => {
                                clearTimeout(resetTimeout)
                                if (index + 1 === data.length) {
                                    if (carouselRef?.current?.goTo) {
                                        resetTimeout = setTimeout(() => {
                                            if (carouselRef?.current?.goTo) {
                                                carouselRef.current.goTo(0)
                                            }
                                        }, 3000)
                                    }
                                }
                            }}
                        >

                            {items.map((item) => (
                                <div className="investors-image-container">
                                    <img className="abstract-investment-bg" src={Abstract} alt="abstract"></img>
                                    <img className="investors-investment-main" src={Investors} alt="abstract"></img>
                                </div>
                            ))}
                        </Carousel>
                    </div>

                </Grid>
                <Grid item xs={gridxsSecond}>
                    <div className="subscribe-graph-heading">
                        <div className="investor-home-heading">Join Thousands <span className="colored-investor-home-heading"> </span></div>

                        <span className="investors-subheading">Begin your Subscription journey and seize startup opportunities starting as low as ₹4000.</span>
                    </div>
                    <div className="profile-container-investors">
                        <Grid container spacing={4}>
                            {data.map((item, index) => {
                                return (
                                    <Grid key={index} item xs={3}>
                                        <div className="investor-detailed-section">
                                            <img src={item.image} className='investors-image-first'></img>
                                            <img src={item.logo} className="investor-company-logo"></img>
                                            <span className="name-of-investor-txt" >{item.name}</span>
                                            <span className="investment-of-investor-txt">{item.amount}</span>
                                        </div>
                                    </Grid>
                                )
                            })}

                        </Grid>
                    </div>
                    <div className="get-started-btn-investor">
                        <Button variant="contained" onClick={() => navigate('/get-started')} className="getStarted-landing-btn">Get Started</Button>
                    </div>
                </Grid>
            </Grid >
        </Box >
    )
}