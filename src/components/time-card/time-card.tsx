import { DatePicker } from "@mui/x-date-pickers"
import { Button, Page } from "../../style/style"
import dayjs from "dayjs";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { DATE_FORMAT } from "../../utils/consts";
import { UsersContext } from "../../contexts/user-context";
import { useDailyCard } from "../../queries/use-daily-card";
import { useSetDailyCard } from "../../queries/use-set-daily-card";
import { hasTimeError } from "./validate-time-card";
import { Alert, AlertColor } from "@mui/material";
import { Users } from "../users/users";
import { FormContainer, FormRow, InputSmall } from "../form/form.style";

export const TimeCard =()=>{
    const [date, setDate] = useState(dayjs(new Date()));
    const formatedDate = date.format(DATE_FORMAT);
    const { user } = useContext(UsersContext);
    const {data: card} = useDailyCard(formatedDate, user);
    const {mutate: setDailyCard} = useSetDailyCard(formatedDate, user);

    const [inTime, setInTime] = useState('');
    const [outTime, setOutTime] = useState('');
    const [updateStatus, setUpdateStatus] = useState<{status: AlertColor, text: string}>({
        status:'success',
        text: ''
    });
   
    useEffect(()=>{
        setInTime(card?.inTime??'');
        setOutTime(card?.outTime??'');
    },[card]);

    useEffect(()=>{
        setUpdateStatus({ 
            status:'success',
            text:''});
    },[date, user]);

    const setCard = useCallback(()=>{
        const timeError = hasTimeError(inTime, outTime);
        if(timeError){
            setUpdateStatus({ 
                status:'error',
                text:timeError});
           return;
        }

        setUpdateStatus({ 
            status:'success',
            text:`Card updated`});
          
        setDailyCard({
            user,
            date: formatedDate,
            inTime: inTime ?? '',
            outTime: outTime ?? ''
        })
    },[inTime, outTime]);

    return <Page>
       
        <FormContainer>
      
            <FormRow>
            Date: <DatePicker 
            format={DATE_FORMAT}
            value={date} 
            onChange={
                value=>{
                    if(value){
                    setDate(value)}
                }}
            />
            </FormRow>

            <FormRow>
                <FormRow>User: <Users/></FormRow>
            </FormRow>
           

            <FormRow>
                In: 
                <InputSmall value={inTime} onChange = {e=>setInTime(e.target.value)}/>
            </FormRow>
                
            <FormRow>
                Out: 
                <InputSmall value={outTime} onChange = {e=>setOutTime(e.target.value)}/>
            </FormRow>   
            <br/>
            <Button onClick={setCard} disabled={!inTime && !outTime}>Submit</Button>
         
       </FormContainer>

       {updateStatus.text && <Alert severity={updateStatus.status}>{updateStatus.text}</Alert>}
           

    </Page>
}