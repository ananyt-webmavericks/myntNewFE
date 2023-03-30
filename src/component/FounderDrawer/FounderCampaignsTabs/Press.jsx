import { Button, Container, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import { useSelector } from 'react-redux'
import '../../../css/FounderDrawer/Dashboard/Press.css'
import CompanyServices from '../../../service/Company'
import PressValSchema from '../../../Validations/PressValSchema'

const Press = () => {
    const { userData } = useSelector(state => state.loginData)
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            user_id: userData.id,
            title: '',
            link: '',
            description: '',
            banner: 'https://c8.alamy.com/comp/R77EPB/blue-business-logo-template-for-cassette-demo-record-tape-record-facebook-timeline-banner-design-vector-web-banner-background-illustration-R77EPB.jpg',
        },

        validationSchema: PressValSchema,

        onSubmit: (values) => {
            console.log(values)
            CompanyServices.addPress(values).then(res => {
                console.log(res)
            })
        }
    });

    return (
        <Container maxWidth="lg">
            <form onSubmit={formik.handleSubmit}>
                <Typography className='press-title'>Press</Typography>

                <Typography className='press-title-desc'>Show your reach! Investors are always more inclined towards startups that have been covered by the media and are gaining traction. </Typography>

                <input
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="text" className='press-input' placeholder='Enter your header/title here' />
                {formik.touched.title && <div className="raise-err-text">{formik.errors.title}</div>}

                <input
                    name="link"
                    value={formik.values.link}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="text" className='press-input' placeholder='https://' />
                {formik.touched.link && <div className="raise-err-text">{formik.errors.link}</div>}

                <textarea
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='press-textarea' id="press-textarea" cols="30" rows="7" placeholder='Type something here…'></textarea>
                <div className='press-textarea-count'>0/300</div>
                {formik.touched.description && <div style={{ marginTop: '-38px' }} className="raise-err-text">{formik.errors.description}</div>}

                <div className='press-photos-parent'>

                    <Typography className='press-banner-photo-title'>Banner Photo*</Typography>

                    <div className='banner-box-container'>
                        <div className='Banner-Box'>Banner 01</div>
                        <div className='Banner-Box'>Banner 02</div>
                        <div className='Banner-Box'>Banner 03</div>
                    </div>
                    <input id='pressUploadBanner' hidden onChange={"handleFileSelect"} type="file" accept="image/*,.png" />

                    <Button
                        onClick={() => document.getElementById("pressUploadBanner").click()}
                        className='press-upload-pic-btn'>Upload a Picture</Button>
                </div>

                <hr className="press-hr" />

                <div className='getRewards-btn-parent'>
                    <Button
                        type='submit'
                        style={{ margin: '20px', color: "white" }}
                        variant='contained' className="hightlight-submit-button">Submit</Button>
                </div>

            </form>
        </Container>
    )
}

export default Press