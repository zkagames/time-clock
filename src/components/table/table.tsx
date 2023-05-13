
import { orderBy } from "lodash";
import { TableConfig, TableFilters, TableRow } from "./table-types"
import {TableHeader, TableHeaderCell, TableBody, TableCell , TableRowContainer, SortByContainer} from "./table.style"
import ArrowDropUpIcon  from '@mui/icons-material/ArrowDropUp';
import { useMemo, useState } from "react";

type SortOrder = 'asc' | 'desc';

const flipSortOrder = (sortOrder:SortOrder)=>{
    return sortOrder ==='asc' ? 'desc' : 'asc';
}

export const Table = ({data, tableConfig}:{data: Array<TableRow>, tableConfig: TableConfig})=>{

    const [sortBy, setSortBy] = useState(tableConfig.columns[0].id);
    const [order, setOrder] = useState<SortOrder>('asc');
    
    const sortedData = useMemo(()=>{
        return orderBy(data, [sortBy], [order]);
    },[sortBy, order, data]);

    return  <>
            <TableHeader>
                {(tableConfig.columns).map(column=>{
                    return <TableHeaderCell data-testid="table-header" key={column.id} width={column.width}
                        onClick={()=>
                            {
                                setSortBy(column.id);
                                setOrder(sortBy === column.id ? flipSortOrder(order)  : order);
                            }
                            
                        }>
                       {column.displayName}

                       {sortBy === column.id && <SortByContainer><ArrowDropUpIcon style={order==='asc'? {} :{transform:'rotate(180deg)'}}/></SortByContainer>}
                       
                    </TableHeaderCell>
                    })}
            </TableHeader>

            <TableBody>
                    {sortedData.map((row,i)=>{   
                        return <TableRowContainer data-testid="table-row" key={i} isOdd={i%2==0}>
                            {(tableConfig.columns).map(column=>{
                          
                            return <TableCell key={row.id+column.id} width={column.width}> 
                                 {column.render ? column.render(row) : row[column.id]}              
                            </TableCell>
                            })}
                        </TableRowContainer>
                    })}
            </TableBody>
        </>

}