import { useState, useEffect } from 'react';

/**
 * Custom hook to get user's precise geolocation (GPS/Wi-Fi)
 * Returns { latitude, longitude, error, loading }
 */
export const useGeolocation = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation(prev => ({
        ...prev,
        error: 'Geolocation is not supported by this browser.',
        loading: false,
      }));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log(`✓ GPS Location Found - Latitude: ${latitude}, Longitude: ${longitude}`);
        setLocation({
          latitude,
          longitude,
          error: null,
          loading: false,
        });
      },
      (error) => {
        console.error('✗ Geolocation Error:', error.message);
        setLocation(prev => ({
          ...prev,
          error: error.message,
          loading: false,
        }));
      },
      {
        enableHighAccuracy: true,  // Request precise location
        timeout: 10000,             // 10 second timeout
        maximumAge: 0,              // Don't use cached location
      }
    );
  }, []);

  return location;
};

export default useGeolocation;
