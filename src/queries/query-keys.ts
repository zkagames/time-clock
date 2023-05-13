
export const QUERY_KEYS = {
    dailyCard:(date:string, user:string)=>['daily-card',date, user],
    monthlyCards:(date:string, user:string)=>['monthly-cards', date, user]
}