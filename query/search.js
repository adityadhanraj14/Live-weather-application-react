import { useQuery } from '@tanstack/react-query';
import { getSearchListapi } from './api';
const useGetSearchQuery = (key,query) =>{
    return useQuery({
        queryKey:[key,query],
        queryFn: ()=> getSearchListapi(query),
        // enabled: !!query,
    })
}
export default useGetSearchQuery;
