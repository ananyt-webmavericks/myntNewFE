import React from 'react'
import { Box, Button, Card, Grid, Typography } from '@mui/material'
import '../../../css/FounderDrawer/Dashboard/Highlights.css'
import RightArrow from './../../../images/assets/RightArrow.png'
import { Container } from '@mui/system'

const Highlights = () => {
    return (
        <Box sx={{ marginTop: 4, marginLeft: 2, }}>

            <span className='hightlight-heading'>Highlights</span>

            <Typography className='raise-with-mint-desc highlight-desc' >Mention the top highlights about your startup that you want the investors to know about.</Typography>


            <div style={{ marginTop: '3rem' }} className='gridParent'>
                <Grid item xs={6} md={3}>
                    <Box
                        sx={{
                            p: 2,
                            paddingTop: 2.8,
                            bgcolor: 'background.default',
                            display: 'grid',
                            gridTemplateColumns: { md: '1fr 1fr', sm: '1fr 1fr' },
                            gap: 2.5,
                            width: '492',
                            textAlign: 'left',
                            fontFamily: 'poppins'
                        }}
                    >

                        <Card className='parent-of-card'>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h4>Highlights 1</h4>
                                <img style={{ paddingTop: '10px' }} src={RightArrow} alt="right-arrow" width={60} />
                            </div>
                            <Typography className='tell-us-litt-more'>List the top unique selling points of your startup</Typography>
                        </Card>

                        <Card className='parent-of-card'>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h4>Highlights 2</h4>
                                <img style={{ paddingTop: '10px' }} src={RightArrow} alt="right-arrow" width={60} />
                            </div>
                            <Typography className='tell-us-litt-more'>Tell us a little about your company</Typography>
                        </Card>

                        <Card className='parent-of-card'>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h4>Highlights 3</h4>
                                <img style={{ paddingTop: '10px' }} src={RightArrow} alt="right-arrow" width={60} />
                            </div>
                            <Typography className='tell-us-litt-more'>Lorem ipsum dolor sit amet, consectetur elit. Morbi et,</Typography>
                        </Card>

                        <Card className='parent-of-card'>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h4>Highlights 4</h4>
                                <img style={{ paddingTop: '10px' }} src={RightArrow} alt="right-arrow" width={60} />
                            </div>
                            <Typography className='tell-us-litt-more'>Lorem ipsum dolor sit amet, consectetur elit. Morbi et,</Typography>
                        </Card>

                    </Box>
                </Grid>
            </div>

            <div className='hightlight-btn-parent'>
                <Button
                    style={{ margin: '20px' }}
                    variant='contained' className="hightlight-submit-button">Save</Button>
            </div>

        </Box >
    )
}

export default Highlights