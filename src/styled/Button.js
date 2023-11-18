
import styled from "styled-components"

export const Button = styled.button`
    min-width: 220px;
    padding: 10px 18px;
    border: none;
    border-radius: 5px;
    background: #000;
    border: 1px solid transparent;
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    transition: 250ms background ease-in;
    cursor: pointer;

    &:hover {
        background: #fff;
        border: 1px solid black;
        color: #000;
        transition: 150ms background ease-in;
    }
`
export const OutlinedButton = styled(Button)`
    background: transparent;
    color: #000;
    border: 1px solid #000;

    &:hover {
        background: #000;
        border: 1px solid transparent;
        color: #fff;
    }
`