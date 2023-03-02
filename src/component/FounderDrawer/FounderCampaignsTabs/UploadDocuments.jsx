import { Button, Container, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import React, { useState } from 'react'
import '../../../css/FounderDrawer/Dashboard/UploadDocs.css'
import pptxIcon from './../../../images/founder/pptxIcon.png'
import pdfIcon from './../../../images/founder/pdfIcon.png'

const UploadDocuments = () => {
    const [selectedFile, setSelectedFile] = useState([]);

    const handleFileInput = (event) => {
        setSelectedFile([...selectedFile, event.target.files[0]]);
        const fileName = event.target.files[0]
        const extension = fileName?.name?.split('.').pop();
        console.log(extension)
    };

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('pdf', selectedFile);
    };

    return (
        <Container maxWidth="lg">
            <Typography className='upload-docs-title'>Upload Documents</Typography>

            <Typography className='upload-docs-desc'>Upload all due diligence documents for investors perusal</Typography>

            <div className='upload-fun-parent'>
                <div className='upload-doc-parent'>
                    <Typography className='Choose-file-text'>Choose file - Max file size 10 MB</Typography>
                    <Button
                        onClick={() => document.getElementById("upload-pic-inp").click()}
                        style={{ width: '175px !important' }} className='upload-docs-btn'>Upload a Picture</Button>
                    <input
                        onChange={handleFileInput}
                        hidden id='upload-pic-inp' type="file" accept=".pdf, .pptx" />
                </div>
                <div className='doc-list-parent'>
                    {
                        selectedFile?.slice(0)?.reverse().map((item, index) => <div
                            key={index}
                            className='icon-name-upload-doc'>
                            <img src={
                                item?.name?.split('.').pop() === 'pptx'
                                    ? pptxIcon
                                    : item?.name?.split('.').pop() === 'pdf'
                                        ? pdfIcon
                                        : null
                            }
                                alt="doc-icon" width={62} />
                            <Typography className='doc-name'>{
                                item?.name.length < 10
                                    ? item?.name
                                    : item?.name?.slice(0, 5) + "..." + item?.name?.split('.').pop()
                            }</Typography>
                        </div>)
                    }

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
        </Container >
    )
}

export default UploadDocuments