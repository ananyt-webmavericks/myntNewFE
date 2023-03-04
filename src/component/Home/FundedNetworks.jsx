import { Box, Typography } from "@mui/material";
import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import '../../css/Home/fundedNetwork.css'
import { useEffect, useState, useRef } from "react";
import Arrow from '../../images/assets/arrow.png'
import Carousel from 'react-elastic-carousel'
import Item from "../Item";
import GOMech from '../../images/assets/GOMech.png';
import FormLabs from '../../images/assets/FormLabs.png';
import Reevoy from '../../images/assets/reevoy.png';
import lw from '../../images/assets/lw.png';
const data = [
    { id: 1, image: Reevoy, name: '$12.6 million' },
    { id: 2, image: GOMech, name: '$285Mn' },
    { id: 3, image: FormLabs, name: '$2 billion' },
    { id: 4, image: lw, name: '$12.6Mn' },
    { id: 5, image: GOMech, name: '$285Mn' },
    { id: 6, image: FormLabs, name: '$2Bn' },
    { id: 7, image: Reevoy, name: '$12.6 million' },
]
export default function FundedNetworks() {
    const carouselRef2 = useRef(null);
    let resetTimeout;

    const [item, setItem] = useState(3)
    const ratio = parseInt(window.innerWidth);
    const totalPages = Math.ceil(data.length / item)

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
                        <div className="vertical-line"></div><img src={Arrow} width={8} height={15} ></img>
                    </div>
                    <Carousel
                        className="react-carousel-networks"
                        autoPlaySpeed={3000}
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
                                <Item key={index} className='company-image'>
                                    <div style={{ display: 'grid', textAlign: 'center' }}>
                                        <img height={40} style={{}} src={item.image}></img>
                                        <span style={{ marginTop: '1.5rem', fontSize: '15px', color: 'black', fontWeight: '600' }}>{item.name}</span>
                                    </div>
                                </Item>
                            )
                        })}

                    </Carousel>
                </div>
            </Container>
        </Box>
    )
}