import { Box, Typography } from "@mui/material";
import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import '../../css/Home/fundedNetwork.css'
import { useEffect, useState, useRef } from "react";
import Arrow from '../../images/assets/arrow.png'
import Carousel from 'react-elastic-carousel'
import Item from "../Item";

import eazyschooling from '../../images/Networks/eazyschooling.png'
import formlabs_logo from '../../images/Networks/formlabs_logo.png'
import classroom_logo from '../../images/Networks/classroom_logo.png'
import autoshield_logo from '../../images/Networks/autoshield_logo.png'
import incuspaze from '../../images/Networks/incuspaze.png'
import PeopleTeckLabs from '../../images/Networks/PeopleTeckLabs.png'
import barrelHand from '../../images/Networks/barrelHand.png'
import deciwood_logo from '../../images/Networks/deciwood_logo.png'
const data = [
    { id: 1, height: 30, image: eazyschooling, name: '1 Bn USD' },
    { id: 2, height: 30, image: formlabs_logo, name: '10 million EUR' },
    { id: 3, height: 20, image: classroom_logo, name: '10 M EUR' },
    { id: 4, height: 35, image: autoshield_logo, name: '10 M USD' },
    { id: 5, height: 40, image: incuspaze, name: '10 M EUR' },
    { id: 6, height: 70, image: PeopleTeckLabs, name: '10 M USD' },
    { id: 7, height: 30, image: barrelHand, name: '10 M USD' },
    { id: 8, height: 30, image: deciwood_logo, name: '10 M USD' }
]
export default function FundedNetworks() {
    const carouselRef2 = useRef(null);
    let resetTimeout;

    const [item, setItem] = useState(3)
    const ratio = parseInt(window.innerWidth);
    // const totalPages = Math.ceil(data.length / (item + 1))
    const totalPages = 6
    useEffect(() => {

        if (ratio < 450) {
            setItem(2)
        }

    }, [])
    return (
        <Box sx={{ padding: '1em 0', background: '#FCFCFC', height: 'fit-content' }}>
            <CssBaseline />
            <Container maxWidth="lg">
                <div className="funded-networks-container">
                    <div className="funded-head-txt" >
                        <Typography className="networks-head-script">Brought to you by the Networks that have <span style={{ color: '#F0C127' }}>Funded</span></Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="vertical-line"></div>
                        <img src={Arrow} width={8} height={15} ></img>
                    </div>
                    <Carousel
                        className="react-carousel-networks"
                        autoPlaySpeed={2000}
                        easing="ease"
                        enableAutoPlay={true}
                        showArrows={false}
                        transitionMs={1000}
                        enableMouseSwipe={true}
                        pagination={false}
                        itemsToShow={item}
                        ref={carouselRef2}
                        onNextEnd={({ index }) => {
                            clearTimeout(resetTimeout)
                            if (index + 1 === totalPages) {
                                if (carouselRef2?.current?.goTo) {
                                    resetTimeout = setTimeout(() => {
                                        if (carouselRef2?.current?.goTo) {
                                            carouselRef2.current.goTo(0)
                                        }
                                    }, 1000)
                                }
                            }
                        }}
                    >
                        {data.map((item, index) => {
                            return (
                                <Item key={index} className='company-image' style={{ width: '100px ', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                        <img className="comp-img" height={item.height} style={{}} src={item.image}></img>
                                        {/* <span style={{ marginTop: item.marginTop, fontSize: '15px', color: 'black', fontWeight: '600' }}>{item.name}</span> */}
                                    </div>
                                </Item>
                            )
                        })}

                        <Item className='company-image' style={{ width: '100px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center' }}>
                                <img className="comp-img" height={40} style={{ objectFit: 'contain' }} src={item.image}></img>
                                <span style={{ marginTop: '1.5rem', fontSize: '15px', color: 'black', fontWeight: '600' }}>{item.name}</span>
                            </div>
                        </Item>

                    </Carousel>
                </div>
            </Container>
        </Box>
    )
}