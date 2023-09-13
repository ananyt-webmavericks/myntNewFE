import React, { useState } from "react";
import { Container } from "@mui/material";
import DrawerMynt from "../../Dashboard/DrawerMynt";
import Footer from "../../Footer";
import BackButton from "../../../images/assets/backBtn.svg";
import { useNavigate, useParams } from "react-router-dom";
import ImageBlog1 from "../../../images/myntblogs/detailblog1.png";
import ImageBlog2 from "../../../images/myntblogs/detailblog2.png";
import LeftArrow from "../../../images/assets/leftArrow.svg";
import "../../../css/MyntUniversity/myntFaq.css";
import blogs from "./blogs.json";
import Maximizing1 from "../../../images/blogs/Maximizing Your Tax Savings_ The Art of Legally Reducing Your Tax Liability.png";
import Maximizing2 from "../../../images/blogs/Maximizing Your Tax Savings_ The Art of Legally Reducing Your Tax Liability (2).png";
import Maximizing3 from "../../../images/blogs/Maximizing Your Tax Savings_ The Art of Legally Reducing Your Tax Liability (3).png";
import FinancialInstruments1 from "../../../images/blogs/Financial Instruments vs Equity-Based Financial Instruments.png"
import FinancialInstruments2 from "../../../images/blogs/Financial Instruments vs Equity-Based Financial Instruments (2).png"
import FinancialInstruments3 from "../../../images/blogs/Financial Instruments vs Equity-Based Financial Instruments (3).png"
import FinancialInstruments4 from "../../../images/blogs/Financial Instruments vs Equity-Based Financial Instruments (4).png"
import FinancialInstruments5 from "../../../images/blogs/Financial Instruments vs Equity-Based Financial Instruments (5).png"
import LoanSyndication1 from '../../../images/blogs/Loan Syndication vs Consortium Finance_ Understanding the Differences and Benefits.png'
import LoanSyndication2 from '../../../images/blogs/Loan Syndication vs Consortium Finance_ Understanding the Differences and Benefits (2).png'
import LoanSyndication3 from '../../../images/blogs/Loan Syndication vs Consortium Finance_ Understanding the Differences and Benefits (3).png'
import WhyPortfolio1 from '../../../images/blogs/Why Portfolio Diversification is Crucial for Long-Term Investment Growth.png'
import WhyPortfolio2 from '../../../images/blogs/Portfolio Diversification.png'
import InvestingInStartup1 from '../../../images/blogs/Startup1.png'
import InvestingInStartup2 from '../../../images/blogs/personal-finance1.png'
import Dividends1 from '../../../images/blogs/Dividends in Startups_ Benefits, Challenges, and Considerations.png'
import Dividends2 from '../../../images/blogs/Dividends in Startups_ Benefits, Challenges, and Considerations (2).png'
import Dividends3 from '../../../images/blogs/Dividends in Startups_ Benefits, Challenges, and Considerations (3).png'
import Dividends4 from '../../../images/blogs/Dividends in Startups_ Benefits, Challenges, and Considerations (4).png'
import Dividends5 from '../../../images/blogs/Dividends in Startups_ Benefits, Challenges, and Considerations (5).png'
import InvestInEmerging from '../../../images/blogs/Invest in Emerging Markets like a Financial Genius.png'
import AngelInvestor2 from '../../../images/blogs/Angel Investors vs Venture Capitalists_ Understanding the Key Differences for Startup Funding (2).png'
import AngelInvestor1 from '../../../images/blogs/Angel Investors vs Venture Capitalists_ Understanding the Key Differences for Startup Funding.png'
import PrivateEquity1 from '../../../images/blogs/Private equity - a forward-looking approach.png'
import PrivateEquity2 from '../../../images/blogs/Private equity - a forward-looking approach (2).png'
import HowToRide1 from '../../../images/blogs/startup2.png'
import HowToRide2 from '../../../images/blogs/economy1.png'
import FromRagsToRiches1 from '../../../images/blogs/investment1.png'
import FromRagsToRiches2 from '../../../images/blogs/startup3.png'
import AngelInvesting1 from '../../../images/blogs/investment2.png'
import AngelInvesting2 from '../../../images/blogs/personal-finance2.png'
import Fintech1 from '../../../images/blogs/Fintech.png'
import Fintech2 from '../../../images/blogs/Fintech (2).png'
import Fintech3 from '../../../images/blogs/Fintech (3).png'
import Insights1 from '../../../images/blogs/Insights.png'
import Insights2 from '../../../images/blogs/Insights (2).png'
import Insights3 from '../../../images/blogs/Insights (3).png'
import RealEstateFund1 from '../../../images/blogs/real estate fund.png'
import RealEstateFund2 from '../../../images/blogs/real estate fund (2).png'
import UnderstandingRight1 from '../../../images/blogs/Understanding the Right of First Refusal in Startup Investments.png'
import UnderstandingRight2 from '../../../images/blogs/Understanding the Right of First Refusal in Startup Investments (2).png'
import UnderstandingRight3 from '../../../images/blogs/Understanding the Right of First Refusal in Startup Investments (3).png'
import GrowingYourBusiness1 from '../../../images/blogs/personal-finance3.png'
import GrowingYourBusiness2 from '../../../images/blogs/investment3.png'
import Accredited1 from '../../../images/blogs/economy2.png'
import Accredited2 from '../../../images/blogs/investment4.png'
import TheImpact1 from '../../../images/blogs/startup4.png'
import TheImpact2 from '../../../images/blogs/insights1.png'
import IndianStartupSuccess1 from '../../../images/blogs/economy3.png'
import IndianStartupSuccess2 from '../../../images/blogs/insights2.png'
import EmergingTrends1 from '../../../images/blogs/economy4.png'
import EmergingTrends2 from '../../../images/blogs/insigts3.png'
import { useEffect } from "react";
let blogPost = {};
export default function MyntBlogsDetail() {
  const location = window.location.pathname;
  const ratio = parseInt(window.innerWidth);
  const [image, setImage] = useState([])
  const navigate = useNavigate();
  const { id } = useParams();
  const blogPost = blogs.find((blog) => blog?.id === parseInt(id));

  const getImageList = () => {
    let newImageArray;
    switch (blogPost?.id) {
      case 1:
        newImageArray = [...image, Maximizing1, Maximizing2, Maximizing3];
        setImage(newImageArray);
        break;
      case 2:
        newImageArray = [...image, FinancialInstruments1, FinancialInstruments2, FinancialInstruments3, FinancialInstruments4, FinancialInstruments5];
        setImage(newImageArray);
        break;
      case 3:
        newImageArray = [...image, LoanSyndication1, LoanSyndication2, LoanSyndication3];
        setImage(newImageArray);
        break;
      case 4:
        newImageArray = [...image, WhyPortfolio1, WhyPortfolio2];
        setImage(newImageArray);
        break;
      case 5:
        newImageArray = [...image, InvestingInStartup1, InvestingInStartup2];
        setImage(newImageArray);
        break;
      case 6:
        newImageArray = [...image, Dividends1, Dividends2, Dividends3, Dividends4, Dividends5];
        setImage(newImageArray);
        break;
      case 7:
        newImageArray = [...image, InvestInEmerging];
        setImage(newImageArray);
        break;
      case 8:
        newImageArray = [...image, AngelInvestor1, AngelInvestor2];
        setImage(newImageArray);
        break;
      case 9:
        newImageArray = [...image, PrivateEquity1, PrivateEquity2];
        setImage(newImageArray);
        break;
      case 10:
        newImageArray = [...image, HowToRide1, HowToRide2];
        setImage(newImageArray);
        break;
      case 11:
        newImageArray = [...image, FromRagsToRiches1, FromRagsToRiches2];
        setImage(newImageArray);
        break;
      case 12:
        newImageArray = [...image, AngelInvesting1, AngelInvesting2];
        setImage(newImageArray);
        break;
      case 13:
        newImageArray = [...image, Fintech1, Fintech2, Fintech3];
        setImage(newImageArray);
        break;
      case 14:
        newImageArray = [...image, Insights1, Insights2, Insights3];
        setImage(newImageArray);
        break;
      case 15:
        newImageArray = [...image, RealEstateFund1, RealEstateFund2];
        setImage(newImageArray);
        break;
      case 16:
        newImageArray = [...image, UnderstandingRight1, UnderstandingRight2, UnderstandingRight3];
        setImage(newImageArray);
        break;
      case 17:
        newImageArray = [...image, GrowingYourBusiness1, GrowingYourBusiness2];
        setImage(newImageArray);
        break;
      case 18:
        newImageArray = [...image, Accredited1, Accredited2];
        setImage(newImageArray);
        break;
      case 19:
        newImageArray = [...image, TheImpact1, TheImpact2];
        setImage(newImageArray);
        break;
      case 20:
        newImageArray = [...image, IndianStartupSuccess1, IndianStartupSuccess2];
        setImage(newImageArray);
        break;
      case 21:
        newImageArray = [...image, EmergingTrends1, EmergingTrends2];
        setImage(newImageArray);
        break;

      default:
        break;
    }
  }


  useEffect(() => {
    getImageList()
  }, [id])

  return (
    <>
      <div style={{ display: "flex", position: "relative" }}>
        {location.includes("/myntUniversity") && (
          <DrawerMynt height={"inherit"} />
        )}
        <div className="dashboard-container">
          <Container maxWidth="lg">
            <div className="faq-university-container">
              <div style={{ display: "grid" }}>
                <img
                  src={BackButton}
                  onClick={() => navigate("/myntUniversity/blogs")}
                  alt="backbtn"
                  style={{}}
                />
                <span className="get-started-heading startup">
                  {blogPost?.title ?? ""}
                </span>
                <span
                  style={{
                    fontSize: "15px",
                    color: "#777777",
                  }}
                >
                  {blogPost?.date ?? ""}
                </span>
                <hr style={{ border: "0.5px solid gray", marginTop: "1em" }} />
                {/* <span
                  style={{
                    marginTop: "30px",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  Introduction:
                </span> */}
              </div>

              <div className="introduction-detail-blogs-container">
                <div className="intro-txt-detail-blog">
                  {blogPost?.para1 ?? ""}
                  <br />
                  <br />
                  {blogPost?.para2 ?? ""}
                </div>
                <img
                  src={image[0]}
                  alt=""
                  style={{ objectFit: 'cover' }}
                  className="image-section-detail-blog"
                />
              </div>
              <div style={{ display: "grid", marginTop: 20 }}>
                <div style={{ fontSize: "16px" }}>
                  {blogPost?.heading ? (
                    <>
                      <span
                        style={{
                          fontSize: "20px",
                          fontWeight: "600",
                        }}
                      >
                        {blogPost?.heading ?? ""}
                      </span>
                      <br /> <br />
                    </>
                  ) : null}
                  {blogPost?.para3 ? (
                    <>
                      {blogPost?.para3}
                      <br /> <br />
                    </>
                  ) : null}
                  {blogPost?.para4 ? (
                    <>
                      {blogPost?.para4}
                      <br /> <br />
                    </>
                  ) : null}

                  {blogPost?.para5 ? (
                    <>
                      {blogPost?.para5}
                      <br /> <br />
                    </>
                  ) : null}

                  {blogPost?.para6 ? (
                    <>
                      {blogPost?.para6}
                      <br /> <br />
                    </>
                  ) : null}

                  {blogPost?.para7 ? (
                    <>
                      {blogPost?.para7}
                      <br /> <br />
                    </>
                  ) : null}

                  {blogPost?.para8 ? (
                    <>
                      {blogPost?.para8}
                      <br /> <br />
                    </>
                  ) : null}

                  {blogPost?.para9 ? (
                    <>
                      {blogPost?.para9}
                      <br /> <br />
                    </>
                  ) : null}

                  {blogPost?.para10 ? (
                    <>
                      {blogPost?.para10}
                      <br /> <br />
                    </>
                  ) : null}

                  {blogPost?.para11 ? (
                    <>
                      {blogPost?.para11}
                      <br /> <br />
                    </>
                  ) : null}

                  {blogPost?.para12 ? (
                    <>
                      {blogPost?.para12}
                      <br /> <br />
                    </>
                  ) : null}

                  {blogPost?.para13 ? (
                    <>
                      {blogPost?.para13}
                      <br /> <br />
                    </>
                  ) : null}
                </div>
              </div>

              {blogPost?.section1?.heading ? (
                <div style={{ display: "grid" }}>
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >

                    {blogPost?.section1?.heading ? (
                      <>
                        {blogPost?.section1?.heading}
                        <br /> <br />
                      </>

                    ) : null}
                  </span>
                  {/* <img src={ImageBlog2} style={{ width: "100%" }} /> */}
                  <div style={{ fontSize: "16px" }}>
                    {blogPost?.section1?.content?.para1 ? (
                      <>

                        {blogPost?.section1?.content?.para1}
                        <br /> <br />
                      </>
                    ) : null}

                    {blogPost?.section1?.content?.para2 ? (
                      <>

                        {blogPost?.section1?.content?.para2}
                        <br /> <br />
                      </>
                    ) : null}
                    {blogPost?.section1?.content?.para3 ? (
                      <>
                        {blogPost?.section1?.content?.para3}
                        <br /> <br />
                      </>
                    ) : null}
                    {blogPost?.section1?.content?.para4 ? (
                      <>
                        {blogPost?.section1?.content?.para4}
                        <br /> <br />
                      </>
                    ) : null}
                  </div>
                </div>
              ) : null}
              {blogPost?.section2 ? (
                <div style={{ display: "grid" }}>
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    {blogPost?.section2?.heading ?? ""}
                    <br /> <br />
                  </span>
                  {/* <img src={ImageBlog2} style={{ width: "100%" }} /> */}
                  <div style={{ fontSize: "16px" }}>
                    {blogPost?.section2?.content?.para1 ? (
                      <>
                        {blogPost?.section2?.content?.para1}
                        <br /> <br />
                      </>
                    ) : null}

                    {blogPost?.section2?.content?.para2 ? (
                      <>
                        {blogPost?.section2?.content?.para2}
                        <br /> <br />
                      </>
                    ) : null}

                    {blogPost?.section2?.content?.para3 ? (
                      <>
                        {blogPost?.section2?.content?.para3}
                        <br /> <br />
                      </>
                    ) : null}

                    {blogPost?.section2?.content?.para4 ? (
                      <>
                        {blogPost?.section2?.content?.para4}
                        <br /> <br />
                      </>
                    ) : null}
                    {/* <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={LeftArrow} style={{ marginRight: "1em" }} />
                    <span style={{ fontSize: "16px" }}>
                      {blogPost?.section2?.content?.list?.point1 ?? ""}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={LeftArrow} style={{ marginRight: "1em" }} />
                    <span style={{ fontSize: "16px" }}>
                      {blogPost?.section2?.content?.list?.point2 ?? ""}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={LeftArrow} style={{ marginRight: "1em" }} />
                    <span style={{ fontSize: "16px" }}>
                      {blogPost?.section2?.content?.list?.point3 ?? ""}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={LeftArrow} style={{ marginRight: "1em" }} />
                    <span style={{ fontSize: "16px" }}>
                      {blogPost?.section2?.content?.list?.point4 ?? ""}
                    </span>
                  </div> */}
                  </div>
                  <div style={{ fontSize: "16px" }}>
                    <ul>
                      {blogPost?.section2?.content?.list?.point1 ? (
                        <>
                          <li>{blogPost?.section2?.content?.list?.point1}
                            <br /> <br /></li>
                          <li>{blogPost?.section2?.content?.list?.point2}
                            <br /> <br /></li>
                          <li>{blogPost?.section2?.content?.list?.point3}
                            <br /> <br /></li>
                          <li>{blogPost?.section2?.content?.list?.point4}
                            <br /> <br /></li>
                        </>
                      ) : null}
                    </ul>
                  </div>
                </div>
              ) : null}
              {blogPost?.section3?.heading ? (
                <div style={{ display: "grid" }}>
                  <span
                    style={{
                      // marginBottom: "30px",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    {blogPost?.section3?.heading ?? ""}
                    <br /> <br />
                  </span>
                  {/* <img src={ImageBlog2} style={{ width: "100%" }} /> */}
                  <div style={{ fontSize: "16px" }}>
                    {blogPost?.section3?.content?.para1 ? (
                      <>
                        {blogPost?.section3?.content?.para1}
                        <br /> <br />
                      </>
                    ) : null}

                    {blogPost?.section3?.content?.para2 ? (
                      <>
                        {blogPost?.section3?.content?.para2}
                        <br /> <br />
                      </>
                    ) : null}

                    {blogPost?.section3?.content?.para3 ? (
                      <>
                        {blogPost?.section3?.content?.para3}
                        <br /> <br />
                      </>
                    ) : null}
                    {blogPost?.section3?.content?.para4 ? (
                      <>
                        {blogPost?.section3?.content?.para4}
                        <br /> <br />
                      </>
                    ) : null}
                  </div>
                </div>
              ) : null}
              {blogPost?.section4?.heading ? (
                <div style={{ display: "grid" }}>
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    {blogPost?.section4?.heading ?? ""}
                    <br /> <br />
                  </span>
                  {/* <img src={ImageBlog2} style={{ width: "100%" }} /> */}
                  <div style={{ fontSize: "16px" }}>
                    {blogPost?.section4?.content?.para1 ? (
                      <>
                        {blogPost?.section4?.content?.para1}
                        <br /> <br />
                      </>
                    ) : null}

                    {blogPost?.section4?.content?.para2 ? (
                      <>
                        {blogPost?.section4?.content?.para2}
                        <br /> <br />
                      </>
                    ) : null}

                    {blogPost?.section4?.content?.para3 ? (
                      <>
                        {blogPost?.section4?.content?.para3}
                        <br /> <br />
                      </>
                    ) : null}

                    {blogPost?.section4?.content?.para4 ? (
                      <>
                        {blogPost?.section4?.content?.para4}
                        <br /> <br />
                      </>
                    ) : null}
                  </div>
                </div>
              ) : null}
              {blogPost?.section5?.heading ? (
                <div style={{ display: "grid" }}>
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    {blogPost?.section5?.heading ?? ""}
                    <br /> <br />
                  </span>
                  {/* <img src={ImageBlog2} style={{ width: "100%" }} /> */}
                  <div style={{ fontSize: "16px" }}>
                    {blogPost?.section5?.content?.para1 ? (
                      <>
                        {blogPost?.section5?.content?.para1}
                        <br /> <br />
                      </>
                    ) : null}
                    {blogPost?.section5?.content?.para2 ? (
                      <>
                        {blogPost?.section5?.content?.para2}
                        <br /> <br />
                      </>
                    ) : null}
                    {blogPost?.section5?.content?.para3 ? (
                      <>
                        {blogPost?.section5?.content?.para3}
                        <br /> <br />
                      </>
                    ) : null}
                    {blogPost?.section5?.content?.para4 ? (
                      <>
                        {blogPost?.section5?.content?.para4}
                        <br /> <br />
                      </>
                    ) : null}
                  </div>
                </div>
              ) : null}
              {blogPost?.section6?.heading ? (
                <div style={{ display: "grid" }}>
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    {blogPost?.section6?.heading ?? ""}
                    <br /> <br />
                  </span>
                  {/* <img src={ImageBlog2} style={{ width: "100%" }} /> */}
                  <div style={{ fontSize: "16px" }}>
                    {blogPost?.section6?.content?.para1 ? (
                      <>
                        {blogPost?.section6?.content?.para1}
                        <br /> <br />
                      </>
                    ) : null}
                    {blogPost?.section6?.content?.para2 ? (
                      <>
                        {blogPost?.section6?.content?.para2}
                        <br /> <br />
                      </>
                    ) : null}
                    {blogPost?.section6?.content?.para3 ? (
                      <>
                        {blogPost?.section6?.content?.para3}
                        <br /> <br />
                      </>
                    ) : null}
                    {blogPost?.section6?.content?.para4 ? (
                      <>
                        {blogPost?.section6?.content?.para4}
                        <br /> <br />
                      </>
                    ) : null}
                  </div>
                </div>
              ) : null}
              <div style={{ fontSize: "16px" }}>
                {blogPost?.conclusion ?? ""}
                <br /> <br />
              </div>
              <div style={{ width: '100%', margin: 'auto', justifyContent: 'center', display: 'flex' }}>
                <img
                  src={image[1]}
                  alt=""
                  style={{ objectFit: 'cover' }}
                  className="image-section-detail-blog-second"
                />
              </div>
            </div>
          </Container>
        </div>
      </div>

      {ratio < 1000 ? null : <Footer />}
    </>
  );
}
