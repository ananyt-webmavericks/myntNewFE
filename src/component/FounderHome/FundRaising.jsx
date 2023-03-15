import { Avatar, Card, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import '../../css/FounderHome/FundRaising.css'
import React from 'react'
import Equity from './../../images/founder/Equity.png'
import Debt from './../../images/founder/Debt.png'

const FundRaising = () => {
    return (
        <React.Fragment>
            <Typography className='our-networks-label'>
                <span className='portfolio-comp-label'> Re-envision  <span className='capital' style={{ color: 'black' }}> Capital </span></span>
            </Typography>
            <Typography className='re-envi-descript'>
                Secure funding on terms tailored to your company's unique requirements.
            </Typography>


            <Grid item xs={6} md={3}>
                <Box
                    sx={{
                        p: 2,
                        paddingTop: 5,
                        bgcolor: 'background.default',
                        display: 'grid',
                        gridTemplateColumns: { md: '1fr 1fr', sm: '1fr 1fr' },
                        gap: 6,
                    }}
                >
                    <div elevation={2} className="fund-raising-card">
                        <img src={Equity} alt="equity_logo" className='fundRaise-Img' />
                        <Typography style={{ fontSize: '20px', fontWeight: 'bold' }}>
                            Secure funding via Equity instruments
                        </Typography>
                        <Typography className='fund-raise-desc' style={{ fontSize: '14px', marginTop: '20px', marginBottom: '20px', paddingLeft: '3.5rem', paddingRight: '3.5rem' }}>
                            Experience the benefits of an equity raise while preserving a clean cap table. Benefit from the added value of numerous investors with no limitations for participation.
                        </Typography>
                    </div>

                    <div elevation={2} className="fund-raising-card">
                        <img src={Debt} alt="Debt_logo" className='fundRaise-Img' />
                        <Typography style={{ fontSize: '20px', fontWeight: 'bold' }} >
                            Secure funding via Debt instruments
                        </Typography>
                        <Typography className='fund-raise-desc' style={{ fontSize: '14px', marginTop: '20px', marginBottom: '20px', paddingLeft: '3.5rem', paddingRight: '3.5rem' }}>
                            Acquire non-diluting capital through our flexible terms and repayment plans. Take advantage of all community linked benefits for increased sales.
                        </Typography>
                    </div>
                </Box>
            </Grid>
        </React.Fragment>
    )
}

export default FundRaising