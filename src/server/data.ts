import { DailyCard } from "../types";

export const users:Array<string> = ['homer', 'marge', 'bart','lisa','maggie'];

export let dailyCards:Record<string, DailyCard> = {
    '10/05/2023:bart':{
      inTime: '10:00',
      outTime: '14:00'
    },
    '11/05/2023:bart':{
      inTime: '11:00',
      outTime: ''
    },
    '12/05/2023:bart':{
      inTime: '10:00',
      outTime: '13:00'
    },
    '13/05/2023:bart':{
        inTime: '10:00',
        outTime: ''
      },
    '14/05/2023:bart':{
        inTime: '10:00',
        outTime: ''
    },
    '15/05/2023:bart':{
        inTime: '10:00',
        outTime: '14:00'
    },
    '16/05/2023:bart':{
        inTime: '11:00',
        outTime: ''
    },
    '17/05/2023:bart':{
        inTime: '10:00',
        outTime: ''
    },
    '18/05/2023:bart':{
        inTime: '10:00',
        outTime: ''
    },
    '19/05/2023:bart':{
        inTime: '10:00',
        outTime: '12:00'
    },

    '10/05/2023:homer':{
      inTime: '10:00',
      outTime: '19:30'
    },
    '11/05/2023:homer':{
      inTime: '11:00',
      outTime: ''
    }
  };
  