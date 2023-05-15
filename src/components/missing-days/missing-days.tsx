import {  useMemo, useState } from "react";
import { MonthlyCardsRow } from "../../types"
import { AlertContainer, Day, DayAndText, Days, Header, MissingDaysContainer, NotifyLine } from "./missing-days.style"
import { maxBy } from "lodash";
import { Alert } from "@mui/material";
import { FormContainer } from "../form/form.style";

const isFullDay = (day:MonthlyCardsRow) => Boolean(day.inTime && day.outTime);

export const MissingDays = ({data}:{data: Array<MonthlyCardsRow>})=>{
 
    const missingWithOrder = useMemo(()=>{
        let size = 0; // grows by 1 for another missing day
        return data.map(day=>{
            if(isFullDay(day)){
                size = 0;
            }
            else{
                size++;
            }
            return {...day, size}
        })
    },[data]);

    const notifyDays = useMemo(()=>{
        const max = maxBy(missingWithOrder, 'size')?.size ?? 1;
        return Array.from(Array(max).keys()).map(i=>i+1);
    },[missingWithOrder]);

    const [notify, setNotify] = useState(notifyDays[1] ?? notifyDays[0]);
    const [notifyChanged, setNotifyChanged] = useState(false);


    return <MissingDaysContainer>
        <FormContainer>
        <Header data-testid="missing-days-header">
            notify on{' '}
                <select data-testid="missing-days-select" disabled={notifyDays.length <=1 } value={notify} onChange={(e)=>
                    {setNotify(Number(e.target.value));
                        setNotifyChanged(true);
                    }}>
                    {
                    notifyDays.map(i=><option key={i} value={i}>{i}</option>
                    )}
                </select>
                {' '}Missing days
            </Header>
           
        <Days>
            {notifyDays.length > 1 && <NotifyLine size={notify}/>}
            {missingWithOrder.map(dayCard=>{
            const isFull =isFullDay(dayCard);
            const {day, size} = dayCard;
            return <DayAndText key={day}>
                        <Day isFull={isFull} size={size || 1}></Day>
                        {day}
                </DayAndText>   
            })}
        </Days>
       
        </FormContainer>

        {notifyChanged && <AlertContainer>
            <Alert severity="info">Notifications set at {notify} missing days in a row</Alert>
            </AlertContainer>}

        
        </MissingDaysContainer>
   
}