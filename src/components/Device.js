import React, { useState } from 'react';
import styled from 'styled-components';
import Input from './Input';
import Keyboard from './Keyboard';

const Container = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    width: 50vw;
    height: 50vh;
    margin: 0 auto;
    padding-top: 15vh;
`;

const Device = ({onClick, calculate, reset}) => {
    const [result, setResult] = useState('');
    
    onClick = (button) => {
        if(button === '=') {
            calculate();
        } else if(button === 'AC') {
            reset();
        } else {
            setResult(result + button);
        }
    }

    calculate = () => {
        let tempResult = '';
        if(result.includes('--')) {
            tempResult = result.replace('--', '+');
        } else {
            tempResult = result;
        }

        try {
            setResult((eval(tempResult) || '') + '');
        } catch(e) {
            setResult('error');
        }

    }

    reset = () => {
        setResult('');
    }
    
    return(
        <Container>
            <Input result={result}/>
            <Keyboard onClick={onClick}/>
        </Container>
    )
};

export default Device;