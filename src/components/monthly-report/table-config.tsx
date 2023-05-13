import { TableRow } from "../table/table-types";
import { capitalize } from "lodash";
import { FullDay } from "./monthly-report.style";

export const tableConfig = {
    columns: [
        {
            id: 'day', displayName: 'Day',    
        },
        {
            id: 'inTime', displayName: 'In',    
        },
        {
            id: 'outTime', displayName: 'Out',    
        },
        {
            id: 'full', displayName: "Full Day",
            render: (row : TableRow) => {   
                const isFull =  Boolean(row.inTime && row.outTime);
                return <FullDay isFull={isFull}>{isFull ? 'Yes' : 'No'}</FullDay>
              }
        },
    ]
}