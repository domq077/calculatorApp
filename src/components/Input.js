import React from 'react';
import styled from 'styled-components';

const Result = styled.div`
    width: 20vw;
    background: white;
    padding: 2rem;
    margin: 1rem;
`;

const Input = ({result}) => (
    <Result>
        {result}
    </Result>
);

export default Input;