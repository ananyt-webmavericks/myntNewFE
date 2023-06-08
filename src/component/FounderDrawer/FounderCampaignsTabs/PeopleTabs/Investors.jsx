import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import "../../../../css/FounderDrawer/Dashboard/PeopleTabs.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import PeopleTabValSchema from "../../../../Validations/PeopleTabValSchema";
import CompanyServices from "../../../../service/Company";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import { authAxios } from "../../../../service/Auth-header";
import { Base_Url } from "../../../../Utils/Configurable";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Investors = ({
  getPeopleData,
  tabChangeFn,
  investorData,
  isInvestorEdit,
  handleClose,
}) => {
  const { userData } = useSelector((state) => state.loginData);
  const navigate = useNavigate();

  const [preview, setPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
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
      name: isInvestorEdit && investorData ? investorData.name : "",
      position: isInvestorEdit && investorData ? investorData.position : "",
      facebook_link:
        isInvestorEdit && investorData ? investorData.facebook_link : "",
      instagram_link:
        isInvestorEdit && investorData ? investorData.instagram_link : "",
      linked_in_link:
        isInvestorEdit && investorData ? investorData.linked_in_link : "",
      description:
        isInvestorEdit && investorData ? investorData.description : "",
      type: "INVESTOR",
      profile_image:
        isInvestorEdit && investorData ? investorData.profile_image : "",
      company_id: localStorage.getItem("company_id"),
    },

    validationSchema: PeopleTabValSchema,

    onSubmit: (values) => {
      setIsLoading(true);

      if (isInvestorEdit) {
        CompanyServices.updatePeople({
          ...values,
          people_id: investorData.id,
        }).then((res) => {
          if (res.status === 200 || 201) {
            getPeopleData();
            setIsLoading(false);
            handleClose();
            toast.success("Investor updated to company successfull!", {
              position: "top-right",
              style: {
                borderRadius: "3px",
                background: "green",
                color: "#fff",
              },
            });
            // window.location.reload()
          } else {
            console.log("something went wrong");
          }
        });
      } else {
        CompanyServices.addPeopleToCompany(values).then((res) => {
          if (res.status === 200 || 201) {
            setIsLoading(false);

            toast.success("Investor added to company successfull!", {
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
            // setTimeout(() => {
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
    if (investorData?.profile_image) {
      setPreview(investorData?.profile_image);
    }
  }, [investorData]);

  return (
    <>
      <Box
        sx={
          isInvestorEdit
            ? { marginTop: "0px", width: "100%", marginBottom: "0px" }
            : { marginTop: "2rem", marginRight:"30px", marginBottom: "10rem" }
        }
        container
        spacing={2}
      >
        <form onSubmit={formik.handleSubmit}>
          <div>
            <Box className="formgroup">
              <div style={{ width: "100%" }}>
                <input
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  className="teamminput"
                  placeholder=" Enter your Investor name"
                />
                {formik.touched.name && (
                  <div className="raise-err-text">{formik.errors.name}</div>
                )}
              </div>
              <div style={{ width: "100%" }}>
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
              <div style={{ width: "100%" }}>
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
              <div style={{ width: "100%" }}>
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
              <div style={{ width: "100%" }}>
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
              <div>
                <textarea
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="teammtextarea"
                  placeholder=" Type something about your Investor…"
                ></textarea>
                {formik.touched.description && (
                  <div
                    style={{ paddingTop: "10px" }}
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
          {!isInvestorEdit ? (
            <Box className="BtnSaveAndNext">
              <button
                disabled={isLoading === true ? true : false}
                onClick={() => setSavedClicked(true)}
                type="submit"
                className="SaveBtn"
              >
                {isLoading && isSaveClicked ? (
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
                type="submit"
                onClick={() => setNextClicked(true)}
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
                disabled={isLoading === true ? true : false}
                // onClick={() => setSavedClicked(true)}
                type="submit"
                className="SaveBtn"
              >
                {isLoading ? (
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

export default Investors;
