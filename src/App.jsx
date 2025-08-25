import * as Sentry from '@sentry/react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import VideoCarousel from './components/VideoCarousel';
import Footer from './components/Footer';
import BeltOfCollabs from './components/BeltOfCollabs';
import ResearchPage from './components/ResearchPage';
import ContactForm from './components/ContactForm';
import ContactPage from './components/Pages/ContactPage';
import FounderPage from './components/Pages/FounderPage';
import AIPage from './components/Pages/AIPage';
import EngineeringPage from './components/Pages/EngineeringPage';
import SocialImpactPage from './components/Pages/SocialImpactPage';
import DevelopmentBanner from './components/DevelopmentBanner';
import CommitmentToArkansas from './components/CommitmentToArkansas';
import WhyArenda from './components/WhyArenda';
import LabsPage1 from './components/Pages/LabsPage1';
const App = () => {
  return (
    <div className="scroll-smooth">
      {/*<DevelopmentBanner />*/}
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero/>
            <ResearchPage/>
            {/* <BeltOfCollabs/> */}
            <WhyArenda/>
            <CommitmentToArkansas/>
            
          </>
        } />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/founder" element={<FounderPage />} />
        <Route path="/ai" element={<AIPage />} />
        <Route path="/engineering" element={<EngineeringPage />} />
        <Route path="/social-impact" element={<SocialImpactPage />} />
        <Route path="/labs" element={<LabsPage1 />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default Sentry.withProfiler(App);
