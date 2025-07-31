import * as Sentry from '@sentry/react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import VideoCarousel from './components/VideoCarousel';
import Footer from './components/Footer';
import BeltOfCollabs from './components/BeltOfCollabs';
import ResearchPage from './components/ResearchPage';
const App = () => {
  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      
      <VideoCarousel />
      <ResearchPage />
      <BeltOfCollabs/>
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);
