import { Card, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Tooltip, tooltipClasses, Typography } from '@mui/material'
import React from 'react'
import './../../css/Founder/FounderApplication.css'
import yellowArrow from '../../images/assets/yellowArrow.png'
import { Box, textAlign } from '@mui/system'
import { styled } from '@material-ui/styles'

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

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <div className='founder-application-parent'>
                    <Typography className='raise-with-mint-page-title'>
                        Raise with mint
                    </Typography>
                    <Typography className='raise-mint-title-desc'>
                        Tell us a little about your company. This will help us understand your business better.
                    </Typography>
                    <div className='raise-mint-appln-parent'>

                        <Typography className='appln-heading'>Application</Typography>
                        <div className='logo-selectfile-parent'>
                            <div className='appln-logo-parent'>Logo</div>
                            <div className='select-file-btn-parent'>
                                <Typography style={{ paddingTop: 4, marginRight: 10 }}>Upload Company Logo here or</Typography>
                                <button className='select-file-btn'> Select File
                                    <img src={yellowArrow} alt="arrow-img" height={'10px'} style={{ marginLeft: '10px' }} />
                                </button>
                            </div>
                        </div>

                        <CustomWidthTooltip title="This should be the name your company uses on your website and in the market." arrow placement='right'>
                            <input placeholder='Enter Your Name*' type="text" className='inp-enter-name' />
                        </CustomWidthTooltip>

                        <CustomWidthTooltip title="Enter Your Company Email ID*" arrow placement='right'>
                            <input placeholder='Enter Your Company Email ID*' type="email" className='inp-enter-name' />
                        </CustomWidthTooltip>

                        <CustomWidthTooltip title="Founder’s LinkedIn URL*" arrow placement='right'>
                            <input placeholder='Founder’s LinkedIn URL*' type="text" className='inp-enter-name' />
                        </CustomWidthTooltip>

                        <CustomWidthTooltip title="2nd Founder’s LinkedIn URL" arrow placement='right'>
                            <input placeholder='2nd Founder’s LinkedIn URL' type="text" className='inp-enter-name' />
                        </CustomWidthTooltip>

                        <CustomWidthTooltip title="Registered Company Name*" arrow placement='right'>
                            <input placeholder='Registered Company Name*' type="text" className='inp-enter-name' />
                        </CustomWidthTooltip>

                        <CustomWidthTooltip title="Company’s LinkedIn Page*" arrow placement='right'>
                            <input placeholder='Company’s LinkedIn Page*' type="text" className='inp-enter-name' />
                        </CustomWidthTooltip>

                        <CustomWidthTooltip title="Website URL*" arrow placement='right'>
                            <input placeholder='Website URL*' type="text" className='inp-enter-name' />
                        </CustomWidthTooltip>

                        <CustomWidthTooltip title="Describe your previous fundraising rounds*" arrow placement='right'>
                            <textarea placeholder='Describe your previous fundraising rounds*' className='inp-textarea-desc' name="descibe" id="describe" rows="7"></textarea>
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
                                        }} />} label="Pitch Deck Creation" />
                                    </Card>
                                    <Card elevation={0} className='checkbox-card'>
                                        <FormControlLabel control={<Checkbox sx={{
                                            color: "black",
                                            '&.Mui-checked': {
                                                color: "#098211",
                                            },
                                        }} />} label="Growth Hack Marketing" />
                                    </Card>
                                    <Card elevation={0} className='checkbox-card'>
                                        <FormControlLabel control={<Checkbox sx={{
                                            color: "black",
                                            '&.Mui-checked': {
                                                color: "#098211",
                                            },
                                        }} />} label="Financial Coach" />
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
                                        }} />} label="Legal Coach" />
                                    </Card>
                                </Box>
                            </Grid>
                        </div>

                        <CustomWidthTooltip title="Describe your product*" arrow placement='right'>
                            <textarea placeholder='Describe your product*' className='inp-textarea-desc' name="descibe" id="describe" rows="7"></textarea>
                        </CustomWidthTooltip>

                        <CustomWidthTooltip title="Describe the traction*" arrow placement='right'>
                            <textarea placeholder='Describe the traction*' className='inp-textarea-desc' name="descibe" id="describe" rows="7"></textarea>
                        </CustomWidthTooltip>

                        <CustomWidthTooltip title="Describe the revenue you are making*" arrow placement='right'>
                            <input placeholder='Describe the revenue you are making*' type="text" className='inp-enter-name' />
                        </CustomWidthTooltip>

                        <CustomWidthTooltip title="This should be the name your company uses on your website and in the market." arrow placement='right'>
                            <input placeholder='How big is the team?*' type="text" className='inp-enter-name' />
                        </CustomWidthTooltip>

                        <CustomWidthTooltip title="Why do you want to raise a Community round?*" arrow placement='right'>
                            <textarea placeholder='Why do you want to raise a Community round?*' className='inp-textarea-desc' name="descibe" id="describe" rows="7"></textarea>
                        </CustomWidthTooltip>

                        <CustomWidthTooltip title="What makes you think MyntInvest is the right fit for you?*" arrow placement='right'>
                            <textarea placeholder='What makes you think MyntInvest is the right fit for you?*' className='inp-textarea-desc' name="descibe" id="describe" rows="7"></textarea>
                        </CustomWidthTooltip>

                        <CustomWidthTooltip title="Do you have any existing commitments?*" arrow placement='right'>
                            <textarea placeholder='Do you have any existing commitments?*' className='inp-textarea-desc' name="descibe" id="describe" rows="7"></textarea>
                        </CustomWidthTooltip>


                        <Typography className='upload-ur-pitch'>Upload your Pitch*</Typography>

                        <div className='drag-and-drop-parent' >
                            <div style={{ textAlign: 'center' }}>
                                <Typography className='drag-and-drop-text'>Drag and Drop or click here to browse</Typography>
                                <span className='max-size-text'>Max size 10 MB</span>
                            </div>
                        </div>
                        <div className='founder-appln-submit-parent'>
                            <button className='founder-appln-submit-button'>Submit</button>
                        </div>
                    </div>
                </div>
            </Container>
        </React.Fragment >
    )
}

export default FounderApplication