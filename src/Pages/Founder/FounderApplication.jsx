import { Card, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Tooltip, tooltipClasses, Typography } from '@mui/material'
import React, { useState } from 'react'
import './../../css/Founder/FounderApplication.css'
import yellowArrow from '../../images/assets/yellowArrow.png'
import { Box, textAlign } from '@mui/system'
import { styled } from '@material-ui/styles'
import { useFormik } from 'formik'
import FounderApplicationValSchema from '../../Validations/FounderApplicationValSchema'

const FounderApplication = () => {
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

    const [preview, setPreview] = useState(null);

    function handleFileSelect(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.addEventListener("load", function () {
            setPreview(reader.result);
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    }


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            company_name: '',
            company_email: "",
            founder_linkedIn_url: "",
            registered_company_name: "",
            company_linkedIn_page: "",
            website_url: "",
            prev_fundraising_rounds: "",
            product_description: "",
            traction_description: "",
            revenue_description: "",
            community_raise_reason: "",
            right_invest_thinking: "",
            existing_commitments: "",
        },

        validationSchema: FounderApplicationValSchema,

        onSubmit: (values) => {
            console.log(values)
        }
    });


    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <div className='founder-application-parent'>
                    <Typography className='raise-with-mint-page-title'>
                        Raise with Mynt
                    </Typography>
                    <Typography className='raise-mint-title-desc'>
                        Share some details about your company. Our team shall contact you shortly for the due diligence process.
                    </Typography>
                    <div className='raise-mint-appln-parent'>
                        <Typography className='appln-heading'>Application</Typography>
                        <div className='logo-selectfile-parent'>
                            <div style={{ position: 'relative', width: '80px', height: '80px' }} className='appln-logo-parent'>
                                {
                                    preview
                                        ? <img style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }} src={preview} alt="Preview" />
                                        : "Logo"
                                }
                            </div>
                            <div className='select-file-btn-parent'>
                                <Typography style={{ paddingTop: 4, marginRight: 10 }}>Upload Company Logo here or</Typography>
                                <button
                                    onClick={() => document.getElementById("uploadCompanyLogo").click()}
                                    className='select-file-btn'> Select File
                                    <img src={yellowArrow} alt="arrow-img" height={'10px'} style={{ marginLeft: '10px' }} />
                                </button>

                                <input id='uploadCompanyLogo' hidden onChange={handleFileSelect} type="file" accept="image/*,.png" />
                            </div>
                        </div>
                        <form action="">

                            <CustomWidthTooltip title="This should be the name your company uses on your website and in the market." arrow placement='right'>
                                <input
                                    id='company_name'
                                    name='company_name'
                                    value={formik.values.company_name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder='Enter Your Name*'
                                    type="text"
                                    className='inp-enter-name'
                                />
                            </CustomWidthTooltip>

                            <CustomWidthTooltip title="Enter Your Company Email ID*" arrow placement='right'>
                                <input
                                    name="company_email"
                                    value={formik.values.company_email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder='Enter Your Company Email ID*' type="email" className='inp-enter-name' />
                            </CustomWidthTooltip>

                            <CustomWidthTooltip
                                title="Founder’s LinkedIn URL*" arrow placement='right'>
                                <input
                                    name="founder_linkedIn_url"
                                    value={formik.values.founder_linkedIn_url}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder='Founder’s LinkedIn URL*'
                                    type="text"
                                    className='inp-enter-name' />
                            </CustomWidthTooltip>

                            <CustomWidthTooltip title="Registered Company Name*" arrow placement='right'>
                                <input
                                    name="registered_company_name"
                                    value={formik.values.registered_company_name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder='Registered Company Name*'
                                    type="text"
                                    className='inp-enter-name' />
                            </CustomWidthTooltip>

                            <CustomWidthTooltip title="Company’s LinkedIn Page*" arrow placement='right'>
                                <input
                                    name="company_linkedIn_page"
                                    value={formik.values.company_linkedIn_page}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder='Company’s LinkedIn Page*'
                                    type="text"
                                    className='inp-enter-name' />
                            </CustomWidthTooltip>

                            <CustomWidthTooltip title="Website URL*" arrow placement='right'>
                                <input
                                    name="website_url"
                                    value={formik.values.website_url}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder='Website URL*'
                                    type="text"
                                    className='inp-enter-name' />
                            </CustomWidthTooltip>

                            <CustomWidthTooltip title="Describe your previous fundraising rounds*" arrow placement='right'>
                                <textarea
                                    name="prev_fundraising_rounds"
                                    value={formik.values.prev_fundraising_rounds}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder='Describe your previous fundraising rounds*' className='inp-textarea-desc'
                                    id="describe"
                                    rows="7"></textarea>
                            </CustomWidthTooltip>


                            <Typography className='pick-the-services'>Pick the services you need from our vetted domain partners*</Typography>

                            <div className='grid-parent'>
                                <Grid item xs={6} md={3}>
                                    <Box
                                        sx={{
                                            p: 2,
                                            paddingTop: 5,
                                            bgcolor: 'background.default',
                                            display: 'grid',
                                            gridTemplateColumns: { md: '1fr 1fr', sm: '1fr 1fr' },
                                            gap: 2.5,
                                            width: '100%',
                                            textAlign: 'left',
                                            fontFamily: 'poppins'
                                        }}
                                    >
                                        <Card elevation={0} className='checkbox-card'>
                                            <FormControlLabel control={<Checkbox defaultChecked sx={{
                                                color: "black",
                                                '&.Mui-checked': {
                                                    color: "#098211",
                                                },
                                            }} />} label="Fund Raising" />
                                        </Card>
                                        <Card elevation={0} className='checkbox-card'>
                                            <FormControlLabel control={<Checkbox sx={{
                                                color: "black",
                                                '&.Mui-checked': {
                                                    color: "#098211",
                                                },
                                            }} />} label="Growth Hacking" />
                                        </Card>
                                        <Card elevation={0} className='checkbox-card'>
                                            <FormControlLabel control={<Checkbox sx={{
                                                color: "black",
                                                '&.Mui-checked': {
                                                    color: "#098211",
                                                },
                                            }} />} label="Tech Product Development" />
                                        </Card>
                                        <Card elevation={0} className='checkbox-card'>
                                            <FormControlLabel control={<Checkbox sx={{
                                                color: "black",
                                                '&.Mui-checked': {
                                                    color: "#098211",
                                                },
                                            }} />} label="Financial Advisory" />
                                        </Card>
                                        <Card elevation={0} className='checkbox-card'>
                                            <FormControlLabel control={<Checkbox sx={{
                                                color: "black",
                                                '&.Mui-checked': {
                                                    color: "#098211",
                                                },
                                            }} />} label="Investor Readiness" />
                                        </Card>
                                        <Card elevation={0} className='checkbox-card'>
                                            <FormControlLabel control={<Checkbox sx={{
                                                color: "black",
                                                '&.Mui-checked': {
                                                    color: "#098211",
                                                },
                                            }} />} label="Legal Advisory " />
                                        </Card>
                                    </Box>
                                </Grid>
                            </div>

                            <CustomWidthTooltip title="Describe your product*" arrow placement='right'>
                                <textarea
                                    name="product_description"
                                    value={formik.values.product_description}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder='Describe your product*'
                                    className='inp-textarea-desc'
                                    rows="7"></textarea>
                            </CustomWidthTooltip>

                            <CustomWidthTooltip title="Describe the traction*" arrow placement='right'>
                                <textarea
                                    name="traction_description"
                                    value={formik.values.traction_description}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder='Describe the traction*'
                                    className='inp-textarea-desc'
                                    id="describe" rows="7"></textarea>
                            </CustomWidthTooltip>

                            <CustomWidthTooltip title="Describe the revenue you are making*" arrow placement='right'>
                                <input
                                    name="revenue_description"
                                    value={formik.values.revenue_description}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder='Describe the revenue you are making*'
                                    type="text"
                                    className='inp-enter-name' />
                            </CustomWidthTooltip>

                            <CustomWidthTooltip title="Why do you want to raise a Community round?*" arrow placement='right'>
                                <textarea
                                    name="community_raise_reason"
                                    value={formik.values.community_raise_reason}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder='Why do you want to raise a Community round?*' className='inp-textarea-desc'
                                    id="describe"
                                    rows="7"></textarea>
                            </CustomWidthTooltip>

                            <CustomWidthTooltip title="What makes you think MyntInvest is the right fit for you?*" arrow placement='right'>
                                <textarea
                                    name="right_invest_thinking"
                                    value={formik.values.right_invest_thinking}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder='What makes you think MyntInvest is the right fit for you?*'
                                    className='inp-textarea-desc'
                                    id="describe"
                                    rows="7"></textarea>
                            </CustomWidthTooltip>

                            <CustomWidthTooltip title="Do you have any existing commitments?*" arrow placement='right'>
                                <textarea
                                    name="existing_commitments"
                                    value={formik.values.existing_commitments}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder='Do you have any existing commitments?*' className='inp-textarea-desc'
                                    id="describe"
                                    rows="7"></textarea>
                            </CustomWidthTooltip>


                            {/* <Typography className='upload-ur-pitch'>Upload your Pitch*</Typography>

                        <div className='drag-and-drop-parent' >
                            <div style={{ textAlign: 'center' }}>
                                <Typography className='drag-and-drop-text'>Drag and Drop or click here to browse</Typography>
                                <span className='max-size-text'>Max size 10 MB</span>
                            </div>
                        </div> */}


                            <div className='founder-appln-submit-parent'>
                                <button type='submit' className='founder-appln-submit-button'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </React.Fragment >
    )
}

export default FounderApplication