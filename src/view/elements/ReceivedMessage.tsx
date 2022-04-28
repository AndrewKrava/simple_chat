// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Elements
import { MsgMetadata } from './MsgMetadata';

// Types
import { MessageType } from '../../bus/messages/types';

// Styles
const Container = styled.div`
    display: flex;
    justify-content: flex-start;

    .author {
        margin-bottom: 0.5rem;
        color: #ff8a80;
        font-size: 0.9rem;
    }

    .message {
        margin: 10px;
        padding: 10px;

        width: 60%;

        color: white;
        font-size: 1.2rem;
        overflow-wrap: anywhere;

        background-color: rgb(56, 48, 83);
    }

    .message-info {
        margin-top: 0.5rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        font-size: 0.8rem;
            .date {
                display: flex;
                justify-content: flex-end;
            }
    }
`;

export const ReceivedMessage: FC<MessageType> = (props) => {
    const renderAuthor = () => <p className = 'author'>{props.username}</p>;


    return (
        <Container>
            <div className = 'message'>

                {renderAuthor()}
                {props.text}
                <MsgMetadata
                    createdAt = { props.createdAt }
                    updatedAt = { props.updatedAt }
                />
            </div>

        </Container>
    );
};
