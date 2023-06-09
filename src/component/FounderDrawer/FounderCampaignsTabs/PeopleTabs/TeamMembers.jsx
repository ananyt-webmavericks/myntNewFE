import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import "../../../../css/FounderDrawer/Dashboard/PeopleTabs.css";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import PeopleTabValSchema from "../../../../Validations/PeopleTabValSchema";
import { useState } from "react";
import CompanyServices from "../../../../service/Company";
import { toast } from "react-hot-toast";
import { authAxios } from "../../../../service/Auth-header";
import { Base_Url } from "../../../../Utils/Configurable";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
const TeamMembers = ({
  getPeopleData,
  tabChangeFn,
  open,
  teamData,
  isTeamEdit,
  handleClose,
}) => {
  const navigate = useNavigate();

  const { userData } = useSelector((state) => state.loginData);
  const [preview, setPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaveLoading, setIsSaveLoading] = useState(false);
  const [isUpdateLoading, setIsUpdateLoading] = useState(false);
  const [isSaveClicked, setSavedClicked] = useState(false);
  const [isNextClicked, setNextClicked] = useState(false);

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      function () {
        setPreview(reader.result);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const { data } = await authAxios.post(
        `${Base_Url}/api/users/upload-files`,
        formData
      );
      console.log(data);
      formik.setFieldValue("profile_image", data.message);
      return data;
    } catch (error) {
      console.log("Data not found !!");
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: isTeamEdit && teamData ? teamData.name : "",
      position: isTeamEdit && teamData ? teamData.position : "",
      facebook_link: isTeamEdit && teamData ? teamData.facebook_link : "",
      instagram_link: isTeamEdit && teamData ? teamData.instagram_link : "",
      linked_in_link: isTeamEdit && teamData ? teamData.linked_in_link : "",
      description: isTeamEdit && teamData ? teamData.description : "",
      type: "TEAM",
      profile_image: isTeamEdit && teamData ? teamData.profile_image : "",
      company_id: localStorage.getItem("company_id"),
    },

    validationSchema: PeopleTabValSchema,

    onSubmit: (values) => {
      if(isTeamEdit){
        setIsUpdateLoading(true);
      }
      if (isNextClicked) {
        setIsLoading(true);
      }
      if (isSaveClicked) {
        setIsSaveLoading(true);
      }
      if (isTeamEdit) {
        CompanyServices.updatePeople({
          ...values,
          people_id: teamData.id,
        }).then((res) => {
          if (res.status === 200 || 201) {
            getPeopleData();
            setIsUpdateLoading(false);
            handleClose();
            toast.success("Team member updated to company successfull!", {
              position: "top-right",
              style: {
                borderRadius: "3px",
                background: "green",
                color: "#fff",
              },
            });
            // window.location.reload()
          } else {
            setIsUpdateLoading(false);
            console.log("something went wrong");
          }
        });
      } else {
        CompanyServices.addPeopleToCompany(values).then((res) => {
          if (res.status === 200 || 201) {
            setIsLoading(false);
            setIsSaveLoading(false)

            toast.success("Team member added to company successfull!", {
              position: "top-right",
              style: {
                borderRadius: "3px",
                background: "green",
                color: "#fff",
              },
            });
            getPeopleData();
            formik.handleReset();
            setPreview(null);
            setTimeout(() => {
              if (isNextClicked) {
                tabChangeFn(0, 3);
              }
            }, 1000);
            //   if (isSaveClicked) {
            //     navigate("/dashboard-founder/e-signin");
            //   } else {
            //     tabChangeFn(0, 3);
            //   }
            // }, 1000);
          }
        });
      }
    },
  });
  useEffect(() => {
    if (teamData?.profile_image) {
      setPreview(teamData?.profile_image);
    }
  }, [teamData]);

  return (
    <>
      <Box
        sx={
          isTeamEdit
            ? { marginTop: "0px", width: "100%", marginBottom: "0px" }
            : { marginTop: "2rem", marginRight: "30px", marginBottom: "3rem" }
        }
        container
        spacing={2}
      >
        <form onSubmit={formik.handleSubmit}>
          <div>
            <Box className="formgroup">
              <div style={{ width: "100%", height:'80px' }}>
                <input
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  className="teamminput"
                  placeholder=" Enter your Team member name"
                />
                {formik.touched.name && (
                  <div className="raise-err-text">{formik.errors.name}</div>
                )}
              </div>
              <div style={{ width: "100%", height:'80px' }}>
                <input
                  name="position"
                  value={formik.values.position}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  className="teamminput"
                  placeholder=" Position in the Company*"
                />
                {formik.touched.position && (
                  <div className="raise-err-text">{formik.errors.position}</div>
                )}
              </div>
              {/* <select name="" id="" className="teamminput formgroup">
                            <option value="Position in the Company*">Position in the Company*</option>
                            <option value="">Slect The Company</option>
                            <option value="">Slect The Company</option>
                            <option value="">Slect The Company</option>
                        </select> */}
            </Box>
            <Box className="formgroup">
              <div style={{ width: "100%", height:'80px' }}>
                <input
                  name="facebook_link"
                  value={formik.values.facebook_link}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  className="teamminput"
                  placeholder=" Facebook Link"
                />
                {formik.touched.facebook_link && (
                  <div className="raise-err-text">
                    {formik.errors.facebook_link}
                  </div>
                )}
              </div>
              <div style={{ width: "100%", height:'80px' }}>
                <input
                  name="instagram_link"
                  value={formik.values.instagram_link}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  className="teamminput"
                  placeholder=" Instagram Link"
                />
                {formik.touched.instagram_link && (
                  <div className="raise-err-text">
                    {formik.errors.instagram_link}
                  </div>
                )}
              </div>
            </Box>
            <Box className="formgroup">
              <div style={{ width: "100%", height:'80px' }}>
                <input
                  name="linked_in_link"
                  value={formik.values.linked_in_link}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  className="teamminput"
                  placeholder=" Linked In Link"
                />
                {formik.touched.linked_in_link && (
                  <div className="raise-err-text">
                    {formik.errors.linked_in_link}
                  </div>
                )}
              </div>
            </Box>
            <Box className="formgroupTextArea" style={{ marginTop: "15px" }}>
              <div style={{height:'190px'}}>
                <textarea
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="teammtextarea"
                  placeholder=" Type something about your team member…"
                ></textarea>
                {formik.touched.description && (
                  <div
                    // style={{ paddingTop: "10px" }}
                    className="raise-err-text"
                  >
                    {formik.errors.description}
                  </div>
                )}
              </div>
            </Box>
          </div>
          <div
            style={{ borderBottom: "1px solid #F4F4F4" }}
            className="fileupload"
          >
            <span>Profile Picture*</span>
            <div className="uplodPhoto" style={{ position: "relative" }}>
              {preview ? (
                <img
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                  src={preview}
                  alt="Preview"
                />
              ) : (
                "Photo"
              )}
            </div>
            <button
              type="button"
              onClick={() =>
                document.getElementById("teamMemberProfile").click()
              }
              className="UploadPicture"
            >
              Upload a Picture
            </button>
            <input
              id="teamMemberProfile"
              hidden
              onChange={handleFileSelect}
              type="file"
              accept="image/*,.png"
            />
          </div>
          {formik.touched.profile_image && (
            <div className="raise-err-text">{formik.errors.profile_image}</div>
          )}
          {/* <div className='AddmemberBtnParent'>
                        <button type='submit' className="AddmemberBtn">Add New Members</button>
                    </div> */}
          {!isTeamEdit ? (
            <Box className="BtnSaveAndNext">
              <button
                disabled={isSaveLoading === true ? true : false}
                onClick={() => {
                  formik.submitForm();
                  setSavedClicked(true);
                }}
                // type="submit"
                className="SaveBtn"
              >
                {isSaveLoading && isSaveClicked ? (
                  <CircularProgress
                    style={{
                      color: "white",
                      fontSize: 10,
                      width: 20,
                      height: 20,
                    }}
                  />
                ) : (
                  "Save"
                )}
              </button>
              <button
                disabled={isLoading === true ? true : false}
                // type="submit"
                onClick={() => {
                  formik.submitForm();
                  setNextClicked(true);
                }}
                className="NextBtn"
              >
                {isLoading && isNextClicked ? (
                  <CircularProgress
                    style={{
                      color: "white",
                      fontSize: 10,
                      width: 20,
                      height: 20,
                    }}
                  />
                ) : (
                  "Next"
                )}
              </button>
            </Box>
          ) : (
            <Box className="BtnSaveAndNext">
              <button
                disabled={isUpdateLoading === true ? true : false}
                // onClick={() => setSavedClicked(true)}
                type="submit"
                className="SaveBtn"
              >
                {isUpdateLoading ? (
                  <CircularProgress
                    style={{
                      color: "white",
                      fontSize: 10,
                      width: 20,
                      height: 20,
                    }}
                  />
                ) : (
                  "update"
                )}
              </button>
            </Box>
          )}

          {/* <div className="hrline"></div> */}
        </form>
      </Box>
    </>
  );
};

export default TeamMembers;
