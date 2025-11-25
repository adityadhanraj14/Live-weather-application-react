import { useQuery } from "@tanstack/react-query";
import { fetchWeatherImages } from "./api";


const useWeatherImages = (query = 'weather', enabled = true) => {
    return useQuery({
        queryKey: ["weather-images", query],
        queryFn: () => fetchWeatherImages(query),
        enabled: enabled && !!query,
        staleTime: 1000 * 60 * 60,
        gcTime: 1000 * 60 * 120,
    });
};

export default useWeatherImages;
