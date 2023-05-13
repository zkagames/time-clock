import {useMutation, useQuery, useQueryClient} from 'react-query';
import { API } from '../server/server';
import {QUERY_KEYS} from './query-keys';

export const useSetDailyCard = (date:string, user:string) => {
    const queryClient = useQueryClient();
    return useMutation(
        ({date, user, inTime, outTime}:{date:string, user:string, inTime:string, outTime:string}) => API.setDailyCard({date, user, inTime, outTime}),{
        onSuccess: () => {
            queryClient.invalidateQueries(QUERY_KEYS.dailyCard(date, user));
            queryClient.invalidateQueries(QUERY_KEYS.monthlyCards(date, user))
        },
    })
};
