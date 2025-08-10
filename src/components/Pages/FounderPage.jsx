import FounderProfile from '../FounderProfile';
import { founders } from '../../constants';

const FounderPage = () => {
  return (
    <div className="min-h-screen bg-black pt-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Our Founders
        </h1>
        
        {founders.map((founder) => (
          <FounderProfile
            key={founder.id}
            name={founder.name}
            title={founder.title}
            description={founder.description}
            imageUrl={founder.imageUrl}
            orientation={founder.orientation}
            className="mb-16"
          />
        ))}
      </div>
    </div>
  );
};

export default FounderPage; 