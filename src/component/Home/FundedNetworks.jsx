import { Box, Typography } from "@mui/material";
import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import '../../css/Home/fundedNetwork.css'
import { useEffect,useState } from "react";
import Arrow from '../../images/assets/arrow.png'
import Carousel from 'react-elastic-carousel'
import Item from "../Item";
import GOMech from '../../images/assets/GOMech.png';
import FormLabs from '../../images/assets/FormLabs.png';
import Reevoy from '../../images/assets/reevoy.png';
const data = [
    { id: 1, image: Reevoy, name: '12Mn' },
    { id: 2, image: GOMech, name: '7.5Mn' },
    { id: 3, image: FormLabs, name: '5Mn' },
    { id: 4, image: Reevoy, name: '11.2Mn' },
    { id: 5, image: GOMech, name: '7.5Mn' },
    { id: 6, image: FormLabs, name: '5Mn' },
    { id: 7, image: Reevoy, name: '11.2Mn' },
]
export default function FundedNetworks() {

    const [item, setItem] = useState(3)
    const ratio = parseInt(window.innerWidth);


    useEffect(() => {

        if (ratio < 550) {
            setItem(2)
        }
        if(ratio < 450){
            setItem(1)
        }
        
    }, [])
    return (
        <Box sx={{ padding: '0', background: '#FCFCFC',height:'150px' }}>
            <CssBaseline />
            <Container maxWidth="lg">
                <div className="funded-networks-container">
                    <Typography className="networks-head-script">Brought to you by the<br /> Networks that have <span style={{ color: '#F0C127' }}>Funded</span></Typography>
                    <div className="vertical-line"></div><img src={Arrow} width={8} height={15} ></img>
                    <Carousel
                        enableAutoPlay={true}
                        showArrows={false}
                        enableMouseSwipe={true}
                        pagination={false}
                        itemsToShow={item}
                    >
                        {data.map((item, index) => {
                            return (
                                <Item key={index} className='company-image'>
                                    <div style={{ display: 'grid', textAlign: 'center' }}>
                                        <img height={80} width={100} style={{ objectFit: 'contain' }} src={item.image}></img>
                                        <span style={{ fontSize: '16px', color: 'black',fontWeight:'600' }}>{item.name}</span>
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