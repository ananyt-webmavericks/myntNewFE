import React, { useState } from "react";
import Portfolio from '../../images/assets/portfolio.png'
import { Card, CardContent } from "@mui/material";
import '../../css/Dashboard/portfolio.css'
import SearchBar from "../LiveDeals/SearchBar";
import DataTablePortfolio from "./DataTablePortfolio";
import { useNavigate } from "react-router-dom";
export default function PortfolioMain() {
    const navigate = useNavigate()
    const [showContent, setShowContent] = useState(true)
    return (
        <div>
            <span className="get-started-heading">Portfolio</span>
            {showContent ? <Card className="card-complete-kyc-notice portfolio">
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
                :
                <>
                    <SearchBar />
                    <div style={{ marginTop: '30px', marginBottom: '5em' }}>
                        <DataTablePortfolio />
                    </div>
                </>
            }
        </div>
    )
}