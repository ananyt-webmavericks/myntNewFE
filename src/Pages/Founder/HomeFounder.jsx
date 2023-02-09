import React from 'react'
import { CssBaseline } from '@mui/material'
import AutomatedStreamlined from '../../component/FounderHome/AutomatedStreamlined'
import FounderFaqs from '../../component/FounderHome/FounderFaqs'
import Container from '@mui/material/Container';
import Networks from '../../component/FounderHome/Networks';

export default function HomeFounder() {
  return (
    <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
             <AutomatedStreamlined/>
            </Container>
            {/* <FundedNetworks /> */}
            <Container maxWidth="lg">
            <Networks/>
            {/* <SubscribegGraph />
            <OpenInvestment />
            <AboutTeamCarousel />
            <InvestorsHome />
            <HowToRaise /> */}
              <FounderFaqs/>
            </Container>
        </React.Fragment>
  )
}
