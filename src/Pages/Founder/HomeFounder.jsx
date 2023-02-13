import React from 'react'
import { CssBaseline } from '@mui/material'
import AutomatedStreamlined from '../../component/FounderHome/AutomatedStreamlined'
import FounderFaqs from '../../component/FounderHome/FounderFaqs'
import Container from '@mui/material/Container';
import Networks from '../../component/FounderHome/Networks';
import FundRaising from '../../component/FounderHome/FundRaising';
import HowToSubscribe from '../../component/FounderHome/HowToSubscribe';
import AboutTeamCarousel from '../../component/Home/AboutTeamCarousel';
import BaseHighlights from '../../component/FounderHome/BaseHighlights';

export default function HomeFounder() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <AutomatedStreamlined />
      </Container>
      {/* <FundedNetworks /> */}
      <Container maxWidth="lg">
        <Networks />
        <FundRaising />
        <HowToSubscribe />
        <AboutTeamCarousel />
        <BaseHighlights />
        {/* <SubscribegGraph />
            <OpenInvestment />
            <AboutTeamCarousel />
            <InvestorsHome />
            <HowToRaise /> */}
        <FounderFaqs />
      </Container>
    </React.Fragment>
  )
}
