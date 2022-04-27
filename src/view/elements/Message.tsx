// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Types
import { MessageType } from '../../bus/messages/types';

interface MessageInfo extends MessageType {
    isMyMessage: boolean
}

// Styles
const Container = styled.div`
    display: flex;
    justify-content: ${(props: Pick<MessageInfo, 'isMyMessage'>) => props.isMyMessage ? 'flex-end' : 'flex-start'};

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


export const Message: FC<MessageInfo> = (props) => {
    const getMessageStyle = () => props.isMyMessage ? 'message my-message' : 'message';

    return (
        <Container
            isMyMessage = { props.isMyMessage }>
            <div className = { getMessageStyle() }>
                <p className = 'author'>{props.username} my Msg {props.isMyMessage}</p>
                {props.text}
            </div>

        </Container>
    );
};
