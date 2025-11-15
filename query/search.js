import { useQuery } from '@tanstack/react-query';
import { getSearchListapi } from './api';
const useGetSearchQuery = (query,enabled) =>{
    return useQuery({
        queryKey:['searchlist', query],
        queryFn: ()=> getSearchListapi(query),
        enabled: enabled
    })
}
export default useGetSearchQuery;
