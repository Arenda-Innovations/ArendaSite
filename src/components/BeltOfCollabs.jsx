import React from 'react';
   


const BeltOfCollabs = () => {
    return (
        <div
      className="flex items-center justify-around"
      style={{
        width: '200%',
        animation: '35s linear 0s infinite normal none running marquee',
        display: 'flex',
        gap: 'clamp(1rem, 3vw, 2rem)',
        alignItems: 'center',
      }}
    >
      {Array.from({ length: 12 }).map((_, index) => (
        <img
          key={index}
          src="public/assets/images/react.svg"
          alt="University Logo"
          style={{
            height:
              index % 3 === 0
                ? 'clamp(70px, 12vw, 90px)'
                : index % 3 === 1
                ? 'clamp(40px, 8vw, 48px)'
                : 'clamp(55px, 9vw, 64px)',
            objectFit: 'contain',
            filter: 'brightness(0.95) contrast(1.1)',
            margin: '0 auto',
            display: 'block',
          }}
        />
      ))}
    </div>
    );
}

export default BeltOfCollabs;