import { Avatar, Card, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import '../../css/FounderHome/FundRaising.css'
import React from 'react'
import heliogen from '../../images/Networks/heliogen.png'

const FundRaising = () => {
    return (
        <React.Fragment>
            <Typography className='our-networks-label'>
                <span>Fund Raising</span>
                <span className='portfolio-comp-label'> Re-Imaging    <span className='capital' style={{ color: 'black' }}> Capital </span></span>
            </Typography>


            <Grid item xs={6} md={3}>
                <Box
                    sx={{
                        p: 2,
                        paddingTop: 5,
                        bgcolor: 'background.default',
                        display: 'grid',
                        gridTemplateColumns: { md: '1fr 1fr', sm: '1fr 1fr' },
                        gap: 2.5,
                    }}
                >
                    <Card elevation={2} className="fund-raising-card">
                        <div className='avatar-block'>
                            <Avatar sx={{ bgcolor: '#F0C127', width: 56, height: 56 }}>OP</Avatar>
                        </div>
                        <div className='avatar-texts'>
                            <Typography className='avatar-heading'>Raise via Equity Instruments</Typography>
                            <Typography className='avatar-description'>This is not the actual text for this post, we will get the content in this section later.</Typography>
                        </div>
                    </Card>
                    <Card elevation={2} className="fund-raising-card">
                        <div className='avatar-block'>
                            <Avatar sx={{ bgcolor: '#F0C127', width: 56, height: 56 }}>OP</Avatar>
                        </div>
                        <div className='avatar-texts'>
                            <Typography className='avatar-heading'>Raise via Equity Instruments</Typography>
                            <Typography className='avatar-description'>This is not the actual text for this post, we will get the content in this section later.</Typography>
                        </div>
                    </Card>
                </Box>
            </Grid>
        </React.Fragment>
    )
}

export default FundRaising