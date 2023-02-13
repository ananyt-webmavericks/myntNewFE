import { Avatar, Box, Button, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import '../../css/FounderHome/BaseHighlight.css'

const data = [
    { heading: 'Fast and easy', desc: 'No multiple negotiations and endless documentation' },
    { heading: 'Effective', desc: 'Happiness delivered to more than 100 startups' },
    { heading: 'Raise from your community', desc: 'Your audience roots for you from the sidelines' },
    { heading: 'Fast and easy', desc: 'No multiple negotiations and endless documentation' },
    { heading: 'Effective', desc: 'Happiness delivered to more than 100 startups' },
    { heading: 'Raise from your community', desc: 'Your audience roots for you from the sidelines' },
]

const BaseHighlights = () => {
    return (
        <React.Fragment>
            <div className="basehighlight-container-main">
                <Typography className='base-highlight-heading '>Go beyond <span className='base-highlight-yellow-text'> just raising </span> Capital</Typography>
            </div>


            <Grid item xs={6} md={3}>
                <Box
                    sx={{
                        p: 2,
                        paddingTop: 5,
                        bgcolor: 'background.default',
                        display: 'grid',
                        gridTemplateColumns: { md: '1fr 1fr', sm: '1fr 1fr' },
                        gap: 2.5,
                        marginBottom: 3
                    }}
                >
                    {
                        data.map((item, index) => {
                            return <Card elevation={0} className="higlight-point-container">
                                <div className='point-block'>
                                    <Avatar sx={{ bgcolor: '#F0C127', width: 40, height: 40, border: '1px', borderColor: '#707070' }}>
                                        <span className='point-number'>{index + 1}</span>
                                    </Avatar>
                                </div>
                                <div className='point-texts'>
                                    <Typography className='point-heading'>{item.heading}</Typography>
                                    <Typography className='point-description'>{item.desc}</Typography>
                                </div>
                            </Card>
                        })
                    }
                </Box>
                <div className="apply-now-button-container">
                    <Button variant="contained" className="founderhome-getStarted-landing-btn">Apply Now</Button>
                </div>
            </Grid>
        </React.Fragment >
    )
}

export default BaseHighlights