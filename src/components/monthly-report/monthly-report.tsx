import { DatePicker } from "@mui/x-date-pickers"
import { Page } from "../../style/style"
import dayjs from "dayjs";
import { useContext,  useState } from "react";
import { DATE_FORMAT, MONTH_FORMAT } from "../../utils/consts";
import { UsersContext } from "../../contexts/user-context";
import { Users } from "../users/users";
import { FormContainer, FormRow } from "../form/form.style";
import { useMonthlyCards } from "../../queries/use-monthy-cards";
import { tableConfig } from "./table-config";
import { Table } from "../table/table";
import { FormAndGraph, Total } from "./monthly-report.style";
import { MissingDays } from "../missing-days/missing-days";

export const MonthlyReport =()=>{
    const [date, setDate] = useState(dayjs(new Date()));
    const formatedDate = date.format(DATE_FORMAT);
    const { user } = useContext(UsersContext);
    const {data} = useMonthlyCards(formatedDate, user);

    return <Page>
        
        <FormAndGraph>
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

           {!!data?.cards.length && <MissingDays data={data.cards}/>}
           
       </FormAndGraph>

       {!!data?.cards.length ? 
        <>
        <Total data-testid="total">Total hours {data.total}</Total>
        <Table tableConfig={tableConfig} data={data.cards}/>
        </>
        : `No activity for ${user} in this month`}
         
    </Page>
}
