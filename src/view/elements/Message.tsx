// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Types
import { Message as MessageType } from '../../bus/messages/types';

// Hooks
import { useAuth } from '../../bus/auth';

// Styles
const Container = styled.div`

    .author {
        color: red;
    }

    .message {
        margin: 10px;
        padding: 10px;

        width: 60%;

        color: rgb(208, 206, 223);
        background-color: rgb(56, 48, 83);

    }

    .recieved-messages {

    }

    .my-message {

    }

`;

export const Message: FC<MessageType> = (props) => {
    const { auth:{ _id }} = useAuth();

    const getMessageStyle = () => props._id === _id ? 'message my-message' : 'message';

    return (
        <Container>
            <div className = { getMessageStyle() }>
                <p className = 'author'>{props.username}</p>
                {props.text}
            </div>

        </Container>
    );
};
