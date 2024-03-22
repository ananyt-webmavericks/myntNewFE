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
import classroom_logo from '../../images/Networks/classRoom.png'
import autoshield_logo from '../../images/Networks/autoshield_logo.png'
import livewell from '../../images/Networks/livewell.png'
import PeopleTeckLabs from '../../images/Networks/PeopleTeckLabs.png'
import barrelHand from '../../images/Networks/barrelHand.png'
import go3d from '../../images/Networks/GO3D.png'
import paralenz from '../../images/Networks/paralenz.png'
import phasio from '../../images/Networks/phasio.png'
import quantica from '../../images/Networks/quantica.png'
const data = [
    { id: 1, height: 30, image: eazyschooling, name: '1 Bn USD' },
    { id: 2, height: 30, image: formlabs_logo, name: '10 million EUR' },
    { id: 3, height: 70, image: PeopleTeckLabs, name: '10 M USD' },
    { id: 4, height: 35, image: autoshield_logo, name: '10 M USD' },
    { id: 5, height: 50, image: phasio, name: '10 M USD' },
    { id: 6, height: 70, image: livewell, name: '10 M EUR' },
    { id: 7, height: 30, image: barrelHand, name: '10 M USD' },
    { id: 8, height: 70, image: go3d, name: '10 M USD' },
    { id: 9, height: 90, image: classroom_logo, name: '10 M EUR' },
    { id: 10, height: 50, image: paralenz, name: '10 M USD' },
    { id: 11, height: 50, image: quantica, name: '10 M USD' },
]
export default function FundedNetworks() {
    const carouselRef2 = useRef(null);
    let resetTimeout;

    const [item, setItem] = useState(3)
    const ratio = parseInt(window.innerWidth);
    // const totalPages = Math.ceil(data.length / (item + 1))
    const totalPages = 9
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
                    <div className="network-vertical-line" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="vertical-line"></div>
                        <img src={Arrow} width={8} height={15} ></img>
                    </div>
                    <Carousel
                        className="react-carousel-networks network-vertical-line"
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
                                <Item key={index} className='company-image' style={{ width: '100% ', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
            <Container className="networks-mb-view">
                {data.map((item, index) => {
                    return (
                        <div key={index} className='main-comp-funced' style={{ width: '150px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <img className="comp-img" height={item.height} style={{}} src={item.image}></img>
                                <span style={{ marginTop: item.marginTop, fontSize: '15px', color: 'black', fontWeight: '600' }}>{item.name}</span>
                            </div>
                        </div>
                    )
                })}
            </Container>
        </Box>
    )
}