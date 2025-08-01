import * as Sentry from '@sentry/react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import VideoCarousel from './components/VideoCarousel';
import Footer from './components/Footer';
import BeltOfCollabs from './components/BeltOfCollabs';
import ResearchPage from './components/ResearchPage';

import ProjectBento from './components/ProjectBento';
const App = () => {
  return (
    <main className='bg-black'>
      <Navbar/>
      <Hero/>
      <VideoCarousel/>
      <ResearchPage/>
      <BeltOfCollabs/>
      <Footer/>
      <ProjectBento/>
    </main>
  );
};

export default Sentry.withProfiler(App);
