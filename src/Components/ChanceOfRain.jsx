const ChanceOfRain = () => {
    // Sample data for chance of rain
     const rainChance = [
    { time: '10AM', chance: 40 },
    { time: '11AM', chance: 60 },
    { time: '12AM', chance: 80 },
    { time: '01PM', chance: 50 },
    { time: '02PM', chance: 70 },
    { time: '03PM', chance: 45 },
  ];
    return (
        <div className="bg-surface-700 rounded-2xl p-6 text-white">
            <div className="grid justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Chance Of Rain</h2>
            </div>

            {/* Chart placeholder */}
            <div className="h-50 bg-surface-600 rounded-lg flex items-center justify-center relative">
              <svg className="w-full h-full" viewBox="0 0 300 150" preserveAspectRatio="none">
                <polyline
                  points="0,100 50,80 100,60 150,90 200,40 250,70 300,50"
                  fill="none"
                  stroke="#ff8a3d"
                  strokeWidth="2"
                />
              </svg>
              <div className="absolute inset-0 flex items-end justify-around px-4 pb-4">
                {rainChance.map((item, idx) => (
                  <div key={idx} className="text-xs text-center">
                    <div className="text-muted-400">{item.time}</div>
                    <div className="text-xs mt-1">{item.chance}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
    )
}
export default ChanceOfRain;