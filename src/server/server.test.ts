import { DailyCard } from "../types";
import { API } from "./server";
import { users } from "./data";

let dailyCards:Record<string, DailyCard> = {
    '10/05/2023:carl':{
      inTime: '10:00',
      outTime: '14:00'
    },
    '11/05/2023:carl':{
      inTime: '11:00',
      outTime: '14:00'
    },
    '10/05/2023:lenny':{
      inTime: '10:00',
      outTime: '19:30'
    },
    '11/05/2023:lenny':{
      inTime: '11:00',
      outTime: ''
    }
  };
  

describe('getUsers', ()=> {
    it('return correct length', ()=> {
        expect(API.getUsers()).toHaveLength(users.length);
    });
});

describe('getFirstUser', ()=> {
    it('return correct user', ()=> {
        const user = API.getFirstUser();
        expect(user).toBe(users[0]);
    });
});

describe('getDailyCard', ()=> {
    it('return correct card - for carl', async ()=> {
        const card = await API.getDailyCard('10/05/2023', 'carl', dailyCards);
        expect(card.inTime).toBe("10:00");
        expect(card.outTime).toBe("14:00");
    });

    it('return undefined - for non-existant user', async ()=> {
        const noCard = await API.getDailyCard('10/05/2023', 'non-existant', dailyCards);
        expect(noCard).toBe(undefined);    
    }); 
});

describe('getMonthlyCards', ()=> {
    it('return correct cards + total - for carl', async ()=> {
        const dataCarl = await API.getMonthlyCards('10/05/2023', 'carl', dailyCards);
        const CARDS_WITH_CARL = 2;
        const CARLS_HOURS = 7;
        expect(dataCarl.cards.length).toBe(CARDS_WITH_CARL);
        expect(dataCarl.total).toBe(CARLS_HOURS);
    });

    it('return correct cards + total - for lenny', async ()=> {
        const dataLenny = await API.getMonthlyCards('10/05/2023', 'lenny', dailyCards);
        const CARDS_WITH_LENNY = 2;
        const LENNYS_HOURS = 9.5;
        expect(dataLenny.cards.length).toBe(CARDS_WITH_LENNY);
        expect(dataLenny.total).toBe(LENNYS_HOURS);
    });

    it('return no cards - non-existant user', async ()=> {
        const data = await API.getMonthlyCards('10/05/2023', 'non-existant', dailyCards);
        expect(data.cards.length).toBe(0);
        expect(data.total).toBe(0);
    });

});

describe('setDailyCard', ()=> {
    it('set the correct card data', async ()=> {

        await API.setDailyCard({
            date:'10/05/2023', user:'carl', inTime:'10:15', outTime:'14:15', inputCards:dailyCards
        });

        const card = dailyCards['10/05/2023:carl'];
       
        expect(card.inTime).toBe('10:15');
        expect(card.outTime).toBe('14:15');    
    });
});

