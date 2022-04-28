// Core
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

// Elements
import { MsgMetadata } from './MsgMetadata';
import { EditMessage } from './EditMessage';

// Types
import { MessageType } from '../../bus/messages/types';
import { PutMessage } from '../../bus/messages/saga/putMessage';

interface MessageInfo extends MessageType {
    deleteMessage: (msgId: string) => void
    putMessage: (msgObj: PutMessage) => void
}

// Styles
const Container = styled.div`
    display: flex;
    justify-content: flex-end;

    .message {
        margin: 10px;
        padding: 10px;

        width: 60%;

        font-size: 1.2rem;
        overflow-wrap: anywhere;

        color: black;
        background-color: rgb(159, 133, 255);
    }

    .message-tools {
        display: flex;
        justify-content: flex-end;
        padding-bottom: 0.3rem;

        svg {
            padding: 0.3rem;
            :hover {
                cursor: pointer;
            }
        }
    }
`;


export const SentMessage: FC<MessageInfo> = (props) => {
    const [ isEditing, setIsEditing ] = useState(false);

    const putMessageHandler = (text: string) => {
        const resultObj = {
            messageId:  props._id,
            messageObj: {
                text,
                username: props.username,
            },
        };

        return props.putMessage(resultObj);
    };

    const deactivateEditing = () => {
        setIsEditing(false);
    };

    const renderMessageTools = () => (
        <div className = 'message-tools'>
            <FontAwesomeIcon
                icon = { faEdit }
                size = 'xs'
                onClick = { () => void setIsEditing(true) }
            />
            <FontAwesomeIcon
                icon = { faTrash }
                size = 'xs'
                onClick = { () => void props.deleteMessage(props._id) }
            />
        </div>
    );

    return (
        <Container>
            <div className = 'message'>

                {renderMessageTools()}
                {
                    isEditing ? (
                        <EditMessage
                            finish = { deactivateEditing }
                            text = { props.text }
                            update = { putMessageHandler }
                        />)
                        : props.text
                }
                <MsgMetadata
                    createdAt = { props.createdAt }
                    updatedAt = { props.updatedAt }
                />
            </div>

        </Container>
    );
};
