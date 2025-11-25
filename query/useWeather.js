import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "./api";

const useWeather = (lat, lon) => {
    return useQuery({
        queryKey: ["weather", lat, lon],
        queryFn: fetchWeather,
        enabled: !!(lat && lon),
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 10,
    });
};

export default useWeather;
