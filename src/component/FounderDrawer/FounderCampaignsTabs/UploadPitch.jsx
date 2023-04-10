import { makeStyles, styled } from '@material-ui/core';
import { Box, Tooltip, tooltipClasses, Typography } from '@mui/material'
import '../../../css/FounderDrawer/Dashboard/UploadPitch.css'
import React, { useState } from 'react'
import { useFormik } from 'formik';
import CompanyServices from '../../../service/Company';
import { toast } from "react-hot-toast";
import PitchValSchema from '../../../Validations/PitchValSchema';
import { useEffect } from 'react';
import { authAxios } from '../../../service/Auth-header'
import { Base_Url } from '../../../Utils/Configurable';
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
const UploadPitch = ({ tabChangeFn }) => {
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
    const [pdfName, setPdfName] = useState(null)

    const handlePitchFileSelect = async (event) => {
        const file = event.target.files[0];
        setPdfName(event.target.files[0].name)
        const reader = new FileReader();

        reader.addEventListener("load", function () {
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const { data } = await authAxios.post(`${Base_Url}/api/users/upload-files`, formData);
            console.log(data)
            formik.setFieldValue("pitch", data.message)
            return data
        }
        catch (error) {
            console.log("Data not found !!")
        }
    }

    const x = sessionStorage.getItem("is_campaign_added")
    const classes = useStyles()
    const [pitchData, setPitchData] = useState({})
    const [isCampaignAdded, setIsCampaignAdded] = useState(false)
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
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
                        setTimeout(() => {
                            tabChangeFn(0, 2)
                        }, 2000);
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
                        setTimeout(() => {
                            tabChangeFn(0, 2)
                        }, 1000);
                    } else {
                        toast.error("Something went wrong, please try again later")
                    }
                })
        }
    });
    useEffect(() => {
        window.scrollTo(0, 0)
        setPitchData(JSON.parse(sessionStorage.getItem("campaign_data")))
        setIsCampaignAdded(JSON.parse(sessionStorage.getItem("is_campaign_added")))
    }, [x])

    return (
        <Box sx={{ marginTop: 4 }} className="upload-pitch-parent">
            <h3>Upload Pitch Deck</h3>
            <form onSubmit={formik.handleSubmit}>

                <Typography>
                    <p style={{ marginTop: "10px", }}>Upload a pdf of your pitch deck - this will be displayed to your potential investors as your pitch for your campaign</p>
                </Typography>

                <div className='drag-and-drop-parent' style={{ marginTop: '4.8rem', position: 'relative' }} onClick={e => {
                    document.getElementById('uploadPitchInput').click()
                }}>
                    {
                        pdfName?.length > 0
                            ? <Typography className='drag-and-drop-text'>{pdfName}</Typography>
                            : <>
                                <Typography className='drag-and-drop-text'>Drag and Drop or click here to browse</Typography>
                                <span className='max-size-text'>Max size 10 MB</span>
                            </>
                    }
                </div>
                <input id='uploadPitchInput' hidden onChange={handlePitchFileSelect} type="file" accept=".pdf,.PDF" />
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