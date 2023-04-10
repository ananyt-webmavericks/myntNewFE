import React from 'react'
import { Box } from '@material-ui/core'
import "../../../../css/FounderDrawer/Dashboard/PeopleTabs.css"
import { useSelector } from 'react-redux'
import { useState } from 'react'
import PeopleTabValSchema from '../../../../Validations/PeopleTabValSchema'
import CompanyServices from '../../../../service/Company'
import { useFormik } from 'formik'
import { toast } from "react-hot-toast";
import { authAxios } from '../../../../service/Auth-header'
import { Base_Url } from '../../../../Utils/Configurable'
const Investors = ({ getPeopleData, tabChangeFn }) => {
    const { userData } = useSelector(state => state.loginData)

    const [preview, setPreview] = useState(null);

    const handleFileSelect = async (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.addEventListener("load", function () {
            setPreview(reader.result);
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const { data } = await authAxios.post(`${Base_Url}/api/users/upload-files`, formData);
            console.log(data)
            formik.setFieldValue("profile_image", data.message)
            return data
        }
        catch (error) {
            console.log("Data not found !!")
        }
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: '',
            position: '',
            facebook_link: '',
            instagram_link: '',
            linked_in_link: '',
            description: '',
            type: 'INVESTOR',
            profile_image: '',
            company_id: localStorage.getItem("company_id")
        },

        validationSchema: PeopleTabValSchema,

        onSubmit: (values) => {
            console.log(values)
            CompanyServices.addPeopleToCompany(values).then(res => {
                if (res.status === 200 || 201) {
                    toast.success("Investor added to company successfull!")
                    getPeopleData()
                    formik.handleReset()
                    setPreview(null)
                }
            })
        }
    });

    return (
        <>
            <Box sx={{ marginTop: "2rem", width: "90%", marginBottom: "10rem" }} container spacing={2}>
                <form onSubmit={formik.handleSubmit}>
                    <div>

                        <Box className='formgroup'>
                            <div style={{ width: '100%' }}>
                                <input
                                    name='name'
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    type="text" className="teamminput" placeholder=" Enter your Team member name" />
                                {formik.touched.name && <div className="raise-err-text" >{formik.errors.name}</div>}
                            </div>
                            <div style={{ width: "100%" }}>
                                <input
                                    name='position'
                                    value={formik.values.position}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    type="text" className="teamminput" placeholder=" Position in the Company*" />
                                {formik.touched.position && <div className="raise-err-text" >{formik.errors.position}</div>}
                            </div>
                            {/* <select name="" id="" className="teamminput formgroup">
                            <option value="Position in the Company*">Position in the Company*</option>
                            <option value="">Slect The Company</option>
                            <option value="">Slect The Company</option>
                            <option value="">Slect The Company</option>
                        </select> */}
                        </Box>
                        <Box className='formgroup'>
                            <div style={{ width: "100%" }}>
                                <input
                                    name='facebook_link'
                                    value={formik.values.facebook_link}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    type="text" className="teamminput" placeholder=" Facebook Link" />
                                {formik.touched.facebook_link && <div className="raise-err-text" >{formik.errors.facebook_link}</div>}
                            </div>
                            <div style={{ width: "100%" }}>
                                <input
                                    name='instagram_link'
                                    value={formik.values.instagram_link}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    type="text" className="teamminput" placeholder=" Instagram Link" />
                                {formik.touched.instagram_link && <div className="raise-err-text" >{formik.errors.instagram_link}</div>}
                            </div>
                        </Box>
                        <Box className='formgroup'>
                            <div style={{ width: "100%" }}>
                                <input
                                    name='linked_in_link'
                                    value={formik.values.linked_in_link}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    type="text" className="teamminput" placeholder=" Linked In Link" />
                                {formik.touched.linked_in_link && <div className="raise-err-text" >{formik.errors.linked_in_link}</div>}
                            </div>
                        </Box>
                        <Box className='formgroupTextArea' style={{ marginTop: "15px" }}>
                            <div>
                                <textarea
                                    name='description'
                                    value={formik.values.description}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="teammtextarea" placeholder=" Type something about your team member…"></textarea>
                                {formik.touched.description && <div style={{ paddingTop: "10px" }} className="raise-err-text" >{formik.errors.description}</div>}
                            </div>
                        </Box>
                    </div>
                    <div className='fileupload'>
                        <span>Profile Picture*</span>
                        <div className="uplodPhoto" style={{ position: 'relative' }}>
                            {
                                preview
                                    ?
                                    <img style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '4px'
                                    }} src={preview} alt="Preview" />
                                    : "Photo"
                            }
                        </div>
                        <button
                            type='button'
                            onClick={() => document.getElementById("teamMemberProfile").click()}
                            className="UploadPicture">Upload a Picture</button>
                        <input id='teamMemberProfile' hidden onChange={handleFileSelect} type="file" accept="image/*,.png" />
                    </div>
                    {formik.touched.profile_image && <div className="raise-err-text" >{formik.errors.profile_image}</div>}
                    {/* <div className='AddmemberBtnParent'>
                        <button type='submit' className="AddmemberBtn">Add New Members</button>
                    </div> */}
                    <Box className="BtnSaveAndNext">
                        <button type='submit' className="SaveBtn">Save</button>
                        <button onClick={e => tabChangeFn(e, 3)} className="NextBtn">Next</button>
                    </Box>
                    <div className="hrline"></div>
                </form>
            </Box>

        </>
    )
}

export default Investors