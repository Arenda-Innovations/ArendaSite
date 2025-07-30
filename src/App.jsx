import * as Sentry from '@sentry/react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import VideoCarousel from './components/VideoCarousel';

const App = () => {
  return (
    <main className="bg-black">
      
      <Navbar />
      <Hero />
      <><VideoCarousel /></>
      
    </main>
  )
}

export default Sentry.withProfiler(App);
