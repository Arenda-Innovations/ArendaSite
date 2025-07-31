import * as Sentry from '@sentry/react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import VideoCarousel from './components/VideoCarousel';
import ArendaResearch from './components/ResearchPage';

const App = () => {
  return (
    <main className="bg-black">
      
      <Navbar />
      <Hero />
      <VideoCarousel />
      <ArendaResearch />
      
    </main>
  )
}

export default Sentry.withProfiler(App);
