import * as Sentry from '@sentry/react';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import VideoCarousel from './components/VideoCarousel';
import Footer from './components/Footer';
import BeltOfCollabs from './components/BeltOfCollabs';
import ResearchPage from './components/ResearchPage';
import ContactForm from './components/ContactForm';
import ContactPage from './components/ContactPage';
import ProjectBento from './components/ProjectBento';

const App = () => {
  return (
    <body className="scroll-smooth">
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <>
            <Hero/>
            <VideoCarousel/>
            <ResearchPage/>
            <BeltOfCollabs/>
            <ProjectBento/>
          </>
        } />
        <Route path="/contact" 
        element={<ContactPage />} 
        />
      </Routes>
      <Footer/>
    </body>
  );
};

export default Sentry.withProfiler(App);
