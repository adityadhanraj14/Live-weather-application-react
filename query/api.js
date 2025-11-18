const apiKey = import.meta.env.VITE_SEARCH_LISTING_API_KEY;
const getSearchListapi = async (query) =>{ 
    if (!query) return [];
    if (!apiKey) throw new Error('VITE_SEARCH_LISTING_API_KEY is not set. Add it to a root .env file as VITE_SEARCH_LISTING_API_KEY=your_key');
    const encoded = encodeURIComponent(query);
    const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encoded}&apiKey=${apiKey}`;
    const res = await fetch(url);
    if(!res.ok) throw new Error("api failed");
    return res.json();
}
VITE_SEARCH_LISTING_API_KEY=0ea35de2abbb46da90aeca610e0936a0

export {
    getSearchListapi,
}