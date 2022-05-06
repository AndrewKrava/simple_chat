// Core
import React, { FC, useState } from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';

// Bus
import { useAuth } from '../../../bus/auth';
import { useMessages } from '../../../bus/messages';

// Hooks
import { useKeyboard } from '../../../bus/keyboard';

// Elements
import { AlertRemoveItem } from '../../elements';

// Styles
import * as S from './styles';

// Types
import { MessageType } from '../../../bus/messages/types';

export const Message: FC<MessageType> = (props) => {
    const [ isEditing, setIsEditing ] = useState(false);
    const [ message, setMessage ] = useState(props.text);
    const [ isShowAlert, setIsShowAlert ] = useState(false);
    const { auth: { username }} = useAuth();
    const { putMessage } = useMessages();
    const { isKeyboardShown, switchKeyboardView } = useKeyboard();

    // used to change state **message
    const editingHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    // used to switch editing state || disable editing state
    const switchEditing = () => {
        isKeyboardShown && switchKeyboardView(false);
        if (isEditing && message !== props.text) {
            setMessage(props.text);
        }
        setIsEditing((prev) => !prev);
    };

    // submit after editing
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

    // used to show alert message after delete button was pressed
    const deleteMessageHandler = () => {
        setIsShowAlert(true);
    };

    // used to decline delete message, call in alert component
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
            <div className = { username === props.username ? 'box right-position' : 'box left-position' }>
                <div className = { username === props.username ? 'content my-message' : 'content message' }>
                    {
                        username === props.username
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
                                <form className = 'editing'>
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
                                </form>
                            )
                            : <p>{props.text}</p>
                    }
                    <div className = 'message-info'>
                        <div>{!moment(props.createdAt).isSame(props.updatedAt) && 'edited'}</div>
                        <div className = 'date'>
                            {moment(props.updatedAt).format('hh:mm:ss')}
                        </div>
                    </div>
                </div>
            </div>
        </S.Container>
    );
};
