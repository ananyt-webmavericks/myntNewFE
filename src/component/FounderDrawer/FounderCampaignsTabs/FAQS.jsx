import React from 'react'
import { styled } from '@material-ui/styles';
import { Box, Button, Container, Tooltip, tooltipClasses, Typography } from '@mui/material'
import '../../../css/FounderDrawer/Dashboard/FAQs.css'
import { useState } from 'react';

const FAQS = () => {

    const [q1Count, setQ1Count] = useState(0)
    const [q2Count, setQ2Count] = useState(0)

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

    return (
        <Container maxWidth="lg">
            <Box sx={{ marginTop: 4, marginLeft: 2 }}>
                <h3 className='faqs-title'>FAQs (Frequently Asked Questions)</h3>

                <Typography>Investors are curious. Answer the basics about your startup here. </Typography>


                <Typography className='upload-ur-pitch' style={{ marginTop: '1.4rem', marginBottom: "-0.3rem" }}>Question 01</Typography>

                <CustomWidthTooltip title="Type your question here…" arrow placement='right'>
                    <input placeholder='Type your question here…' type="text" className='inp-enter-name' />
                </CustomWidthTooltip>

                <CustomWidthTooltip title="Describe your previous fundraising rounds*" arrow placement='right'>
                    <textarea
                        value={q1Count}
                        onChange={handleCount}
                        style={{ marginBottom: 0 }} placeholder='Describe your previous fundraising rounds*' className='inp-textarea-desc' name="descibe" id="describe" rows="7"></textarea>
                </CustomWidthTooltip>
                <div className='zero-of-threehundred'>{q1Count?.length}/300</div>

                <hr style={{ color: '#F4F4F4', maxWidth: "800px", width: '100%', marginTop: '2rem' }} />


                <Typography style={{ marginTop: '1.4rem', marginBottom: "-0.3rem" }} className='upload-ur-pitch'>Question 02</Typography>

                <CustomWidthTooltip title="Type your question here…" arrow placement='right'>
                    <input placeholder='Type your question here…' type="text" className='inp-enter-name' />
                </CustomWidthTooltip>

                <CustomWidthTooltip title="Describe your previous fundraising rounds*" arrow placement='right'>
                    <textarea style={{ marginBottom: 0 }} placeholder='Describe your previous fundraising rounds*' className='inp-textarea-desc' name="descibe" id="describe" rows="7"></textarea>
                </CustomWidthTooltip>
                <div className='zero-of-threehundred'>{q2Count}/300</div>

                <hr style={{ color: '#F4F4F4', maxWidth: "800px", width: '100%', marginTop: '2rem' }} />

                <div className="faqs-button-parent">
                    <Button
                        style={{ margin: '20px', color: 'black' }}
                        variant='contained' className="comp-prof-button1">Save</Button>
                    <Button
                        style={{ margin: '20px' }}
                        variant="contained" className="comp-prof-button2">Submit</Button>
                </div>
            </Box >
        </Container>
    )
}

export default FAQS