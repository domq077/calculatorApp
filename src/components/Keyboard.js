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

const Keyboard = ({onClick}) => (
    <Container>
            <Button buttonColor="#dadce0" value='(' onClick={e => onClick(e.target.value)}/>
            <Button buttonColor="#dadce0" value=')' onClick={e => onClick(e.target.value)}/>
            <Button buttonColor="#dadce0" value='%' onClick={e => onClick(e.target.value)}/>
            <Button buttonColor="#dadce0" value='AC' onClick={e => onClick(e.target.value)}/>
            <Button value='7' onClick={e => onClick(e.target.value)}/>
            <Button value='8' onClick={e => onClick(e.target.value)}/>
            <Button value='9' onClick={e => onClick(e.target.value)}/>
            <Button buttonColor="#dadce0" value='/' onClick={e => onClick(e.target.value)}/>
            <Button value='4' onClick={e => onClick(e.target.value)}/>
            <Button value='5' onClick={e => onClick(e.target.value)}/>
            <Button value='6' onClick={e => onClick(e.target.value)}/>
            <Button buttonColor="#dadce0" value='X' onClick={e => onClick(e.target.value)}/>
            <Button value='1' onClick={e => onClick(e.target.value)}/>
            <Button value='2' onClick={e => onClick(e.target.value)}/>
            <Button value='3' onClick={e => onClick(e.target.value)}/>
            <Button buttonColor="#dadce0" value='-' onClick={e => onClick(e.target.value)}/>
            <Button value='0' onClick={e => onClick(e.target.value)}/>
            <Button value='.' onClick={e => onClick(e.target.value)}/>
            <Button buttonColor="#4285f4" value='=' onClick={e => onClick(e.target.value)}/>
            <Button buttonColor="#dadce0" value='+' onClick={e => onClick(e.target.value)}/>
    </Container>
);

export default Keyboard;


