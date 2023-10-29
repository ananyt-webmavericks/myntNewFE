import React, { useEffect, useState } from "react";
import Portfolio from '../../images/assets/portfolio.png'
import { Card, CardContent } from "@mui/material";
import '../../css/Dashboard/portfolio.css'
import SearchBar from "../LiveDeals/SearchBar";
import DataTablePortfolio from "./DataTablePortfolio";
import { useNavigate } from "react-router-dom";
import PortfolioServices from "../../service/PortfolioServices";
import { useSelector } from "react-redux";
export default function PortfolioMain() {
    const navigate = useNavigate()
    const [showContent, setShowContent] = useState(true)
    const [portData, setPortData] = useState([])
    const { userData } = useSelector((state) => state.loginData)

    const getPortfolioData = () => {
        try {
            PortfolioServices.getPortfolioData(userData?.id).then(res => {
                if (res.status === 200 || res.status === 201) {
                    setPortData(res?.data?.data)
                    console.log(res?.data?.data)
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
            getPortfolioData()
        }
    }, [])
    return (
        <div>
            <span className="get-started-heading">Portfolio</span>
            {portData?.length > 0 ?
                <>
                    {/* <SearchBar /> */}
                    <div style={{ marginTop: '30px', marginBottom: '5em' }}>
                        <DataTablePortfolio portData={portData} />
                    </div>
                </>
                :

                <Card className="card-complete-kyc-notice portfolio">
                    <CardContent>
                        <div className="card-complete-container">
                            <img className="image-of-kyc-container" src={Portfolio} width={117} height={106}></img>
                            <div className="text-container-card-kyc">
                                <span className="head-txt-kyc-card">No Enrollment</span>
                                <span className="sub-txt-kyc-card">You have not enrolled in any campaigns on Mynt</span>
                            </div>
                            <button className="submit-btn-startup kyc" onClick={() => navigate('/dashboard/live-deals')} style={{ maxWidth: '320px' }}>Explore Now</button>

                        </div>
                    </CardContent>
                </Card>


            }
        </div>
    )
}