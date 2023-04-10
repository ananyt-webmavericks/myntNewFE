import React, { useEffect } from 'react'
import { styled } from '@material-ui/styles';
import { Box, Button, Container, Tooltip, tooltipClasses, Typography } from '@mui/material'
import '../../../css/FounderDrawer/Dashboard/FAQs.css'
import { useState } from 'react';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import FAQsValSchema from '../../../Validations/FAQsValSchema';
import CompanyServices from '../../../service/Company';
import { toast } from "react-hot-toast";

const FAQS = ({ tabChangeFn }) => {

    const [q1Count, setQ1Count] = useState(0)
    const [q2Count, setQ2Count] = useState(0)
    const [addedFaqs, setAddedFaqs] = useState([])
    const [count, setcount] = useState(0)
    const { userData } = useSelector(state => state.loginData)
    const CustomWidthTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))({
        [`& .${tooltipClasses.tooltip}`]: {
            maxWidth: 250,
            backgroundColor: 'white',
            color: 'black',
            fontFamily: 'poppins',
            border: '1px solid gray',
            boxShadow: '0px 0px 20px #00000017',
            padding: '10px 20px'
        },
    });
    const handleCount = string => {
        const count = string.length
        console.log(count)
        setQ1Count(string.target.value)
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            campaign_id: sessionStorage.getItem("campaign_id"),
            question: '',
            answer: '',
        },

        validationSchema: FAQsValSchema,

        onSubmit: (values) => {
            console.log(values)
            let obj = {
                campaign_id: values.campaign_id,
                faqs: [
                    {
                        question: values.question,
                        answer: values.answer,
                    }
                ]
            }
            CompanyServices.addFAQ(obj).then(res => {
                console.log(res)
                if (res.status === 200 || res.status === 201) {
                    toast.success("FAQ added successfully!")
                    setcount(pre => pre + 1)
                    formik.handleReset()
                } else {
                    toast.error("Something went wrong, please try again later")
                }
            })
        }
    });
    console.log(formik.values)
    useEffect(() => {
        window.scrollTo(0, 0)
        CompanyServices.getCampaignsFaqs(sessionStorage.getItem("campaign_id")).then(res => {
            console.log(res)
            if (res.status === 200 || res.status === 201) {
                setAddedFaqs(res.data)
            }
        })
    }, [count])


    return (
        <Container maxWidth="lg">
            <form onSubmit={formik.handleSubmit}>
                <Box sx={{ marginTop: 4, marginLeft: 2 }}>
                    <h3 className='faqs-title'>FAQs (Frequently Asked Questions)</h3>

                    <Typography>Investors are curious. Answer the basics about your startup here. </Typography>

                    <Typography className='upload-ur-pitch' style={{ marginTop: '1.4rem', marginBottom: "-0.3rem" }}>Add FAQ</Typography>

                    {/* <CustomWidthTooltip title="Type your question here…" arrow placement='right'> */}
                    <input
                        name='question'
                        value={formik.values.question}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder='Type your question here…' type="text" className='inp-enter-name' />
                    {formik.touched.question && <div className="raise-err-text" >{formik.errors.question}</div>}
                    {/* </CustomWidthTooltip> */}

                    {/* <CustomWidthTooltip title="Describe your previous fundraising rounds*" arrow placement='right'> */}
                    <textarea
                        name='answer'
                        value={formik.values.answer}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        style={{ marginBottom: 0 }} placeholder='Describe your previous fundraising rounds*' className='inp-textarea-desc' id="describe" rows="7"></textarea>
                    <div className='zero-of-threehundred'>{q1Count?.length}/300</div>
                    {formik.touched.answer && <div className="raise-err-text" >{formik.errors.answer}</div>}
                    {/* </CustomWidthTooltip> */}

                    <hr style={{ color: '#F4F4F4', maxWidth: "800px", width: '100%', marginTop: '2rem' }} />

                    <div className="faqs-button-parent">
                        <Button
                            type="submit"
                            style={{ margin: '20px', color: 'black' }}
                            variant='contained' className="comp-prof-button1">Save</Button>
                        <Button
                            onClick={e => tabChangeFn(e, 4)}
                            style={{ margin: '20px' }}
                            variant="contained" className="comp-prof-button2">Next</Button>
                    </div>
                </Box >
            </form>


            <Box sx={{ marginTop: 4, marginLeft: 2 }}>
                {addedFaqs.length > 0 && <h3 className='faqs-title'>Added FAQs</h3>}
                {
                    addedFaqs?.map((item, index) => <div key={index}>
                        <Typography style={{ marginTop: '1.4rem', marginBottom: "-0.3rem" }} className='upload-ur-pitch'>Question {index + 1}</Typography>

                        {/* <CustomWidthTooltip title="Type your question here…" arrow placement='right'> */}
                        <input value={item.question} placeholder='Type your question here…' type="text" className='inp-enter-name' />
                        {/* </CustomWidthTooltip> */}

                        {/* <CustomWidthTooltip title="Describe your previous fundraising rounds*" arrow placement='right'> */}
                        <textarea value={item.answer} style={{ marginBottom: 0 }} placeholder='Describe your previous fundraising rounds*' className='inp-textarea-desc' name="descibe" id="describe" rows="7"></textarea>
                        {/* </CustomWidthTooltip> */}
                        <div className='zero-of-threehundred'>{q2Count}/300</div>

                        <hr style={{ color: '#F4F4F4', maxWidth: "800px", width: '100%', marginTop: '2rem' }} />
                    </div>)
                }
            </Box>
        </Container>
    )
}

export default FAQS