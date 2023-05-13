import { TimeCard } from "../components/time-card/time-card";
import { MonthlyReport } from "../components/monthly-report/monthly-report";
import { Page } from "../types";

export const PAGES:Array<Page> = [{
    display: 'Daily Card',
    render: ()=> <TimeCard/>
},{
    path: 'all',
    display: 'Montly Report',
    render: ()=> <MonthlyReport/>
}]

export const DATE_FORMAT = "DD/MM/YYYY"
export const MONTH_FORMAT = "MM/YYYY"
export const API_DELIMITER = ':'
export const DATE_DELIMITER = '/'