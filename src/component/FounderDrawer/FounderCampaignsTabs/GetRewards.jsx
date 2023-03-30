import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import '../../../css/FounderDrawer/Dashboard/GetRewards.css'
import { useSelector } from 'react-redux'
import { useFormik } from 'formik'
import RewardValSchema from '../../../Validations/RewardValSchema'

const GetRewards = () => {
    const { userData } = useSelector(state => state.loginData)
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            user_id: userData.id,
            amount: '',
            product_name: 'INVESTOR',
            description: '',
        },

        validationSchema: RewardValSchema,

        onSubmit: (values) => {
            console.log(values)
        }
    });

    return (
        <Box sx={{ marginTop: 4 }} className="promotions-parent">

            <span className='hightlight-heading'>Get Rewards</span>

            <Typography className='raise-with-mint-desc highlight-desc' >Mention the benefits or discounts an investor can get once he subscribes to your campaign</Typography>

            <form action="">
                <div>

                    <input
                        name="product_name"
                        value={formik.values.product_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='Product Name' type="text" className='get-reward-inputs' />

                    <input
                        name="amount"
                        value={formik.values.amount}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='Original Price' type="text" className='get-reward-inputs' />

                    <input
                        
                        placeholder='Discounted Price' type="text" className='get-reward-inputs' />

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