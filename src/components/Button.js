import React from 'react';
import styled from 'styled-components';

const ButtonCalc = styled.button`
    background: ${props => props.buttonColor || '#f1f3f4'};
    width: 7.5rem;
    height: 4rem;
`;
const Button = ({value, onClick, buttonColor}) => (
    <ButtonCalc 
        buttonColor={buttonColor} 
        onClick={onClick}
    >
        {value}
    </ButtonCalc>
);

export default Button;