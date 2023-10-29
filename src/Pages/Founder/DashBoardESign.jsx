import { Box } from "@material-ui/core";
import { Button, Card, Container, Grid, Typography } from "@mui/material";
import { borderRadius, height, padding } from "@mui/system";
import React from "react";
import { CircularProgress } from "@mui/material";
import { useState, useRef } from "react";
import Footer from "../../component/Footer";
import DrawerFounder from "../../component/FounderDrawer/DrawerFounder";
import "../../css/FounderDrawer/Dashboard/E-Sign.css";
import E_Singbg from "../../images/founder/E_SingBg.png";
import CopanyLogo from "../../images/founder/companylogo.png";
import { useEffect } from "react";
import CompanyServices from "../../service/Company";
import session from "redux-persist/lib/storage/session";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FounderServices from "../../service/FounderServices";
import _ from "lodash";
import { FounderEsignAction } from "../../Redux/actions/FounderEsign";
import FounderModal from "../../component/FounderModal";
import { toast } from "react-hot-toast";
import { Base_Url } from "../../Utils/Configurable";
import { authAxios } from "../../service/Auth-header";
const DashBoardESign = () => {
  const dispatch = useDispatch()
  const location = window.location.pathname;
  const { userData } = useSelector((state) => state.loginData)
  const ratio = parseInt(window.innerWidth);
  const [campaigns, setCampaigns] = useState([]);
  console.log("campaigns", campaigns)
  const [pdfData, setPdfData] = useState('')
  const [showDeals, setShowDeals] = useState(false);
  const [disable, setDisable] = useState(true)
  const navigate = useNavigate();
  const [signPdf, setSignPdf] = useState({})
  const { founderEsign } = useSelector(state => state.founderEsignStatus)
  const [openModal, setOpenModal] = useState(false)

  const handleClose = () => { setOpenModal(false) }

  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [toggle, settoggle] = useState(false);


  const fetchValue = (value) => {
    setShowDeals(value);
  };

  useEffect(() => {
    CompanyServices.getAllCampaignOfCompany(
      localStorage.getItem("company_id")
    ).then((res) => {
      if (res.status === 200 || res.status === 201) {
        setCampaigns(res?.data?.data);
      }
    });
  }, []);

  const getEsignPdf = () => {
    try {

      FounderServices.getEsignPdf(userData?.id).then(res => {
        if (res.status === 200 || res.status === 201) {
          setSignPdf(res?.data?.result)
          dispatch(FounderEsignAction(res?.data?.result))
        } else {
          console.log("can't get the portfolio data")
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (userData?.id) {
      getEsignPdf()
    }
  }, [])

  const fetchStatusOfESign = () => {

    if (_.isEmpty(signPdf)) {
      setPdfData('Pending from Mynt Admin')
    }
    if (signPdf?.agreement_status == 'NO AGREEMENT FOUND') {
      setPdfData('Pending from Mynt Admin')
    }
    if (signPdf?.agreement_status == 'UPLOADED BY ADMIN') {
      setPdfData('Pending E-Sign From Mynt Admin')
    }
    if (signPdf?.agreement_status === 'SIGNED BY ADMIN') {
      setPdfData('Pending from Your End to E-Sign')
    }
    if (signPdf?.agreement_status === 'SIGNED BY FOUNDER') {
      setPdfData('Download Agreement')
      setDisable(false)
    }

  }
  useEffect(() => {
    fetchStatusOfESign()
  }, [signPdf])

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
          <Container style={{ marginBottom: 30 }} maxWidth="lg">
            <div>
              {/* <Typography className="raise-with-mint">E-Sing Document</Typography> */}
              <Typography className="raise-with-mint">
                Raise with Mynt
              </Typography>
              <Typography className="raise-with-mint-desc">
                Provide us with all the data required to make your campaign!
                Make sure to include all the important details to make your
                campaign as attractive as possible to our investors.{" "}
              </Typography>
            </div>

            <Card className="raise-with-mint-cards" elevation={2}>
              <div>
                <Typography className="e-sign-title">E-sign</Typography>
                <Typography className="e-sign-description">
                  {pdfData}
                </Typography>
              </div>
              <div className="download-btn-Active">

                <Button
                  style={{
                    borderRadius: "50px",
                    backgroundColor: `${disable ? 'gray' : '#fbdf35'}`,
                    color: `${disable ? 'white' : 'black'}`,
                    cursor: 'pointer'
                  }}
                  disabled={disable}
                  variant="contained"
                >
                  <a style={{ color: 'black', textDecoration: 'none' }} target="_blank" href={signPdf?.document_url}> <b>Download</b></a>
                </Button>

              </div>
            </Card>

            {/* <Typography>Previous Campaigns</Typography> */}

            <Grid
              className="dashboard-width-mb"
              style={{
                flexDirection: "row",
                display: "flex",
                flexWrap: "wrap",
                gap: "26px",
              }}
              item
              xs={6}
              md={3}
            >
              <Box
                sx={{
                  p: 2,
                  padding: '4.2px 0px 0px 0px',
                  // bgcolor: 'background.default',
                  display: 'grid',
                  gridTemplateColumns: { md: '1fr 1fr 1fr', sm: '1fr 1fr 1fr' },
                  gap: '30px',
                  // width: '492',
                  // width: '20rem',
                  textAlign: 'left',
                  fontFamily: 'poppins'
                }}
              >
                <div
                  className="campaing-mb"
                  style={{
                    marginTop: "3rem",
                    // width: '20rem'
                  }}
                >
                  <Typography>Campaign</Typography>
                  <Card
                    onClick={() => {
                      console.log("clicked");
                      sessionStorage.removeItem("campaign_id");
                      sessionStorage.setItem("is_campaign_added", false);
                      sessionStorage.removeItem("campaign_data");
                      if (founderEsign?.agreement_status !== 'SIGNED BY FOUNDER') {
                        setOpenModal(true)
                      } else {
                        navigate("/dashboard-founder/campaigns-tabs")
                      }
                    }}
                    className="AddCompany"
                  >
                    <div className="Add-new-campaign">
                      <div className="campaign-Icon-Box">
                        <Typography className="plus-icon">+</Typography>
                      </div>
                    </div>
                  </Card>
                </div>

                {campaigns.length > 0 && campaigns?.map((item) => (
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
                        <div
                          onClick={(e) => {
                            handleClick(e, false, item)
                          }}
                        >


                          <Box className="companylogoimg">
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
                                <img src={item?.company?.company_logo || ''} height={60} alt="not found" />
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
            {/* <div style={{ fontWeight: 'bold', marginTop: '3rem', fontSize: "16px", fontFamily: 'poppins' }}>
                            <Typography>Analytics</Typography><br />
                            <Box className="AnalyticsBox">
                                <Typography>Analytics</Typography>
                            </Box>
                        </div> */}
          </Container>
        </div>
      </div>
      {ratio < 1000 ? null : <Footer />}
      <FounderModal show={openModal} handleClose={handleClose} />
    </>
  );
};
export default DashBoardESign;
