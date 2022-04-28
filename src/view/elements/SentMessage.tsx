// Core
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

// Types
import { MessageType } from '../../bus/messages/types';

interface MessageInfo extends MessageType {
    isMyMessage: boolean
    deleteMessage: (msgId: string) => void
}

// Styles
const Container = styled.div`
    display: flex;
    justify-content: ${(props: Pick<MessageInfo, 'isMyMessage'>) => props.isMyMessage ? 'flex-end' : 'flex-start'};

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

    .my-message {
        color: black;
        background-color: rgb(159, 133, 255);
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

    .message-tools {
        display: flex;
        justify-content: flex-end;

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

    const getMessageStyle = () => props.isMyMessage ? 'message my-message' : 'message';

    const renderAuthor = () => !props.isMyMessage && <p className = 'author'>{props.username}</p>;

    const renderMessageInfo = () => {
        const isSame = moment(props.createdAt).isSame(props.updatedAt);

        return (
            <>
                <div>{!isSame && 'edited'}</div>
                <div className = 'date'>
                    { moment(props.updatedAt).format('hh:mm:ss') }
                </div>
            </>
        );
    };

    const renderMessageTools = () => props.isMyMessage && (
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
        <Container
            isMyMessage = { props.isMyMessage }>
            <div className = { getMessageStyle() }>
                {renderAuthor()}
                {renderMessageTools()}
                {props.text}
                <div className = 'message-info'>{renderMessageInfo() }</div>


            </div>


        </Container>
    );
};
