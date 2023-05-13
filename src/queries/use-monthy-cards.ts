import {useQuery} from 'react-query';
import { API } from '../server/server';
import {QUERY_KEYS} from './query-keys';

export const useMonthlyCards = (date:string, user:string) => {
    return useQuery(QUERY_KEYS.monthlyCards(date, user) , ()=>API.getMonthlyCards(date, user))
};
