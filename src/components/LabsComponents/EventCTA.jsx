import React, { useState } from 'react';
import { submitContactToAppsScript } from '../FormSubmitFunction';

const EventCTA = () => {
    const [showForm, setShowForm] = useState(false);
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'

    const handleSubscribe = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');

        try {
            const result = await submitContactToAppsScript({
                name: 'Event Newsletter Subscriber',
                email: email,
                subject: 'Event Newsletter Subscription',
                message: 'User wants to subscribe to event updates and notifications.'
            }, "https://script.google.com/macros/s/AKfycbzpkdaCYDMZn8tJy6FMgAM6UFpxwIf0ye2asss7M_xam6XU77WSHMthcJNVgv-ICl9l/exec");

            if (!result.ok) {
                throw new Error(`HTTP ${result.status}`);
            }

            setMessage('Successfully subscribed to updates!');
            setMessageType('success');
            setEmail('');
            setTimeout(() => {
                setShowForm(false);
                setMessage('');
            }, 2000);
        } catch (err) {
            console.error('Subscription error:', err);
            setMessage('Failed to subscribe. Please try again.');
            setMessageType('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (showForm) {
        return (
            <div className="text-center mt-12 p-6 bg-zinc border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-3 satoshi-bold">
                    Subscribe to Event Updates
                </h3>
                <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                    <div className="mb-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            required
                            disabled={isSubmitting}
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                        />
                    </div>
                    <div className="flex gap-3 justify-center">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-6 py-2 bg-blue hover:bg-blue/80 text-white transition-colors duration-200 satoshi-medium disabled:opacity-50"
                        >
                            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                        </button>
                        <button
                            type="button"
                            onClick={() => setShowForm(false)}
                            className="px-6 py-2 bg-gray-600 hover:bg-gray-500 text-white transition-colors duration-200 satoshi-medium"
                        >
                            Cancel
                        </button>
                    </div>
                    {message && (
                        <p className={`mt-3 text-sm ${messageType === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                            {message}
                        </p>
                    )}
                </form>
            </div>
        );
    }

    return (
        <div className="text-center mt-12 p-6 bg-zinc border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-3 satoshi-bold">
                Don't Miss Out!
            </h3>
            <p className="text-gray-200 mb-4 satoshi-regular">
                Stay updated with our latest events and opportunities to get involved.
            </p>
            <button 
                onClick={() => setShowForm(true)}
                className="btn-labs hover:shadow-[0_4px_10px_rgba(255,255,255,0.4)] satoshi-medium transition-colors duration-200"
            >
                Subscribe to Updates
            </button>
        </div>
    );
};

export default EventCTA;
