import React from "react";
import "../css/termsAndCondition.css";
import { Container, CssBaseline } from "@mui/material";
import { useEffect } from "react";
import Footer from "../component/Footer";
const RiskOfInvestment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <div className="terms-condition-container">
          <h2 style={{textAlign:'center',marginBottom:20}} className="heading-terms-condition">RISK OF INVESTMENT </h2>
          <h4 style={{}}>Declaration of Risk</h4>
          <span className="paragraph-terms-condition">
            By accessing/using the Mynt platform through the website
            [https://www.myntinvest.com] (“Mynt Website/App/Platform”), you bear
            the fitness to undertake the risks in investments through the Mynt
            Website/App/Platform including but not limited to the following:
          </span>
          <div className="paragraph-terms-condition">
            <span className="paragraph-points-terms-condition">
              <b>1. Loss of Capital</b>
            </span>
            <br></br>
            <span className="paragraph-points-terms-condition">
              Investments in startups/early-stage ventures (“Companies”) bear an
              inherent risk of not assuring full-fledged profits or any returns
              from the investments, since these companies may not have a
              business model or established concept which can be used as a
              reference for 100% success. It is for this reason that it is
              generally recommended to create a diversified portfolio of
              investments, which will have the potential to deliver gains and
              absorb capital losses in the aggregate.
            </span>
          </div>
          <div className="paragraph-terms-condition">
            <span className="paragraph-terms-condition">
              <b>2. Valuation Risk</b>
            </span>
            <br></br>
            <span className="paragraph-terms-condition">
              It is difficult to assess the valuation of startups. The
              applicable Companies will issue the shares at a value agreed on
              methods which are subjective in nature. Hence the price you pa or
              subscribe to y may be higher or lower than the real valuation
              impacting your returns eventually.
            </span>
          </div>
          <div className="paragraph-terms-condition">
            <span className="paragraph-terms-condition">
              <b>3. Funding Risk</b>
            </span>
            <br></br>
            <span className="paragraph-terms-condition">
              The Companies may require funds in excess of its existing cash
              resources to fund operating expenses, develop new products, expand
              its marketing capabilities, and finance general and administrative
              activities. Due to market conditions at the time the company needs
              additional funding, it is possible that the Companies will be
              unable to obtain additional funding when it needs it, or the terms
              of any available funding might be unfavourable. If any Companies
              is unable to obtain additional funding as and when needed, it
              could be forced to delay its development, marketing, and expansion
              efforts and, if it continues to experience losses, potentially
              cease operations.
            </span>
          </div>
          <div className="paragraph-terms-condition">
            <span className="paragraph-terms-condition">
              <b>4. Lack of Liquidity</b>
            </span>
            <br />
            <span className="paragraph-terms-condition">
              Investments in the Companies are highly illiquid as the shares of
              such Companies are unlisted/private and cannot be sold easily on
              an exchange or similar secondary trading platform.
            </span>
          </div>
          <div className="paragraph-terms-condition">
            <span className="paragraph-terms-condition">
              <b>5. Rarity of Dividends</b>
            </span>
            <br></br>
            <span className="paragraph-terms-condition">
              The Companies may most likely be unable to pay any dividend
              throughout the life cycle of an investment. Therefore, in order
              for you to earn a return out of any of your investments, you will
              have to go through a further sale or such other similar process
              for which a time frame cannot be ascertained.
            </span>
          </div>
          <div className="paragraph-terms-condition">
            <span className="paragraph-terms-condition">
              <b>6. Dilution</b>
            </span>
            <br></br>
            <span className="paragraph-terms-condition">
              The Companies may raise additional capital in the future and
              therefore, your shareholding may be diluted, as a result of such
              issue of new shares.
            </span>
          </div>
          <div className="paragraph-terms-condition">
            <span className="paragraph-terms-condition">
              <b>7. Performance</b>
            </span>
            <br />
            <span className="paragraph-points-terms-condition">
              The Companies forward-looking statements, containing opinions and
              beliefs, are based on a number of estimates and assumptions that
              are subject to significant business, economic, regulatory, and
              competitive uncertainties. Though these statements can be used for
              understanding the objectives and goals of the Companies, such
              statements should not be considered as undertakings from the
              Companies and should be considered as merely being speculative and
              having subjective nature.
            </span>
          </div>
          <div className="paragraph-terms-condition">
            <span className="paragraph-terms-condition">
              <b>8. Taxes and applicable charges:</b>
            </span>
            <br></br>
            <span className="paragraph-points-terms-condition">
              You may be liable to pay taxes on any dividends or gains you
              receive from your investments in the Companies and payment of such
              taxes is entirely your responsibility. Therefore, you should
              consult your tax advisor for more information on these matters.
            </span>
          </div>
          <div className="paragraph-terms-condition">
            <span className="paragraph-terms-condition">
              <b>9. CONSULT YOUR ADVISORS.</b>
            </span>
            <br />
            <span className="paragraph-points-terms-condition">
              It is recommended that you consult with your respective advisors.
              This document and all other documents has been prepared for
              approval by your attorney, and no representation is made by Myny
              as to the legal sufficiency or tax consequences of this document
              and any other documents, or the transaction to which it relates.
              In any transaction you make, it is recommended that you consult
              with a professional, such as a financial advisor, accountant or
              other person, with experience in evaluating the condition of the
              transaction and its risks. No representation is made by Mynt or
              its agents or employees, as to the legal effect, interpretation,
              or economic consequences of any transaction. THESE ARE QUESTIONS
              YOU SHOULD ADDRESS WITH YOUR LENDER, ATTORNEY, ACCOUNTANT,
              ADVISORS, AND OTHER QUALIFIED PROFESSIONALS.
            </span>
          </div>

          <span className="paragraph-terms-condition">
            For the avoidance of doubt, in light of your acknowledgment of the
            above risk factors, you agree and acknowledge that you shall hold
            Mynt and Mynt Website/App/Platform harmless and shall not raise any
            claim in respect of any of the above.
          </span>
        </div>
      </Container>
      <Footer />
    </React.Fragment>
  );
};
export default RiskOfInvestment;
