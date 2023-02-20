import { Button, Container, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import React from 'react'
import '../../../css/FounderDrawer/Dashboard/Press.css'

const Press = () => {
    return (
        <Container maxWidth="lg">
            <Typography className='press-title'>Press</Typography>

            <Typography className='press-title-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quam nunc egestas nunc at nibh. Odio erat turpis sit at bibendum nunc adipiscing sed. Tincidunt enim, amet vitae nibh cursus imperdiet erat.</Typography>

            <input type="text" className='press-input' placeholder='Enter your header/title here' />

            <input type="text" className='press-input' placeholder='https://' />

            <textarea className='press-textarea' name="press-textarear" id="press-textarea" cols="30" rows="7" placeholder='Type something here…'></textarea>
            <div className='press-textarea-count'>0/300</div>

            <div className='press-photos-parent'>

                <Typography className='press-banner-photo-title'>Banner Photo*</Typography>

                <div className='banner-box-container'>
                    <div className='Banner-Box'>Banner 01</div>
                    <div className='Banner-Box'>Banner 02</div>
                    <div className='Banner-Box'>Banner 03</div>
                </div>

                <Button className='press-upload-pic-btn'>Upload a Picture</Button>
            </div>

            <hr className="press-hr" />

            <div className='getRewards-btn-parent'>
                <Button
                    style={{ margin: '20px', color: "white" }}
                    variant='contained' className="hightlight-submit-button">Submit</Button>
            </div>

        </Container>
    )
}

export default Press