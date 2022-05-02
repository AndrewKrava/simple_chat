// Core
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';

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
        background-color: rgb(159, 133, 255);
        border-radius: 15px 15px 0 15px;
    }

    .message-tools {
        display: flex;
        justify-content: flex-end;
        padding-bottom: 0.3rem;

        svg {
            color: black;
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

    const getEditStyle = () => isEditing ? faTimes : faEdit;

    const renderMessageTools = () => (
        <div className = 'message-tools'>
            <FontAwesomeIcon
                icon = { getEditStyle() }
                size = 'xs'
                onClick = { () => void setIsEditing((prev) => !prev) }
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
                        : <p>{props.text} </p>
                }
                <MsgMetadata
                    createdAt = { props.createdAt }
                    updatedAt = { props.updatedAt }
                />
            </div>

        </Container>
    );
};
