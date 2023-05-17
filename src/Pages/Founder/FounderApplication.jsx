import {
  Card,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Tooltip,
  tooltipClasses,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./../../css/Founder/FounderApplication.css";
import yellowArrow from "../../images/assets/yellowArrow.png";
import { Box } from "@mui/system";
import { styled } from "@material-ui/styles";
import { useFormik } from "formik";
import FounderApplicationValSchema from "../../Validations/FounderApplicationValSchema";
import { useEffect } from "react";
import { storeFounderSignUpData } from "../../Redux/actions/FounderSignUp";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserServices from "../../service/UserService";
import { toast } from "react-hot-toast";
import { authAxios } from "../../service/Auth-header";
import { Base_Url } from "../../Utils/Configurable";
import yellowDesign from "../../images/founder/ApplicationYellowLine.svg";

const InputHelperTooltip = ({ title, isVisible }) => {
  return isVisible ? (
    <div class="popup arrow-left">
      <div class="popup-wrapper">
        <p>{title}</p>
      </div>
    </div>
  ) : null;
};

const FounderApplication = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 250,
      backgroundColor: "white",
      color: "black",
      fontFamily: "poppins",
      border: "1px solid gray",
      boxShadow: "0px 0px 20px #00000017",
      padding: "10px 20px",
    },
  });

  const [preview, setPreview] = useState(null);
  const [pdfName, setPdfName] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [helperTooltip, setHelperTooltip] = useState(null);

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
      formik.setFieldValue("company_logo", data.message);
      return data;
    } catch (error) {
      console.log("Data not found !!");
    }
  };

  const handlePitchFileSelect = async (event) => {
    const file = event.target.files[0];
    setPdfName(event.target.files[0].name);
    const reader = new FileReader();

    reader.addEventListener("load", function () {}, false);

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
      formik.setFieldValue("company_pitch", data.message);
      return data;
    } catch (error) {
      console.log("Data not found !!");
    }
  };
  const credentials = {
    first_name: "",
    last_name: "",
    email: "",
    social_login: false,
    user_type: "FOUNDER",
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      company_email: "",
      company_logo: "",
      founder_linked_in_profile: "",
      company_name: "",
      company_linked_in_profile: "",
      website_url: "",
      previous_funding: "",
      product_description: "",
      traction_description: "",
      revenue: "",
      reason_for_community_round: "",
      reason_for_mynt: "",
      existing_commitments: "",
      company_pitch: "",
      // checks
      is_fund_raise: false,
      is_growth_hack: false,
      is_tech_p_dev: false,
      is_ivestor_readiness: false,
      is_finan_advisory: false,
      is_legal_advisory: false,
    },

    validationSchema: FounderApplicationValSchema,

    onSubmit: (values) => {
      delete values.is_fund_raise;
      delete values.is_growth_hack;
      delete values.is_tech_p_dev;
      delete values.is_ivestor_readiness;
      delete values.is_finan_advisory;
      delete values.is_legal_advisory;
      dispatch(storeFounderSignUpData(values));
      console.log(values);
      try {
        const fullName = values.name;
        const nameParts = fullName.split(" ");
        const first_name = nameParts[0];
        const last_name = nameParts.slice(1).join(" ");
        UserServices.CreateUser({
          ...credentials,
          first_name,
          last_name,
          email: values.company_email,
        }).then((response) => {
          console.log(response);
          if (response.status === 201) {
            // dispatch(userLoginAction(response.data))
            // localStorage.setItem('loginType', 'new')
            console.log(response.data.id);
            navigate("/otp-verification-founder", {
              state: {
                email: response.data.email,
                founderLoginData: response.data,
                isNewCreate: true,
              },
            });
          }
        });
      } catch {
        toast.error("Try after few minutes",{
          position: "top-right",
          style: {
            borderRadius: "3px",
            background: "red",
            color: "#fff",
          },
        });
      }
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleHelperTooltip = (name) => {
    if (helperTooltip === name) {
      setHelperTooltip(null);
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <img style={{ width: "28%", position: "absolute" }} src={yellowDesign} />
      <Container maxWidth="lg">
        <div className="founder-application-parent">
          <Typography className="raise-with-mint-page-title">
            Raise with Mynt
          </Typography>
          <Typography className="raise-mint-title-desc">
            Share some details about your company. Our team shall contact you
            shortly for the due diligence process.
          </Typography>
          <div className="raise-mint-appln-parent">
            <form onSubmit={formik.handleSubmit}>
              <Typography className="appln-heading">Application</Typography>
              <div className="logo-selectfile-parent">
                <div
                  style={{
                    position: "relative",
                    width: "80px",
                    height: "80px",
                  }}
                  className="appln-logo-parent"
                >
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
                    "Logo"
                  )}
                </div>
                <div className="select-file-btn-parent">
                  <Typography style={{ paddingTop: 4, marginRight: 10 }}>
                    Upload Company Logo here or
                  </Typography>
                  <button
                    onClick={() =>
                      document.getElementById("uploadCompanyLogo").click()
                    }
                    className="select-file-btn"
                  >
                    {" "}
                    Select File
                    <img
                      src={yellowArrow}
                      alt="arrow-img"
                      height={"10px"}
                      style={{ marginLeft: "10px" }}
                    />
                  </button>

                  <input
                    name="company_logo"
                    id="uploadCompanyLogo"
                    hidden
                    onChange={handleFileSelect}
                    type="file"
                    accept="image/*,.png"
                  />
                </div>
              </div>
              {formik.touched.company_logo && (
                <div className="raise-err-text">
                  {formik.errors.company_logo}
                </div>
              )}

              {/* <CustomWidthTooltip disableFocusListener title="This should be the name your company uses on your website and in the market." arrow placement='right'> */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onFocus={(e) => setHelperTooltip(e.target.name)}
                  onBlur={(event) => {
                    formik.handleBlur(event);
                    handleHelperTooltip(event.target.name);
                  }}
                  placeholder="Enter Your Name*"
                  type="text"
                  className="inp-enter-name"
                />
                <InputHelperTooltip
                  title="This should be the name your company uses on your website and in the market."
                  isVisible={helperTooltip === "name"}
                />
              </div>
              {formik.touched.name && (
                <div className="raise-err-text">{formik.errors.name}</div>
              )}

              {/* <CustomWidthTooltip
                title="Enter Your Company Email ID*"
                arrow
                placement="right"
              > */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  name="company_email"
                  value={formik.values.company_email}
                  onChange={formik.handleChange}
                  onFocus={(e) => setHelperTooltip(e.target.name)}
                  onBlur={(event) => {
                    formik.handleBlur(event);
                    handleHelperTooltip(event.target.name);
                  }}
                  placeholder="Enter Your Company Email ID*"
                  type="email"
                  className="inp-enter-name highlight"
                />
                <InputHelperTooltip
                  title="Please provide your business email"
                  isVisible={helperTooltip === "company_email"}
                />
              </div>
              {/* </CustomWidthTooltip> */}
              {formik.touched.company_email && (
                <div className="raise-err-text">
                  {formik.errors.company_email}
                </div>
              )}

              {/* <CustomWidthTooltip
                                title="Founder’s LinkedIn URL*" arrow placement='right'> */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  name="founder_linked_in_profile"
                  value={formik.values.founder_linked_in_profile}
                  onChange={formik.handleChange}
                  onFocus={(e) => setHelperTooltip(e.target.name)}
                  onBlur={(event) => {
                    formik.handleBlur(event);
                    handleHelperTooltip(event.target.name);
                  }}
                  placeholder="Founder’s LinkedIn URL*"
                  type="text"
                  className="inp-enter-name"
                />
                {/* </CustomWidthTooltip> */}
                <InputHelperTooltip
                  title="Please provide the LinkedIn profiles of the Founders."
                  isVisible={helperTooltip === "founder_linked_in_profile"}
                />
              </div>
              {formik.touched.founder_linked_in_profile && (
                <div className="raise-err-text">
                  {formik.errors.founder_linked_in_profile}
                </div>
              )}

              {/* <CustomWidthTooltip title="Registered Company Name*" arrow placement='right'> */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  name="company_name"
                  value={formik.values.company_name}
                  onChange={formik.handleChange}
                  onFocus={(e) => setHelperTooltip(e.target.name)}
                  onBlur={(event) => {
                    formik.handleBlur(event);
                    handleHelperTooltip(event.target.name);
                  }}
                  placeholder="Registered Company Name*"
                  type="text"
                  className="inp-enter-name"
                />
                <InputHelperTooltip
                  title="You should have a registered company to raise to Mynt.
                      Please provide the registered company name."
                  isVisible={helperTooltip === "company_name"}
                />

                {/* <div class="popup arrow-left">
                  <div class="popup-wrapper">
                    <p>
                      You should have a registered company to raise to Mynt.
                      Please provide the registered company name.
                    </p>
                  </div>
                </div> */}
              </div>
              {/* </CustomWidthTooltip> */}
              {formik.touched.company_name && (
                <div className="raise-err-text">
                  {formik.errors.company_name}
                </div>
              )}

              {/* <CustomWidthTooltip title="Company’s LinkedIn Page*" arrow placement='right'> */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  name="company_linked_in_profile"
                  value={formik.values.company_linked_in_profile}
                  onChange={formik.handleChange}
                  onFocus={(e) => setHelperTooltip(e.target.name)}
                  onBlur={(event) => {
                    formik.handleBlur(event);
                    handleHelperTooltip(event.target.name);
                  }}
                  placeholder="Company’s LinkedIn Page*"
                  type="text"
                  className="inp-enter-name"
                />
                <InputHelperTooltip
                  title="Please provide your LinkedIn company page."
                  isVisible={helperTooltip === "company_linked_in_profile"}
                />
              </div>
              {/* </CustomWidthTooltip> */}
              {formik.touched.company_linked_in_profile && (
                <div className="raise-err-text">
                  {formik.errors.company_linked_in_profile}
                </div>
              )}

              {/* <CustomWidthTooltip title="Website URL*" arrow placement='right'> */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  name="website_url"
                  value={formik.values.website_url}
                  onChange={formik.handleChange}
                  onFocus={(e) => setHelperTooltip(e.target.name)}
                  onBlur={(event) => {
                    formik.handleBlur(event);
                    handleHelperTooltip(event.target.name);
                  }}
                  placeholder="Website URL*"
                  type="text"
                  className="inp-enter-name"
                />
                <InputHelperTooltip
                  title="Please provide the URL to your company website."
                  isVisible={helperTooltip === "website_url"}
                />
              </div>
              {/* </CustomWidthTooltip> */}
              {formik.touched.website_url && (
                <div className="raise-err-text">
                  {formik.errors.website_url}
                </div>
              )}

              {/* <CustomWidthTooltip title="Describe your previous fundraising rounds*" arrow placement='right'> */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <textarea
                  name="previous_funding"
                  value={formik.values.previous_funding}
                  onChange={formik.handleChange}
                  onFocus={(e) => setHelperTooltip(e.target.name)}
                  onBlur={(event) => {
                    formik.handleBlur(event);
                    handleHelperTooltip(event.target.name);
                  }}
                  placeholder="Describe your previous fundraising rounds*"
                  className="inp-textarea-desc"
                  id="describe"
                  rows="7"
                ></textarea>
                <InputHelperTooltip
                  title="Please provide fundraise status"
                  isVisible={helperTooltip === "previous_funding"}
                />
              </div>
              {/* </CustomWidthTooltip> */}
              {formik.touched.previous_funding && (
                <div className="raise-err-text">
                  {formik.errors.previous_funding}
                </div>
              )}

              <Typography className="pick-the-services">
                Pick the services you need from our vetted domain partners*
              </Typography>

              <div className="grid-parent">
                <Grid item xs={6} md={3}>
                  <Box
                    sx={{
                      p: 2,
                      paddingTop: 5,
                      bgcolor: "background.default",
                      display: "grid",
                      gridTemplateColumns: { md: "1fr 1fr", sm: "1fr 1fr" },
                      gap: 2.5,
                      width: "100%",
                      textAlign: "left",
                      fontFamily: "poppins",
                    }}
                  >
                    <Card elevation={0} className="checkbox-card">
                      <FormControlLabel
                        name="is_fund_raise"
                        value={formik.values.is_fund_raise}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        control={
                          <Checkbox
                            defaultChecked
                            sx={{
                              color: "black",
                              "&.Mui-checked": {
                                color: "#098211",
                              },
                            }}
                          />
                        }
                        label="Fund Raising"
                      />
                      {formik.touched.is_fund_raise && (
                        <div
                          className="raise-err-text"
                          style={{ paddinTop: "5px" }}
                        >
                          {formik.errors.is_fund_raise}
                        </div>
                      )}
                    </Card>

                    <Card elevation={0} className="checkbox-card">
                      <FormControlLabel
                        name="is_growth_hack"
                        value={formik.values.is_growth_hack}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        control={
                          <Checkbox
                            sx={{
                              color: "black",
                              "&.Mui-checked": {
                                color: "#098211",
                              },
                            }}
                          />
                        }
                        label="Growth Hack Marketing"
                      />
                      {formik.touched.is_growth_hack && (
                        <div
                          className="raise-err-text"
                          style={{ paddingTop: "5px" }}
                        >
                          {formik.errors.is_growth_hack}
                        </div>
                      )}
                    </Card>
                    <Card elevation={0} className="checkbox-card">
                      <FormControlLabel
                        name="is_tech_p_dev"
                        value={formik.values.is_tech_p_dev}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        control={
                          <Checkbox
                            sx={{
                              color: "black",
                              "&.Mui-checked": {
                                color: "#098211",
                              },
                            }}
                          />
                        }
                        label="Tech Product Development"
                      />
                      {formik.touched.is_tech_p_dev && (
                        <div
                          className="raise-err-text"
                          style={{ paddingTop: "5px" }}
                        >
                          {formik.errors.is_tech_p_dev}
                        </div>
                      )}
                    </Card>
                    <Card elevation={0} className="checkbox-card">
                      <FormControlLabel
                        name="is_finan_advisory"
                        value={formik.values.is_finan_advisory}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        control={
                          <Checkbox
                            sx={{
                              color: "black",
                              "&.Mui-checked": {
                                color: "#098211",
                              },
                            }}
                          />
                        }
                        label="Financial Advisory"
                      />
                      {formik.touched.is_finan_advisory && (
                        <div
                          className="raise-err-text"
                          style={{ paddingTop: "5px" }}
                        >
                          {formik.errors.is_finan_advisory}
                        </div>
                      )}
                    </Card>
                    <Card elevation={0} className="checkbox-card">
                      <FormControlLabel
                        name="is_ivestor_readiness"
                        value={formik.values.is_ivestor_readiness}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        control={
                          <Checkbox
                            sx={{
                              color: "black",
                              "&.Mui-checked": {
                                color: "#098211",
                              },
                            }}
                          />
                        }
                        label="Investor Readiness"
                      />
                      {formik.touched.is_ivestor_readiness && (
                        <div
                          className="raise-err-text"
                          style={{ paddingTop: "5px" }}
                        >
                          {formik.errors.is_ivestor_readiness}
                        </div>
                      )}
                    </Card>
                    <Card elevation={0} className="checkbox-card">
                      <FormControlLabel
                        name="is_legal_advisory"
                        value={formik.values.is_legal_advisory}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        control={
                          <Checkbox
                            sx={{
                              color: "black",
                              "&.Mui-checked": {
                                color: "#098211",
                              },
                            }}
                          />
                        }
                        label="Legal Advisory "
                      />
                      {formik.touched.is_legal_advisory && (
                        <div
                          className="raise-err-text"
                          style={{ paddingTop: "5px" }}
                        >
                          {formik.errors.is_legal_advisory}
                        </div>
                      )}
                    </Card>
                  </Box>
                </Grid>
              </div>

              {/* <CustomWidthTooltip title="Describe your product*" arrow placement='right'> */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <textarea
                  name="product_description"
                  value={formik.values.product_description}
                  onChange={formik.handleChange}
                  onFocus={(e) => setHelperTooltip(e.target.name)}
                  onBlur={(event) => {
                    formik.handleBlur(event);
                    handleHelperTooltip(event.target.name);
                  }}
                  placeholder="Describe your product*"
                  className="inp-textarea-desc"
                  rows="7"
                ></textarea>
                <InputHelperTooltip
                  title="Please provide details like the product url, demo videos or anything that will help us understand your product better"
                  isVisible={helperTooltip === "product_description"}
                />
              </div>
              {/* </CustomWidthTooltip> */}
              {formik.touched.product_description && (
                <div className="raise-err-text">
                  {formik.errors.product_description}
                </div>
              )}

              {/* <CustomWidthTooltip title="Describe the traction*" arrow placement='right'> */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <textarea
                  name="traction_description"
                  value={formik.values.traction_description}
                  onChange={formik.handleChange}
                  onFocus={(e) => setHelperTooltip(e.target.name)}
                  onBlur={(event) => {
                    formik.handleBlur(event);
                    handleHelperTooltip(event.target.name);
                  }}
                  placeholder="Describe the traction*"
                  className="inp-textarea-desc"
                  id="describe"
                  rows="7"
                ></textarea>
                <InputHelperTooltip
                  title="Please provide details on your business and product metrics"
                  isVisible={helperTooltip === "traction_description"}
                />
              </div>
              {/* </CustomWidthTooltip> */}
              {formik.touched.traction_description && (
                <div className="raise-err-text">
                  {formik.errors.traction_description}
                </div>
              )}

              {/* <CustomWidthTooltip title="Describe the revenue you are making*" arrow placement='right'> */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  name="revenue"
                  value={formik.values.revenue}
                  onChange={formik.handleChange}
                  onFocus={(e) => setHelperTooltip(e.target.name)}
                  onBlur={(event) => {
                    formik.handleBlur(event);
                    handleHelperTooltip(event.target.name);
                  }}
                  placeholder="Describe the revenue you are making*"
                  type="text"
                  className="inp-enter-name"
                />
                <InputHelperTooltip
                  title="Pre-revenue startups are not suited for a community round"
                  isVisible={helperTooltip === "revenue"}
                />
              </div>
              {/* </CustomWidthTooltip> */}
              {formik.touched.revenue && (
                <div className="raise-err-text">{formik.errors.revenue}</div>
              )}

              {/* <CustomWidthTooltip title="Why do you want to raise a Community round?*" arrow placement='right'> */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <textarea
                  name="reason_for_community_round"
                  value={formik.values.reason_for_community_round}
                  onChange={formik.handleChange}
                  onFocus={(e) => setHelperTooltip(e.target.name)}
                  onBlur={(event) => {
                    formik.handleBlur(event);
                    handleHelperTooltip(event.target.name);
                  }}
                  placeholder="Why do you want to raise a Community round?*"
                  className="inp-textarea-desc"
                  id="describe"
                  rows="7"
                ></textarea>
                <InputHelperTooltip
                  title="Please elaborate on why you think community round best suits you"
                  isVisible={helperTooltip === "reason_for_community_round"}
                />
              </div>
              {/* </CustomWidthTooltip> */}
              {formik.touched.reason_for_community_round && (
                <div className="raise-err-text">
                  {formik.errors.reason_for_community_round}
                </div>
              )}

              {/* <CustomWidthTooltip title="What makes you think MyntInvest is the right fit for you?*" arrow placement='right'> */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <textarea
                  name="reason_for_mynt"
                  value={formik.values.reason_for_mynt}
                  onChange={formik.handleChange}
                  onFocus={(e) => setHelperTooltip(e.target.name)}
                  onBlur={(event) => {
                    formik.handleBlur(event);
                    handleHelperTooltip(event.target.name);
                  }}
                  placeholder="What makes you think MyntInvest is the right fit for you?*"
                  className="inp-textarea-desc"
                  id="describe"
                  rows="7"
                ></textarea>
                <InputHelperTooltip
                  title="Please elaborate on why you chose Tyke over other fundraise options"
                  isVisible={helperTooltip === "reason_for_mynt"}
                />
              </div>
              {/* </CustomWidthTooltip> */}
              {formik.touched.reason_for_mynt && (
                <div className="raise-err-text">
                  {formik.errors.reason_for_mynt}
                </div>
              )}

              {/* <CustomWidthTooltip title="Do you have any existing commitments?*" arrow placement='right'> */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <textarea
                  name="existing_commitments"
                  value={formik.values.existing_commitments}
                  onChange={formik.handleChange}
                  onFocus={(e) => setHelperTooltip(e.target.name)}
                  onBlur={(event) => {
                    formik.handleBlur(event);
                    handleHelperTooltip(event.target.name);
                  }}
                  placeholder="Do you have any existing commitments?*"
                  className="inp-textarea-desc"
                  id="describe"
                  rows="7"
                ></textarea>
                <InputHelperTooltip
                  title="Please provide details about interested investors for this round"
                  isVisible={helperTooltip === "existing_commitments"}
                />
              </div>
              {/* </CustomWidthTooltip> */}
              {formik.touched.existing_commitments && (
                <div className="raise-err-text">
                  {formik.errors.existing_commitments}
                </div>
              )}

              <Typography className="upload-ur-pitch">
                Upload your Pitch*
              </Typography>

              <div
                className="drag-and-drop-parent"
                name="company_pitch"
                onClick={() => document.getElementById("raisePitch").click()}
              >
                <div style={{ textAlign: "center" }}>
                  {pdfName ? (
                    <Typography className="drag-and-drop-text">
                      {pdfName}
                    </Typography>
                  ) : (
                    <>
                      <Typography className="drag-and-drop-text">
                        Drag and Drop or click here to browse
                      </Typography>
                      <span className="max-size-text">Max size 10 MB</span>
                    </>
                  )}

                  <input
                    accept=".pdf, .PDF"
                    name="company_pitch"
                    id="raisePitch"
                    hidden
                    onChange={handlePitchFileSelect}
                    type="file"
                  />
                </div>
              </div>
              {formik.touched.company_pitch && (
                <div style={{ marginTop: "4px" }} className="raise-err-text">
                  {formik.errors.company_pitch}
                </div>
              )}

              <div className="founder-appln-submit-parent">
                <button type="submit" className="founder-appln-submit-button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default FounderApplication;
