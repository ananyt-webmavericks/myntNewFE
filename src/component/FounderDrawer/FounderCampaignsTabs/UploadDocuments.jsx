import { Button, Container, Typography } from "@material-ui/core";
import { Box, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import "../../../css/FounderDrawer/Dashboard/UploadDocs.css";
import pptxIcon from "./../../../images/founder/pptxIcon.png";
import pdfIcon from "./../../../images/founder/pdfIcon.png";
import CompanyServices from "../../../service/Company";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import { Base_Url } from "../../../Utils/Configurable";
import { authAxios } from "../../../service/Auth-header";
import { useNavigate } from "react-router-dom";

const UploadDocuments = () => {
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState([]);
  const [uploadedDocs, setUploadedDocs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
      const { data } = await authAxios.post(
        `${Base_Url}/api/users/upload-files`,
        formData
      );
      console.log(data);
      setSelectedFile([
        ...selectedFile,
        {
          document_type: "DOCUMENTS",
          document_name: event.target.files[0].name,
          agreement_status: "SIGNED BY FOUNDER",
          document_url: data.message,
        },
      ]);
      return data;
    } catch (error) {
      console.log("Data not found !!");
    }
  };
  const handleUpload = () => {
    setIsLoading(true);
    const values = {
      company_id: +localStorage.getItem("company_id"),
      documents: selectedFile,
    };

    CompanyServices.uploadCompanyDocs(values).then((res) => {
      console.log(res);
      if (res.status === 200 || res.status === 201) {
        setIsLoading(false);

        toast.success("Document uploaded successful!",{ 
          position:"top-right",
          style: {
          borderRadius: '3px',
          background: 'green',
          color: '#fff',
        },});
        settoggle((pre) => !pre);
        setSelectedFile([]);
        navigate("/dashboard-founder/e-signin");
      } else {
        setIsLoading(false);

        toast.error("Something went wrong, please try again later",{ 
          position:"top-right",
          style: {
          borderRadius: '3px',
          background: 'red',
          color: '#fff',
        },});
      }
    });
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
    <Container style={{ padding: "16px" }} maxWidth="lg">
      <Typography className="upload-docs-title">Upload Documents</Typography>

      <Typography className="upload-docs-desc">
        Upload all due diligence documents for investors perusal
      </Typography>

      <div className="upload-fun-parent">
        <div className="upload-doc-parent">
          <Typography className="Choose-file-text">
            Choose file - Max file size 10 MB
          </Typography>
          <Button
            onClick={() => document.getElementById("upload-pic-inp").click()}
            style={{ width: "175px !important" }}
            className="upload-docs-btn"
          >
            Upload a Picture
          </Button>
          <input
            onChange={handleFileInput}
            hidden
            id="upload-pic-inp"
            type="file"
            accept=".pdf, .pptx"
          />
        </div>
        <div className="doc-list-parent">
          {selectedFile
            ?.slice(0)
            ?.reverse()
            .map((item, index) => (
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
              </div>
            ))}

          {/* <div className='icon-name-upload-doc'>
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
                    </div> */}
        </div>
      </div>

      <div className="getRewards-btn-parent">
        <Button className="hightlight-submit-button" style={{color:'White'}}>Submit For Review</Button>
        <Button
          onClick={handleUpload}
          style={{ margin: "20px", color: "white" }}
          variant="contained"
          className="hightlight-submit-button"
        >
          {isLoading === true ? (
            <CircularProgress
              style={{ color: "white", fontSize: 10, width: 20, height: 20 }}
            />
          ) : (
            "Finish"
          )}
        </Button>
      </div>

      <div style={{ marginBottom: "3rem" }}>
        {uploadedDocs?.length > 0 && (
          <Typography
            className="upload-docs-title"
            style={{ marginBottom: "1rem" }}
          >
            Uploaded Documents
          </Typography>
        )}
        <div className="doc-list-parent">
          {uploadedDocs
            ?.slice(0)
            ?.reverse()
            .map((item, index) => (
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
                  {item?.document_name.length < 10
                    ? item?.document_name
                    : item?.document_name?.slice(0, 5) +
                      "..." +
                      item?.document_name?.split(".").pop()}
                </Typography>
              </div>
            ))}
        </div>
      </div>
    </Container>
  );
};

export default UploadDocuments;
