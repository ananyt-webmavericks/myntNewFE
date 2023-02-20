import React from 'react'
import { Box } from '@material-ui/core'
import "../../../../css/FounderDrawer/Dashboard/PeopleTabs.css"
const Advisors = () => {
    return (
        <>
            <Box sx={{ marginTop: "2rem", width: "90%", marginBottom: "50rem" }} container spacing={2}>
                <div>

                    <Box className='formgroup'>
                        <input type="text" className="teamminput" placeholder=" Enter your Team member name" />
                        <select name="" id="" className="teamminput formgroup">
                            <option value="Position in the Company*">Position in the Company*</option>
                            <option value="">Slect The Company</option>

                        </select>
                    </Box>
                    <Box className='formgroup'>
                        <input type="text" className="teamminput" placeholder=" Facebook Link" />
                        <input type="text" className="teamminput" placeholder=" Instagram Link" />
                    </Box>
                    <Box className='formgroup'>
                        <input type="text" className="teamminput" placeholder=" Linked In Link" />
                    </Box>
                    <Box className='formgroupTextArea'>
                        <textarea className="teammtextarea" placeholder=" Type something about your team member…"></textarea>
                    </Box>
                </div>
                <div className='fileupload'>
                    <span>Profile Picture*</span>
                    <div className="uplodPhoto">
                        <span className="PhotoText">Photo</span>
                    </div>
                    <button className="UploadPicture">Upload a Picture</button>
                </div>
                <div className='AddmemberBtnParent'>
                    <button className="AddmemberBtn">Add New Members</button>
                    <div className="hrline"></div>
                </div>
                <Box className="BtnSaveAndNext">
                    <button className="SaveBtn">Save</button>
                    <button className="NextBtn">Next</button>
                </Box>
            </Box>

        </>
    )
}

export default Advisors