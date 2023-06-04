import React, { useState, useEffect } from "react";
import { Button, Card, CardContent, Grid, Link } from "@mui/material";
import logo from "../../images/investments/logo1.png";
import Share from "../../images/assets/share.png";
import Arrow from "../../images/assets/yellowArrow.png";
import Group1 from "../../images/highlights/group1.png";
import { styled } from "@mui/material/styles";
import Group2 from "../../images/highlights/group2.png";
import Group3 from "../../images/highlights/group3.png";
import Group4 from "../../images/highlights/group4.png";
import FirstImage from "../../images/highlights/firstGroup.png";
import SecondImage from "../../images/highlights/secondGroup.png";
import ThirdImage from "../../images/highlights/thirdGroup.png";
import "../../css/LiveDealsDetails/liveDetails.css";
import DealsFaqs from "./DealsFaqs";
import YoutubeEmbed from "./YouTubeEmbed";
import DealTerm from "./DealTerms";
import { useLocation, useNavigate } from "react-router-dom";
import Team from "./Team";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Switch from "@mui/material/Switch";
import SpeedDial, { SpeedDialProps } from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useSelector } from "react-redux";
import UserServices from "../../service/UserService";
import CompanyServices from "../../service/Company";
import services from "../../service/investor.kyc";
import { toast } from "react-hot-toast";
import { Highlight } from "@mui/icons-material";
const actions = [
  {
    icon: (
      <Link
        style={{ color: "grey" }}
        target="_blank"
        href="https://www.facebook.com/sharer.php?u=https://dev.to/dsasse07/beginner-s-guide-to-jest-testing-in-react-1nig"
      >
        <FacebookRoundedIcon style={{ marginTop: 8 }} />
      </Link>
    ),
    name: "Facebook",
  },
  {
    icon: (
      <Link
        style={{ color: "grey" }}
        target="_blank"
        href="https://www.instagram.com/sharer.php?u=https://dev.to/dsasse07/beginner-s-guide-to-jest-testing-in-react-1nig"
      >
        <InstagramIcon style={{ marginTop: 8 }} />
      </Link>
    ),
    name: "Instagram",
  },
  {
    icon: (
      <Link
        style={{ color: "grey" }}
        target="_blank"
        href="https://twitter.com/intent/tweet?url=https://dev.to/dsasse07/beginner-s-guide-to-jest-testing-in-react-1nig&text=Beginner's%20Guide%20to%20Jest%20Testing%20in%20React&via=dannysasse"
      >
        <TwitterIcon style={{ marginTop: 8 }} />
      </Link>
    ),
    name: "Twitter",
  },
  {
    icon: (
      <Link
        style={{ color: "grey" }}
        target="_blank"
        href="whatsapp://send?text=<%= request.original_url %>"
      >
        <WhatsAppIcon style={{ marginTop: 8 }} />
      </Link>
    ),
    name: "Whatsapp",
  },
  // { icon: <Link style={{color: 'grey'}} target="_blank" href=""><TelegramIcon style={{marginTop:8}} /></Link>, name: "Telegram" },
  {
    icon: (
      <Link
        style={{ color: "grey" }}
        target="_blank"
        href="https://www.linkedin.com/shareArticle?url=https://dev.to/dsasse07/beginner-s-guide-to-jest-testing-in-react-1nig&title=Beginner's%20Guide%20to%20Jest%20Testing%20in%20React"
      >
        <LinkedInIcon style={{ marginTop: 8 }} />
      </Link>
    ),
    name: "Telegram",
  },
];

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  marginLeft: "1em",
}));
export default function LiveDetailsMain() {
  const [activeTab, setActiveTab] = useState(1);
  const [gridxsFirst, setGridxsFirst] = useState(2);
  const [gridxsSecond, setgridxsSecond] = useState(6);
  const ratio = parseInt(window.innerWidth);
  const navigate = useNavigate();
  const [direction, setDirection] = React.useState("right");
  const [hidden, setHidden] = React.useState(false);
  const [campaignData, setCampaignData] = useState({});
  const [hightLightData, setHightLightData] = useState([]);
  const [companyData, setCompanyData] = useState({});
  const [faqData, setFaqData] = useState([]);
  const [peopleData, setPeopleData] = useState([]);
  const [kycData, setKycData] = useState({});
  const { userData } = useSelector((state) => state.loginData);
  const handleDirectionChange = (event) => {
    setDirection(event.target.value);
  };
  const location = useLocation();
  const handleHiddenChange = (event) => {
    setHidden(event.target.checked);
  };
  useEffect(() => {
    services.getInvestorKycData(userData.id).then((response, error) => {
      if (response.status === 200) {
        setKycData(response?.data);
      }
    });
    // CompanyServices.getCampaignById(location.state?.campaignId).then(res => {
    //     if (res.status === 200 || res.status === 201) {
    //         console.log(res.data)
    //         setCampaignData(res.data)
    //     }
    // })
    // CompanyServices.getHighlights(location.state?.campaignId).then(res => {
    //     if (res.status === 200 || res.status === 201) {
    //         console.log(res.data)
    //         setHightLightData(res.data)
    //     }
    // })
    // CompanyServices.getCampaignsFaqs(location.state?.campaignId).then(res => {
    //     if (res.status === 200 || res.status === 201) {
    //         console.log(res.data)
    //         setFaqData(res.data)
    //     }
    // })
    CompanyServices.getCompanyDetailByCampaign(location.state?.campaignId).then(
      (res) => {
        if (res.status === 200 || res.status === 201) {
          console.log("companyData = ", res.data);
          setCompanyData(res.data.company_id);
          setFaqData(res.data.faqs);
          setPeopleData(res.data.company_id.peoples);
          setCampaignData(res.data);
          setHightLightData(res.data.higlights);
        }
      }
    );

    window.scrollTo(0, 0);
    if (ratio < 850) {
      setGridxsFirst(1);
      setgridxsSecond(12);
    }
    setBlurAmount(userData?.id ? 0 : 4.5);
  }, []);
  console.log(location.state);
  const [blurAmount, setBlurAmount] = useState(0);
  const { userKycData } = useSelector((state) => state.kycData);

  const handleNavigate = () => {
    !userKycData?.mobile_number_verified
      ? navigate("/complete-your-profile")
      : !userKycData?.pan_card_verified || !userKycData?.pan_card
      ? navigate("/complete-your-profile/verify-kyc")
      : !userKycData?.address_line_1 ||
        !userKycData?.city ||
        !userKycData?.state ||
        !userKycData?.pincode
      ? navigate("/complete-your-profile/verify-address")
      : !userKycData?.aadhaar_card_verified || !userKycData?.aadhaar_card_number
      ? navigate("/complete-your-profile/verify-kyc/aadhar-uid")
      : !userKycData?.bank_account_verified ||
        !userKycData?.ifsc_code ||
        !userKycData?.bank_account ||
        !userKycData?.bank_name
      ? navigate("/complete-your-profile/payment-details")
      : toast.success("Already verified! Please check profile", {
          position: "top-right",
          style: {
            borderRadius: "3px",
            background: "green",
            color: "#fff",
          },
        });
  };

  return (
    <div className="get-started-container">
      <div style={{ paddingTop: "8em" }}>
        <Grid container spacing={gridxsFirst}>
          <Grid item xs={gridxsSecond}>
            {campaignData?.ama_youtube_video ? (
              <YoutubeEmbed
                link={campaignData?.ama_youtube_video}
                width={gridxsFirst === 2 ? "90%" : "100%"}
                height={"357px"}
                embedId={"g_aELYEBc4Q"}
              />
            ) : (
              <div
                className="investor-home-heading"
                style={{ fontSize: "16px", marginTop: "8rem" }}
              >
                {/* No youtube link available for preview */}
                <video width="90%" height="300" controls>
                  <source src="" type="video/mp4" />
                </video>
              </div>
            )}
          </Grid>
          <Grid item xs={gridxsSecond}>
            <div className="header-section-deals-detail">
              <img src={companyData.company_logo} height={90}></img>
              <span className="live-details-deals-txt-head">
                {companyData.company_name}
              </span>
            </div>
            <div className="header-section-deals-detail">
              <div className="chipset-details-live">Health</div>
              <div className="chipset-details-live">Personal Health</div>
              <div className="chipset-details-live">WELLNESS</div>
            </div>
            <div
              style={{ filter: `blur(${blurAmount}px)` }}
              className="live-deals-details-decription-conatiner"
            >
              <span className="live-deals-details-decription">
                {companyData.product_description}
              </span>
            </div>
            <div className="footer-card-section live-details">
              <div className="numbers-investors live-details">
                <span
                  className="percentage-investment"
                  style={{ fontSize: "20px" }}
                >
                  0%
                </span>
                <span className="investment-status">Completed</span>
              </div>
              <div className="vertical-line-invest live-details"></div>
              <div className="numbers-investors live-details">
                <span
                  className="percentage-investment live"
                  style={{ fontSize: "20px" }}
                >
                  10 days
                </span>
                <span className="investment-status live">End Date </span>
              </div>
              <div className="vertical-line-invest live-details"></div>
              <div className="numbers-investors live-details">
                <span
                  className="percentage-investment live"
                  style={{ fontSize: "20px" }}
                >
                  ₹5,000
                </span>
                <span className="investment-status live">Min Enrollment</span>
              </div>
            </div>
            <div className="outline-progress-bar-live-deals">
              <div className="inline-progress-bar-live-deals"></div>
            </div>
            <div className="header-section-deals-detail btn-section">
              {console.log("userData", userData)}
              <Button
                disabled={userData?.user_type === "FOUNDER" ? true : false}
                onClick={() => {
                  userData?.id
                    ? kycData?.bank_account &&
                      kycData?.pan_card &&
                      kycData?.pan_card_verified &&
                      kycData?.address_line_1 &&
                      kycData?.city &&
                      kycData?.state &&
                      kycData?.country &&
                      kycData?.pincode &&
                      kycData?.bank_name &&
                      kycData?.bank_account &&
                      kycData?.ifsc_code &&
                      kycData?.bank_account_verified &&
                      kycData?.mobile_number &&
                      kycData?.mobile_number_verified &&
                      kycData?.aadhaar_card_verified &&
                      kycData?.aadhaar_card_number
                      ? navigate("/pay-to-subscribe", {
                          state: {
                            campaignId: campaignData.id,
                            companyName: companyData.company_name,
                          },
                        })
                      : handleNavigate()
                    : navigate("/login");
                }}
                style={{ textTransform: "none" }}
                className={
                  userData?.user_type === "FOUNDER"
                    ? "disable-enroll-btn"
                    : "invest-btn-section-deals"
                }
              >
                ENROLL NOW
              </Button>
              <StyledSpeedDial
                sx={{
                  "& .MuiFab-primary": {
                    backgroundColor: "#E3E3E3",
                    color: "black",
                    borderRadius: 50,
                  },
                  "& .MuiFab-primary:hover": {
                    backgroundColor: "#F0C127",
                    color: "black",
                  },
                }}
                ariaLabel="SpeedDial playground example"
                hidden={hidden}
                icon={<ShareIcon />}
                direction={direction}
              >
                {actions.map((action) => (
                  <SpeedDialAction
                    classes={{
                      ".MuiFab-circular": {
                        borderRadius: 50,
                      },
                    }}
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                  />
                ))}
              </StyledSpeedDial>
              {/* <div className="rounded-container-share-btn"><img src={Share} width={25} height={27}></img></div> */}
            </div>
          </Grid>
        </Grid>
        <div
          className="heading-live-deals-details"
          style={{ filter: `blur(${blurAmount}px)` }}
        >
          <h2 className="header-txt-deals-details">Ask Me Anything</h2>
          <span
            className="sub-header-txt-deals"
            style={{ maxWidth: "645px", margin: "auto" }}
          >
            Mynt users can interact directly with the founders in a 60 mins
            online session and ask any questions they have regarding the
            campaign.
          </span>
        </div>
        <div
          className="date-booked-register-section"
          style={{ filter: `blur(${blurAmount}px)` }}
        >
          {/* <div className="live-deals-box-date">
            <span style={{ fontSize: "14px", fontWeight: "bold" }}>
              Recorded on
            </span>
            <span
              className="header-txt-deals-details"
              style={{ fontFamily: "poppins", fontSIze: "18px" }}
            >
              07:00 PM
            </span>
            <span className="live-deals-details-decription">24 Dec 2022</span>
          </div> */}
          <div className="live-deals-box-date second">
                        <span style={{ fontSize: '14px', fontWeight: 600 }}>Book A Spot</span>
                        <div className="btn-register-live-deals"><span>Register</span><img style={{ marginLeft: '10px' }} src={Arrow} width={8} height={10}></img></div>
                    </div>
        </div>
        {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                    <YoutubeEmbed width={gridxsFirst === 2 ? '486px' : '100%'} height={'271.6px'} embedId={"g_aELYEBc4Q"} />
                </div> */}
        {hightLightData?.length > 0 && (
          <>
            <div className="heading-live-deals-details">
              <span className="header-txt-deals-details">Highlights</span>
            </div>
            <div style={{ marginTop: "30px" }}>
              <Grid container spacing={gridxsFirst}>
                {hightLightData?.map((item, index) => (
                  <Grid key={index} item xs={gridxsSecond}>
                    <Card className="card-content-live-details">
                      <CardContent>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <img src={Group1} height={47} width={53}></img>
                          <span
                            style={{
                              fontSize: "18px",
                              marginLeft: "25px",
                              fontWeight: "bold",
                            }}
                          >
                            {item.title}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </div>
          </>
        )}
        <div className="tabs-section-details-deals">
          <div className="horizontal-ruler-tabs"></div>
          <div className="btn-section-my-profile details">
            <div
              className="active-btn-container details"
              style={
                activeTab === 1
                  ? { background: "black", color: "white" }
                  : { background: "#F4F4F4", color: "black" }
              }
              onClick={() => {
                setActiveTab(1);
              }}
            >
              Pitch
            </div>
            <div
              className="active-btn-container details"
              style={
                activeTab === 2
                  ? { background: "black", color: "white" }
                  : { background: "#F4F4F4", color: "black" }
              }
              onClick={() => {
                setActiveTab(2);
              }}
            >
              FAQs
            </div>
            <div
              className="active-btn-container details"
              style={
                activeTab === 3
                  ? { background: "black", color: "white" }
                  : { background: "#F4F4F4", color: "black" }
              }
              onClick={() => {
                setActiveTab(3);
              }}
            >
              Deal Terms
            </div>
            <div
              className="active-btn-container details"
              style={
                activeTab === 4
                  ? { background: "black", color: "white" }
                  : { background: "#F4F4F4", color: "black" }
              }
              onClick={() => {
                setActiveTab(4);
              }}
            >
              People
            </div>
          </div>
          <div className="horizontal-ruler-tabs"></div>
        </div>
        {activeTab === 2 && (
          <DealsFaqs faqData={faqData} companyData={companyData} />
        )}
        {activeTab === 1 && (
          <div>
            <div
              className="investor-home-heading"
              style={{ fontSize: "24px", marginTop: "60px" }}
            >
              {companyData.company_name} - Pitch
            </div>
            <div
              style={{
                display: "grid",
                justifyContent: "center",
                marginTop: "40px",
                filter: `blur(${blurAmount}px)`,
              }}
            >
              {/* <iframe
                src={`http://docs.google.com/gview?url=${companyData?.company_pitch}&embedded=true`}
                style={{ width: "500px", height: "500px" }}
                frameBorder="0"
              ></iframe> */}
              <object
                data={`http://docs.google.com/gview?url=${companyData?.company_pitch}&embedded=true`}
                type="application/pdf"
                width="800px"
                height="1000px"
              >
                <p>
                  Alternative text - include a link{" "}
                  <a
                    href={`http://docs.google.com/gview?url=${companyData?.company_pitch}&embedded=true`}
                  >
                    to the PDF!
                  </a>
                </p>
              </object>
              {/* <img
                src={FirstImage}
                height={gridxsFirst === 1 ? "193" : "592"}
                style={

                  gridxsFirst === 1
                    ? { width: "90%", margin: "auto" }
                    : { width: "90%", margin: "auto" }
                }
              ></img>
              <img
                src={SecondImage}
                height={gridxsFirst === 1 ? "171" : "592"}
                style={
                  gridxsFirst === 1
                    ? { width: "90%", margin: "auto", paddingTop: "30px" }
                    : { width: "90%", margin: "auto", paddingTop: "30px" }
                }
              ></img>
              <img
                src={ThirdImage}
                height={gridxsFirst === 1 ? "179" : "592"}
                style={
                  gridxsFirst === 1
                    ? { width: "90%", margin: "auto", paddingTop: "30px" }
                    : { width: "90%", margin: "auto", paddingTop: "30px" }
                }
              ></img> */}
            </div>
          </div>
        )}
        {activeTab === 3 && (
          <div>
            <div
              className="investor-home-heading"
              style={{ fontSize: "24px", marginTop: "60px" }}
            >
              Deal Terms
            </div>
            <DealTerm
              companyData={companyData}
              blurAmount={blurAmount}
              dealTermData={location.state?.campaignData}
            />
          </div>
        )}
        {activeTab === 4 && (
          <div>
            <div
              className="investor-home-heading"
              style={{
                fontSize: "24px",
                marginTop: "60px",
                marginBottom: "30px",
              }}
            ></div>
            <Team blurAmount={blurAmount} peopleData={peopleData} />
          </div>
        )}
      </div>
    </div>
  );
}
