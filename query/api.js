// Search/Geocoding API
const searchApiKey = import.meta.env.VITE_SEARCH_LISTING_API_KEY;

const getSearchListapi = async (query) => {
    if (!query) return [];
    if (!searchApiKey) throw new Error('VITE_SEARCH_LISTING_API_KEY is not set. Add it to a root .env file as VITE_SEARCH_LISTING_API_KEY=your_key');
    const encoded = encodeURIComponent(query);
    const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encoded}&apiKey=${searchApiKey}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Search API failed");
    return res.json();
};

const getReverseGeocodeApi = async (lat, lon) => {
    if (!lat || !lon) return null;
    if (!searchApiKey) throw new Error('VITE_SEARCH_LISTING_API_KEY is not set');

    const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=${searchApiKey}`;
    const res = await fetch(url);

    if (!res.ok) throw new Error("Reverse Geocoding API failed");

    const data = await res.json();
    if (data.features && data.features.length > 0) {
        return data.features[0].properties.formatted;
    }
    return null;
};

// Weather API (Open-Meteo)
const fetchWeather = async ({ queryKey }) => {
    const [_, lat, lon] = queryKey;

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=Asia/Kolkata&hourly=temperature_2m,weathercode,apparent_temperature,surface_pressure,precipitation_probability,relative_humidity_2m&daily=sunrise,sunset,temperature_2m_max,temperature_2m_min,uv_index_max`;

    const res = await fetch(url);
    if (!res.ok) throw new Error("Weather API failed");

    return res.json();
};


// Weather Images API (Pexels)
const fetchWeatherImages = async (query = 'weather') => {
    try {
        const apiKey = import.meta.env.VITE_PEXELS_API_KEY;
        if (!apiKey) {
            console.warn('VITE_PEXELS_API_KEY not set');
            return [];
        }

        // Pexels API allows max per_page=80, and max page=100 (so 8000 results)
        const perPage = 80;
        const maxPage = 100;
        const randomPage = Math.floor(Math.random() * maxPage) + 1;

        const res = await fetch(
            `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}&page=${randomPage}`,
            {
                headers: {
                    Authorization: apiKey,
                },
            }
        );

        if (!res.ok) throw new Error('Pexels API failed');
        const data = await res.json();

        if (data.photos && data.photos.length > 0) {
            // Pick up to 5 random unique images from this page
            const shuffled = data.photos.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, 10).map(photo => photo.src.large);
        }
        return [];
    } catch (error) {
        console.error('Error fetching weather images:', error);
        return [];
    }
};

export {
    getSearchListapi,
    getReverseGeocodeApi,
    fetchWeather,
    fetchWeatherImages,
};
