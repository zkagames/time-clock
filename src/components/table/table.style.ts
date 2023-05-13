import styled from 'styled-components';

const BORDER = '1px solid rgba(38,35,43,0.1)';

export const TableHeader = styled.div`
    dispaly:flex;
    background: #eee;
    display:flex;
`

export const TableHeaderCell = styled.div<{width?:number}>`
   display:flex;
   flex: ${props=>props.width ?? 1};
   border-right: ${BORDER};
   border-bottom: ${BORDER};
   padding: 4px;
   align-items:center;
   cursor:pointer;
`

export const TableBody = styled.div`
    background:white;
    overflow:auto;
`

export const TableRowContainer = styled.div<{isOdd: boolean}>`
    display:flex; 
    background:${props=>props.isOdd ? 'white': '#f8f8f8'};
    border-bottom: ${BORDER};
`

export const TableCell = styled.div<{width?:number}>`
   display:flex;
   padding: 4px;
   flex: ${props=>props.width ?? 1};
   border-right: ${BORDER};
`

export const SortByContainer = styled.div`
    display:flex;
    align-items:center;
    margin-left:8px;
`