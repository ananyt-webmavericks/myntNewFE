import { makeStyles, styled } from '@material-ui/core';
import { Box, Tooltip, tooltipClasses, Typography } from '@mui/material'
import '../../../css/FounderDrawer/Dashboard/UploadPitch.css'
import React, { useState } from 'react'
import { useFormik } from 'formik';
import CompanyServices from '../../../service/Company';
import { toast } from 'react-toastify';
import PitchValSchema from '../../../Validations/PitchValSchema';
import { useEffect } from 'react';
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

    const x = sessionStorage.getItem("is_campaign_added")
    const classes = useStyles()
    const [pitchData, setPitchData] = useState({})
    const [isCampaignAdded, setIsCampaignAdded] = useState(false)
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            youtube_link: pitchData?.youtube_link ? pitchData?.youtube_link : '',
            ama_date: pitchData?.ama_date ? pitchData?.ama_date : '',
            ama_meet_link: pitchData?.ama_meet_link ? pitchData?.ama_meet_link : '',
            ama_youtube_video: pitchData?.ama_youtube_video ? pitchData?.ama_youtube_video : '',
            pitch: pitchData?.pitch ? pitchData?.pitch : 'https.jasdjlfjlksadjflkasdf',
        },

        validationSchema: PitchValSchema,

        onSubmit: (values) => {
            console.log(JSON.parse(sessionStorage.getItem("is_campaign_added")))
            !JSON.parse(sessionStorage.getItem("is_campaign_added"))
                ? CompanyServices.createCampaign({ ...values, company_id: localStorage.getItem("company_id") }).then(res => {
                    console.log(res)
                    if (res.status === 200 || res.status === 201) {
                        sessionStorage.setItem("is_campaign_added", true)
                        sessionStorage.setItem("campaign_id", res.data.id)
                        sessionStorage.setItem("campaign_data", JSON.stringify(res.data))
                        toast.success("Compaign added successfully!")
                    } else {
                        toast.error("Something went wrong, please try again later")
                    }
                })
                : CompanyServices.updateCampaign({ ...values, company_id: localStorage.getItem("company_id"), campaign_id: sessionStorage.getItem("campaign_id") }).then(res => {
                    console.log(res)
                    console.log(res.status === 200 || res.status === 201)
                    if (res.status === 200 || res.status === 201) {
                        sessionStorage.setItem("campaign_data", JSON.stringify(res.data.data)) //need to remove this line
                        toast.success("Compaign updated successfully!")
                    } else {
                        toast.error("Something went wrong, please try again later")
                    }
                })
        }
    });
    useEffect(() => {
        setPitchData(JSON.parse(sessionStorage.getItem("campaign_data")))
        setIsCampaignAdded(sessionStorage.getItem("is_campaign_added"))
    }, [x])

    return (
        <Box sx={{ marginTop: 4 }} className="upload-pitch-parent">
            <h3>Upload Pitch Deck</h3>
            <form onSubmit={formik.handleSubmit}>
                {/* <CustomWidthTooltip title="Type your question here…" arrow placement='right'> */}
                <input
                    name='youtube_link'
                    value={formik.values.youtube_link}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='Enter youtube link'
                    type="text"
                    className='inp-enter-name' />
                {/* </CustomWidthTooltip> */}
                {formik.touched.youtube_link && <div className="raise-err-text" style={{ marginTop: "2px" }}>{formik.errors.youtube_link}</div>}
                {/* <CustomWidthTooltip title="Type your question here…" arrow placement='right'> */}
                <input
                    name='ama_date'
                    value={formik.values.ama_date}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='Enter AMA Date'
                    type="text"
                    className='inp-enter-name' />
                {/* </CustomWidthTooltip> */}
                {formik.touched.ama_date && <div className="raise-err-text" style={{ marginTop: "2px" }}>{formik.errors.ama_date}</div>}
                {/* <CustomWidthTooltip title="Type your question here…" arrow placement='right'> */}
                <input
                    name='ama_meet_link'
                    value={formik.values.ama_meet_link}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='Enter AMA meet link'
                    type="text"
                    className='inp-enter-name' />
                {/* </CustomWidthTooltip> */}
                {formik.touched.ama_meet_link && <div className="raise-err-text" style={{ marginTop: "2px" }}>{formik.errors.ama_meet_link}</div>}
                {/* <CustomWidthTooltip title="Type your question here…" arrow placement='right'> */}
                <input
                    name='ama_youtube_video'
                    value={formik.values.ama_youtube_video}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='Enter AMA youtube link'
                    type="text"
                    className='inp-enter-name' />
                {/* </CustomWidthTooltip> */}
                {formik.touched.ama_youtube_video && <div className="raise-err-text" style={{ marginTop: "2px" }}>{formik.errors.ama_youtube_video}</div>}

                <Typography>
                    <p style={{ marginTop: "10px", }}>Upload a pdf of your pitch deck - this will be displayed to your potential investors as your pitch for your campaign</p>
                </Typography>

                <div className='drag-and-drop-parent' style={{ marginTop: '4.8rem', position: 'relative' }} onClick={e => {
                    document.getElementById('uploadPitchInput').click()
                }}>
                    {
                        preview
                            ? <img style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '4px'
                            }} src={preview} alt="Preview" />
                            : <>
                                <Typography className='drag-and-drop-text'>Drag and Drop or click here to browse</Typography>
                                <span className='max-size-text'>Max size 10 MB</span>
                            </>
                    }
                </div>
                <input id='uploadPitchInput' hidden onChange={handleFileSelect} type="file" accept="image/*,.png" />
                {/* </div> */}
                {formik.touched.pitch && <div className="raise-err-text" style={{ marginTop: "2px" }}>{formik.errors.pitch}</div>}
                <div className='founder-appln-submit-parent'>
                    <button type='submit' className='founder-appln-submit-button'>
                        {
                            isCampaignAdded
                                ? "Update"
                                : "Submit"
                        }
                    </button>
                </div>
            </form>
        </Box>
    )
}

export default UploadPitch