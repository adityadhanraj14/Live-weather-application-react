import { createContext, useContext, useState, useEffect } from 'react';
import useGeolocation from '../hooks/useGeolocation';
import { getReverseGeocodeApi } from '../../query/api';

const WeatherContext = createContext();

export const useWeatherContext = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
    const { latitude: geoLat, longitude: geoLon, error: geoError, loading: geoLoading } = useGeolocation();

    const [coords, setCoords] = useState({ lat: 12.9163655, lon: 77.6101167 });
    const [locationName, setLocationName] = useState('Bengaluru, KR');
    const [isManual, setIsManual] = useState(false);
    const [contextLoading, setContextLoading] = useState(false);

    // Update coords when geolocation is available, ONLY if user hasn't manually searched
    useEffect(() => {
        const updateFromGeo = async () => {
            if (!isManual && geoLat && geoLon) {
                setCoords({ lat: geoLat, lon: geoLon });
                // Fetch location name for current location
                try {
                    const name = await getReverseGeocodeApi(geoLat, geoLon);
                    if (name) setLocationName(name);
                    else setLocationName('Current Location');
                } catch (e) {
                    console.error("Failed to reverse geocode:", e);
                    setLocationName('Current Location');
                }
            }
        };
        updateFromGeo();
    }, [geoLat, geoLon, isManual]);

    const updateCoordinates = (lat, lon, name) => {
        setCoords({ lat, lon });
        if (name) setLocationName(name);
        setIsManual(true);
    };

    const resetToCurrentLocation = () => {
        setIsManual(false);
        setContextLoading(true);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    setCoords({ lat: latitude, lon: longitude });
                    try {
                        const name = await getReverseGeocodeApi(latitude, longitude);
                        if (name) setLocationName(name);
                        else setLocationName('Current Location');
                    } catch (e) {
                        console.error("Failed to reverse geocode:", e);
                        setLocationName('Current Location');
                    }
                    setContextLoading(false);
                },
                (error) => {
                    console.error("Geolocation error:", error);
                    setContextLoading(false);
                }
            );
        } else {
            setContextLoading(false);
        }
    };

    return (
        <WeatherContext.Provider value={{
            lat: coords.lat,
            lon: coords.lon,
            locationName,
            updateCoordinates,
            resetToCurrentLocation,
            loading: geoLoading || contextLoading,
            error: geoError
        }}>
            {children}
        </WeatherContext.Provider>
    );
};
