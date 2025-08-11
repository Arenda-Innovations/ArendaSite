import React from 'react';
   


const BeltOfCollabs = () => {
    const partners = [
        { name: 'UCA', logo: '/assets/images/UCALogo.png' }, // Replace with actual UCA logo when available
        
    ];
    return (
        <>
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="text-4xl font-bold text-white text-center mb-12">
                    Our Partners
                </h2>
            </div>
            <div className="w-full overflow-hidden">
                <div
                    id="belt-of-collabs"
                    className="flex items-center justify-around"
                    style={{
                        width: '200%',
                        animation: '35s linear 0s infinite normal none running marquee',
                        display: 'flex',
                        gap: 'clamp(1rem, 3vw, 2rem)',
                        alignItems: 'center',
                    }}
                >
                    {partners.map((partner, index) => (
                        <div key={index} className="text-center">
                            <img
                                src={partner.logo}
                                alt={`${partner.name} Logo`}
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
                            <div className="text-white text-sm mt-2 font-medium opacity-80">
                                {partner.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default BeltOfCollabs;