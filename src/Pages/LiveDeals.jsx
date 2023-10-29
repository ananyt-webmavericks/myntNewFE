import React, { useState, useEffect } from "react";
import { Container, Grid, Card, CardContent, Typography } from "@mui/material";
import DrawerMain from "../component/Dashboard/Drawer";
import Footer from "../component/Footer";
import "../css/Dashboard/liveDeals.css";
import SearchBar from "../component/LiveDeals/SearchBar";
import OpenInvestment from "../component/Home/OpenInvestment";
import Eveez from "../images/investments/Eveez.png";
import BG1 from "../images/investments/image1.png";
import Logo1 from "../images/investments/logo1.png";
import BG2 from "../images/investments/image2.png";
import Logo2 from "../images/investments/logo2.png";
import BG3 from "../images/investments/image3.png";
import BG4 from "../images/investments/image4.jpg";
import Logo3 from "../images/investments/logo3.png";
import infoIcon from "../images/assets/info-icon.png";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import CompanyServices from "../service/Company";
import { dealsStoreAction } from "../Redux/actions/company";
import { useDispatch, useSelector } from "react-redux";
import DrawerFounder from "../component/FounderDrawer/DrawerFounder";
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const LiveDeals = () => {
  const [data, setData] = useState(null)
  const [activeBtn, setActiveBtn] = useState(1)
  const [loader, setLoader] = useState(true)
  const [errorTerms, setErrorTerms] = useState('')
  const [errorTypes, setErrorTypes] = useState('')
  const [spaceing, setSpaceing] = useState(4)
  const [gridxsFirst, setGridxsFirst] = useState(3)
  const [dealTypes, setDealTypes] = useState([])
  const { userData } = useSelector((state) => state.loginData)
  const [superArray, setSuperArray] = useState([])
  const [dealTerms, setDealTerms] = useState([])
  const ratio = parseInt(window.innerWidth);
  const location = window.location.pathname;
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { deals } = useSelector(state => state.companyData)
  console.log("superarr", superArray)
  const backgroundImageUrls = [BG1, BG2, BG3, BG4];

  const handleOrderTabs = (tabNo) => {
    setActiveBtn(tabNo)
    const content = document.getElementById(`tab-${tabNo}`);
    const yOffset = -100;
    const y = content.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  const handleArrange = (dealTypes, campaigns) => {
    const result = campaigns.reduce((acc, campaign) => {
      console.log("campaign", campaign)
      const dealTypeId = campaign?.deal_terms?.security_type;
      const dealType = dealTypes.find((dt) => dt?.id === dealTypeId);
      const campaignObj = { ...campaign };

      if (acc[dealTypeId]) {
        acc[dealTypeId].campaigns.push(campaignObj);
      } else {
        acc[dealTypeId] = {
          id: dealTypeId,
          deal_type: dealType?.deal_name,
          deal_tagline: dealType?.deal_tagline,
          deal_description: dealType?.deal_description,
          campaigns: [campaignObj],
        };
      }

      return acc;
    }, {});

    const groupedCampaigns = Object.values(result);

    console.log("groupedCampaigns", groupedCampaigns);

    setSuperArray(groupedCampaigns);
  };

  useEffect(() => {
    return handleArrange(dealTypes, deals);
  }, [dealTypes, deals]);

  useEffect(() => {
    CompanyServices.getAllDealTypes().then(res => {
      if (res.status === 200 || res.status === 201) {
        setDealTypes(res.data)
        if (res?.data?.length > 0) {
          getAllDealTerms()
        }
        setTimeout(() => {
          setLoader(false)
        }, 1500);
      } else {
        setErrorTypes('Deal types not available')
        setTimeout(() => {
          setLoader(false)
        }, 1500);
        console.log("Get Deal Type Failed!")
      }
    })
    const getAllDealTerms = () => {
      CompanyServices.getAllDealTerms().then(res => {
        if (res.status === 200 || res.status === 201) {
          if (res?.data?.data?.length > 0) {
            const dataWithRandomBackgrounds = res?.data?.data.map((item) => {
              const randomIndex = Math.floor(Math.random() * backgroundImageUrls.length);
              const randomBackgroundImage = backgroundImageUrls[randomIndex];
              return {
                ...item,
                backgroundImage: randomBackgroundImage,
              };
            });
            dispatch(dealsStoreAction(dataWithRandomBackgrounds))
            setDealTerms(res?.data?.data)
            setTimeout(() => {
              setLoader(false)
            }, 1500);
          } else {
            setErrorTerms('New Deals Coming Soon')
            setTimeout(() => {
              setLoader(false)
            }, 1500);
          }

        } else {
          setErrorTerms('New Deals Coming Soon')
          console.log("Get Deal Terms Failed!")
        }
      })
    }

    // getAllDealTerms()

    window.scrollTo(0, 0);

    if (ratio < 1230) {
      setSpaceing(3)
      setGridxsFirst(4)
    }
    if (ratio < 830) {
      setSpaceing(2)
      setGridxsFirst(6)
    }
    if (ratio < 550) {
      setSpaceing(1)
      setGridxsFirst(12)
    }
  }, [])
  const handleRotate = (index) => {
    let new_array = data;
    new_array[index].checked = !new_array[index].checked;
    console.log(new_array[index].checked);
    setData([...new_array]);
  };

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 11,
      fontFamily: "poppins",
    },
  }));

  // console.log("deal", deals);
  // console.log("userData", userData);

  const popperOptions = {
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [50, 0],
        },
      },
    ],
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
  return (
    <>
      <div style={{ display: "flex", position: "relative" }}>
        {location.includes("/dashboard") && userData.user_type === "FOUNDER" ? (
          <DrawerFounder display={"none"} />
        ) : (
          <DrawerMain display={"none"} />
        )}
        <div
          className="dashboard-container"
          style={{ height: "100%", marginBottom: "5em" }}
        >
          <Container className="live-opportunities-container" maxWidth="lg">
            <div style={{ display: "grid" }}>
              <span className="get-started-heading startup">
                Live Opportunities
              </span>
              <span style={{ fontSize: "16px", color: "#777777" }}>
                Browse current enrollment opportunities on Mynt.
              </span>
            </div>
            <SearchBar filteredData={dealTerms} />

            <div style={{ margin: "60px 0px" }}>
              <Typography className="live-deals-heading">
                Live Opportunities
              </Typography>
            </div>

            <div className="button-container-liveDeals">

              {loader ?
                <div style={{ justifyContent: 'center', display: 'flex', marginTop: '5em', marginBottom: '5em' }}>
                  <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                </div>
                :
                <>
                  {errorTypes ?
                    <p style={{ textAlign: 'center' }}>{errorTypes}</p>
                    :
                    <>
                      {
                        dealTypes?.slice(0, 4)
                          ?.filter((item) => dealTerms.some((term) => term.deal_type.deal_name === item.deal_name))
                          ?.map((item, index) => {
                            // let message;
                            // switch (index) {
                            //   case 0:
                            //     message = 
                            //     break;

                            //   default:
                            //     break;
                            // }
                            return (
                              <div className="active-btn-container details" style={index + 1 === activeBtn ? { background: 'black', color: 'white' } : { background: '#F4F4F4', color: 'black' }}
                                onClick={() => handleOrderTabs(index + 1)}>
                                {/* <div > */}
                                <span >{item.deal_name}</span>
                                {/* <Tooltip title="Delete">
                                  <IconButton>
                                    <InfoIcon className="hover-info-btn" style={index + 1 === activeBtn ? { color: 'white' } : { color: 'black' }} />
                                  </IconButton>
                                </Tooltip> */}

                                {/* <div className="mini-active-btn-highliter">Live</div> */}
                                {/* </div> */}
                              </div>
                            )
                          })
                      }
                    </>
                  }

                  {/* <div className="active-btn-container details" style={activeBtn === 2 ? { background: 'black', color: 'white' } : { background: '#F4F4F4', color: 'black' }} onClick={() => handleOrderTabs(2)}>
                                <span>CCD</span>
                            </div>

                            <div className="active-btn-container details" style={activeBtn === 3 ? { background: 'black', color: 'white' } : { background: '#F4F4F4', color: 'black' }} onClick={() => handleOrderTabs(3)}>
                                <span>NCD</span>
                            </div>

                            <div className="active-btn-container details" style={activeBtn === 4 ? { background: 'black', color: 'white' } : { background: '#F4F4F4', color: 'black' }} onClick={() => handleOrderTabs(4)}>
                                <span>ID</span>
                            </div> */}
                </>

              }
            </div>
            {/* <div style={{ textAlign: 'center', marginBottom: '2em' }}>
                            {activeBtn === 1 &&
                                <div style={{ display: 'grid' }}>
                                    <span style={{ fontSize: '18px' }}>Subscribe to rapidly growing companies with a low minimum Subscription requirement.</span>
                                </div>
                            }
                            {activeBtn === 2 &&
                                <div style={{ display: 'grid', marginTop: '0.5rem' }}>
                                    <span style={{ fontSize: '18px' }}>Hybrid securities convertible into equity</span>
                                </div>
                            }
                            {activeBtn === 3 &&
                                <div style={{ display: 'grid', marginTop: '0.5rem' }}>
                                    <span style={{ fontSize: '18px' }}>Short term fixed income opportunities</span>
                                </div>
                            }
                            {activeBtn === 4 &&
                                <div style={{ display: 'grid', marginTop: '0.5rem' }}>
                                    <span style={{ fontSize: '18px' }}>Short term fixed income opportunities</span>
                                </div>
                            }
                        </div> */}

            {/* SAR */}
            {loader ?
              null
              :
              <>
                {errorTerms ?
                  <p style={{ textAlign: 'center' }}>{errorTerms}</p>
                  :
                  <>
                    {
                      superArray?.map((item, index) => <div id={`tab-${item.id}`} key={index}>
                        <span style={{ fontSize: '20px', fontWeight: '600', }}>
                          {item.deal_type}
                          <LightTooltip placement="top" popperOptions={{ popperOptions }} title={item?.deal_description}>
                            <img style={{ marginBottom: "-2.5px", marginLeft: '0.3rem', cursor: 'pointer' }} height={20} width={20} src={infoIcon} alt="info" />
                          </LightTooltip>
                        </span>
                        <div style={{ display: 'grid', marginTop: '0.5rem' }}>
                          <span style={{ fontSize: '18px' }}>{item?.deal_tagline}</span>
                        </div>
                        <Grid sx={{ marginTop: '5px', marginBottom: '5rem' }} container spacing={spaceing}>
                          {item.campaigns?.map((campaign, index) => {
                            return (
                              <Grid key={index} item xs={gridxsFirst}>
                                <Card onClick={() =>
                                  navigate('/live-deals-details', {
                                    state: {
                                      campaignId: campaign?.campaign?.id,
                                      campaignData: { ...campaign, deal_terms: campaign?.deal_terms }
                                    }
                                  })}
                                  className="investment-card-container" sx={{ minWidth: '100%', padding: '0', marginTop: '1em' }} >
                                  <CardContent sx={{ padding: '0' }}>
                                    <div style={{ position: 'relative' }}>
                                      <img src={campaign?.backgroundImage} width='100%' height={192} />
                                      <div className="card-header-logo">
                                        <div className="company-logo-section">
                                          <img loading="lazy" src={campaign?.company?.company_logo || ''} height={60} />
                                        </div>
                                        <div className="logo-txt-script">
                                          {campaign?.deal_type?.deal_name || ''}
                                        </div>
                                      </div>
                                      <div className="info-card-txt">
                                        {/* <span className="company-name">{item.deal_type}
                                                                </span> */}
                                      </div>
                                      <div className="centered-txt-card">
                                        <span className="company-name">
                                          {campaign?.company?.company_name || ''}
                                        </span>
                                      </div>
                                      <div className="bottom-txt-card">
                                        <span>
                                          {campaign?.company?.product_description.slice(0, 80)}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="body-card-section">
                                      <span className="card-description">
                                        {`${campaign?.company?.traction_description.slice(0, 100)}...`}
                                      </span>
                                      <div style={campaign?.company?.sector.includes(',') ? { display: 'flex', flexWrap: 'wrap', marginBottom: '3em' } : { display: 'flex' }}>
                                        {campaign?.company?.sector.includes(',') ? (
                                          campaign?.company?.sector.split(",").map((item, index) => (
                                            <div key={index} className="chip-status"><span>{item.trim()}</span></div>
                                          ))
                                        ) : (
                                          <div key={index} className="chip-status"><span>{campaign?.company?.sector || 'N/A'}</span></div>
                                        )}
                                      </div>
                                      <div className="footer-card-section">
                                        <div className="numbers-investors">
                                          <span className="percentage-investment">{Number(campaign?.campaign?.total_raised).toFixed(2) || '0'}%</span>
                                          <span className="investment-status">
                                            Raised
                                          </span>
                                        </div>
                                        <div className="vertical-line-invest"></div>
                                        <div className="numbers-investors">
                                          <span className="percentage-investment">
                                            {daysRemaining(campaign?.deal_terms?.end_date)}
                                          </span>
                                          <span className="investment-status">Closes in</span>
                                        </div>
                                        <div className="vertical-line-invest"></div>
                                        <div className="numbers-investors">
                                          <span className="percentage-investment">
                                            {campaign?.deal_terms?.min_subscription || 'N/A'}
                                          </span>
                                          <span className="investment-status">Min Invest</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="overlay">
                                      <div className="card-header-logo hover">
                                        <div className="company-logo-section">
                                          <img src={campaign?.company?.company_logo || ''} height={60} />
                                        </div>
                                        <span className="company-name hover" style={{ marginLeft: '10px' }}>  {campaign?.company?.company_name || ''}</span>
                                      </div>
                                      <div style={{ display: 'grid', marginTop: '4em', marginLeft: '10px' }}>
                                        <span className="investment-txt hover">Investors</span>
                                        <span className="investment-sub-txt hover">{campaign?.campaign?.total_investors || 0}</span>
                                        <hr style={{ marginTop: '11.5px' }} />
                                        <span className="investment-txt hover">Raised</span>
                                        <span className="investment-sub-txt hover">{Number(campaign?.campaign?.total_raised).toFixed(2) || '0'}%</span>
                                        <hr style={{ marginTop: '11.5px' }} />
                                        <span className="investment-txt hover">Minimum Subscription</span>
                                        <span className="investment-sub-txt hover">{campaign?.deal_terms?.min_subscription || 'N/A'}</span>
                                        <hr style={{ marginTop: '11.5px' }} />
                                        <span className="investment-txt hover">Closes in</span>
                                        <span className="investment-sub-txt hover">{daysRemaining(campaign?.deal_terms?.end_date)}</span>
                                        <div style={campaign?.company?.sector.includes(',') ? { display: 'flex', flexWrap: 'wrap', marginBottom: '3em' } : { display: 'flex' }}>
                                          {campaign?.company?.sector.includes(',') ? (
                                            campaign?.company?.sector.split(",").map((item, index) => (
                                              <div key={index} className="chip-status hover"><span>{item.trim()}</span></div>
                                            ))
                                          ) : (
                                            <div className="chip-status hover"><span>{campaign?.company?.sector || 'N/A'}</span></div>
                                          )}
                                        </div>

                                      </div>
                                    </div>
                                    {item.checked && <div className="overlay responsive">
                                      <div className="card-header-logo hover">
                                        <div className="company-logo-section">
                                          <img src={campaign?.company?.company_logo || ''} height={60} />
                                        </div>
                                        <span className="company-name hover" style={{ marginLeft: '10px' }}>Eveez</span>
                                      </div>
                                      <div style={{ display: 'grid', marginTop: '4em', marginLeft: '10px' }}>
                                        <span className="investment-txt hover">Investors</span>
                                        <span className="investment-sub-txt hover">{campaign?.campaign?.total_investors || 0}</span>
                                        <hr style={{ marginTop: '11.5px' }} />
                                        <span className="investment-txt hover">Raised</span>
                                        <span className="investment-sub-txt hover">{Number(campaign?.campaign?.total_raised).toFixed(2) || '0'}%</span>
                                        <hr style={{ marginTop: '11.5px' }} />
                                        <span className="investment-txt hover">Minimum Subscription</span>
                                        <span className="investment-sub-txt hover">{campaign?.deal_terms?.min_subscription || 'N/A'}</span>
                                        <hr style={{ marginTop: '11.5px' }} />
                                        <span className="investment-txt hover">Closes in</span>
                                        <span className="investment-sub-txt hover">{daysRemaining(campaign?.deal_terms?.end_date)}</span>
                                        <div style={campaign?.company?.sector.includes(',') ? { display: 'flex', flexWrap: 'wrap', marginBottom: '3em' } : { display: 'flex' }}>
                                          {campaign?.company?.sector.includes(',') ? (
                                            campaign?.company?.sector.split(",").map((item, index) => (
                                              <div key={index} className="chip-status hover"><span>{item.trim()}</span></div>
                                            ))
                                          ) : (
                                            <div className="chip-status hover"><span>{campaign?.company?.sector || 'N/A'}</span></div>
                                          )}
                                        </div>
                                      </div>
                                    </div>}
                                    <div onClick={() => handleRotate(index)} className="mobile-view-arrow-responsive">
                                      <KeyboardArrowDownRoundedIcon className="move-arrow-upside-down" style={item.checked ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0deg)' }} />

                                    </div>
                                  </CardContent>
                                </Card>
                              </Grid>
                            )
                          })}
                        </Grid>
                      </div>)
                    }
                  </>
                }
              </>
            }


            {/* CCD */}
            {/* <div id="tab-2">
                            <span style={{ fontSize: '20px', fontWeight: '600' }}>
                                CCD
                                <LightTooltip placement="top" PopperProps={{ style: { marginTop: -12 } }} title="Compulsory convertible debentures are hybrid securities that have the same financial rights like equity share but no voting rights.">
                                    <img style={{ marginBottom: "-2.5px", marginLeft: '0.3rem', cursor: 'pointer' }} height={20} width={20} src={infoIcon} alt="info" />
                                </LightTooltip>

                            </span>
                            <div style={{ display: 'grid', marginTop: '0.5rem' }}>
                                <span style={{ fontSize: '18px' }}>Hybrid securities convertible into equity</span>
                            </div>
                            <Grid sx={{ marginTop: '5px', marginBottom: '5rem' }} container spacing={spaceing}>
                                {data.map((item, index) => {
                                    return (
                                        <Grid key={index} item xs={gridxsFirst}>
                                            <Card onClick={() => navigate('/live-deals-details')} className="investment-card-container" sx={{ minWidth: '100%', padding: '0', marginTop: '1em' }} >
                                                <CardContent sx={{ padding: '0' }}>
                                                    <div style={{ position: 'relative' }}>
                                                        <img src={item.backgroundImage} width='100%' height={192} />
                                                        <div className="card-header-logo">
                                                            <div className="company-logo-section">
                                                                <img src={Logo1} width={102} height={34} />
                                                            </div>
                                                            <div className="logo-txt-script">{item.logoText}</div>
                                                        </div>
                                                        <div className="info-card-txt">
                                                            <span className="company-name">{item.logoName}</span>
                                                        </div>
                                                        <div className="centered-txt-card">
                                                            <span className="company-name">{item.heading}</span>
                                                        </div>
                                                        <div className="bottom-txt-card">
                                                            <span>{item.subHeading}</span>
                                                        </div>
                                                    </div>
                                                    <div className="body-card-section">
                                                        <span className="card-description">{item.description}</span>
                                                        <div style={{ display: 'flex' }}>
                                                            {item.chip.map((item, index) => {
                                                                return (
                                                                    <div key={index} className="chip-status"><span>{item.name}</span></div>
                                                                )
                                                            })}
                                                        </div>
                                                        <div className="footer-card-section">
                                                            <div className="numbers-investors">
                                                                <span className="percentage-investment">{item.raised}</span>
                                                                <span className="investment-status">Raised</span>
                                                            </div>
                                                            <div className="vertical-line-invest"></div>
                                                            <div className="numbers-investors">
                                                                <span className="percentage-investment">{item.closesIn}</span>
                                                                <span className="investment-status">Closes in</span>
                                                            </div>
                                                            <div className="vertical-line-invest"></div>
                                                            <div className="numbers-investors">
                                                                <span className="percentage-investment">{item.invest}</span>
                                                                <span className="investment-status">Min Invest</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="overlay">
                                                        <div className="card-header-logo hover">
                                                            <div className="company-logo-section">
                                                                <img src={Eveez} width={54} height={54} />
                                                            </div>
                                                            <span className="company-name hover" style={{ marginLeft: '10px' }}>Eveez</span>
                                                        </div>
                                                        <div style={{ display: 'grid', marginTop: '4em', marginLeft: '10px' }}>
                                                            <span className="investment-txt hover">Investors</span>
                                                            <span className="investment-sub-txt hover">18</span>
                                                            <hr style={{ marginTop: '11.5px' }} />
                                                            <span className="investment-txt hover">Raised</span>
                                                            <span className="investment-sub-txt hover">16.5%</span>
                                                            <hr style={{ marginTop: '11.5px' }} />
                                                            <span className="investment-txt hover">Minimum Subscription</span>
                                                            <span className="investment-sub-txt hover">5000</span>
                                                            <hr style={{ marginTop: '11.5px' }} />
                                                            <span className="investment-txt hover">Closes in</span>
                                                            <span className="investment-sub-txt hover">14 days</span>
                                                            <div className="chip-status hover"><span>Personal Health</span></div>
                                                        </div>
                                                    </div>
                                                    {item.checked && <div className="overlay responsive">
                                                        <div className="card-header-logo hover">
                                                            <div className="company-logo-section">
                                                                <img src={Eveez} width={54} height={54} />
                                                            </div>
                                                            <span className="company-name hover" style={{ marginLeft: '10px' }}>Eveez</span>
                                                        </div>
                                                        <div style={{ display: 'grid', marginTop: '4em', marginLeft: '10px' }}>
                                                            <span className="investment-txt hover">Investors</span>
                                                            <span className="investment-sub-txt hover">18</span>
                                                            <hr style={{ marginTop: '11.5px' }} />
                                                            <span className="investment-txt hover">Raised</span>
                                                            <span className="investment-sub-txt hover">16.5%</span>
                                                            <hr style={{ marginTop: '11.5px' }} />
                                                            <span className="investment-txt hover">Minimum Subscription</span>
                                                            <span className="investment-sub-txt hover">5000</span>
                                                            <hr style={{ marginTop: '11.5px' }} />
                                                            <span className="investment-txt hover">Closes in</span>
                                                            <span className="investment-sub-txt hover">14 days</span>
                                                            <div className="chip-status hover"><span>Personal Health</span></div>
                                                        </div>
                                                    </div>}
                                                    <div onClick={() => handleRotate(index)} className="mobile-view-arrow-responsive">
                                                        <KeyboardArrowDownRoundedIcon className="move-arrow-upside-down" style={item.checked ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0deg)' }} />

                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    )
                                })}


                            </Grid>

                        </div> */}

            {/* NCD */}
            {/* <div id="tab-3">
                            <span style={{ fontSize: '20px', fontWeight: '600' }}>
                                NCD

                                <LightTooltip placement="top" title="Short-term offering that involves funding a company's unpaid invoice or purchase order in exchange for a fixed rate of return.">
                                    <img style={{ marginBottom: "-2.5px", marginLeft: '0.3rem', cursor: 'pointer' }} height={20} width={20} src={infoIcon} alt="info" />
                                </LightTooltip>

                            </span>
                            <div style={{ display: 'grid', marginTop: '0.5rem' }}>
                                <span style={{ fontSize: '18px' }}>Short term fixed income opportunities</span>
                            </div>
                            <Grid sx={{ marginTop: '5px', marginBottom: '5rem' }} container spacing={spaceing}>
                                {data.map((item, index) => {
                                    return (
                                        <Grid key={index} item xs={gridxsFirst}>
                                            <Card onClick={() => navigate('/live-deals-details')} className="investment-card-container" sx={{ minWidth: '100%', padding: '0', marginTop: '1em' }} >
                                                <CardContent sx={{ padding: '0' }}>
                                                    <div style={{ position: 'relative' }}>
                                                        <img src={item.backgroundImage} width='100%' height={192} />
                                                        <div className="card-header-logo">
                                                            <div className="company-logo-section">
                                                                <img src={Logo1} width={102} height={34} />
                                                            </div>
                                                            <div className="logo-txt-script">{item.logoText}</div>
                                                        </div>
                                                        <div className="info-card-txt">
                                                            <span className="company-name">{item.logoName}</span>
                                                        </div>
                                                        <div className="centered-txt-card">
                                                            <span className="company-name">{item.heading}</span>
                                                        </div>
                                                        <div className="bottom-txt-card">
                                                            <span>{item.subHeading}</span>
                                                        </div>
                                                    </div>
                                                    <div className="body-card-section">
                                                        <span className="card-description">{item.description}</span>
                                                        <div style={{ display: 'flex' }}>
                                                            {item.chip.map((item, index) => {
                                                                return (
                                                                    <div key={index} className="chip-status"><span>{item.name}</span></div>
                                                                )
                                                            })}
                                                        </div>
                                                        <div className="footer-card-section">
                                                            <div className="numbers-investors">
                                                                <span className="percentage-investment">{item.raised}</span>
                                                                <span className="investment-status">Raised</span>
                                                            </div>
                                                            <div className="vertical-line-invest"></div>
                                                            <div className="numbers-investors">
                                                                <span className="percentage-investment">{item.closesIn}</span>
                                                                <span className="investment-status">Closes in</span>
                                                            </div>
                                                            <div className="vertical-line-invest"></div>
                                                            <div className="numbers-investors">
                                                                <span className="percentage-investment">{item.invest}</span>
                                                                <span className="investment-status">Min Invest</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="overlay">
                                                        <div className="card-header-logo hover">
                                                            <div className="company-logo-section">
                                                                <img src={Eveez} width={54} height={54} />
                                                            </div>
                                                            <span className="company-name hover" style={{ marginLeft: '10px' }}>Eveez</span>
                                                        </div>
                                                        <div style={{ display: 'grid', marginTop: '4em', marginLeft: '10px' }}>
                                                            <span className="investment-txt hover">Investors</span>
                                                            <span className="investment-sub-txt hover">18</span>
                                                            <hr style={{ marginTop: '11.5px' }} />
                                                            <span className="investment-txt hover">Raised</span>
                                                            <span className="investment-sub-txt hover">16.5%</span>
                                                            <hr style={{ marginTop: '11.5px' }} />
                                                            <span className="investment-txt hover">Minimum Subscription</span>
                                                            <span className="investment-sub-txt hover">5000</span>
                                                            <hr style={{ marginTop: '11.5px' }} />
                                                            <span className="investment-txt hover">Closes in</span>
                                                            <span className="investment-sub-txt hover">14 days</span>
                                                            <div className="chip-status hover"><span>Personal Health</span></div>
                                                        </div>
                                                    </div>
                                                    {item.checked && <div className="overlay responsive">
                                                        <div className="card-header-logo hover">
                                                            <div className="company-logo-section">
                                                                <img src={Eveez} width={54} height={54} />
                                                            </div>
                                                            <span className="company-name hover" style={{ marginLeft: '10px' }}>Eveez</span>
                                                        </div>
                                                        <div style={{ display: 'grid', marginTop: '4em', marginLeft: '10px' }}>
                                                            <span className="investment-txt hover">Investors</span>
                                                            <span className="investment-sub-txt hover">18</span>
                                                            <hr style={{ marginTop: '11.5px' }} />
                                                            <span className="investment-txt hover">Raised</span>
                                                            <span className="investment-sub-txt hover">16.5%</span>
                                                            <hr style={{ marginTop: '11.5px' }} />
                                                            <span className="investment-txt hover">Minimum Subscription</span>
                                                            <span className="investment-sub-txt hover">5000</span>
                                                            <hr style={{ marginTop: '11.5px' }} />
                                                            <span className="investment-txt hover">Closes in</span>
                                                            <span className="investment-sub-txt hover">14 days</span>
                                                            <div className="chip-status hover"><span>Personal Health</span></div>
                                                        </div>
                                                    </div>}
                                                    <div onClick={() => handleRotate(index)} className="mobile-view-arrow-responsive">
                                                        <KeyboardArrowDownRoundedIcon className="move-arrow-upside-down" style={item.checked ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0deg)' }} />

                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </div> */}

            {/* ID */}
            {/* <div id="tab-4">
                            <span style={{ fontSize: '20px', fontWeight: '600' }}>
                                ID
                                <LightTooltip placement="top" title=" NCD (Non-Convertible Debenture) is a type of debt security issued by companies that pays a fixed rate of interest and has a maturity date.">
                                    <img style={{ marginBottom: "-2.5px", marginLeft: '0.3rem', cursor: 'pointer' }} height={20} width={20} src={infoIcon} alt="info" />
                                </LightTooltip>

                            </span>
                            <div style={{ display: 'grid', marginTop: '0.5rem' }}>
                                <span style={{ fontSize: '18px' }}>Short term fixed income opportunities</span>
                            </div>
                            <Grid sx={{ marginTop: '5px', marginBottom: '5rem' }} container spacing={spaceing}>
                                {data.map((item, index) => {
                                    return (
                                        <Grid key={index} item xs={gridxsFirst}>
                                            <Card onClick={() => navigate('/live-deals-details')} className="investment-card-container" sx={{ minWidth: '100%', padding: '0', marginTop: '1em' }} >
                                                <CardContent sx={{ padding: '0' }}>
                                                    <div style={{ position: 'relative' }}>
                                                        <img src={item.backgroundImage} width='100%' height={192} />
                                                        <div className="card-header-logo">
                                                            <div className="company-logo-section">
                                                                <img src={Logo1} width={102} height={34} />
                                                            </div>
                                                            <div className="logo-txt-script">{item.logoText}</div>
                                                        </div>
                                                        <div className="info-card-txt">
                                                            <span className="company-name">{item.logoName}</span>
                                                        </div>
                                                        <div className="centered-txt-card">
                                                            <span className="company-name">{item.heading}</span>
                                                        </div>
                                                        <div className="bottom-txt-card">
                                                            <span>{item.subHeading}</span>
                                                        </div>
                                                    </div>
                                                    <div className="body-card-section">
                                                        <span className="card-description">{item.description}</span>
                                                        <div style={{ display: 'flex' }}>
                                                            {item.chip.map((item, index) => {
                                                                return (
                                                                    <div key={index} className="chip-status"><span>{item.name}</span></div>
                                                                )
                                                            })}
                                                        </div>
                                                        <div className="footer-card-section">
                                                            <div className="numbers-investors">
                                                                <span className="percentage-investment">{item.raised}</span>
                                                                <span className="investment-status">Raised</span>
                                                            </div>
                                                            <div className="vertical-line-invest"></div>
                                                            <div className="numbers-investors">
                                                                <span className="percentage-investment">{item.closesIn}</span>
                                                                <span className="investment-status">Closes in</span>
                                                            </div>
                                                            <div className="vertical-line-invest"></div>
                                                            <div className="numbers-investors">
                                                                <span className="percentage-investment">{item.invest}</span>
                                                                <span className="investment-status">Min Invest</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="overlay">
                                                        <div className="card-header-logo hover">
                                                            <div className="company-logo-section">
                                                                <img src={Eveez} width={54} height={54} />
                                                            </div>
                                                            <span className="company-name hover" style={{ marginLeft: '10px' }}>Eveez</span>
                                                        </div>
                                                        <div style={{ display: 'grid', marginTop: '4em', marginLeft: '10px' }}>
                                                            <span className="investment-txt hover">Investors</span>
                                                            <span className="investment-sub-txt hover">18</span>
                                                            <hr style={{ marginTop: '11.5px' }} />
                                                            <span className="investment-txt hover">Raised</span>
                                                            <span className="investment-sub-txt hover">16.5%</span>
                                                            <hr style={{ marginTop: '11.5px' }} />
                                                            <span className="investment-txt hover">Minimum Subscription</span>
                                                            <span className="investment-sub-txt hover">5000</span>
                                                            <hr style={{ marginTop: '11.5px' }} />
                                                            <span className="investment-txt hover">Closes in</span>
                                                            <span className="investment-sub-txt hover">14 days</span>
                                                            <div className="chip-status hover"><span>Personal Health</span></div>
                                                        </div>
                                                    </div>
                                                    {item.checked && <div className="overlay responsive">
                                                        <div className="card-header-logo hover">
                                                            <div className="company-logo-section">
                                                                <img src={Eveez} width={54} height={54} />
                                                            </div>
                                                            <span className="company-name hover" style={{ marginLeft: '10px' }}>Eveez</span>
                                                        </div>
                                                        <div style={{ display: 'grid', marginTop: '4em', marginLeft: '10px' }}>
                                                            <span className="investment-txt hover">Investors</span>
                                                            <span className="investment-sub-txt hover">18</span>
                                                            <hr style={{ marginTop: '11.5px' }} />
                                                            <span className="investment-txt hover">Raised</span>
                                                            <span className="investment-sub-txt hover">16.5%</span>
                                                            <hr style={{ marginTop: '11.5px' }} />
                                                            <span className="investment-txt hover">Minimum Subscription</span>
                                                            <span className="investment-sub-txt hover">5000</span>
                                                            <hr style={{ marginTop: '11.5px' }} />
                                                            <span className="investment-txt hover">Closes in</span>
                                                            <span className="investment-sub-txt hover">14 days</span>
                                                            <div className="chip-status hover"><span>Personal Health</span></div>
                                                        </div>
                                                    </div>}
                                                    <div onClick={() => handleRotate(index)} className="mobile-view-arrow-responsive">
                                                        <KeyboardArrowDownRoundedIcon className="move-arrow-upside-down" style={item.checked ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0deg)' }} />

                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    )
                                })}

                            </Grid>
                        </div> */}
          </Container>
        </div>
      </div>
      {ratio < 1000 ? null : <Footer />}
    </>
  );
};
export default LiveDeals;
