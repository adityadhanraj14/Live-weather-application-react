const apiKey = import.meta.env.VITE_SEARCH_LISTING_API_KEY;
const getSearchListapi = async (query) =>{ 
    if (!query) return [];
    console.log(apiKey, "apikey");
    if (!apiKey) throw new Error('VITE_SEARCH_LISTING_API_KEY is not set. Add it to a root .env file as VITE_SEARCH_LISTING_API_KEY=your_key');
    // const encoded = encodeURIComponent(query);
    const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${query}&apiKey=${apiKey}`;
    const res = await fetch(url);
    if(!res.ok) throw new Error("api failed");
    return res.json();
}

export {
    getSearchListapi,
}