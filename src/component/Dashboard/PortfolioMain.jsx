import React ,{useState}from "react";
import Portfolio from '../../images/assets/portfolio.png'
import { Card, CardContent } from "@mui/material";
import '../../css/Dashboard/portfolio.css'
import SearchBar from "../LiveDeals/SearchBar";
import DataTablePortfolio from "./DataTablePortfolio";
export default function PortfolioMain() {
    const [showContent, setShowContent] = useState(true)
    return (
        <div>
            <span className="get-started-heading">Portfolio</span>
            {showContent ? <Card className="card-complete-kyc-notice portfolio">
                <CardContent>
                    <div className="card-complete-container">
                        <img className="image-of-kyc-container" src={Portfolio} width={112} height={112}></img>
                        <div className="text-container-card-kyc">
                            <span className="head-txt-kyc-card">No Subscription</span>
                            <span className="sub-txt-kyc-card">You have not subscribed to any campaigns on Mynt</span>
                        </div>
                        <button className="submit-btn-startup kyc" onClick={()=> setShowContent(false)} style={{ maxWidth: '320px' }}>Explore Now</button>

                    </div>
                </CardContent>
            </Card>
            :
            <>
            <SearchBar />
            <div style={{marginTop:'30px',marginBottom:'5em'}}>
            <DataTablePortfolio />
            </div>
            </>
            }
        </div>
    )
}