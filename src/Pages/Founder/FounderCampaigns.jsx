import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  LinearProgress,
  Typography,
  Card,
} from "@material-ui/core";
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
function LinearProgressWithLabel(props) {
  const classes = useStyles();
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress color="rgb(251, 223, 53)"  variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography
          variant="body2"
          color=""
          className={classes.root2}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

const FounderCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const classes = useStyles();
  const location = window.location.pathname;
  const ratio = parseInt(window.innerWidth);
  const [showDeals, setShowDeals] = useState(false);
  const [progress, setProgress] = useState(10);

  const navigate = useNavigate();

  useEffect(() => {
    CompanyServices.getAllCampaignOfCompany(
      localStorage.getItem("company_id")
    ).then((res) => {
      console.log(res);
      if (res.status === 200 || res.status === 201) {
        setCampaigns(res.data);
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
              <Grid item xs={6} md={3}>
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
                    width: "20rem",
                    textAlign: "left",
                    fontFamily: "poppins",
                  }}
                >
                  <div style={{ marginTop: "3rem", width: "20rem" }}>
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
                        onClick={() => {
                          sessionStorage.setItem("campaign_id", item.id);
                          sessionStorage.setItem("is_campaign_added", true);
                          navigate("/dashboard-founder/campaigns-tabs");
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
                                    zIndex: "444499",
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
                                Settl. is a technology-driven accommodation
                                platform focused on providing a convenient and
                                high-quality living expe…
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
                        </div>
                      </div>
                    </Box>
                  ))}
                </Box>
              </Grid>
              <Grid
                style={{ marginBottom: "5rem" }}
                container
                spacing={3}
                marginTop={3}
              >
                <Grid item xs={12} sm={6}>
                  <Card
                    onClick={() =>
                      navigate("/dashboard-founder/campaigns-tabs", {
                        state: { navTab: 0 },
                      })
                    }
                    className={classes.paperconten}
                  >
                    <div className={classes.Card}>
                      <b className={classes.typofont}>Company Profile</b>
                      <Button className={classes.btn} variant="contained">
                        Completed
                      </Button>
                    </div>
                    <Box className={classes.para}>
                      <p>Tell us a little about your company</p>
                    </Box>
                    <div className={classes.root2}>
                      <LinearProgressWithLabel value={progress} />
                    </div>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Card
                    onClick={() =>
                      navigate("/dashboard-founder/campaigns-tabs", {
                        state: { navTab: 1 },
                      })
                    }
                    className={classes.paperconten}
                  >
                    <div className={classes.Card}>
                      <b className={classes.typofont}>Upload Pitch</b>
                      <Button
                        className={classes.btn2}
                        color="secondary"
                        variant="outlined"
                      >
                        Pending
                      </Button>
                    </div>
                    <Box>
                      <p className={classes.para}>
                        Upload a pdf of your pitch deck
                      </p>
                    </Box>
                    <div className={classes.root2}>
                      <LinearProgressWithLabel value={progress} />
                    </div>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Card
                    onClick={() =>
                      navigate("/dashboard-founder/campaigns-tabs", {
                        state: { navTab: 2 },
                      })
                    }
                    className={classes.paperconten}
                  >
                    <div className={classes.Card}>
                      <b className={classes.typofont}>People</b>
                      <Button
                        className={classes.btn2}
                        color="secondary"
                        variant="outlined"
                      >
                        Pending
                      </Button>
                    </div>
                    <Box>
                      <p className={classes.para}>
                        Tell us about your team, investors and advisors{" "}
                      </p>
                    </Box>
                    <div className={classes.root2}>
                      <LinearProgressWithLabel value={progress} />
                    </div>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Card
                    onClick={() =>
                      navigate("/dashboard-founder/campaigns-tabs", {
                        state: { navTab: 3 },
                      })
                    }
                    className={classes.paperconten}
                  >
                    <div className={classes.Card}>
                      <b className={classes.typofont}>FAQs</b>
                      <Button
                        className={classes.btn2}
                        color="secondary"
                        variant="outlined"
                      >
                        Pending
                      </Button>
                    </div>
                    <Box className={classes.para}>
                      <p>Help investors understand your ideas even better</p>
                    </Box>
                    <div className={classes.root2}>
                      <LinearProgressWithLabel value={progress} />
                    </div>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Card
                    onClick={() =>
                      navigate("/dashboard-founder/campaigns-tabs", {
                        state: { navTab: 4 },
                      })
                    }
                    className={classes.paperconten}
                  >
                    <div className={classes.Card}>
                      <b className={classes.typofont}>Highlights</b>
                      <Button
                        className={classes.btn2}
                        color="secondary"
                        variant="outlined"
                      >
                        Pending
                      </Button>
                    </div>
                    <Box>
                      <p className={classes.para}>
                        Mention the top highlights that you have achieved{" "}
                      </p>
                    </Box>
                    <div className={classes.root2}>
                      <LinearProgressWithLabel value={progress} />
                    </div>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Card
                    onClick={() =>
                      navigate("/dashboard-founder/campaigns-tabs", {
                        state: { navTab: 5 },
                      })
                    }
                    className={classes.paperconten}
                  >
                    <div className={classes.Card}>
                      <b className={classes.typofont}>Get Promotion</b>
                      <Button
                        className={classes.btn2}
                        color="secondary"
                        variant="outlined"
                      >
                        Completed
                      </Button>
                    </div>
                    <Box className={classes.para}>
                      <p>
                        Mention the benefits or discounts an investor can get
                        once he enrolls to your campaign
                      </p>
                    </Box>
                    <div className={classes.root2}>
                      <LinearProgressWithLabel value={progress} />
                    </div>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Card
                    onClick={() =>
                      navigate("/dashboard-founder/campaigns-tabs", {
                        state: { navTab: 6 },
                      })
                    }
                    className={classes.paperconten}
                  >
                    <div className={classes.Card}>
                      <b className={classes.typofont}>Press</b>
                      <Button
                        className={classes.btn2}
                        color="secondary"
                        variant="outlined"
                      >
                        Pending
                      </Button>
                    </div>
                    <Box>
                      <p className={classes.para}>Show your reach!</p>
                    </Box>
                    <div className={classes.root2}>
                      <LinearProgressWithLabel value={progress} />
                    </div>
                  </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Card
                    onClick={() =>
                      navigate("/dashboard-founder/campaigns-tabs", {
                        state: { navTab: 7 },
                      })
                    }
                    className={classes.paperconten}
                  >
                    <div className={classes.Card}>
                      <b className={classes.typofont}>Upload Documents</b>
                      <Button className={classes.btn} variant="contained">
                        Completed
                      </Button>
                    </div>
                    <Box className={classes.para}>
                      <p>
                        Upload all due diligence documents for investors to
                        review{" "}
                      </p>
                    </Box>
                    <div className={classes.root2}>
                      <LinearProgressWithLabel value={progress} />
                    </div>
                  </Card>
                </Grid>
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
