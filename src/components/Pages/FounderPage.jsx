import FounderProfile from '../FounderProfile';
import { founders } from '../../constants';

const FounderPage = () => {
  const [firstFounder,secondFounder, ...otherFounders] = founders;
  
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-6xl mx-auto px-8">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Our Founders
        </h1>
      </div>
      
      {/* Founders Section with Full Screen Gradient */}
      <div className="bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-indigo-900/30 py-12 mb-20">
        <div className="max-w-6xl mx-auto px-8">
          <FounderProfile
            key={firstFounder.id}
            name={firstFounder.name}
            title={firstFounder.title}
            description={firstFounder.description}
            imageUrl={firstFounder.imageUrl}
            orientation={firstFounder.orientation}
            className="mb-8"
          />
          <FounderProfile
            key={secondFounder.id}
            name={secondFounder.name}
            title={secondFounder.title}
            description={secondFounder.description}
            imageUrl={secondFounder.imageUrl}
            orientation={secondFounder.orientation}
            className="mb-8"
          />
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Faculty
        </h2>
      </div>
      
      {/* Faculty Section with Full Screen Gradient */}
      <div >
        <div className="max-w-6xl mx-auto px-8">
          {otherFounders.map((founder) => (
            <FounderProfile
              key={founder.id}
              name={founder.name}
              title={founder.title}
              description={founder.description}
              imageUrl={founder.imageUrl}
              orientation={founder.orientation}
              className="mb-16 last:mb-8"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FounderPage; 