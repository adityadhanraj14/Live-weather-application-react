import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const AVAILABLE_CITIES = [
    { name: 'Beijing', country: 'China', lat: 39.9042, lon: 116.4074 },
    { name: 'California', country: 'US', lat: 36.7783, lon: -119.4179 },
    { name: 'Dubai', country: 'UAE', lat: 25.2048, lon: 55.2708 },
    { name: 'Charlottetown', country: 'Canada', lat: 46.2382, lon: -63.1311 },
    { name: 'London', country: 'UK', lat: 51.5074, lon: -0.1278 },
    { name: 'New York', country: 'US', lat: 40.7128, lon: -74.0060 },
    { name: 'Tokyo', country: 'Japan', lat: 35.6762, lon: 139.6503 },
    { name: 'Sydney', country: 'Australia', lat: -33.8688, lon: 151.2093 },
    { name: 'Paris', country: 'France', lat: 48.8566, lon: 2.3522 },
    { name: 'Berlin', country: 'Germany', lat: 52.5200, lon: 13.4050 },
    { name: 'Mumbai', country: 'India', lat: 19.0760, lon: 72.8777 },
    { name: 'Singapore', country: 'Singapore', lat: 1.3521, lon: 103.8198 },
];

const CitySelectionModal = ({ isOpen, onClose, currentSelection, onSave }) => {
    const { isDarkMode } = useTheme();
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        if (isOpen) {
            setSelected(currentSelection.map(c => c.name));
        }
    }, [isOpen, currentSelection]);

    const handleToggle = (cityName) => {
        if (selected.includes(cityName)) {
            setSelected(selected.filter(name => name !== cityName));
        } else {
            if (selected.length < 4) {
                setSelected([...selected, cityName]);
            }
        }
    };

    const handleSave = () => {
        const newSelection = AVAILABLE_CITIES.filter(city => selected.includes(city.name));
        onSave(newSelection);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className={`${isDarkMode ? 'bg-black/90 text-white' : 'bg-white text-gray-900'} rounded-2xl w-full max-w-md shadow-2xl overflow-hidden `}>
                <div className="p-4 border-b border-gray-600 flex justify-between items-center ">
                    <h3 className="text-lg font-semibold">Select Cities (Max 4)</h3>
                    <button onClick={onClose} className="p-1 hover:bg-gray-600 rounded-full transition">
                        <X size={20} />
                    </button>
                </div>

                <div className="p-4 max-h-[60vh] overflow-y-scroll scrollbar-hide space-y-2">
                    {AVAILABLE_CITIES.map((city) => {
                        const isSelected = selected.includes(city.name);
                        const isDisabled = !isSelected && selected.length >= 4;

                        return (
                            <label
                                key={city.name}
                                className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition ${isSelected
                                    ? (isDarkMode ? 'bg-blue-600/20 border border-blue-500' : 'bg-blue-50 border border-blue-500')
                                    : (isDarkMode ? 'bg-surface-600 hover:bg-surface-500' : 'bg-gray-50 hover:bg-gray-100')
                                    } ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                <div className="flex flex-col">
                                    <span className="font-medium">{city.name}</span>
                                    <span className="text-xs text-muted-400">{city.country}</span>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={isSelected}
                                    onChange={() => !isDisabled && handleToggle(city.name)}
                                    disabled={isDisabled}
                                    className="w-5 h-5 rounded border-gray-500 text-blue-600 focus:ring-blue-500"
                                />
                            </label>
                        );
                    })}
                </div>

                <div className="p-4 border-t border-gray-600 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-600 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white transition"
                    >
                        Save Selection
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CitySelectionModal;
