import {
  Box,
  Button,
  Card,
  Grid,
  LinearProgress,
  Typography,
  Container,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import DrawerFounder from "../../component/FounderDrawer/DrawerFounder";
import CompanyServices from "../../service/Company";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  getCompanyProfileProgress,
  getFAQProgress,
  getHighLightsProgress,
  getPeopleProgress,
  getPitchProgress,
  getPressProgress,
  getPromotionProgress,
  getUploadDocumentsProgress,
} from "./progressRule";
import Footer from "../../component/Footer";
import { FounderCampaignAction } from "../../Redux/actions/FounderEsign";

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

const FounderCampaignsStats = () => {
  const navigate = useNavigate();
  const location = window.location.pathname;
  const classes = useStyles();
  const dispatch = useDispatch()
  const [progress, setProgress] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [campaignData, setCampaignData] = useState({});
  const tabInfo = [
    {
      title: "Upload Pitch",
      description: "Upload a pdf of your pitch deck",
      progressGetter: getPitchProgress(campaignData?.pitch),
    },
    {
      title: "Company Profile",
      description: "Tell us a little about your company",
      progressGetter: getCompanyProfileProgress(campaignData?.company_id),
    },
    {
      title: "People",
      description: "Tell us about your team, investors and advisors",
      progressGetter: getPeopleProgress(campaignData?.company_id?.peoples),
    },
    {
      title: "FAQs",
      description: "Help investors understand your ideas even better",
      progressGetter: getFAQProgress(campaignData?.faqs),
    },
    {
      title: "Highlights",
      description: "Mention the top highlights that you have achieved",
      progressGetter: getHighLightsProgress(campaignData?.higlights),
    },
    {
      title: "Get Promotion",
      description:
        "Mention the benefits or discounts an investor can get once he enrolls to your campaign",
      progressGetter: getPromotionProgress(campaignData?.rewards),
    },
    {
      title: "Press",
      description: "Show your reach!",
      progressGetter: getPressProgress(campaignData?.company_id?.press),
    },
    {
      title: "Upload Documents",
      description: "Upload all due diligence documents for investors to review",
      progressGetter: getUploadDocumentsProgress(
        campaignData?.company_id?.documents
      ),
    },
  ];

  function LinearProgressWithLabel(props) {
    const classes = useStyles();
    return (
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
          <LinearProgress
            // color="rgb(251, 223, 53)"
            variant="determinate"
            {...props}
          />
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

  const getCampaignData = (id) => {
    setIsLoading(true);
    CompanyServices.getCompanyDetailByCampaign(id).then((res) => {
      if (res.status === 200 || res.status === 201) {
        setCampaignData(res.data);
        dispatch(FounderCampaignAction(res?.data))
      } else {
        setCampaignData({});
      }
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getCampaignData(sessionStorage.getItem("campaign_id"));
  }, []);

  return (
    <>
      <div style={{ display: "flex", position: "relative" }}>
        {location.includes("/dashboard") && <DrawerFounder />}
        <div className="dashboard-container">
          <Container maxWidth="lg">
            <h3
              style={{ padding: "17px 16px" }}
            >{`Compaign ${sessionStorage.getItem("campaign_id")}`}</h3>
            <br />
            {isLoading ? (
              <CircularProgress
                style={{
                  position: "absolute",
                  color: "black",
                  right: "550px",
                  top: "400px",
                  fontSize: 10,
                  width: 80,
                  height: 80,
                  alignSelf: "center",
                }}
              />
            ) : (
              <Grid
                style={{ marginBottom: "5rem" }}
                container
                spacing={3}
                marginTop={3}
              >
                {tabInfo.map((item, i) => {
                  return (
                    <Grid item xs={12} sm={6}>
                      <Card
                        onClick={() =>
                          navigate("/dashboard-founder/campaigns-tabs", {
                            state: { navTab: i },
                          })
                        }
                        className={classes.paperconten}
                      >
                        <div className={classes.Card}>
                          <b className={classes.typofont}>{item.title}</b>
                          <Button
                            className={
                              item.progressGetter?.progress === 100
                                ? classes.btn
                                : classes.btn2
                            }
                            variant={
                              item.progressGetter?.progress !== 100
                                ? "outlined"
                                : "contained"
                            }
                            color={
                              item.progressGetter?.progress !== 100
                                ? "secondary"
                                : "default"
                            }
                          >
                            {item.progressGetter?.status}
                          </Button>
                        </div>
                        <Box className={classes.para}>
                          <p>{item.description}</p>
                        </Box>
                        <div className={classes.root2}>
                          <LinearProgressWithLabel
                            value={item.progressGetter?.progress}
                          />
                        </div>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            )}
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FounderCampaignsStats;
