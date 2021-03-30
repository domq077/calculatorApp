import React from 'react';
import styled from 'styled-components';

const Result = styled.div`
    width: 450px;
    height: 5rem;
    background: white;
    margin-bottom: 1rem;
    background: #EAEEFF;
    font-size: 1.6rem;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;

    @media(max-width: 550px) {
        width: 85vw;
        font-size: 1.3rem;
    }
`;

const Input = ({result}) => (
    <Result>
        {result}
    </Result>
);

export default Input;