import React, { useEffect, useRef } from 'react';
import { MapPin, Search, X, Locate } from 'lucide-react';
import Toggle from '../CommonComponents/Toggle';
import useGetSearchQuery from '../../query/search';
import { SpinLoader } from '../CommonComponents/Loader';
import { useTheme } from '../contexts/ThemeContext';
import { useWeatherContext } from '../contexts/WeatherContext';

const Header = () => {
  const clickedOptionRef = useRef(false);
  const { isDarkMode, setIsDarkMode } = useTheme();
  const { locationName, updateCoordinates, resetToCurrentLocation } = useWeatherContext();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [showDropDown, setShowDropDown] = React.useState(false);
  const [searchOption, setSearchOption] = React.useState([]);

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
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
          {/* Top row on mobile: Location + Toggle */}
          <div className="flex justify-between items-center w-full sm:w-auto sm:flex-1 min-w-0">
            <div className="flex items-center gap-3 min-w-0">
              <MapPin size={24} className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`} />
              <span className="text-sm truncate min-w-0">{locationName}</span>
            </div>
            <div className="sm:hidden">
              <Toggle {...{ isDarkMode, setIsDarkMode }} />
            </div>
          </div>

          {/* Search component */}
          <div className="relative w-full sm:w-auto flex items-center gap-2 sm:ml-auto">
            <button
              onClick={resetToCurrentLocation}
              className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'} transition-colors shrink-0`}
              title="Use Current Location"
            >
              <Locate size={20} />
            </button>
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
              <div className={`absolute left-0 right-0 sm:left-auto sm:right-0 w-full sm:w-72 p-2 rounded opacity-95 z-50 top-full mt-1 ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-800 border'}`}>
                {!isLoading ? (
                  searchOption.map((item, index) => (
                    <div
                      key={index}
                      className="py-1 text-sm truncate cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 px-2 rounded"
                      onClick={() => {
                        clickedOptionRef.current = true;
                        setSearchQuery('');
                        updateCoordinates(item.properties.lat, item.properties.lon, item.properties.formatted);
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

          {/* Toggle on desktop */}
          <div className="hidden sm:block ml-auto sm:ml-0">
            <Toggle {...{ isDarkMode, setIsDarkMode }} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;