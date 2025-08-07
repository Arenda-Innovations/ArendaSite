import * as Sentry from '@sentry/react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import VideoCarousel from './components/VideoCarousel';
import Footer from './components/Footer';
import BeltOfCollabs from './components/BeltOfCollabs';
import ResearchPage from './components/ResearchPage';
import ContactForm from './components/ContactForm';
import ProjectBento from './components/ProjectBento';
const App = () => {
  return (
    <body className="scroll-smooth">
      
      
      <Hero/>
      <VideoCarousel/>
      <ResearchPage/>
      <BeltOfCollabs/>
      <ProjectBento/>
      <Footer/>
      
    </body>
  );
};

export default Sentry.withProfiler(App);
