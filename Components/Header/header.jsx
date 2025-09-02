import React from 'react';

function Header() {
    return (
        <header className="bg-gray-900 text-white py-0 px-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img className="w-12 h-12" src="https://cdn-icons-png.flaticon.com/512/678/678310.png" alt="WeatherMe Logo" />
                    <div className="ml-4">
                        <h1 className="text-2xl">WeatherMe</h1>
                        {/* <p className="text-xs mt-1">21:00pm</p> */}
                    </div>
                </div>
                <nav className="flex items-center">
                    <ul className="flex space-x-10">
                        <li className="hover:text-gray-400 cursor-pointer">Today</li>
                        <li className="hover:text-gray-400 cursor-pointer">Tomorrow</li>
                        <li className="hover:text-gray-400 cursor-pointer">Monthly Forecast</li>
                    </ul>
                </nav>
            </div>
            <div className="flex items-center mt-4">
                <label className="mr-2">°C</label>
                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600 dark:peer-checked:bg-blue-600"></div>
                </label>
                <label className="ml-2">°F</label>
            </div>
        </header>
    );
}

export default Header;
