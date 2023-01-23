import React from "react";
import { useEffect, useState } from "react";
import { Box, Grid,Button } from "@mui/material";
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


const data = [
    { id: 1, image: Asad, logo: Oyo, name: 'Asad R', amount: 'Invested $101.01' },
    { id: 2, image: Arpit, logo: Leela, name: 'Arpit', amount: 'Invested $100' },
    { id: 3, image: Rajiv, logo: Samsung, name: 'Rajiv', amount: 'Invested $1,080' },
    { id: 4, image: Rajiv, logo: Byju, name: 'Sanjay S', amount: 'Invested $1,080' },
    { id: 5, image: Farhat, logo: Owl, name: 'Farhat', amount: 'Invested $210' },
    { id: 6, image: Kunal, logo: Microsoft, name: 'Kunal', amount: 'Invested $100' },
    { id: 7, image: Manju, logo: Sg, name: 'Manju S', amount: 'Invested $1,080' },
    { id: 8, image: Kunal, logo: Microsoft, name: 'Tapas', amount: 'Invested $100' },

]
export default function InvestorsHome() {
    const [gridxsFirst, setGridxsFirst] = useState(2)
    const [gridxsSecond, setgridxsSecond] = useState(6)
    const ratio = parseInt(window.innerWidth);

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
    return (
        <Box className="investor-home-container-main">
            <Grid container spacing={gridxsFirst}>
                <Grid item xs={gridxsSecond}>
                <div className="subscribe-graph-heading">
                    <div className="investor-home-heading">Trusted and<span className="colored-investor-home-heading"> Backed </span>by</div>
                    <span className="investors-subheading">Collaboration with highly reputed Investors in the market</span>
                    </div>
                    <div className="investors-image-container">
                        <img className="abstract-investment-bg" src={Abstract} alt="abstract"></img>
                        <img className="investors-investment-main" src={Investors} alt="abstract"></img>
                    </div>
                </Grid>
                <Grid item xs={gridxsSecond}>
                <div className="subscribe-graph-heading">
                    <div className="investor-home-heading">Thousands of <span className="colored-investor-home-heading"> Investors </span></div>
                
                    <span className="investors-subheading">Individual and institutional investors. invest $10–$100,000 per deal on MyntInvest<br /><br />Investments are risky and may result in total loss of capital. Learn more</span>
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
                    <Button variant="contained" className="getStarted-landing-btn">Get Started</Button>
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}