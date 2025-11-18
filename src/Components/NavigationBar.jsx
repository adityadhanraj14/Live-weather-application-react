import { useTheme } from '../contexts/ThemeContext';

const NavigationBar = () => {
    const { isDarkMode } = useTheme();
    return (
        <div className={`flex w-full p-4 ${isDarkMode ? 'bg-gray-900 text-white border-surface-600 border-b' : 'bg-white text-gray-900 border-b'} pb-3 mb-8`}>
            <div className="leftNav flex gap-3 ml-4">
                <button>Today</button>
                <button>Tommorow</button>
                <button>Next 7 Days</button>
            </div>
            <div className="rightToggle ml-auto">
                <div className="flex items-center mt-4">
                    <label className="mr-2">°C</label>
                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600 dark:peer-checked:bg-gray-600"></div>
                    </label>
                    <label className="ml-2">°F</label>
                </div>
            </div>
        </div>
    );
};
export default NavigationBar;
// check plan go 