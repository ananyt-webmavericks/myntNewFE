import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import "../../css/Home/openinvestment.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import Eveez from "../../images/investments/Eveez.png";
import BG1 from "../../images/investments/image1.png";
import Logo1 from "../../images/investments/logo1.png";
import BG2 from "../../images/investments/image2.png";
import Logo2 from "../../images/investments/logo2.png";
import BG3 from "../../images/investments/image3.png";
import BG4 from "../../images/investments/image4.jpg";
import Logo3 from "../../images/investments/logo3.png";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CompanyServices from "../../service/Company";
import { dealsStoreAction } from "../../Redux/actions/company";
import LoginModal from "../LoginModal";
const values = [
    {
        id: 1, backgroundImage: BG1, logo: Logo1, logoName: '', logoText: 'CCD', heading: 'MildCares - GynoCup', subHeading: 'This is not the actual text for this section of this card, something else will come here', description: 'We at Mildcares strive to empower womanhood! By building high-quality hygiene and personal care products our…',
        chip: [{ id: 1, name: 'Health' }, { id: 2, name: 'Personal Health' }],
        raised: '14.16%',
        closesIn: '10 days',
        invest: '₹5,000',
        checked: false
    },
    {
        id: 2, backgroundImage: BG2, logo: Logo2, logoName: 'Settl', logoText: 'SAR', heading: '', subHeading: 'This is not the actual text for this section', description: 'Settl. is a technology-driven accommodation platform focused on providing a convenient and high-quality living expe…',
        chip: [{ id: 1, name: 'Coliving' }],
        raised: '206.01%',
        closesIn: '3 days',
        invest: '₹10,000',
        checked: false
    },
    {
        id: 3, backgroundImage: BG3, logo: Logo3, logoName: 'Harvest 20%', logoText: 'NCD', heading: '', subHeading: 'This is not the actual text for this section of this card, something else will come here', description: 'Diversify your portfolio with Agri-Subscriptions & Earn Tax-free fixed income Diversify your portfolio',
        chip: [{ id: 1, name: 'Managed Farmland' }],
        raised: '206.01%',
        closesIn: '3 days',
        invest: '₹10,000',
        checked: false
    },
    {
        id: 4, backgroundImage: BG4, logo: Logo1, logoName: '', logoText: 'CCD', heading: 'MildCares - GynoCup', subHeading: 'This is not the actual text for this section of this card, something else will come here', description: 'We at Mildcares strive to empower womanhood! By building high-quality hygiene and personal care products our…',
        chip: [{ id: 1, name: 'Health' }, { id: 2, name: 'Personal Health' }],
        raised: '14.16%',
        closesIn: '10 days',
        invest: '₹5,000',
        checked: false
    },


]


export default function OpenInvestment() {
    const [data, setData] = useState(values)
    const [showModal, setShowModal] = useState(false)
    const [loader, setLoader] = useState(true)
    const [spaceing, setSpaceing] = useState(4)
    const [message, setMessage] = useState('')
    const [gridxsFirst, setGridxsFirst] = useState(3)
    const ratio = parseInt(window.innerWidth);
    const [showItem, setShowItem] = useState(4)
    const { userMail } = useSelector((state) => state.userInfo)
    const { userData } = useSelector((state) => state.loginData)
    const [showBtn, setShowBtn] = useState(true)
    const [showSkeleton, setShowSkeleton] = useState(false)
    const { deals } = useSelector(state => state.companyData)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const backgroundImageUrls = [BG1, BG2, BG3, BG4];

    const handleClose = () => setShowModal(false);

    const handleLoadMore = () => {
        if (userData?.id) {
            navigate('/dashboard/live-deals')
        } else {
            setShowModal(true)
        }
        // setShowSkeleton(true)
        // setShowBtn(false)
        // const timer = setTimeout(() => {
        //     setShowSkeleton(false)
        //     setShowItem(deals.length)
        // }, 2000);

        // return () => clearTimeout(timer);
    }

    useEffect(() => {

        const getAllDealTerms = () => {
            if (userData?.id) {
                CompanyServices.getAllDealTerms().then(res => {
                    if (res?.status === 200 || res?.status === 201) {
                        const data = res?.data?.data
                        if (data.length > 0) {
                            const dataWithRandomBackgrounds = res?.data?.data.map((item) => {
                                const randomIndex = Math.floor(Math.random() * backgroundImageUrls.length);
                                const randomBackgroundImage = backgroundImageUrls[randomIndex];
                                return {
                                    ...item,
                                    backgroundImage: randomBackgroundImage,
                                };
                            });
                            dispatch(dealsStoreAction(dataWithRandomBackgrounds))
                        } else {
                            setMessage('No Data Found')
                            dispatch(dealsStoreAction([]))
                        }

                        setTimeout(() => {
                            setLoader(false)
                        }, 1500);
                    } else {
                        setTimeout(() => {
                            setLoader(false)
                        }, 1500);
                        console.log("Get Deal Terms Failed!")
                    }
                })
            } else {
                dispatch(dealsStoreAction(values))
                setTimeout(() => {
                    setLoader(false)
                }, 1500);
            }
        }
        getAllDealTerms()

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
        let new_array = deals;
        new_array[index].checked = !new_array[index].checked;
        console.log(new_array[index].checked)
        setData([...new_array])
    }
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
            <Box sx={{ minHeight: '100%', marginTop: '60px', marginBottom: '2em' }}>
                <div className="subscribe-graph-heading">
                    <Typography className="test-script-regular">Live<span className="test-script-bg"> Opportunities</span></Typography>
                    <Typography style={{ fontSize: '18px', color: 'gray' }}>Get access to highly vetted startups -</Typography>
                </div>
                {loader ?
                    <div style={{ justifyContent: 'center', display: 'flex', marginTop: '5em', marginBottom: '5em' }}>
                        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                    </div>
                    :
                    <>
                        {deals?.length > 0 ?

                            <Grid sx={{ marginTop: '5px' }} container spacing={spaceing}>
                                {/* {data.slice(0, showItem).map((item, index) => { */}

                                {deals?.slice(0, showItem)?.map((campaign, index) => {
                                    return (
                                        <Grid key={index} item xs={gridxsFirst}>
                                            <Card onClick={() => {
                                                if (userData?.id) {
                                                    navigate('/live-deals-details', {
                                                        state: {
                                                            campaignId: campaign?.campaign?.id,
                                                            campaignData: { ...campaign, deal_type: campaign?.deal_type }
                                                        }
                                                    })
                                                } else {
                                                    setShowModal(true)
                                                }
                                            }}
                                                className={!userData?.id ? `investment-card-container-blur` : `investment-card-container`} sx={{ minWidth: '100%', padding: '0', marginTop: '1em' }} >
                                                <CardContent sx={{ padding: '0' }}>
                                                    <div style={{ position: 'relative' }}>
                                                        <img src={campaign?.backgroundImage} width='100%' height={192} />
                                                        <div className="card-header-logo">
                                                            <div className="company-logo-section">
                                                                <img loading="lazy" src={campaign?.company?.company_logo || ''} height={70} />
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
                                                            <span className="investment-txt hover">Minimum Enrollment</span>
                                                            <span className="investment-sub-txt hover">{campaign?.deal_terms?.min_subscription || 'N/A'}</span>
                                                            <hr style={{ marginTop: '11.5px' }} />
                                                            <span className="investment-txt hover">Closes in</span>
                                                            <span className="investment-sub-txt hover"> {daysRemaining(campaign?.deal_terms?.end_date)}</span>
                                                            <div style={campaign?.company?.sector.includes(',') ? { display: 'flex', flexWrap: 'wrap', marginBottom: '1em' } : { display: 'flex' }}>
                                                                {campaign?.company?.sector.includes(',') ? (
                                                                    campaign?.company?.sector.split(",").map((item, index) => (
                                                                        <div key={index} className="chip-status hover"><span>{item.trim()}</span></div>
                                                                    ))
                                                                ) : (
                                                                    <div className="chip-status hover"><span>{campaign?.company?.sector || 'N/A'}</span></div>
                                                                )}
                                                            </div>                                                         </div>
                                                    </div>
                                                    {true && <div className="overlay responsive">
                                                        <div className="card-header-logo hover">
                                                            <div className="company-logo-section">
                                                                <img src={campaign?.company?.company_logo || ''} height={70} />
                                                            </div>
                                                            <span className="company-name hover" style={{ marginLeft: '10px' }}>    {campaign?.company?.company_name || ''}</span>
                                                        </div>
                                                        <div style={{ display: 'grid', marginTop: '4em', marginLeft: '10px' }}>
                                                            <span className="investment-txt hover">Investors</span>
                                                            <span className="investment-sub-txt hover">{campaign?.campaign?.total_investors || 0}</span>
                                                            <hr style={{ marginTop: '11.5px' }} />
                                                            <span className="investment-txt hover">Raised</span>
                                                            <span className="investment-sub-txt hover">{Number(campaign?.campaign?.total_raised).toFixed(2) || '0'}%</span>
                                                            <hr style={{ marginTop: '11.5px' }} />
                                                            <span className="investment-txt hover">Minimum Enrollment</span>
                                                            <span className="investment-sub-txt hover">{campaign?.deal_terms?.min_subscription || 'N/A'}</span>
                                                            <hr style={{ marginTop: '11.5px' }} />
                                                            <span className="investment-txt hover">Closes in</span>
                                                            <span className="investment-sub-txt hover"> {daysRemaining(campaign?.deal_terms?.end_date)}</span>
                                                            <div style={campaign?.company?.sector.includes(',') ? { display: 'flex', flexWrap: 'wrap', marginBottom: '1em' } : { display: 'flex' }}>
                                                                {campaign?.company?.sector.includes(',') ? (
                                                                    campaign?.company?.sector.split(",").map((item, index) => (
                                                                        <div key={index} className="chip-status hover"><span>{item.trim()}</span></div>
                                                                    ))
                                                                ) : (
                                                                    <div className="chip-status hover"><span>{campaign?.company?.sector || 'N/A'}</span></div>
                                                                )}
                                                            </div>                                                         </div>
                                                    </div>}
                                                    <div onClick={() => handleRotate(index)} className="mobile-view-arrow-responsive">
                                                        <KeyboardArrowDownRoundedIcon className="move-arrow-upside-down" style={true ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0deg)' }} />

                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    )
                                })}



                            </Grid>
                            :
                            <div style={{ textAlign: 'center', margin: '5em 0em' }}>
                                <span>New Deals Coming Soon</span>
                            </div>
                        }
                    </>
                }



                {showSkeleton &&
                    <Grid sx={{ marginTop: '20px' }} container spacing={spaceing}>
                        {deals.slice(0, 4).map((item, index) => {
                            return (
                                <Grid key={index} item xs={gridxsFirst}>
                                    <Stack spacing={1}>
                                        <Skeleton variant="rectangular" width={265} height={192} />
                                        <Skeleton variant="text" width={210} sx={{ fontSize: '1rem' }} />
                                        <Skeleton variant="rounded" width={80} height={40} />
                                        <Skeleton variant="rectangular" width={265} height={60} />
                                    </Stack>
                                </Grid>
                            )
                        })}

                    </Grid>
                }

                {showBtn && <div className="view-all-btn-invest">
                    <Button variant="contained" className="invest-load-btn" onClick={handleLoadMore}>View All</Button>
                </div>}
            </Box>
            <LoginModal show={showModal} handleClose={handleClose} />
        </>
    )

}
