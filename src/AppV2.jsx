import Header from './Components/Header/header';
import React from 'react';
const AppV2 = () => {
    const [isOn, setIsOn] = React.useState(false);

    // Handle search callback from Header
    const handleSearch = (query) => {
        console.log('Search query:', query);
        // TODO: Call API to fetch cities matching the query
        // Example: fetchCities(query);
    };

    return (
        <>
            <Header onSearch={handleSearch} />
            <button
                onClick={() => setIsOn(!isOn)}
                className={`w-24 m-2 h-12 p-2 rounded-full flex items-center border-2 border-black ${isOn ? "bg-blue-200": "bg-black"} `}
            >
                <div
                    className={`w-8 h-8 bg-white rounded-full border-[1px] border-gray-500 shadow-md transform transition 
                ${isOn ? "translate-x-12" : "translate-x-0"}`}
                ></div>
            </button>

        </>
    );
};

export default AppV2;