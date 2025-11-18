import React, { useEffect, useRef } from 'react';
import { MapPin, Search, X } from 'lucide-react';
import Toggle from '../../CommonComponents/Toggle';
import useGetSearchQuery from '../../../query/search';
import { SpinLoader } from '../../CommonComponents/Loader';
import { useTheme } from '../../contexts/ThemeContext';


const Header = () => {
  const clickedOptionRef = useRef(false);
  const { isDarkMode, setIsDarkMode } = useTheme();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [showDropDown, setShowDropDown] = React.useState(false);
  const [searchOption, setSearchOption] = React.useState([]);
  const [currentLocation, setCurrentLocation] = React.useState('Bengaluru, KR');
  const shouldFetch = searchQuery.length > 4 && !clickedOptionRef.current;
  const { data, isLoading, error } = useGetSearchQuery(searchQuery, shouldFetch);


  useEffect(() => {
    if (clickedOptionRef.current) {
      clickedOptionRef.current = false;
      setShowDropDown(false);
      return;
    }
    if (searchQuery.length > 4) {
      setShowDropDown(true);
      setSearchOption(data?.features || []);
    } else {
      setShowDropDown(false);
    }
  }, [searchQuery, data, isLoading]);

  return (
    <header className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} w-full pt-6`}>
      <div className="w-full px-3 sm:px-4 py-3">
        <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-3 sm:gap-5">
          <div className="flex items-center gap-3 min-w-0 ">
            <MapPin size={24} className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`} />
            <span className="text-sm truncate min-w-0">{currentLocation}</span>
          </div>

          {/* search components - grow on small screens */}
          <div className="relative mt-2 sm:mt-0 sm:ml-auto w-full sm:w-auto">
            <div className="relative w-full sm:w-72">
              <Search
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search city"
                className={`w-full ${isDarkMode ? 'bg-gray-800 text-white placeholder-gray-500' : 'bg-gray-100 text-gray-900 placeholder-gray-600'} pl-9 pr-10 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500 transition`}
              />
              <X
                onClick={() => {
                  setSearchQuery('')
                  setShowDropDown(false)
                }}
                size={18}
                className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer'
              />
            </div>

            {searchQuery.length > 4 && showDropDown && (
              <div className={`absolute left-0 sm:right-0 w-full sm:w-72 p-2 rounded opacity-95 z-50 top-full mt-1 ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-800 border'}`}>
                {!isLoading ? (
                  searchOption.map((item, index) => (
                    <div
                      key={index}
                      className="py-1 text-sm truncate"
                      onClick={() => {
                        clickedOptionRef.current = true;
                        setSearchQuery('');
                        setCurrentLocation(item.properties.formatted);
                        setShowDropDown(false);
                      }}
                    >
                      {item.properties.formatted}
                    </div>
                  ))
                ) : (
                  <div className='py-4'>
                    <SpinLoader />
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="ml-auto sm:ml-4">
            <Toggle {...{ isDarkMode, setIsDarkMode }} />
          </div>
        </div>
      </div>
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
