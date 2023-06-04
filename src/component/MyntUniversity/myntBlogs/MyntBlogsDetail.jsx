import React from "react";
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
import { useEffect } from "react";
let blogPost = {};
export default function MyntBlogsDetail() {
  const location = window.location.pathname;
  const ratio = parseInt(window.innerWidth);
  const navigate = useNavigate();
  const { id } = useParams();
  const blogPost = blogs.find((blog) => blog?.id === parseInt(id));

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
                  src={ImageBlog1}
                  alt=""
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
            </div>
          </Container>
        </div>
      </div>

      {ratio < 1000 ? null : <Footer />}
    </>
  );
}
