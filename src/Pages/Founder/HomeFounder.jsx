import React from 'react'
import { CssBaseline } from '@mui/material'
import AutomatedStreamlined from '../../component/FounderHome/AutomatedStreamlined'
import FounderFaqs from '../../component/FounderHome/FounderFaqs'
import Container from '@mui/material/Container';
import Networks from '../../component/FounderHome/Networks';
import FundRaising from '../../component/FounderHome/FundRaising';
import HowToSubscribe from '../../component/FounderHome/HowToSubscribe';
import BaseHighlights from '../../component/FounderHome/BaseHighlights';
import FounderAboutTeamCarousal from '../../component/FounderHome/FounderAboutTeamCarousal';

export default function HomeFounder() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <AutomatedStreamlined />
      </Container>
      <Container maxWidth="lg">
        <Networks />
        <FundRaising />
        <HowToSubscribe />
        <FounderAboutTeamCarousal />
        <BaseHighlights />
        <FounderFaqs />
      </Container>
    </React.Fragment>
  )
}
