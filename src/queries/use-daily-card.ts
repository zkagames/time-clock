import {useQuery} from 'react-query';
import { API } from '../server/server';
import {QUERY_KEYS} from './query-keys';

export const useDailyCard = (date:string, user:string) => {
    return useQuery(QUERY_KEYS.dailyCard(date, user) , ()=>API.getDailyCard(date, user))
};
