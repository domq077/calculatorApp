import React from 'react';
import styled from 'styled-components';

const ButtonCalc = styled.button`
    background: #4D402B;
    width: 6.5rem;
    height: 3.5rem;
    margin: 0 2px 2px 2px;
    border: 2px solid gray;
    font-weight: 700;
    font-size: .9rem
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