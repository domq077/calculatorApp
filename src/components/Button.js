import React from 'react';
import styled from 'styled-components';

const ButtonCalc = styled.button`
    background: #4D402B;
    width: 6.5rem;
    height: 3.5rem;
    margin: 0 2px 2px 2px;
    border: none;
    font-weight: 700;
    font-size: .9rem;
    cursor: pointer;
    outline: none;
    position: relative;

    &:before, &:after {
        border: 0 solid transparent;
        transition: all 0.4s;
        content: '';
        position: absolute;
        width: 24px;
        height: 24px;
    }
    
    &:before {
        border-top: 2px solid gray;
        border-right: 2px solid gray;
        right: 0;
        height: 24px;
        top: -2px;
    }

    &:after {
        border-bottom: 2px solid gray;
        border-left: 2px solid gray;
        left: 0;
        bottom: -2px;
        
    }

    &:hover:before, &:hover:after {
        width: calc(100% - 2px);
        height: 100%;
    }

    @media(max-width: 550px) {
        width: 4.875rem;
        height: 2.625rem;
    }

    @media(max-width: 400px) {
        width: 4.55rem;
        height: 2.45rem;
    }
    
`;

const Button = ({value, onClick, buttonColor}) => (
    <ButtonCalc 
        buttonColor={buttonColor} 
        onClick={onClick}
        value={value}
    >
        {value}
    </ButtonCalc>
);

export default Button;