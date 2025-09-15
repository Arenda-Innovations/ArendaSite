import React from 'react';

const EventHeader = () => {
    return (
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 satoshi-bold">
                Upcoming Events
            </h1>
            <p className="text-gray-200 text-lg max-w-3xl mx-auto satoshi-regular">
                Join us at our upcoming events to connect with fellow innovators, learn about cutting-edge research, 
                and contribute to projects that are shaping the future.
            </p>
        </div>
    );
};

export default EventHeader;
