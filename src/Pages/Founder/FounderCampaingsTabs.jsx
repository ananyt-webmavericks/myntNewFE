import React, { useEffect, useState } from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import Footer from '../../component/Footer'
import DrawerFounder from '../../component/FounderDrawer/DrawerFounder'
import { makeStyles } from '@material-ui/core/styles';
import "../../css/FounderDrawer/Dashboard/CampaignsTabs.css"
import CompanyProfile from '../../component/FounderDrawer/FounderCampaignsTabs/CompanyProfile';
import People from '../../component/FounderDrawer/FounderCampaignsTabs/People';
import FAQS from '../../component/FounderDrawer/FounderCampaignsTabs/FAQS';
import Highlights from '../../component/FounderDrawer/FounderCampaignsTabs/Highlights';
import UploadPitch from '../../component/FounderDrawer/FounderCampaignsTabs/UploadPitch';
import UploadDocuments from '../../component/FounderDrawer/FounderCampaignsTabs/UploadDocuments';
import Press from '../../component/FounderDrawer/FounderCampaignsTabs/Press';
import GetRewards from '../../component/FounderDrawer/FounderCampaignsTabs/GetRewards';
import '../../css/FounderDrawer/Dashboard/GridBox.css'
import { useLocation } from 'react-router-dom';
import { toast } from "react-hot-toast";
const useStyles = makeStyles({
    fontstyle: {
        textTransform: 'capitalize'
    },
});
const FounderCampaingsTabs = () => {
    const classes = useStyles()
    const location = window.location.pathname;
    const ratio = parseInt(window.innerWidth);
    const [showDeals, setShowDeals] = useState(false)
    const [value, setValue] = useState(0);
    const [thisTab, setThisTab] = useState(<CompanyProfile />)

    const handleChange = (event, newValue) => {
        if (!(newValue === 0)) {
            if (!localStorage.getItem("company_id")) {
                return toast.error("Please fill up company details")
            } else if (!sessionStorage.getItem("campaign_id")) {
                if (!(newValue === 1)) {
                    return toast.error("Please upload pitch")
                }
            }
        }
        setValue(newValue);
        setThisTab(handleRenderTab(newValue))
    };

    const navLocation = useLocation()

    const handleRenderTab = (x) => {
        console.log(x)
        switch (x) {
            case 0: return <CompanyProfile tabChangeFn={handleChange} />
                break;
            case 1: return <UploadPitch tabChangeFn={handleChange} />
                break;
            case 2: return <People tabChangeFn={handleChange} />
                break;
            case 3: return <FAQS tabChangeFn={handleChange} />
                break;
            case 4: return <Highlights tabChangeFn={handleChange} />
                break;
            case 5: return <GetRewards tabChangeFn={handleChange} />
                break;
            case 6: return <Press tabChangeFn={handleChange} />
                break;
            case 7: return <UploadDocuments tabChangeFn={handleChange} />
                break;

            default: return <CompanyProfile />
                break;
        }
    }
    const tabStyle = {
        color: "#F4D262",
        backgroundColor: '#FFFFFF',
        fontWeight: 500,
    }

    const tabSxStyle = {
        fontFamily: 'poppins',
        textTransform: "capitalize", fontSize: 16,
        height: "17px"
    }

    useEffect(() => {
        console.log(navLocation.state?.navTab)
        handleChange("event", navLocation.state?.navTab)
    }, [])

    return (
        <>
            <div style={{ display: 'flex', position: 'relative' }}>
                {location.includes('/dashboard') && <DrawerFounder />}
                <div className="dashboard-container">
                    <div className='mainparent'>
                        <h3 style={{ padding: "17px 16px" }}>Compaigns</h3><br />
                        <Box className="tabscenter" sx={{ width: "auto", bgcolor: 'background.paper', marginBottom: 4 }}>
                            <Tabs
                                sx={{
                                    "& .MuiTabs-indicator": {
                                        display: "none"
                                        //backgroundColor: "orange"
                                    }
                                }}
                                value={value}
                                onChange={handleChange}
                                variant="scrollable"
                                scrollButtons={false}
                                aria-label="scrollable auto tabs example"
                            >
                                <Tab
                                    style={value === 0 ? tabStyle : null}
                                    sx={tabSxStyle}
                                    label="Company Profile" />
                                <Tab
                                    style={value === 1 ? tabStyle : null}
                                    sx={tabSxStyle} label="Upload Pitch" />
                                <Tab
                                    style={value === 2 ? tabStyle : null}
                                    sx={tabSxStyle} label="People" />
                                <Tab
                                    style={value === 3 ? tabStyle : null}
                                    sx={tabSxStyle} label="FAQs" />
                                <Tab
                                    style={value === 4 ? tabStyle : null}
                                    sx={tabSxStyle} label="Highlights" />
                                <Tab
                                    style={value === 5 ? tabStyle : null}
                                    sx={tabSxStyle} label="Promotion" />
                                <Tab
                                    style={value === 6 ? tabStyle : null}
                                    sx={tabSxStyle} label="Press" />
                                <Tab
                                    style={value === 7 ? tabStyle : null}
                                    sx={tabSxStyle} label="Upload Documents" />

                            </Tabs>
                        </Box>
                    </div>
                    {thisTab}
                </div >

            </div >
            {ratio < 1000 ? null : < Footer />}
        </>
    )
}

export default FounderCampaingsTabs