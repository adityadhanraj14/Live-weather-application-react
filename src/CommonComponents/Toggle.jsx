import { Moon, Sun } from "lucide-react";

const Toggle = ({ isDarkMode ,setIsDarkMode, handleToggle }) => {
    return (
        <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className = {`w-16 h-8 flex items-center rounded-full p-1 border-1 ${isDarkMode? "border-white bg-gray-900" : "bg-white"} ml-4 hover:cursor-pointer"`}>
            <div className={`w-6 h-6 rounded-full shadow-lg flex items-center justify-center tranform translate ${isDarkMode? "translate-x-8 bg-white" : "translate-x-0 bg-gray-600"}`}>
                {!isDarkMode ? (<Sun size={12} className="text-yellow-500" />) : (<Moon size={12} className="text-gray-900" />)}
            </div>
        </button>
    )
};

export default Toggle;
