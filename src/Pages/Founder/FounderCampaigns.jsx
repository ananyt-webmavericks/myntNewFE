import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  LinearProgress,
  Typography,
  Card,
} from "@material-ui/core";
import { CircularProgress } from "@mui/material";
import { toast } from "react-hot-toast";

import { authAxios } from "../../service/Auth-header";
import { Base_Url } from "../../Utils/Configurable";
import Footer from "../../component/Footer";
import "../../css/FounderDrawer/Dashboard/E-Sign.css";
import { makeStyles } from "@material-ui/core/styles";
import DrawerFounder from "../../component/FounderDrawer/DrawerFounder";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import E_Singbg from "../../images/founder/E_SingBg.png";
import CopanyLogo from "../../images/founder/companylogo.png";
import CompanyServices from "../../service/Company";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  root2: {
    width: "100%",
    padding: 10,
  },
  paperconten: {
    padding: 5,
    boxShadow: "0px 0px 20px #0000001A !important",
    borderRadius: "7px",
  },
  Card: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginTop: 5,
    display: "flex",
    justifyContent: "space-between",
    marginRight: 5,
  },
  btn: {
    borderRadius: 20,
    backgroundColor: "#01965D",
    color: "white",
    height: "30px",
    width: "100px",
  },
  btn2: {
    borderRadius: 20,
    height: "30px",
    width: "100px",
  },
  typofont: {
    textAlign: "left",
    color: "#000000",
  },
  para: {
    padding: "0px 10px 0px 10px",
    textAlign: "left",
    marginLeft: 5,
  },
}));


const FounderCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const classes = useStyles();
  const location = window.location.pathname;
  const ratio = parseInt(window.innerWidth);
  const [showDeals, setShowDeals] = useState(false);
  const [progress, setProgress] = useState(10);
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  useEffect(() => {
    CompanyServices.getAllCampaignOfCompany(
      localStorage.getItem("company_id")
    ).then((res) => {
      if (res.status === 200 || res.status === 201) {
        setCampaigns(res?.data?.data);
      }
    });
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const fetchValue = (value) => {
    setShowDeals(value);
  };

  const daysRemaining = (dateString) => {
    let currentDate = new Date().setDate(1)
    let resDate = new Date(dateString).setDate(1)

    if (currentDate > resDate) {
      return 'Expired'
    } else {
      const now = new Date();
      const targetDate = new Date(dateString);
      const timeDiff = targetDate.getTime() - now.getTime();
      return `${Math.ceil(timeDiff / (1000 * 60 * 60 * 24))} days`
    }

  };


  const handleFileInput = async (event, item) => {

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
      setSelectedFile(
        {
          document_type: "DOCUMENTS",
          document_name: event.target.files[0].name,
          agreement_status: "SIGNED BY FOUNDER",
          document_url: data.message,
        },
      );
      const docSend = new FormData()
      docSend.append('campaign_id', item.campaign.id)
      docSend.append('document_name', event.target.files[0].name)
      docSend.append('document_url', data.message)

      // DocSend.append('user_id', userData?.id)
      const DocRes = await authAxios.post(
        `${Base_Url}/api/campaign-document/campaign-agreement`,
        docSend
      );
      console.log(DocRes)
      if (DocRes?.data?.status) {
        toast.success(DocRes?.data?.message, {
          position: "top-right",
          style: {
            borderRadius: "3px",
            background: "green",
            color: "#fff",
          },
        });
      } else {
        toast.error("Try Later!!", {
          position: "top-right",
          style: {
            borderRadius: "3px",
            background: "red",
            color: "#fff",
          },
        });
      }

      setIsUploading(false);
      return data;
    } catch (error) {
      console.log("Data not found !!");
      setIsUploading(false);
    }
  };



  const handleClick = (e, child, item) => {

    if (child) {
      e.stopPropagation()
      document.getElementById("upload-pic-inp").click()
      return
    } else {
      sessionStorage.setItem("campaign_id", item.campaign.id);
      sessionStorage.setItem("is_campaign_added", true);
      navigate("/dashboard-founder/campaigns-statics");
    }
  }

  return (
    <>
      <div style={{ display: "flex", position: "relative" }}>
        {location.includes("/dashboard") && <DrawerFounder />}
        <div className="dashboard-container">
          <Container maxWidth="lg">
            <div
              style={{ display: "flex", flexDirection: "column", gap: 30 }}
              className={classes.root}
            >
              <Grid className="dashboard-width-mb" item xs={6} md={3}>
                <Box
                  sx={{
                    p: 2,
                    padding: "4.2px 0px 0px 0px",
                    // bgcolor: 'background.default',
                    display: "grid",
                    gridTemplateColumns: {
                      md: "1fr 1fr 1fr",
                      sm: "1fr 1fr 1fr",
                    },
                    gap: "30px",
                    // width: '492',
                    // width: "20rem",
                    textAlign: "left",
                    fontFamily: "poppins",
                  }}
                >
                  <div style={{ marginTop: "3rem", }}>
                    <Typography>Campaign</Typography>
                    <div
                      onClick={() => {
                        console.log("clicked");
                        sessionStorage.removeItem("campaign_id");
                        sessionStorage.setItem("is_campaign_added", false);
                        sessionStorage.removeItem("campaign_data");
                        navigate("/dashboard-founder/campaigns-tabs");
                      }}
                      className="AddCompany"
                    >
                      <div className="Add-new-campaign">
                        <div className="campaign-Icon-Box">
                          <Typography className="plus-icon">+</Typography>
                        </div>
                      </div>
                    </div>
                  </div>

                  {campaigns?.map((item) => (
                    <Box
                      className="companyAddbox"
                      style={{
                        display: "flex",
                        gap: "5rem",
                        // marginBottom: "5rem",
                        marginTop: "2.5rem",
                      }}
                    >
                      <div
                        onClick={(e) => item?.campaign?.status !== 'COMPLETED' ? handleClick(e, false, item) : ''}
                      >
                        <div
                          className="AddCompany2">
                          <div onClick={(e) => {
                            handleClick(e, false, item)
                          }}><Box className="companylogoimg">
                              <Box className="setCornerIcon">
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    textAlign: "center",
                                    width: "100%",
                                    padding: "10px 20px",
                                  }}
                                >
                                  <img src={item?.company?.company_logo || ''} alt="not found" />
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      height: "30px",
                                      width: "100px",
                                      backgroundColor: "yellow",
                                      textAlign: "center",
                                      marginTop: "15px",
                                      borderRLeft: "50%",
                                      borderRight: "50%",
                                      borderRadius: "1rem",
                                      zIndex: "1",
                                    }}
                                  >
                                    {item?.deal_type?.deal_name || 'N/A'}
                                  </div>
                                </div>
                              </Box>
                              <b
                                className="settleindex"
                                style={{
                                  marginLeft: "3rem",
                                  zIndex: "90000000 !important",
                                }}
                              >
                                Settl
                              </b>
                            </Box>
                            <div>
                              <img
                                src={E_Singbg}
                                alt="not found"
                                className="settlimg"
                              />
                              <div>
                                <Typography
                                  className="settlpara"
                                  style={{ fontSize: "12px" }}
                                >
                                  {item?.company?.product_description.slice(0, 80)}
                                </Typography>
                                <button style={{ width: 'fit-content', padding: '0 5px' }} className="colivingBtn">{item?.company?.sector || 'N/A'}</button>
                              </div>
                            </div>
                            <Box className="raisedflex">
                              <div>
                                <b>{Number(item?.total_raised).toFixed(2) || '0'}%</b>
                                <br />
                                <span>Raised</span>
                              </div>
                              <div>
                                <b>{daysRemaining(item?.deal_terms?.end_date)}</b>
                                <br />
                                <span>End Date</span>
                              </div>
                              <div>
                                <b> {item?.deal_terms?.min_subscription || 'N/A'}</b>
                                <br />
                                <span>Min invest</span>
                              </div>
                            </Box>

                          </div>

                          <Button
                            onClick={(e) => {
                              handleClick(e, false, item)
                            }}
                            style={{
                              border: "2px solid green",
                              borderRadius: 50,
                              background: "trasparent",
                              color: "green",
                              alignSelf: "center",
                            }}
                          >
                            {item?.campaign?.status}
                          </Button>
                          {item?.campaign?.status === 'COMPLETED' &&
                            <>
                              <Button

                                onClick={(e) => handleClick(e, true, {})}
                                style={{
                                  border: "2px solid green",
                                  borderRadius: 50,
                                  marginTop: '1em',
                                  background: "trasparent",
                                  color: "green",
                                  alignSelf: "center",
                                }}

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
                                  " Upload Agreement"
                                )}
                              </Button>
                              <input
                                onChange={(e) => handleFileInput(e, item)}
                                hidden
                                id="upload-pic-inp"
                                type="file"
                                accept=".pdf, .pptx"
                              />
                            </>
                          }
                        </div>
                      </div>
                    </Box>
                  ))}
                </Box>
              </Grid>

            </div>
          </Container>
        </div>
      </div>
      {ratio < 1000 ? null : <Footer />}
    </>
  );
};
export default FounderCampaigns;
