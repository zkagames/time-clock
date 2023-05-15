import styled from 'styled-components';
import { COLORS } from '../../style/style';

const BOX_SIZE = 40;
const CAPTION_SIZE = 16;

export const MissingDaysContainer = styled.div`
    display:flex;
    gap: 20px;
`;

export const AlertContainer = styled.div``;

export const Header = styled.div`
  font-size:14px;
  color: #666;
  margin-bottom:4px;
`;

export const Days = styled.div`
    position:relative;
    display:flex;
    gap:8px;
    align-items:flex-end;
`;

export const DayAndText = styled.div`
    width: ${BOX_SIZE}px;
    padding:0px 4px;
    color: #666;
    font-size:13px;
`;

export const Day = styled.div<{isFull: boolean, size:number}>`
    display:flex;
    height:${props=>props.size * BOX_SIZE}px;
    background-color: ${props=>props.isFull ? COLORS.full: COLORS.missing};
    border: 1px outset ${props=>props.isFull ? COLORS.full: COLORS.missing};
`

export const NotifyLine = styled.div<{size:number}>`
    position:absolute;
    bottom:${props=>props.size * BOX_SIZE+CAPTION_SIZE + 1}px;
    height: 1px;
    width: 100%;
    border-top:1px dashed ${ COLORS.missing};
    transition: bottom 0.2s ease-in-out;
`