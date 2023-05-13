import { DatePicker } from "@mui/x-date-pickers"
import { Button, Page } from "../../style/style"
import dayjs from "dayjs";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { DATE_FORMAT, MONTH_FORMAT } from "../../utils/consts";
import { UsersContext } from "../../contexts/user-context";
import { useDailyCard } from "../../queries/use-daily-card";
import { useSetDailyCard } from "../../queries/use-set-daily-card";
import { hasTimeError } from "./validate-time-card";
import { Alert, AlertColor } from "@mui/material";
import { Users } from "../users/users";
import { FormContainer, FormRow, InputSmall } from "../form/form.style";
import { useMonthlyCards } from "../../queries/use-monthy-cards";
import { tableConfig } from "./table-config";
import { Table } from "../table/table";
import { Total } from "./monthly-report.style";

export const MonthlyReport =()=>{
    const [date, setDate] = useState(dayjs(new Date()));
    const formatedDate = date.format(DATE_FORMAT);
    const { user } = useContext(UsersContext);
    const {data} = useMonthlyCards(formatedDate, user);

    return <Page>
       
        <FormContainer>
      
            <FormRow>
            Date: <DatePicker 
            format={MONTH_FORMAT}
            views={['year', 'month']}
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

       </FormContainer>

       {!!data?.cards.length ? 
        <>
        <Total data-testid="total">Total hours {data.total}</Total>
        <Table tableConfig={tableConfig} data={data.cards}/>
        </>
        : `No activity for ${user} in this month`}
         
    </Page>
}
