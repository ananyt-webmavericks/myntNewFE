import React, { useState, useEffect } from "react";
import "../css/footer.css";
import Grid from "@mui/material/Grid";
import logo from "../images/mynt-new.png";
import facebook from "../images/social-logos/facebook.png";
import linkdin from "../images/social-logos/linkdin.png";
import instagram from "../images/social-logos/instagram.png";
import youtube from "../images/social-logos/youtube.png";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const [space, setSpace] = useState(2);
  const [gridxsFirst, setGridxsFirst] = useState(4);
  const [gridxsSecond, setgridxsSecond] = useState(8);
  const ratio = parseInt(window.innerWidth);

  useEffect(() => {
    if (ratio > 920) {
      setSpace(2);
      setGridxsFirst(4);
      setgridxsSecond(8);
    } else {
      setSpace(1);
      setGridxsFirst(12);
      setgridxsSecond(12);
    }
  }, []);

  return (
    <div className="footer-container">
      <div className="footer-wrapper" >
        <Grid container spacing={space}>
          <Grid item xs={gridxsFirst}>
            <div className="footer-head-section">
              <img src={logo} alt="Mynt logo" className="logo-web-footer" />
              <span className="footer-text-header">
                Mynt is a transparency and technology-focused alternate
                enrollment platform that adds value to your wealth creation
                goals by making the best Startup opportunities accessible across
                the entire risk-reward spectrum.
              </span>
              <div className="button-container-footer">
                <div className="logo-footer">
                  <img src={facebook} width="10px"></img>
                </div>
                <div className="logo-footer">
                  <img src={instagram} width="20px"></img>
                </div>
                <div className="logo-footer">
                  <img src={linkdin} width="20px"></img>
                </div>
                <div className="logo-footer">
                  <img src={youtube} width="20px"></img>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={gridxsSecond}>
            <div className="all-link-section">
              <div className="footer-links-section-first">
                <div className="investor-university-section">
                  <span className="heading-link">Investors</span>
                  <span
                    onClick={() => navigate("/dashboard/live-deals")}
                    className="Detail-link"
                  >
                    Deals
                  </span>
                  <span
                    onClick={() => navigate("/login")}
                    className="Detail-link"
                  >
                    Enroll
                  </span>
                  <span
                    onClick={() => navigate("/myntUniversity/faqs")}
                    className="Detail-link"
                  >
                    Learn
                  </span>
                </div>
                <div className="investor-university-section">
                  <span className="heading-link">Mynt University</span>
                  <span
                    onClick={() => navigate("/faq-details")}
                    className="Detail-link"
                  >
                    FAQs
                  </span>
                  <span
                    onClick={() => navigate("/myntUniversity/blogs")}
                    className="Detail-link"
                  >
                    Blogs
                  </span>
                </div>
              </div>
              <div className="footer-links-section-Second">
                <div className="investor-university-section">
                  <span className="heading-link">Fine Print</span>
                  <span
                    onClick={() => navigate("/privacy-policy")}
                    className="Detail-link"
                  >
                    Privacy Policy
                  </span>
                  <span
                    onClick={() => navigate("/terms-and-condition")}
                    className="Detail-link"
                  >
                    Terms & Conditions
                  </span>
                  <span
                    onClick={() => navigate("/risk-investment")}
                    className="Detail-link"
                  >
                    Risk of investment
                  </span>
                </div>
                <div className="investor-university-section">
                  <span className="heading-link">Startups</span>
                  <span
                    onClick={() => navigate("/founder")}
                    className="Detail-link"
                  >
                    Raise
                  </span>
                  <span
                    onClick={() => navigate("/login-founder")}
                    className="Detail-link"
                  >
                    Log In
                  </span>
                  <span
                    onClick={() => navigate("/myntUniversity/faqs")}
                    className="Detail-link"
                  >
                    Learn
                  </span>
                </div>
              </div>
              <div className="contact-us-at">
                <div className="investor-university-section-second">
                  <span className="heading-link">Contact Us</span>
                  <span className="Detail-link">WeWork BlueOne Square</span>
                  <span className="Detail-link">
                    246, Phase IV, Udyog Vihar
                  </span>
                  <span className="Detail-link"> Haryana-122016</span>
                  <span className="Detail-link">
                    CIN: U74999RJ2022PTC079102
                  </span>
                </div>
                <div className="contact-us-at-mail">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <MailOutlineRoundedIcon
                      style={{
                        width: "30px",
                        height: "30px",
                        color: "#fbdf35",
                        paddingBottom: "8px",
                      }}
                    />
                    <span className="Detail-link">contact@myntinvest.com</span>
                  </div>
                  {/* <div style={{ display: "flex", alignItems: "center" }}>
                  <LocalPhoneSharpIcon
                    style={{
                      width: "30px",
                      height: "30px",
                      color: "#fbdf35",
                      paddingBottom: "8px",
                    }}
                  />
                  <span className="Detail-link">+91 8769740854</span>
                </div> */}
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        <div className="footer-bottom-section">
          <span style={{ fontWeight: "600", fontSize: "15px" }}>
            Disclaimer:
          </span>
          <span className="footer-text-header">
            MXi Technologies Pvt Ltd (Mynt) is neither a stock exchange nor does
            it intend to get recognized as a stock exchange under the Securities
            Contracts Regulation Act, 1956. MXi Technologies Pvt Ltd is not
            authorized by the capital markets regulator to solicit investments.
            The securities traded on these platforms are not traded on any
            regulated exchange. All trademarks and logos or registered
            trademarks and logos found on this site or mentioned herein belong
            to their respective owners, and are being used solely for
            informational purposes. The information contained herein has been
            collected from public sources, MXi Technologies Pvt Ltd disclaims
            any and all responsibility in connection with veracity of this data.
            The information on this website is intended solely for educational
            purposes and should not be considered as legal, financial, or any
            other type of advice. MXi Technologies Pvt Ltd holds no liability
            for any financial or other losses suffered by the user or any
            affiliated party based on the information provided here. In
            addition, MXi Technologies Pvt Ltd does not facilitate any buying,
            selling, or trading of securities either online or offline. This
            Site will be updated periodically.
          </span>
        </div>
      </div>
      <div className="bottomMost-bar">
        <span className="bottomMost-text">
          MXi Technologies Pvt. Ltd. 2023 All Rights Reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
