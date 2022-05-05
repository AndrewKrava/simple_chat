// Core
import React, { FC, useState } from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';

// Bus
import { useAuth } from '../../../bus/auth';

// Elements
import { AlertRemoveItem } from '../../elements';

// Styles
import * as S from './styles';

// Types
import { MessageType } from '../../../bus/messages/types';
import { useMessages } from '../../../bus/messages';

export const Message: FC<MessageType> = (props) => {
    const [ isEditing, setIsEditing ] = useState(false);
    const [ message, setMessage ] = useState(props.text);
    const [ isShowAlert, setIsShowAlert ] = useState(false);
    const { auth: { username }} = useAuth();
    const { putMessage } = useMessages();

    const isDateSame = moment(props.createdAt).isSame(props.updatedAt);
    const isMyMessage = username === props.username;

    const editingHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const switchEditing = () => {
        if (isEditing && message !== props.text) {
            setMessage(props.text);
        }
        setIsEditing((prev) => !prev);
    };

    const submitEditing = () => {
        username
        && putMessage({
            messageId:  props._id,
            messageObj: {
                username: username,
                text:     message,
            },
        });
        setIsEditing(false);
    };

    const deleteMessageHandler = () => {
        setIsShowAlert(true);
    };

    const declineDeleteMessage = () => {
        setIsShowAlert(false);
    };

    return (
        <S.Container >
            {
                isShowAlert && (
                    <AlertRemoveItem
                        declineDelete = { declineDeleteMessage }
                        messageId = { props._id }
                    />
                )
            }
            <div className = { isMyMessage ? 'box right-position' : 'box left-position' }>
                <div className = { isMyMessage ? 'content my-message' : 'content message' }>
                    {
                        isMyMessage
                            ? (
                                <div className = 'message-tools'>
                                    <FontAwesomeIcon
                                        icon = { isEditing ? faTimes : faEdit }
                                        size = 'xs'
                                        onClick = { switchEditing }
                                    />
                                    <FontAwesomeIcon
                                        icon = { faTrash }
                                        size = 'xs'
                                        onClick = { deleteMessageHandler }
                                    />
                                </div>
                            )
                            : <p className = 'author'>{props.username}</p>
                    }
                    {
                        isEditing
                            ? (
                                <div className = 'editing'>
                                    <input
                                        type = 'text'
                                        value = { message }
                                        onChange = { (event) => editingHandler(event) }
                                    />
                                    <div className = 'button-section'>
                                        <button
                                            className = 'submit-btn'
                                            disabled = { message === props.text }
                                            type = 'submit'
                                            onClick = { () => submitEditing() }>Update
                                        </button>
                                    </div>
                                </div>
                            )
                            : <p>{props.text}</p>
                    }
                    <div className = 'message-info'>
                        <div>{!isDateSame && 'edited'}</div>
                        <div className = 'date'>
                            {moment(props.updatedAt).format('hh:mm:ss')}
                        </div>
                    </div>
                </div>
            </div>
        </S.Container>
    );
};
