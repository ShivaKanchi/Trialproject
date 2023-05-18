import React, { useState, useEffect } from 'react';

function MapGet() {
    const [location, setLocation] = useState({});

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
        });
    }, []);

    return (
        <div className='p-5'>
            Latitude: {location.latitude}<br />
            Longitude: {location.longitude}
        </div>
    );
}

export default MapGet