import styled from 'styled-components';
import { COLORS } from '../../style/style';

export const FullDay = styled.div<{isFull: boolean}>`
    font-weight: 600;
    color: ${props=>props.isFull ? COLORS.full: COLORS.missing};
`

export const Total = styled.div`
    font-weight: 600;
    margin-bottom:8px;
`

export const FormAndGraph = styled.div`
    display:flex;
    align-items:center;
    gap:80px;
`