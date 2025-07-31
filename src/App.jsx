import * as Sentry from '@sentry/react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import VideoCarousel from './components/VideoCarousel';
import Footer from './components/Footer';
import BeltOfCollabs from './components/BeltOfCollabs';

const App = () => {
  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <BeltOfCollabs/>
      <VideoCarousel />
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);
