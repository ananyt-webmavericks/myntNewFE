import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./Pages/Home";
import GetStarted from "./Pages/GetStarted";
import OtpVerification from "./Pages/OtpVerification";
import AboutYou from "./Pages/AboutYou";
import BecomeInvestor from "./Pages/BecomeInvestor";
import StartupSectors from "./Pages/StartupSectors";
import Dashboard from "./Pages/Dashboard";
import LiveDeals from "./Pages/LiveDeals";
import Analytics from "./Pages/Analytics";
import Portfolio from "./Pages/PortFolio";
import ChatWithExpert from "./Pages/ChatWithExpert";
import CompleteYourProfile from "./Pages/CompleteYourProfile";
import PaymentDetails from "./component/CompleteYourProfile/PaymentDetails";
import VerifyNumberOtp from "./component/CompleteYourProfile/VerifyNumberOtp";
import VerifyAddress from "./component/CompleteYourProfile/VerifyAddress";
import KycPanDetails from "./component/CompleteYourProfile/KycPanDetails";
import Login from "./Pages/Login";
import PayToSubscribe from "./Pages/PayToSubscribe";
import MyProfile from "./Pages/MyProfile";
import LoginAsFounder from "./Pages/LoginAsFounder";
import LiveDealsDetails from "./Pages/LiveDealsDetails";
import TermsAndCondition from "./Pages/TermsAndCondition";
import RiskOfInvestment from "./Pages/RiskOfInvestment";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import FaqDetails from "./Pages/FaqDetails";
import CampaignsFaq from "./component/FaqDetails/CampaignsFaq";
import FounderFaq from "./component/FaqDetails/FounderFaq";
import GeneralFaq from "./component/FaqDetails/GeneralFaq";
import StartedFaq from "./component/FaqDetails/StartedFaq";
import StartedInvestFaq from "./component/FaqDetails/StartedInvestFaq";
import SubscribtionFaq from "./component/FaqDetails/SubscribtionFaq";
import TaxtationFaq from "./component/FaqDetails/TaxationFaq";
import ToastNotify from "./component/Toastify";
import HomeFounder from "./Pages/Founder/HomeFounder";
import FounderApplication from "./Pages/Founder/FounderApplication";
import DrawerFounder from "./component/FounderDrawer/DrawerFounder";
import DashboardFounder from "./Pages/Founder/DashboardFounder";
import DashBoardESign from "./Pages/Founder/DashBoardESign";
import FounderCampaigns from "./Pages/Founder/FounderCampaigns";
import FounderCampaingsTabs from "./Pages/Founder/FounderCampaingsTabs";
import FounderCampaignsStats from "./Pages/Founder/FounderCampaignsStats";


import MyntFaq from "./Pages/MyntUniversity/MyntFaq";
import MyntBlogs from "./Pages/MyntUniversity/MyntBlogs";
import MyntVideoClips from "./Pages/MyntUniversity/MyntVideoClips";
import GettingStartedMynt from "./component/MyntUniversity/MyntFaq/GettingStartedMynt";
import StartupInvestMynt from "./component/MyntUniversity/MyntFaq/StartupInvestMynt";
import GeneralMynt from "./component/MyntUniversity/MyntFaq/GeneralMynt";
import SubscriptionMynt from "./component/MyntUniversity/MyntFaq/SubscriptionMynt";
import CampaignsMynt from "./component/MyntUniversity/MyntFaq/CampaignsMynt";
import ReturnTaxMynt from "./component/MyntUniversity/MyntFaq/ReturnTaxMynt";
import FounderMynt from "./component/MyntUniversity/MyntFaq/FounderMynt";
import MyntBlogsDetail from "./component/MyntUniversity/myntBlogs/MyntBlogsDetail";
import PageNotFound from "./Pages/PageNotFound";
import FounderSignUp from "./component/GetStarted/FounderSignUp";
import FounderOtpVerification from "./Pages/Founder/FounderOtpVerification";
import KycAadharUid from "./component/CompleteYourProfile/KycAadharUid";
import PaymentSuccess from "./Pages/Payment/PaymentSuccess";
import PaymentFailed from "./Pages/Payment/PaymentFailed";
import WaitTime from "./Pages/Payment/WaitTime";
import PaymentPending from "./Pages/Payment/PaymentPending";
import { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "./protectedRoute";
function App() {
  const location = window.location.pathname;
  const ratio = parseInt(window.innerWidth);

  return (
    <BrowserRouter>
      <Navbar />
      <Toaster />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/login-founder" element={<LoginAsFounder />} />
        <Route exact path="/get-started" element={<GetStarted />} />
        <Route exact path="/otp-verification" element={<OtpVerification />} />
        <Route exact path="/about-you" element={<AboutYou />} />
        <Route exact path="/become-investor" element={<BecomeInvestor />} />
        <Route exact path="/startup-sectors" element={<StartupSectors />} />
        <Route exact path="/myntUniversity/faqs" element={<MyntFaq />} />
        <Route exact path="/myntUniversity/blogs" element={<MyntBlogs />} />
        <Route
          exact
          path="/myntUniversity/videoClips"
          element={<MyntVideoClips />}
        />
        <Route
          exact
          path="/myntUniversity/faq/getting-started"
          element={<GettingStartedMynt />}
        />
        <Route
          exact
          path="/myntUniversity/faq/startup-invest"
          element={<StartupInvestMynt />}
        />
        <Route
          exact
          path="/myntUniversity/faq/general"
          element={<GeneralMynt />}
        />
        <Route
          exact
          path="/myntUniversity/faq/subscriptions"
          element={<SubscriptionMynt />}
        />
        <Route
          exact
          path="/myntUniversity/faq/campaigns"
          element={<CampaignsMynt />}
        />
        <Route
          exact
          path="/myntUniversity/faq/returntax"
          element={<ReturnTaxMynt />}
        />
        <Route
          exact
          path="/myntUniversity/faq/founder"
          element={<FounderMynt />}
        />
        <Route
          exact
          path="/myntUniversity/blogs/detail"
          element={<MyntBlogsDetail />}
        />

        <Route
          exact
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/dashboard/live-deals"
          element={
            <ProtectedRoute>
              <LiveDeals />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/dashboard/analytics"
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/dashboard/portfolio"
          element={
            <ProtectedRoute>
              <Portfolio />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/dashboard/chat-with-expert"
          element={
            <ProtectedRoute>
              <ChatWithExpert />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/complete-your-profile"
          element={<CompleteYourProfile />}
        />
        <Route
          exact
          path="/complete-your-profile/verify-otp"
          element={<VerifyNumberOtp />}
        />
        <Route
          exact
          path="/complete-your-profile/verify-address"
          element={
            <ProtectedRoute>
              <VerifyAddress />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/complete-your-profile/verify-kyc"
          element={
            <ProtectedRoute>
              <KycPanDetails />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/complete-your-profile/verify-kyc/aadhar-uid"
          element={
            <ProtectedRoute>
              <KycAadharUid />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/complete-your-profile/payment-details"
          element={
            <ProtectedRoute>
              <PaymentDetails />
            </ProtectedRoute>
          }
        />
        <Route exact path="/pay-to-subscribe" element={<PayToSubscribe />} />
        <Route
          exact
          path="/my-profile"
          element={
            <ProtectedRoute>
              <MyProfile />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/live-deals-details"
          element={<LiveDealsDetails />}
        />
        <Route
          exact
          path="/terms-and-condition"
          element={<TermsAndCondition />}
        />
        <Route exact path="/risk-investment" element={<RiskOfInvestment />} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route exact path="/faq-details" element={<FaqDetails />} />
        {/* faq details */}
        <Route
          exact
          path="/faq-details/campaigns-faq"
          element={<CampaignsFaq />}
        />
        <Route exact path="/faq-details/founder-faq" element={<FounderFaq />} />
        <Route exact path="/faq-details/general-faq" element={<GeneralFaq />} />
        <Route exact path="/faq-details/started-faq" element={<StartedFaq />} />
        <Route
          exact
          path="/faq-details/startedInvest-faq"
          element={<StartedInvestFaq />}
        />
        <Route
          exact
          path="/faq-details/subscribtion-faq"
          element={<SubscribtionFaq />}
        />
        <Route
          exact
          path="/faq-details/taxtation-faq"
          element={<TaxtationFaq />}
        />
        {/* founder */}
        <Route exact path="/signup-founder" element={<FounderSignUp />} />
        <Route
          exact
          path="/otp-verification-founder"
          element={<FounderOtpVerification />}
        />
        <Route exact path="/founder" element={<HomeFounder />} />
        <Route
          exact
          path="/founder/application"
          element={<FounderApplication />}
        />
        <Route
          exact
          path="/dashboard-founder"
          element={
            <ProtectedRoute>
              <DashboardFounder />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/dashboard-founder/e-signin"
          element={
            <ProtectedRoute>
              <DashBoardESign />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/dashboard-founder/campaigns"
          element={
            <ProtectedRoute>
              <FounderCampaigns />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/dashboard-founder/campaigns-tabs"
          element={
            <ProtectedRoute>
              <FounderCampaingsTabs />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/dashboard-founder/campaigns-statics"
          element={
            <ProtectedRoute>
              <FounderCampaignsStats />
            </ProtectedRoute>
          }
        />

        {/* payment success */}
        <Route
          exact
          path="/redirect"
          element={
            <ProtectedRoute>
              <WaitTime />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/payment/status-successful"
          element={
            <ProtectedRoute>
              <PaymentSuccess />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/payment/status-pending"
          element={
            <ProtectedRoute>
              <PaymentPending />
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/payment/status-failed"
          element={
            <ProtectedRoute>
              <PaymentFailed />
            </ProtectedRoute>
          }
        />

        {/* page not found */}
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
      {/* {!location.includes("/dashboard") &&
      !location.includes("/complete-your-profile") &&
      !location.includes("/myntUniversity") ? null : (
        <Footer />
      )} */}
    </BrowserRouter>
  );
}

export default App;
