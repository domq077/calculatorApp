import React, { useState } from 'react';
import Input from './Input';
import Keyboard from './Keyboard';

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
        <div>
            <Input result={result}/>
            <Keyboard onClick={onClick}/>
        </div>
    )
};

export default Device;