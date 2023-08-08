import { Card, CardContent, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import Investment from "../../images/dashboard/investment.png";
import Performance from "../../images/dashboard/performance.png";
import Startup from "../../images/dashboard/startup.png";
import "../../css/Dashboard/dashboard.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PortfolioServices from "../../service/PortfolioServices";
export default function DashboardCard() {
  const navigate = useNavigate();

  const [gridxsFirst, setGridxsFirst] = useState(3);
  const [portData, setPortData] = useState([])
  const { userData } = useSelector((state) => state.loginData)
  const [investments, setInvestments] = useState()
  const [gridxsSecond, setgridxsSecond] = useState(4);
  const ratio = parseInt(window.innerWidth);
  useEffect(() => {
    if (ratio < 1200) {
      setGridxsFirst(2);
      setgridxsSecond(6);
    }
    if (ratio <= 1000) {
      setGridxsFirst(3);
      setgridxsSecond(4);
    }
    if (ratio <= 775) {
      setGridxsFirst(1);
      setgridxsSecond(12);
    }
  }, []);


  const getPortfolioData = () => {
    try {

      PortfolioServices.getPortfolioData(userData?.id).then(res => {
        if (res.status === 200 || res.status === 201) {
          setPortData(res?.data?.data)
          const totalAmount = res?.data?.data.reduce((accumulator, current) => {
            const isFloat = current.amount.includes(".");
            let result;
            if (!current.amount) {
              result = 0
            }
            if (isFloat) {
              result = parseFloat(current.amount);
            } else {
              result = parseInt(current.amount);
            }
            accumulator += result;
            return accumulator;
          }, 0);

          let value = totalAmount > 1000 ? totalAmount / 1000 + 'k' : totalAmount
          setInvestments(value)
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
    <div className="dashboard-card-container">
      <Grid className="dashboard-cards-grid-wrapper" container spacing={gridxsFirst}>
        {/* <Grid item xs={gridxsSecond}> */}
        <Card item xs={gridxsSecond} className="card-main-dash">
          <CardContent>
            <div className="dash-card-section">
              <div className="card-image-container-dash">
                <img
                  src={Investment}
                  width={59}
                  height={54}
                  className="image-card-dashboard"
                ></img>
              </div>
              <div className="text-card-container">
                <span style={{ fontSize: "26px", fontWeight: "600" }}>
                  {investments}
                </span>
                <span style={{ fontSize: "14px", color: "#777777" }}>
                  Total enrollment Value{" "}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* </Grid> */}

        {/* <Grid item xs={gridxsSecond}> */}
        <Card item xs={gridxsSecond} className="card-main-dash">
          <CardContent>
            <div className="dash-card-section">
              <div className="card-image-container-dash">
                <img
                  src={Startup}
                  width={50}
                  height={48}
                  className="image-card-dashboard"
                ></img>
              </div>
              <div className="text-card-container">
                <span style={{ fontSize: "26px", fontWeight: "600" }}>{portData?.length || 0}</span>
                <span style={{ fontSize: "14px", color: "#777777" }}>
                  Startups in my portfolio
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* </Grid> */}
        {/* <Grid item xs={gridxsSecond}> */}
        <Card
          item xs={gridxsSecond}
          onClick={() => navigate("/dashboard/portfolio")}
          className="card-main-dash"
        >
          <CardContent>
            <div className="dash-card-section">
              <div className="card-image-container-dash">
                <img
                  src={Performance}
                  width={47}
                  height={47}
                  className="image-card-dashboard"
                ></img>
              </div>
              <div className="text-card-container">
                <span style={{ fontSize: "14px", cursor: 'pointer' }} className="portfolio-btn">
                  Portfolio Analytics{" "}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* </Grid> */}
      </Grid>
    </div>
  );
}
