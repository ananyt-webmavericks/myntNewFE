import { Avatar, Box, Button, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import '../../css/FounderHome/BaseHighlight.css'
import { useNavigate } from 'react-router-dom'
const data = [
    { heading: 'Get Growth Partners', desc: 'Get industry leaders to be your mentors and growth partners.' },
    { heading: 'Simple & effective ', desc: 'Raising capital has never been more easy.' },
    { heading: 'Community Effect', desc: 'Get visibility and grow your customers base.  ' }
]

const BaseHighlights = () => {
    const navigate = useNavigate()
    return (
        <React.Fragment>
            <div className="basehighlight-container-main">
                <Typography className='base-highlight-heading '>Go Beyond <span className='base-highlight-yellow-text'> Just Raising </span> Funds</Typography>
            </div>


            <Grid item xs={6} md={3}>
                <Box
                    sx={{
                        p: 2,
                        paddingTop: 5,
                        bgcolor: 'background.default',
                        display: 'grid',
                        gridTemplateColumns: { md: '1fr', sm: '1fr' },
                        gap: 2.5,
                        marginBottom: 3,

                    }}
                >
                    {
                        data.map((item, index) => {
                            return <Card elevation={0} className="higlight-point-container" >
                                <div className='point-block'>
                                    <Avatar sx={{ bgcolor: '#F0C127', width: '24px', height: '24px', border: '1px', borderColor: '#707070' }}>
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
                    <Button variant="contained" onClick={() => navigate('/founder/application')} className="founderhome-getStarted-landing-btn">Apply Now</Button>
                </div>
            </Grid>
        </React.Fragment >
    )
}

export default BaseHighlights