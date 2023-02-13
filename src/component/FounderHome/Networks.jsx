import React from 'react'
import { Typography } from '@mui/material'
import '../../css/FounderHome/Networks.css'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import heliogen from '../../images/Networks/heliogen.png'

const Networks = () => {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 100,
        lineHeight: '60px',
    }));

    const FlexDiv = styled('div')(({ theme }) => ({
        padding: '15px 15px 0px 15px',
        display: 'flex',
        justifyContent: 'space-between',
        lineHeight: '15px'
    }));

    const Networks = [
        { badgeName: "PUBLIC", bottomBadgeName: "Heliogen" },
        { badgeName: "IPO", bottomBadgeName: "Winc" },
        { badgeName: "Acquired", bottomBadgeName: "Wyre" },
        { badgeName: "IPO", bottomBadgeName: "Knightscope" },
    ]

    return (
        <React.Fragment>
            <Typography className='our-networks-label'>
                <span>See Our Networks</span>
                <span className='portfolio-comp-label'> Portfolio Companies </span>
                <span> Perform </span>
            </Typography>

            <Grid item xs={6} md={3}>
                <Box
                    sx={{
                        p: 2,
                        paddingTop: 5,
                        bgcolor: 'background.default',
                        display: 'grid',
                        gridTemplateColumns: { md: '1fr 1fr 1fr 1fr', sm: '1fr 1fr 1fr' },
                        gap: 2.5,
                    }}
                >
                    {Networks.map((item, index) => (
                        <Item key={index} elevation={2}>
                            <FlexDiv>
                                <div><img src={heliogen} alt="network-logo" /></div>
                                <div className='network-badge'><span className='network-badge-text'>{item.badgeName}</span></div>
                            </FlexDiv>
                            <FlexDiv style={{ paddingLeft: '30px' }}>
                                <span className='network-badge-bottom-text'>{item.bottomBadgeName}</span>
                                <span></span>
                            </FlexDiv>
                        </Item>
                    ))}
                </Box>
            </Grid>
        </React.Fragment>
    )
}

export default Networks