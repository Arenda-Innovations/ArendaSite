// Utility functions for event components

export const formatDate = (dateString) => {
    const options = { 
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
};

export const getTypeColor = (type) => {
    const colors = {
        'Research': 'bg-blue/20 text-blue border-blue/30',
    };
    return colors[type] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
};
