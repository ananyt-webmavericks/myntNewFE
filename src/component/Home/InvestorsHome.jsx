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
import { useSelector } from "react-redux";

const data = [
  {
    id: 1,
    image: Asad,
    logo: Oyo,
    name: "Akhil",
    amount: "Enrolled INR 27,000",
  },
  {
    id: 2,
    image: Arpit,
    logo: Leela,
    name: "Dhurv",
    amount: "Enrolled INR 30,000",
  },
  {
    id: 3,
    image: Rajiv,
    logo: Samsung,
    name: "Asad",
    amount: "Enrolled INR 25,000",
  },
  {
    id: 4,
    image: Rajiv,
    logo: Byju,
    name: "Rajeev",
    amount: "Enrolled INR 20,000",
  },
  {
    id: 5,
    image: Rajiv,
    logo: Owl,
    name: "Gaurav",
    amount: "Enrolled INR 18,000",
  },
  {
    id: 6,
    image: Kunal,
    logo: makemytrip,
    name: "Kunal",
    amount: "Enrolled INR 9,000",
  },
  {
    id: 7,
    image: Manju,
    logo: Uber,
    name: "Manju",
    amount: "Enrolled INR 15,000",
  },
  {
    id: 8,
    image: Kunal,
    logo: Ola,
    name: "Sanjay",
    amount: "Enrolled INR 19,000",
  },
];
export default function InvestorsHome() {
  const [gridxsFirst, setGridxsFirst] = useState(2)
  const { userData } = useSelector((state) => state.loginData)

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
    { width: 1200, itemsToShow: 4 },
  ];

  const carouselRef = useRef(null);
  let resetTimeout;

  return (
    <Box className="investor-home-container-main">
      <Grid className="trustedByWrapper" container spacing={gridxsFirst}>
        <Grid className="trustedByImg" style={{ padding: 0 }} item xs={gridxsSecond}>
          <div className="subscribe-graph-heading">
            <div className="investor-home-heading">
              Trusted and
              <span className="colored-investor-home-heading"> Backed </span>by
            </div>
            <span className="investors-subheading">
              Collaboration with highly reputed Investors in the market
            </span>
          </div>
          {/* <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}> */}
          {/* <Carousel
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

                            {items.map((item) => ( */}
          <div className="investors-image-container">
            <img
              className="abstract-investment-bg"
              src={Abstract}
              alt="abstract"
            ></img>
            <img className="investors-investment-main" src={Investors} alt="abstract"></img>
            {/* <img className="investors-investment-main" src={InvestorsBg} alt="abstract"></img> */}
            {/* <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop:143
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap:20
                }}
              >
                <div>
                  <img height= {200} src={card1} />
                  <img
                    style={{ position: "absolute", left: "170px", top: "-10px" }}
                    height={40}
                    src={gattacaVentureIcon}
                  />
                  <span style={{position: "absolute", whiteSpace:'nowrap',left: "114px",top: "153px",fontSize: 14,fontWeight:'bold'}}>Michael Sorkin</span>
                </div>
                <div>
                  <img height={150} src={card2} />
                  <img
                    style={{ position: "absolute", right: "84px", top: "17px" }}
                    height={40}
                    src={livewellIcon}
                  />
                  <span style={{ position: "absolute", whiteSpace:'nowrap',right: "114px", top: "137px",fontSize: 14,fontWeight:'bold'}}>Vikas Dhar</span>
                </div>
              </div>
              <div>
                <img height={100} src={card3} />
                <img
                  style={{ position: "absolute", right: "120px", top: "264px" }}
                  height={50}
                  src={meteorVentureIcon}
                />
              </div>
            </div> */}
          </div>
          {/* ))}
                        </Carousel> */}
          {/* </div> */}
        </Grid>
        <Grid className="trustedByImg" style={{ padding: 0 }} item xs={gridxsSecond}>
          <div className="subscribe-graph-heading">
            <div className="investor-home-heading">
              Join Thousands{" "}
              <span className="colored-investor-home-heading"> </span>
            </div>

            <span className="investors-subheading">Begin your Subscription journey and seize startup opportunities starting as low as ₹25000.</span>
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
            {
              userData?.user_type === 'FOUNDER' ?
                null :
                <Button variant="contained" onClick={() => { userData?.user_type === 'INVESTOR' ? navigate('/dashboard/live-deals') : navigate('/get-started') }} className="getStarted-landing-btn">Get Started</Button>
            }
          </div>
        </Grid>
      </Grid >
    </Box >
  )
}
