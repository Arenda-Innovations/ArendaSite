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
import ProjectBento from './components/ProjectBento';

const App = () => {
  return (
    <div className="scroll-smooth">
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <>
            <Hero/>
            <VideoCarousel/>
            <ResearchPage/>
            <BeltOfCollabs/>
            
          </>
        } />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/founder" element={<FounderPage />} />
        <Route path="/ai" element={<AIPage />} />
        <Route path="/engineering" element={<EngineeringPage />} />
        <Route path="/social-impact" element={<SocialImpactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default Sentry.withProfiler(App);
