// Core
import React, { FC, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

// Hooks
import { useLocalStorage } from '../../../tools/hooks';

// Bus
import { useAuth } from '../../../bus/auth';
import { useMessages } from '../../../bus/messages';

// Components
import { ErrorBoundary, Message } from '../../components';

// Elements
import { NewMessage } from '../../elements';

// Constants
import { USER_ID } from '../../../init/constants';

// Styles
import * as S from './styles';

const ChatPage: FC = () => {
    const { auth, logout } = useAuth();
    const { messages, postMessage, fetchMessages } = useMessages(true);

    // TODO refactor move to hook
    const setUserId = useLocalStorage(USER_ID, '')[ 1 ];
    useEffect(() => {
        auth._id && setUserId(auth._id);
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
                <div className = 'container'>
                    <div className = 'header'>
                        <div className = 'header-title'>{auth.username}</div>
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
                </div>
            }
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <ChatPage />
    </ErrorBoundary>
);
