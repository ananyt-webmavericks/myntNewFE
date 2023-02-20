import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import '../../../css/FounderDrawer/Dashboard/GetRewards.css'

const GetRewards = () => {
    return (
        <Box sx={{ marginTop: 4, marginLeft: 2, }}>


            <span className='hightlight-heading'>Get Rewards</span>

            <Typography className='raise-with-mint-desc highlight-desc' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quam nunc egestas nunc at nibh. Odio erat turpis sit at bibendum nunc adipiscing sed. Tincidunt enim, amet vitae nibh cursus imperdiet erat.</Typography>

            <form action="">
                <div>

                    <input placeholder='Product Name' type="text" className='get-reward-inputs' />

                    <input placeholder='Original Price' type="text" className='get-reward-inputs' />

                    <input placeholder='Discounted Price' type="text" className='get-reward-inputs' />

                </div>

                <div className='getRewards-btn-parent'>
                    <Button
                        style={{ margin: '20px' }}
                        variant='contained' className="hightlight-submit-button">Save</Button>
                </div>

            </form>
        </Box>
    )
}

export default GetRewards