import { primary } from "@/lib/Colors";
import { css, styled } from "styled-components";

    export const ButtonStyle = css`
    display: inline-flex;
    align-items: center;
    padding: 5px 15px;
    cursor: pointer;
    text-decoration: none;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    svg{
        height: 16px;
        margin-right: 5px;
    }   

    ${props => props.skyblue && !props.outlined && css`
        background-color: #fff;
        border-color: #000;
        color: #000;
    `}

    ${props => props.skyblue && props.outlined && css`
        background-color: transparent;
        border: 2px solid #9AC5F4;
        color: #9AC5F4;
    `}
    
    
    ${props => props.primary && props.outlined && css`
        background-color: transparent;
        border: 2px solid ${primary};
        color: ${primary};
    `}

    ${props => props.primary && !props.outlined && css`
        background-color: transparent;
        border: 2px solid ${primary};
        color:${primary};
    `}

    ${props => props.black && props.outlined && css`
        background-color: transparent;
        color:#fff;
        border: 1px solid #000;
    `}


    ${props => props.black && !props.outlined && css`
        background-color: #000;
        color:#fff;
    `}

    ${props => props.block && css`
        display: block;
        width: 100%;
    `}

    ${props => props.secundary && css`
        background-color: transparent;
        border: 2px solid #FFBDF7;
        color: #000;
    `}
    
    ${props => props.size === 'l' && css`
        font-size: 1.2rem;
        padding: 10px 20px;
        svg{
        height: 20px;
        }

    `};
    `;

  const StyledButton= styled.button`
   ${ButtonStyle}
`;

export default function Button ({children,...rest}) {
    return(
        <StyledButton {...rest}>{children}</StyledButton>
    );
};