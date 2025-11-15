import { useQuery } from '@tanstack/react-query';
import { getSearchListapi } from './api';
const useGetSearchQuery = (key,query) =>{
    return useQuery({
        queryKey:[key,query],
        queryFn: ()=> getSearchListapi(query),
        // staleTime: 500,
        // enabled: !!query.lenth>4
    })
}
export default useGetSearchQuery;
