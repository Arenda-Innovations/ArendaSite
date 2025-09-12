import React from 'react';
import { formatDate, getTypeColor } from './eventUtils';

const EventCard = ({ event }) => {
    return (
        <div 
            className={`relative bg-zinc p-6 border transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                event.featured 
                    ? 'border-blue/50 shadow-blue/10' 
                    : 'border-gray-700/50 hover:border-gray-600/50'
            }`}
        >
            {/* Featured Badge */}
            {event.featured && (
                <div className="absolute -top-2 -right-2 bg-blue text-white px-3 py-1 text-xs font-semibold satoshi-medium">
                    Featured
                </div>
            )}

            {/* Event Type Badge */}
            <div className={`inline-block px-3 py-1 text-xs font-semibold mb-4 border ${getTypeColor(event.type)} satoshi-medium`}>
                {event.type}
            </div>

            {/* Event Title */}
            <h3 className="text-xl font-bold text-white mb-3 satoshi-bold">
                {event.title}
            </h3>

            {/* Date and Time */}
            <div className="flex items-center mb-2 text-gray-300">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span className="text-sm satoshi-regular">
                    {formatDate(event.date)} • {event.time}
                </span>
            </div>

            {/* Location */}
            <div className="flex items-center mb-4 text-gray-300">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm satoshi-regular">{event.location}</span>
            </div>

            {/* Description */}
            <p className="text-gray-200 text-sm mb-4 satoshi-regular leading-relaxed">
                {event.description}
            </p>

            {/* Action Button */}
            <button className="w-full bg-blue hover:bg-blue/80 text-white py-2 px-4 transition-colors duration-200 satoshi-medium">
                Learn More
            </button>
        </div>
    );
};

export default EventCard;
