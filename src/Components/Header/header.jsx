import React, { useState, useEffect } from 'react';
import { Cross, CrossIcon, MapPin, Search, X } from 'lucide-react';
import Toggle from '../../CommonComponents/Toggle';
import useGetSearchQuery from '../../../query/search';
import { SpinLoader } from '../../CommonComponents/Loader';


const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropDown, setShowDropDown] = useState(false);
  const [searchOption, setSearchOption] = useState([]);
  const { data, isLoading, error } = useGetSearchQuery(['searchList'], searchQuery);
useEffect(() => {
  if (searchQuery.length > 4 && !isLoading) {
    setShowDropDown(true);
    setSearchOption(data?.features || []);
  } else {
    setShowDropDown(false);
  }
}, [searchQuery, data, isLoading]);

  return (
    <header className="relative flex items-center gap-5 p-4 bg-gray-900 text-white">
      <MapPin size={24} className="text-white ml-10" />
      {'Bengaluru, KR'}
      
      {/* search components*/}
      <div className='relative ml-auto'>
        <div className="relative w-72">
          <Search
            size={18}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search city"
            className="w-full bg-gray-800 text-white pl-9 pr-3 py-1 rounded-md outline-none placeholder-gray-500 focus:ring-2 focus:ring-blue-500 transition"
          />
          <X
            onClick={() => {
              setSearchQuery('')
              setShowDropDown(false)
            }}
            size={18}
            className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover: cursor-pointer shadow-md'
          />
        </div>
        {
          searchQuery.length > 4 && showDropDown && (
            <div className="absolute w-72 bg-gray-900 text-gray-200 p-2 rounded opacity-90">
              {searchOption.map((item, index) => (
                <div key={index} className="py-1">
                  {item.properties.formatted}
                </div>
              ))}
            </div>
          )
        }
      </div>

      <Toggle {...{ isDarkMode, setIsDarkMode }} />
    </header>
  );
};

export default Header;
// import React from 'react';

// function Header() {
//     return (
//         <header className="bg-gray-900 text-white py-0 px-4">
//             <div className="flex items-center justify-between">
//                 <div className="flex items-center">
//                     <img className="w-12 h-12" src="https://cdn-icons-png.flaticon.com/512/678/678310.png" alt="WeatherMe Logo" />
//                     <div className="ml-4">
//                         <h1 className="text-2xl">WeatherMe</h1>
//                         {/* <p className="text-xs mt-1">21:00pm</p> */}
//                     </div>
//                 </div>
//                 <nav className="flex items-center">
//                     <ul className="flex space-x-10">
//                         <li className="hover:text-gray-400 cursor-pointer">Today</li>
//                         <li className="hover:text-gray-400 cursor-pointer">Tomorrow</li>
//                         <li className="hover:text-gray-400 cursor-pointer">Monthly Forecast</li>
//                     </ul>
//                 </nav>
//             </div>
//             <div className="flex items-center mt-4">
//                 <label className="mr-2">°C</label>
//                 <label className="inline-flex items-center cursor-pointer">
//                     <input type="checkbox" className="sr-only peer" />
//                     <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600 dark:peer-checked:bg-blue-600"></div>
//                 </label>
//                 <label className="ml-2">°F</label>
//             </div>
//         </header>
//     );
// }

// export default Header;
