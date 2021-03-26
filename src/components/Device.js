import React, { useState } from 'react';
import Input from './Input';
import Keyboard from './Keyboard';

const Device = ({onClick}) => {
    const [result, setResult] = useState(0);
    
    onClick = (button) => {
        setResult(result + button)
    }
    
    return(
        <div>
            <Input result={result}/>
            <Keyboard onClick={onClick}/>
        </div>
    )
};

export default Device;