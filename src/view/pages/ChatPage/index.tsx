// Core
import React, { FC, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

// Bus
import { useAuth } from '../../../bus/auth';
import { useMessages } from '../../../bus/messages';
import { useKeyboard } from '../../../bus/keyboard';

// Components
import { ErrorBoundary, Message } from '../../components';

// Elements
import { NewMessage } from '../../elements';

// Constants
import { GREETING_USER } from '../../../init';

// Styles
import * as S from './styles';

const ChatPage: FC = () => {
    const { auth, logout, userIdToLocalStorage } = useAuth();
    const { messages, postMessage, fetchMessages } = useMessages(true);
    const { isKeyboardShown } = useKeyboard();

    useEffect(() => {
        auth._id && userIdToLocalStorage(auth._id);
    }, []);

    const postMessageHandler = (text: string) => {
        if (auth.username) {
            const messageObjToPost = {
                text,
                username: auth.username,
            };

            return postMessage(messageObjToPost);
        }
    };

    return (
        <S.Container>
            {
                <S.ChatBox isKeyboardShown = { isKeyboardShown }>
                    <div className = 'header'>
                        <div className = 'header-title'>{`${GREETING_USER} ${auth.username}`}</div>
                        <div className = 'control-buttons'>
                            <FontAwesomeIcon
                                icon = { faRedoAlt }
                                size = 'lg'
                                title = 'refresh'
                                onClick = { fetchMessages }
                            />
                            <FontAwesomeIcon
                                icon = { faSignOutAlt }
                                size = 'lg'
                                title = 'logout'
                                onClick = { logout }
                            />
                        </div>
                    </div>
                    <div className = 'chat-main'>
                        { messages?.length === 0
                            ? <div>There is no message</div>
                            : messages?.map((msg) => (
                                <Message
                                    key = { msg._id }
                                    { ...msg }
                                />
                            ))}
                    </div>
                    <NewMessage postMessage = { postMessageHandler }  />
                </S.ChatBox>
            }
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <ChatPage />
    </ErrorBoundary>
);
