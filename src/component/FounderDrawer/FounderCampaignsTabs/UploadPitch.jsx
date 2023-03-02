import { makeStyles } from '@material-ui/core';
import { Box, Typography } from '@mui/material'
import React from 'react'
const useStyles = makeStyles({
    dropbox: {
        marginTop: 30,
        top: "438px",
        width: "100%",
        height: "154px",
        border: " 2px dashed #707070",
        borderRadius: "5px",
        opacity: 1,
        backgroundColor: "#F4F4F4",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 4,
    },
});
const UploadPitch = () => {
    const classes = useStyles()
    return (
        <Box sx={{ marginTop: 4, marginLeft: 2 }}>
            <h3>Upload Pitch Deck</h3>
            <Typography>
                <p style={{ marginTop: "10px", }}>Upload a pdf of your pitch deck - this will be displayed to your potential investors as your pitch for your campaign</p>
            </Typography>

            <div className='drag-and-drop-parent' style={{ marginTop: '4.8rem' }} onClick={e => {
                document.getElementById('uploadPitchInput').click()
            }}>
                <div style={{ textAlign: 'center' }}>
                    <Typography className='drag-and-drop-text'>Drag and Drop or click here to browse</Typography>
                    <span className='max-size-text'>Max size 10 MB</span>
                    <input id='uploadPitchInput' type="file" hidden />
                </div>
            </div>
            <div className='founder-appln-submit-parent'>
                <button className='founder-appln-submit-button'>Submit</button>
            </div>

        </Box>
    )
}

export default UploadPitch