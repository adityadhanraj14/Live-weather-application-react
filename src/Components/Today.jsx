const Today = () => {
     const weatherData = {
    location: 'Dhaka, Bangladesh',
    currentDay: 'Friday',
    time: '11:45 AM',
    temp: 16,
    condition: 'Cloudy',
    feelsLike: 18,
    windSpeed: '6 kmph',
    sunrise: '5:30AM',
    sunset: '6:45',
    pressure: '100MB',
    humidity: '91%',
    visibility: '04 km',
    uvIndex: 5.50,
    dewPoint: '27°C',
    chanceOfRain: true,
  };

    return (
        // <div className="today w-full bg-gray-900">
        //     <div className="header flex justify-content items-center p-4 text-white">
        //         <div>Friday</div>
        //         <div className="ml-auto">11:45 AM</div>
        //     </div>
        //     <div className="body p-6 flex flex-row gap-4 bg-gradient-to-br to-blue-900 mx-6 rounded-xl">
        //         <div className="bg-[#BBD7EC] bg-gradient-to-br to-blue-900 text-white w-40  h-32 grid justify-center items-center rounded-xl text-5xl font-bold">
        //             16° C
        //         </div>
        //         <div className="">
        //             <div className="w-40 h-15 bg-gray-900 text-white rounded-xl grid justify-center items-center m-1">Real feel: 18 c</div>
        //             <div className="w-40 h-15 bg-[#BBD7EC] rounded-xl grid justify-center items-center m-1">Real feel: 18 c</div>
        //         </div>
        //         <div className="">
        //             <div className="w-40 h-15 bg-[#BBD7EC] rounded-xl grid justify-center items-center m-1">Real feel: 18 c</div>
        //             <div className="w-40 h-15 bg-[#BBD7EC] rounded-xl grid justify-center items-center m-1">Real feel: 18 c</div>
        //         </div>
        //         <div className="">
        //             <div className="w-40 h-15 bg-[#BBD7EC] rounded-xl grid justify-center items-center m-1">Real feel: 18 c</div>
        //             <div className="w-40 h-15 bg-[#BBD7EC] rounded-xl grid justify-center items-center m-1">Real feel: 18 c</div>
        //         </div>
        //         <div className="temp w-40 bg-[#BBD7EC] h-32 flex justify-center items-center rounded-xl ml-auto">
        //             <Cloud size={50} color="blue"/>
        //             <Sun size={50} color="yellow" className=""/>
        //         </div>
        //     </div>

        // </div>
          <div className="col-span-1 text-white bg-gradient-to-br from-blue-00 to-blue-900 rounded-3xl p-6">
            <div className="flex mb-4">
              <p className="text-lg font-semibold text-white">{weatherData.currentDay}</p>
              <p className="text-md font-semibold ml-auto">{weatherData.time}</p>
            </div>

            <div className="flex mb-6">
              <div className="text-6xl font-bold">{weatherData.temp}°</div>
              <div className="flex items-center gap-2 mt-2 ml-auto">
                <div className="text-5xl">⛅</div>
              </div>
            </div>

            <div className="space-y-2 text-sm px-auto">
              <div className="flex justify-between">
                <span>Real feel</span>
                <span className="font-semibold">{weatherData.feelsLike}°</span>
              </div>
              <div className="flex justify-between ">
                <span>Wind N-E</span>
                <span className="font-semibold">{weatherData.windSpeed}</span>
              </div>
              <div className="flex justify-between">
                <span>Pressure</span>
                <span className="font-semibold">{weatherData.pressure}</span>
              </div>
              <div className="flex justify-between">
                <span>Humidity</span>
                <span className="font-semibold">{weatherData.humidity}</span>
              </div>
              {/* <div className="flex justify-between">
                <span>Sunrise</span>
                <span className="font-semibold">{weatherData.sunrise}</span>
              </div>
              <div className="flex justify-between">
                <span>Sunset</span>
                <span className="font-semibold">{weatherData.sunset}</span>
              </div> */}
            </div>
          </div>
    )
}
export default Today;