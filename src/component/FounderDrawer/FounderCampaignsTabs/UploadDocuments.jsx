import { Button, Container, Typography } from "@material-ui/core";
import { Box, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import "../../../css/FounderDrawer/Dashboard/UploadDocs.css";
import pptxIcon from "./../../../images/founder/pptxIcon.png";
import pdfIcon from "./../../../images/founder/pdfIcon.png";
import fileIcon from "./../../../images/founder/fileIcon.png";
import CompanyServices from "../../../service/Company";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import { Base_Url } from "../../../Utils/Configurable";
import { authAxios } from "../../../service/Auth-header";
import { useNavigate } from "react-router-dom";

const UploadDocuments = () => {
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedDocs, setUploadedDocs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [addDocuments, setAddDocuments] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const [toggle, settoggle] = useState(false);

  const handleFileInput = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }
    const formData = new FormData();
    formData.append("file", file);
    try {
      setIsUploading(true);
      const { data } = await authAxios.post(
        `${Base_Url}/api/users/upload-files`,
        formData
      );
      setSelectedFile([
        // ...selectedFile,
        {
          document_type: "DOCUMENTS",
          document_name: event.target.files[0].name,
          agreement_status: "SIGNED BY FOUNDER",
          document_url: data.message,
        },
      ]);
      setIsUploading(false);
      return data;
    } catch (error) {
      console.log("Data not found !!");
      setIsUploading(false);
    }
  };
  const handleUpload = () => {
    setIsLoading(true);

    if (isUploading) {
      setIsLoading(false);
      toast.error("Please wait while file is uploading!", {
        position: "top-right",
        style: {
          borderRadius: "3px",
          background: "red",
          color: "#fff",
        },
      });
    } else {
      const values = {
        company_id: +localStorage.getItem("company_id"),
        documents: selectedFile,
      };
      CompanyServices.uploadCompanyDocs(values).then((res) => {
        console.log(res);
        if (res.status === 200 || res.status === 201) {
          setIsLoading(false);

          toast.success("Document uploaded successful!", {
            position: "top-right",
            style: {
              borderRadius: "3px",
              background: "green",
              color: "#fff",
            },
          });
          settoggle((pre) => !pre);
          setSelectedFile([]);
          navigate("/dashboard-founder/e-signin");
        } else {
          setIsLoading(false);
          if (!selectedFile) {
            navigate("/dashboard-founder/e-signin");
          } else {
            toast.error("Something went wrong, please try again later", {
              position: "top-right",
              style: {
                borderRadius: "3px",
                background: "red",
                color: "#fff",
              },
            });
          }
        }
      });
    }
  };

  useEffect(() => {
    CompanyServices.getUploadedDocs(localStorage.getItem("company_id")).then(
      (res) => {
        console.log(res);
        if (res.status === 200 || res.status === 201) {
          setUploadedDocs(res.data);
        }
      }
    );
  }, [toggle]);
  return (
    <Container
    className="upload-docs-container"
      maxWidth="lg"
    >
      <h3>Upload Documents</h3>

      <Typography className="upload-docs-desc">
        Upload all due diligence documents for investors perusal
      </Typography>

      {addDocuments || uploadedDocs?.length === 0 ? (
        <>
          <div className="upload-fun-parent">
            <div className="upload-doc-parent">
              <Typography className="Choose-file-text">
                Choose file - Max file size 10 MB
              </Typography>
              <Button
                onClick={() =>
                  document.getElementById("upload-pic-inp").click()
                }
                style={{ width: "175px !important" }}
                className="upload-docs-btn"
              >
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
                  " Upload a Picture"
                )}
              </Button>
              <input
                onChange={handleFileInput}
                hidden
                id="upload-pic-inp"
                type="file"
                accept=".pdf, .pptx"
              />
            </div>
          </div>

          <div className="upload-doc-btn-wrapper getRewards-btn-parent">
            <Button
              className="hightlight-submit-button"
              style={{ color: "White" }}
            >
              Submit For Review
            </Button>
            <Button
              // disabled={selectedFile ? false : true}
              onClick={handleUpload}
              style={{  color: "white" }}
              variant="contained"
              className="finish-btn hightlight-submit-button"
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
              ) : (
                "Finish"
              )}
            </Button>
          </div>
        </>
      ) : null}

      {uploadedDocs?.length > 0 ? (
        <>
          <Box style={{ marginRight: "25px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h3>Uploaded Documents</h3>
              {!addDocuments && (
                <button
                  onClick={() => setAddDocuments(true)}
                  className="addMore"
                >
                  Upload More Documents
                </button>
              )}
            </div>
          </Box>
          <div className="doc-list-parent">
            {uploadedDocs
              ?.slice(0)
              ?.reverse()
              .map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    // width: "40%",
                    border: "2px dashed grey",
                    padding: 20,
                    gap: 20,
                    borderRadius: "5px",
                  }}
                >
                  <div className="icon-name-upload-doc">
                    <img
                      src={
                        item?.document_name?.split(".").pop() === "pptx"
                          ? pptxIcon
                          : item?.document_name?.split(".").pop() === "pdf"
                          ? pdfIcon
                          : fileIcon
                      }
                      alt="doc-icon"
                      width={62}
                    />
                    <Typography className="doc-name">
                      {item?.document_name.length < 10
                        ? item?.document_name
                        : item?.document_name?.slice(0, 5) +
                          "..." +
                          item?.document_name?.split(".").pop()}
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 10,
                      }}
                    >
                      <img
                        onClick={() => window.open(item.document_url)}
                        style={{ cursor: "pointer" }}
                        src="https://icons.iconarchive.com/icons/praveen/minimal-outline/128/view-icon.png"
                        height={30}
                      />
                      {/* <img
                      style={{cursor:'pointer'}}
                        src="https://icons.iconarchive.com/icons/github/octicons/128/download-16-icon.png"
                        height={30}
                      /> */}
                    </div>
                  </div>
                </div>
              ))}
            {selectedFile
              ?.slice(0)
              ?.reverse()
              .map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    // width: "40%",
                    border: "2px dashed grey",
                    padding: 20,
                    gap: 20,
                    borderRadius: "5px",
                  }}
                >
                  <div key={index} className="icon-name-upload-doc">
                    <img
                      src={
                        item?.document_name?.split(".").pop() === "pptx"
                          ? pptxIcon
                          : item?.document_name?.split(".").pop() === "pdf"
                          ? pdfIcon
                          : null
                      }
                      alt="doc-icon"
                      width={62}
                    />
                    <Typography className="doc-name">
                      {item?.document_name?.length < 10
                        ? item?.document_name
                        : item?.document_name?.slice(0, 5) +
                          "..." +
                          item?.document_name?.split(".").pop()}
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 10,
                      }}
                    >
                      <img
                        onClick={() => window.open(item.document_url)}
                        style={{ cursor: "pointer" }}
                        src="https://icons.iconarchive.com/icons/praveen/minimal-outline/128/view-icon.png"
                        height={30}
                      />
                      {/* <img
                      style={{cursor:'pointer'}}
                        src="https://icons.iconarchive.com/icons/github/octicons/128/download-16-icon.png"
                        height={30}
                      /> */}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </>
      ) : null}
    </Container>
  );
};

export default UploadDocuments;
