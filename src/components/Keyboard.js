import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Container = styled.div`
    display: grid;
    grid-template: repeat(5, 1fr) / repeat(4, 1fr);
    width: 50vw;
    height: 50vh:
    border: 2px solid darkblue;
    gap: .3rem;
`;

const Keyboard = () => (
    <Container>
            <Button buttonColor="#dadce0" value='(' onClick={() => '1'}/>
            <Button buttonColor="#dadce0" value=')' onClick={() => '1'}/>
            <Button buttonColor="#dadce0" value='%' onClick={() => '1'}/>
            <Button buttonColor="#dadce0" value='AC' onClick={() => '1'}/>
            <Button value='7' onClick={() => '1'}/>
            <Button value='8' onClick={() => '1'}/>
            <Button value='9' onClick={() => '1'}/>
            <Button buttonColor="#dadce0" value='/' onClick={() => '1'}/>
            <Button value='4' onClick={() => '1'}/>
            <Button value='5' onClick={() => '1'}/>
            <Button value='6' onClick={() => '1'}/>
            <Button buttonColor="#dadce0" value='X' onClick={() => '1'}/>
            <Button value='1' onClick={() => '1'}/>
            <Button value='2' onClick={() => '1'}/>
            <Button value='3' onClick={() => '1'}/>
            <Button buttonColor="#dadce0" value='-' onClick={() => '1'}/>
            <Button value='0' onClick={() => '1'}/>
            <Button value='.' onClick={() => '1'}/>
            <Button buttonColor="#4285f4" value='=' onClick={() => '1'}/>
            <Button buttonColor="#dadce0" value='+' onClick={() => '1'}/>
    </Container>
);

export default Keyboard;


