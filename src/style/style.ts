import styled, { css } from 'styled-components';

export const HEADER_COLOR = 'rgb(9, 113, 241)';
export const HOVER_COLOR = 'rgb(35, 170, 255)';
export const COLORS = {
    full: '#2a2',
    missing: '#d22'
}

export const MainPage = styled.div`
    padding:0px;
    margin:0px;
    font-size:16px;
    font-family:verdana;
    *{font-size:16px;}
`

export const TopTabs = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding-right: 16px;
    background: ${HEADER_COLOR};
    box-shadow: 1px 1px 3px ${HEADER_COLOR};
`

export const TopLinks = styled.div`
    display:flex;
    align-items:center;
    padding: 10px;
    gap: 16px;
    font-weight:bold;
    a{transition: all 0.2s}
    a{color:rgba(255,255,255,0.5);text-decoration:none};

    a.active, a:hover {
      color:white;
    }
`

export const Page = styled.div`
    padding: 16px;
`

export const PageHeader = styled.div`
    margin-bottom:20px;
`

export const Button = styled.button<{disabled?: boolean}>` 
    transition: all 0.2s ease-in-out;
    
    ${props => !props.disabled && css`
        background: ${HEADER_COLOR};
        color: white;
        cursor:pointer;
        outline:none;
        border-radius:2px;
        border: 2px outset ${HEADER_COLOR};
        &:hover{
            background: ${HOVER_COLOR};
        }
        `}
`
