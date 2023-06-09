import dayjs from "dayjs";
import { DailyCard, MonthlyCardsRow } from "../types";
import { API_DELIMITER, DATE_DELIMITER } from "../utils/consts";
import { dailyCards, users } from "./data";

export const API = {
  getUsers: ()=>{
    return(users.sort())
  },

  getFirstUser: ()=>{
    return API.getUsers()[0]; // assumes length >=1
  },

  getDailyCard: async (date:string, user:string, inputCards=dailyCards)=>{
    return inputCards[date+API_DELIMITER+user];
  },

  getMonthlyCards: async (date:string, user:string, inputCards=dailyCards)=>{

    // a real DB will have 2+ tables with indexes and i wont need this splitting

    const [_, month, __] = date.split(DATE_DELIMITER);

    const cards = Object.keys(inputCards).reduce((acc, key)=>{
      const [cardDate, cardUser] = key.split(API_DELIMITER);
      const [cardDaty, cardMonth, __] = cardDate.split(DATE_DELIMITER);
      
      if(Number(month) === Number(cardMonth) && user === cardUser){
        const {inTime, outTime} = inputCards[key];
        acc.push({user, day:cardDaty+DATE_DELIMITER+cardMonth, inTime, outTime});
      }

      return acc;
    },[] as Array<MonthlyCardsRow>);

    const total = cards.reduce((acc, card)=>{
      if(card.inTime && card.outTime){ 
        const [inHour, inMinute] = card.inTime.split(API_DELIMITER);
        const [outHour, outMinute] = card.outTime.split(API_DELIMITER);
        const inTime = (dayjs().hour(Number(inHour)).minute(Number(inMinute)));
        const outTime = (dayjs().hour(Number(outHour)).minute(Number(outMinute)));

        return acc + (outTime.diff(inTime, 'minute') / 60);
      }
      return acc;
    },0)

    return {cards, total};
  },

  setDailyCard: async ({date, user, inTime, outTime, inputCards}:
    {date:string, user:string, inTime: string, outTime:string, inputCards?:Record<string, DailyCard>})=>{
    (inputCards ?? dailyCards)[date+API_DELIMITER+user] = { inTime,outTime}
  }
}
