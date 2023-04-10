import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import '../../../css/FounderDrawer/Dashboard/GetRewards.css'
import { useSelector } from 'react-redux'
import { useFormik } from 'formik'
import RewardValSchema from '../../../Validations/RewardValSchema'
import CompanyServices from '../../../service/Company'
import { toast } from "react-hot-toast";
import { useState } from 'react'
import { useEffect } from 'react'

const GetRewards = ({ tabChangeFn }) => {
    const { userData } = useSelector(state => state.loginData)
    const [rewardData, setRewardData] = useState([])
    const [isRewardAdded, setIsRewardAdded] = useState(false)
    const [count, setCount] = useState(0)
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            campaign_id: sessionStorage.getItem("campaign_id"),
            product_name: '',
            amount: '',
            discounted_price: '',
        },

        validationSchema: RewardValSchema,

        onSubmit: (values) => {
            console.log(values)
            CompanyServices.createReward(values).then(res => {
                console.log(res)
                if (res.status === 200 || res.status === 201) {
                    toast.success("Reward added successfully!")
                    sessionStorage.setItem("is_reward_added", true)
                    setCount(pre => pre + 1)
                    formik.handleReset()
                } else {
                    toast.error("Something went wrong, please try again later")
                }
            })
        }
    });
    console.log(rewardData)
    useEffect(() => {

        CompanyServices.getRewardByCampaingID(sessionStorage.getItem("campaign_id")).then(res => {
            console.log(res)
            if (res.status === 200 || res.status === 201) {
                setRewardData(res.data)
                setIsRewardAdded(rewardData.id ? true : false)
            }
        })

    }, [count])


    return (
        <Box sx={{ marginTop: 4 }} className="promotions-parent">

            <span className='hightlight-heading'>Get Rewards</span>

            <Typography className='raise-with-mint-desc highlight-desc' >Mention the benefits or discounts an investor can get once he subscribes to your campaign</Typography>

            <form onSubmit={formik.handleSubmit}>
                <div>

                    <input
                        name="product_name"
                        value={formik.values.product_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='Product Name' type="text" className='get-reward-inputs' />
                    {formik.touched.product_name && <div className="raise-err-text" >{formik.errors.product_name}</div>}

                    <input
                        name="amount"
                        value={formik.values.amount}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='Original Price' type="text" className='get-reward-inputs' />
                    {formik.touched.amount && <div className="raise-err-text" >{formik.errors.amount}</div>}

                    <input
                        name="discounted_price"
                        value={formik.values.discounted_price}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='Discounted Price'
                        type="text"
                        className='get-reward-inputs' />
                    {formik.touched.discounted_price && <div className="raise-err-text">{formik.errors.discounted_price}</div>}

                </div>
                {/* 
                <div className='getRewards-btn-parent'>
                    <Button
                        type="submit"
                        style={{ margin: '20px' }}
                        variant='contained' className="hightlight-submit-button">
                        {
                            isRewardAdded
                                ? "Update"
                                : "Save"
                        }
                    </Button>
                </div> */}

                <div className="faqs-button-parent">
                    <Button
                        type="submit"
                        style={{ margin: '20px', color: 'black' }}
                        variant='contained' className="comp-prof-button1">Save</Button>
                    <Button
                        onClick={e => tabChangeFn(e, 6)}
                        style={{ margin: '20px' }}
                        variant="contained" className="comp-prof-button2">Next</Button>
                </div>

                <div className="promotions-parent">
                    {rewardData?.length > 0 && <div className='hightlight-heading' style={{ marginBottom: '1.8rem' }}>Rewards Added</div>}

                    {
                        rewardData?.map((item, index) => <div key={index}>
                            <div style={{ textAlign: 'left', fontFamily: 'poppins', fontSize: "16px" }}>Reward {index + 1}</div>
                            <input value={item.product_name} type="text" className='get-reward-inputs' />

                            <input
                                value={item.amount}
                                type="text" className='get-reward-inputs' />

                            <input
                                value={item.discounted_price}
                                type="text"
                                className='get-reward-inputs' />

                            {/* <hr /> */}
                        </div>)
                    }
                </div>


            </form>
        </Box>
    )
}

export default GetRewards