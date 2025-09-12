import React from 'react';
import { upcomingEvents } from '../../constants';
import EventHeader from './EventHeader';
import EventGrid from './EventGrid';
import EventCTA from './EventCTA';

const UpcomingEvents = () => {
    return (
        <div className="w-full max-w-6xl mx-auto p-6 bg-black">
            <EventHeader />
            <EventGrid events={upcomingEvents} />
            <EventCTA />
        </div>
    );
};

export default UpcomingEvents;