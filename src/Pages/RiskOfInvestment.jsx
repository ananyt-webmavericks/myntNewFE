import React from "react";
import '../css/termsAndCondition.css';
import { Container, CssBaseline } from "@mui/material";
import { useEffect } from "react";
const RiskOfInvestment = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <div className="terms-condition-container">
                    <span className="heading-terms-condition">Risk of Subscription</span>
                    <span className="paragraph-terms-condition">By accessing/using the mynt platform through the website [https://www.myntinvest.com] (“Website”) or the mobile app ("App"), you bear the fitness to undertake the risks in Subscriptions through the Website including but not limited to the following:</span>

                    <span className="paragraph-terms-condition"><b>1.</b> Loss of Capital Subscriptions in startups/early-stage ventures (“Companies”) bear an inherent risk of not assuring full-fledged profits or returns from the Subscriptions, since these companies may not have a business model or established concept which can be used as a reference for 100% success. It is for this reason that it is generally recommended to create a diversified portfolio of Subscriptions, which will have the potential to deliver gains and absorb capital losses in the aggregate.</span>
                    <span className="paragraph-terms-condition"><b>2.</b> Lack of Liquidity Liquidity refers to equity shares that can be sold with ease. However, equity Subscriptions in the Companies are highly illiquid as the shares of such Companies are unlisted/private and cannot be sold easily on an exchange or similar secondary trading platform.</span>
                    <span className="paragraph-terms-condition"><b>3.</b> Rarity of Dividends The Companies may most likely be unable to pay any dividend throughout the life cycle of an Subscription. Therefore, in order for you to earn a return out of any of your Subscriptions, you will have to go through a further sale or such other similar process for which a time frame cannot be ascertained.</span>
                    <span className="paragraph-terms-condition"><b>4.</b> Dilution The Companies may raise additional capital in the future and therefore, your shareholding may be diluted, as a result of such issue of new shares.</span>
                    <span className="paragraph-terms-condition"><b>5.</b> Performance The Company’s forward-looking statements, containing opinions and beliefs, are based on a number of estimates and assumptions that are subject to significant business, economic, regulatory, and competitive uncertainties. Though these statements can be used for understanding the objectives and goals of the Companies, such statements should not be considered as undertakings from the Companies and should be considered as merely being speculative and having subjective nature.</span>
                    <span className="paragraph-terms-condition"><b>6.</b> Tax You may be liable to pay taxes on any dividends or gains you receive from your Subscriptions in the Company and payment of such taxes is entirely your responsibility. Therefore, you should consult your tax advisor for more information on these matters.</span>
                    <span className="paragraph-terms-condition">For the avoidance of doubt, in light of your acknowledgment of the above risk factors, you agree and acknowledge that you shall hold mynt harmless and shall not raise any claim in respect of any of the above.</span>
                </div>
            </Container>
        </React.Fragment>
    )
}
export default RiskOfInvestment;