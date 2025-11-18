const OtherCities = () => {
    const otherCities = [
        { name: 'China - Beijing', condition: 'Cloudy', icon: '☁️',temp: 22 },
        { name: 'US - California', condition: 'Windy', icon: '💨', temp: 18 },
        { name: 'Dubai - Arab Emirates', condition: 'Mostly Sunny', icon: '☀️', temp: 30 },
        { name: 'Canada - Charlottetown', condition: 'Light Snow Shower', icon: '❄️', temp: -5 },
    ]; return (
        <div className="bg-surface-700 rounded-2xl p-4 text-white">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Other Cities</h2>
                <button className="text-accent text-sm">Degree</button>
            </div>
            <div className="space-y-3">
                {otherCities.map((city, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                        <div className="flex flex-col w-26">
                            <p className="font-semibold text-sm">{city.name.split(' - ')[1]}</p>
                            <p className="text-xs text-muted-400">{city.condition}</p>
                        </div>
                        <div className="text-2xl">{city.icon}</div>
                        <div className="text-2xl">{city.temp}°</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default OtherCities;