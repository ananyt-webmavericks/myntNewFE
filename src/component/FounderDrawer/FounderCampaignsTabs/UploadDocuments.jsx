import { Button, Container, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import React from 'react'
import '../../../css/FounderDrawer/Dashboard/UploadDocs.css'
import pptxIcon from './../../../images/founder/pptxIcon.png'
import pdfIcon from './../../../images/founder/pdfIcon.png'

const UploadDocuments = () => {
    return (
        <Container maxWidth="lg">
            <Typography className='upload-docs-title'>Upload Documents</Typography>

            <Typography className='upload-docs-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quam nunc egestas nunc at nibh. Odio erat turpis sit at bibendum nunc adipiscing sed. Tincidunt enim, amet vitae nibh cursus imperdiet erat.</Typography>

            <div className='upload-fun-parent'>
                <div className='upload-doc-parent'>
                    <Typography className='Choose-file-text'>Choose file - Max file size 10 MB</Typography>
                    <Button style={{ width: '175px !important' }} className='upload-docs-btn'>Upload a Picture</Button>
                </div>
                <div className='doc-list-parent'>
                    <div className='icon-name-upload-doc'>
                        <img src={pptxIcon} alt="doc-icon" width={62} />
                        <Typography className='doc-name'>MOA.PPTX</Typography>
                    </div>
                    <div style={{ height: '100px', width: '100px' }}>
                        <img src={pdfIcon} alt="doc-icon" width={62} />
                        <Typography className='doc-name'>AOA.PDF</Typography>
                    </div>
                    <div style={{ height: '100px', width: '100px' }}>
                        <img src={pdfIcon} alt="doc-icon" width={62} />
                        <Typography className='doc-name'>COI.PDF</Typography>
                    </div>
                </div>
            </div>


            <div className='getRewards-btn-parent'>
                <Button
                    style={{ margin: '20px', color: "white" }}
                    variant='contained' className="hightlight-submit-button">Submit</Button>
            </div>
        </Container>
    )
}

export default UploadDocuments