import React, { useState } from 'react';
import { Edit2 } from 'lucide-react';
import CityWeatherRow from './CityWeatherRow';
import CitySelectionModal, { AVAILABLE_CITIES } from './CitySelectionModal';
import { useTheme } from '../contexts/ThemeContext';

const OtherCities = () => {
    const { isDarkMode } = useTheme();
    // Initialize with first 4 cities
    const [selectedCities, setSelectedCities] = useState(AVAILABLE_CITIES.slice(0, 4));
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className={`${isDarkMode ? 'bg-surface-700 text-white' : 'bg-white text-gray-900'} rounded-2xl p-4 h-full`}>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Other Cities</h2>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-muted-400 hover:text-white transition p-1"
                    title="Edit Cities"
                >
                    <Edit2 size={16} />
                </button>
            </div>

            <div className="space-y-4">
                {selectedCities.map((city) => (
                    <CityWeatherRow key={city.name} city={city} />
                ))}
            </div>

            <CitySelectionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                currentSelection={selectedCities}
                onSave={setSelectedCities}
            />
        </div>
    );
}
export default OtherCities;