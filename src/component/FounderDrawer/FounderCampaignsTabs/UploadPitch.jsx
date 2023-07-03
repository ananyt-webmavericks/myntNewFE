import { makeStyles, styled } from "@material-ui/core";
import {
  Box,
  CircularProgress,
  Tooltip,
  tooltipClasses,
  Typography,
} from "@mui/material";
import "../../../css/FounderDrawer/Dashboard/UploadPitch.css";
import React, { useState } from "react";
import { useFormik } from "formik";
import CompanyServices from "../../../service/Company";
import { toast } from "react-hot-toast";
import PitchValSchema from "../../../Validations/PitchValSchema";
import { useEffect } from "react";
import { authAxios } from "../../../service/Auth-header";
import { Base_Url } from "../../../Utils/Configurable";
import { useLocation, useNavigate } from "react-router-dom";
import pptxIcon from "./../../../images/founder/pptxIcon.png";
import pdfIcon from "./../../../images/founder/pdfIcon.png";
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
      backgroundColor: "white",
      color: "black",
      fontFamily: "poppins",
      border: "1px solid gray",
      boxShadow: "0px 0px 20px #00000017",
      padding: "10px 20px",
    },
  });
  const [pdfName, setPdfName] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

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
    console.log("file", file);
    try {
      setIsUploading(true);
      const { data } = await authAxios.post(
        `${Base_Url}/api/users/upload-files`,
        formData
      );
      console.log(data);
      formik.setFieldValue("pitch", data.message);
      setIsUploading(false);
      return data;
    } catch (error) {
      setIsUploading(false);
      console.log("Data not found !!");
    }
  };

  const x = sessionStorage.getItem("is_campaign_added");
  const classes = useStyles();
  const [pitchData, setPitchData] = useState({});
  const [isCampaignAdded, setIsCampaignAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [addPitch, setAddPitch] = useState(false);
  const [campaignData, setCampaignData] = useState();
  const location = useLocation();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      // pitch: pitchData?.pitch
      //   ? pitchData?.pitch
      //   : "https.jasdjlfjlksadjflkasdf",
      pitch: pitchData?.pitch ? pitchData?.pitch : null,
    },

    validationSchema: PitchValSchema,

    onSubmit: (values) => {
      if (isUploading) {
        toast.error("Please wait while Pitch is Uploading!", {
          position: "top-right",
          style: {
            borderRadius: "3px",
            background: "red",
            color: "#fff",
          },
        });
      } else {
        setIsLoading(true);
        console.log(JSON.parse(sessionStorage.getItem("is_campaign_added")));
        !JSON.parse(sessionStorage.getItem("is_campaign_added"))
          ? CompanyServices.createCampaign({
              ...values,
              company_id: localStorage.getItem("company_id"),
            }).then((res) => {
              console.log(res);
              if (res.status === 200 || res.status === 201) {
                sessionStorage.setItem("is_campaign_added", true);
                sessionStorage.setItem("campaign_id", res.data.id);
                sessionStorage.setItem(
                  "campaign_data",
                  JSON.stringify(res.data)
                );
                setIsLoading(false);
                toast.success("Compaign added successfully!", {
                  position: "top-right",
                  style: {
                    borderRadius: "3px",
                    background: "green",
                    color: "#fff",
                  },
                });
                setTimeout(() => {
                  tabChangeFn(0, 1);
                }, 2000);
              } else {
                setIsLoading(false);
                toast.error("Something went wrong, please try again later", {
                  position: "top-right",
                  style: {
                    borderRadius: "3px",
                    background: "red",
                    color: "#fff",
                  },
                });
              }
            })
          : CompanyServices.updateCampaign({
              ...values,
              company_id: localStorage.getItem("company_id"),
              campaign_id: sessionStorage.getItem("campaign_id"),
            }).then((res) => {
              console.log(res);
              console.log(res.status === 200 || res.status === 201);
              if (res.status === 200 || res.status === 201) {
                sessionStorage.setItem(
                  "campaign_data",
                  JSON.stringify(res.data.data)
                ); //need to remove this line
                setIsLoading(false);
                toast.success("Compaign updated successfully!", {
                  position: "top-right",
                  style: {
                    borderRadius: "3px",
                    background: "green",
                    color: "#fff",
                  },
                });
                setTimeout(() => {
                  tabChangeFn(0, 1);
                }, 1000);
              } else {
                setIsLoading(false);
                toast.error("Something went wrong, please try again later", {
                  position: "top-right",
                  style: {
                    borderRadius: "3px",
                    background: "red",
                    color: "#fff",
                  },
                });
              }
            });
      }
    },
  });
  const getCampaignData = (id) => {
    CompanyServices.getCampaignById(id).then((res) => {
      if (res.status === 200 || res.status === 201) {
        console.log(res.data);
        setCampaignData(res.data);
      }
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    setPitchData(JSON.parse(sessionStorage.getItem("campaign_data")));
    setIsCampaignAdded(JSON.parse(sessionStorage.getItem("is_campaign_added")));
    getCampaignData(sessionStorage.getItem("campaign_id"));
    console.log("campaignData", campaignData);
  }, [x]);

  return (
    <Box sx={{ marginTop: 4 }} className="upload-pitch-parent">
      <h3>Upload Pitch</h3>
      <Typography>
        <p style={{ marginTop: "10px" }}>
          Upload a pdf of your pitch deck - this will be displayed to your
          potential investors as your pitch for your campaign
        </p>
      </Typography>
      {addPitch || !campaignData?.pitch ? (
        <form onSubmit={formik.handleSubmit}>
          <div
            className="drag-and-drop-parent"
            style={{ marginTop: "4.8rem", position: "relative" }}
            onClick={(e) => {
              document.getElementById("uploadPitchInput").click();
            }}
          >
            {pdfName?.length > 0 ? (
              <Typography className="drag-and-drop-text">
                {isUploading ? (
                  <CircularProgress
                    style={{
                      color: "black",
                      fontSize: 10,
                      width: 20,
                      height: 20,
                    }}
                  />
                ) : (
                  pdfName
                )}
              </Typography>
            ) : (
              <>
                <Typography className="drag-and-drop-text">
                  Drag and Drop or click here to browse
                </Typography>
                <span className="max-size-text"> Max size 10 MB</span>
              </>
            )}
          </div>
          <input
            id="uploadPitchInput"
            hidden
            onChange={handlePitchFileSelect}
            type="file"
            accept=".pdf,.PDF"
          />
          {/* </div> */}
          {formik.touched.pitch && (
            <div className="raise-err-text" style={{ marginTop: "2px" }}>
              {formik.errors.pitch}
            </div>
          )}
          <div className="founder-appln-submit-parent">
            <button
              disabled={pdfName ? false : true}
              type="submit"
              className="founder-appln-submit-button"
            >
              {isLoading === true ? (
                <CircularProgress
                  style={{
                    color: "white",
                    fontSize: 10,
                    width: 20,
                    height: 20,
                  }}
                />
              ) : isCampaignAdded ? (
                "Update"
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      ) : null}
      {campaignData?.pitch ? (
        <div className="upload-pitch-mb" style={{ marginTop: "20px", width: "89%" }}>
          {" "}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              // width: "72%",
            }}
          >
            <h3>Uploaded Pitch</h3>
            {!addPitch && (
              <button onClick={() => setAddPitch(true)} className="addMore">
                Update Pitch
              </button>
            )}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "fit-content",
              border: "2px dashed grey",
              padding: 20,
              gap: 20,
              borderRadius: "5px",
              marginTop: "30px",
            }}
          >
            <img src={pdfIcon} height={60} />
            {/* <Typography>{campaignData?.pitch.substring(campaignData?.pitch.lastIndexOf('/')+1)}</Typography> */}
            <Typography>{campaignData?.pitch.substring(campaignData?.pitch.lastIndexOf('/')+1).slice(0, 5) + "..." + campaignData?.pitch.substring(campaignData?.pitch.lastIndexOf('/')+1).split(".").pop()}</Typography>
            
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap:10
              }}
            >
              <img
              style={{cursor:'pointer'}}
                src="https://icons.iconarchive.com/icons/praveen/minimal-outline/128/view-icon.png"
                height={30}
              />
              <img
              style={{cursor:'pointer'}}
                src="https://icons.iconarchive.com/icons/github/octicons/128/download-16-icon.png"
                height={30}
              />
            </div>
          </div>
        </div>
      ) : null}
    </Box>
  );
};

export default UploadPitch;
