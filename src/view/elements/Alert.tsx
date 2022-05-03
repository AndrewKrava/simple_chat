// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Buss
import { useMessages } from '../../bus/messages';

// Styles
const Container = styled.div`
    position: absolute;
    top: 0;
    left: auto;
    
    width: 30vh; 
    height: 30vh;
    background-color: rgb(54, 57, 66);
    color: white;
`;

export const Alert: FC = () => {
    const { deleteMessage } = useMessages();

    return (
        <Container>
            <p className = 'title'>DELETE MESSAGE</p>
            <p>Are you sure you want do delete this message?</p>
            <button>Delete</button>
            <button>Cancel</button>
        </Container>
    );
};
