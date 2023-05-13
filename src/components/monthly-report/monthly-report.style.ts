import styled from 'styled-components';

export const FullDay = styled.div<{isFull: boolean}>`
    font-weight: 600;
    color: ${props=>props.isFull ? '#05f': 'red'};
`

export const Total = styled.div`
    font-weight: 600;
    margin-bottom:8px;
`