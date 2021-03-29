import React from 'react';
import styled from 'styled-components';

const Result = styled.div`
    width: 46vw;
    height: 5rem;
    background: white;
    margin-bottom: 1rem;
    background: #EAEEFF;
    font-size: 1.6rem;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Input = ({result}) => (
    <Result>
        {result}
    </Result>
);

export default Input;