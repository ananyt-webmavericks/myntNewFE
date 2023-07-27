import { Box } from "@material-ui/core";
import { Button, Card, Container, Grid, Typography } from "@mui/material";
import { borderRadius, height, padding } from "@mui/system";
import React from "react";
import { useState } from "react";
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
const DashBoardESign = () => {
  const dispatch = useDispatch()
  const location = window.location.pathname;
  const { userData } = useSelector((state) => state.loginData)
  const ratio = parseInt(window.innerWidth);
  const [campaigns, setCampaigns] = useState([]);
  const [pdfData, setPdfData] = useState('')
  const [showDeals, setShowDeals] = useState(false);
  const [disable, setDisable] = useState(true)
  const navigate = useNavigate();
  const [signPdf, setSignPdf] = useState({})
  const { founderEsign } = useSelector(state => state.founderEsignStatus)
  const [openModal, setOpenModal] = useState(false)

  const handleClose = () => { setOpenModal(false) }
  const fetchValue = (value) => {
    setShowDeals(value);
  };

  useEffect(() => {
    CompanyServices.getAllCampaignOfCompany(
      localStorage.getItem("company_id")
    ).then((res) => {
      console.log(res);
      if (res.status === 200 || res.status === 201) {
        setCampaigns(res.data);
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
              {/* <Box
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
                            > */}
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
                    onClick={() => {
                      sessionStorage.setItem("campaign_id", item.id);
                      sessionStorage.setItem("is_campaign_added", true);
                      navigate("/dashboard-founder/campaigns-statics");
                    }}
                  >
                    <div className="AddCompany2">
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
                            <img src={CopanyLogo} alt="not found" />
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
                              CSOP
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
                            Settl. is a technology-driven accommodation platform
                            focused on providing a convenient and high-quality
                            living expe…
                          </Typography>
                          <button className="colivingBtn">Coliving</button>
                        </div>
                      </div>
                      <Box className="raisedflex">
                        <div>
                          <b>206.01%</b>
                          <br />
                          <span>Raised</span>
                        </div>
                        <div>
                          <b>3 days</b>
                          <br />
                          <span>End Date</span>
                        </div>
                        <div>
                          <b>₹10,000</b>
                          <br />
                          <span>Min invest</span>
                        </div>
                      </Box>
                      <Button
                        style={{
                          border: "2px solid green",
                          borderRadius: 50,
                          background: "trasparent",
                          color: "green",
                          alignSelf: "center",
                        }}
                      >
                        Under Review
                      </Button>
                    </div>
                  </div>
                </Box>
              ))}
              {/* </Box> */}
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
