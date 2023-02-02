
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect } from 'react';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './Pages/Home';
import GetStarted from './Pages/GetStarted';
import OtpVerification from './Pages/OtpVerification';
import AboutYou from './Pages/AboutYou';
import BecomeInvestor from './Pages/BecomeInvestor';
import StartupSectors from './Pages/StartupSectors';
import Dashboard from './Pages/Dashboard';
import LiveDeals from './Pages/LiveDeals';
import Analytics from './Pages/Analytics';
import Portfolio from './Pages/PortFolio';
import ChatWithExpert from './Pages/ChatWithExpert';
import CompleteYourProfile from './Pages/CompleteYourProfile';
import PaymentDetails from './component/CompleteYourProfile/PaymentDetails';
import VerifyNumberOtp from './component/CompleteYourProfile/VerifyNumberOtp';
import VerifyAddress from './component/CompleteYourProfile/VerifyAddress';
import KycPanDetails from './component/CompleteYourProfile/KycPanDetails';
import Login from './Pages/Login';
import PayToSubscribe from './Pages/PayToSubscribe';
import MyProfile from './Pages/MyProfile';
import LoginAsFounder from './Pages/LoginAsFounder';
import LiveDealsDetails from './Pages/LiveDealsDetails';
import TermsAndCondition from './Pages/TermsAndCondition';
import RiskOfInvestment from './Pages/RiskOfInvestment';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import FaqDetails from './Pages/FaqDetails';
import CampaignsFaq from './component/FaqDetails/CampaignsFaq';
import FounderFaq from './component/FaqDetails/FounderFaq';
import GeneralFaq from './component/FaqDetails/GeneralFaq';
import StartedFaq from './component/FaqDetails/StartedFaq';
import StartedInvestFaq from './component/FaqDetails/StartedInvestFaq';
import SubscribtionFaq from './component/FaqDetails/SubscribtionFaq';
import TaxtationFaq from './component/FaqDetails/TaxationFaq';

function App() {

  const location = window.location.pathname;
  const ratio = parseInt(window.innerWidth);


  
  return (
    <BrowserRouter>
    <Navbar />
    
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/login-founder" element={<LoginAsFounder />} />
          <Route exact path="/get-started" element={<GetStarted />} />
          <Route exact path="/otp-verification" element={<OtpVerification />} />
          <Route exact path="/about-you" element={<AboutYou />} />
          <Route exact path="/become-investor" element={<BecomeInvestor />} />
          <Route exact path="/startup-sectors" element={<StartupSectors />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/dashboard/live-deals" element={<LiveDeals />} />
          <Route exact path="/dashboard/analytics" element={<Analytics />} />
          <Route exact path="/dashboard/portfolio" element={<Portfolio />} />
          <Route exact path="/dashboard/chat-with-expert" element={<ChatWithExpert />} />
          <Route exact path="/complete-your-profile" element={<CompleteYourProfile />} />
          <Route exact path="/complete-your-profile/verify-otp" element={<VerifyNumberOtp />} />
          <Route exact path="/complete-your-profile/verify-address" element={<VerifyAddress />} />
          <Route exact path="/complete-your-profile/verify-kyc" element={<KycPanDetails />} />
          <Route exact path="/complete-your-profile/payment-details" element={<PaymentDetails />} />
          <Route exact path="/pay-to-subscribe" element={<PayToSubscribe />} />
          <Route exact path="/my-profile" element={<MyProfile />} />
          <Route exact path="/live-deals-details" element={<LiveDealsDetails />} />
          <Route exact path="/terms-and-condition" element={<TermsAndCondition />} />
          <Route exact path="/risk-investment" element={<RiskOfInvestment />} />
          <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route exact path="/faq-details" element={<FaqDetails />} />
          {/* faq details */}
          <Route exact path="/faq-details/campaigns-faq" element={<CampaignsFaq />} />
          <Route exact path="/faq-details/founder-faq" element={<FounderFaq />} />
          <Route exact path="/faq-details/general-faq" element={<GeneralFaq />} />
          <Route exact path="/faq-details/started-faq" element={<StartedFaq />} />
          <Route exact path="/faq-details/startedInvest-faq" element={<StartedInvestFaq />} />
          <Route exact path="/faq-details/subscribtion-faq" element={<SubscribtionFaq />} />
          <Route exact path="/faq-details/taxtation-faq" element={<TaxtationFaq />} />
        </Routes>
        {(!location.includes('/dashboard') ) && (!location.includes('/complete-your-profile'))  &&  <Footer />}
        
    </BrowserRouter>
  );
}

export default App;
