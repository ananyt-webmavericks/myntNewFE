import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from "@mui/material";
import LandingHead from "../component/Home/LandingHead";
import FundedNetworks from "../component/Home/FundedNetworks";
import SubscribegGraph from "../component/Home/SubscribegGraph";
import OpenInvestment from "../component/Home/OpenInvestment";
import AboutTeamCarousel from "../component/Home/AboutTeamCarousel";
import InvestorsHome from "../component/Home/InvestorsHome";
import HowToRaise from "../component/Home/HowToRaise";

const Home = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
              <LandingHead />
            </Container>
            <FundedNetworks />
            <Container maxWidth="lg">
            <SubscribegGraph />
            <OpenInvestment />
            <AboutTeamCarousel />
            <InvestorsHome />
            <HowToRaise />
            </Container>
        </React.Fragment>
    )
}
export default Home