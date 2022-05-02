// Core
import React, { FC, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

// Hooks
import { useLocalStorage } from '../../../tools/hooks';
import { useTogglersRedux } from '../../../bus/client/togglers';

// Bus
import { useAuth } from '../../../bus/auth';

// Components
import { ErrorBoundary, Message } from '../../components';

// Elements
import {  SentMessage, Spinner, WriteMsg } from '../../elements';
import { ReceivedMessage } from '../../elements/ReceivedMessage';

// Constants
import { USER_ID } from '../../../init/constants';


// Styles
import * as S from './styles';
import { useMessages } from '../../../bus/messages';


const ChatPage: FC = () => {
    const [ showKeyboard, setShowKeyboard ] = useState(false);
    const { auth } = useAuth();
    const { messages, postMessage, deleteMessage, putMessage, fetchMessages } = useMessages(true);
    const setUserId = useLocalStorage(USER_ID, '')[ 1 ];
    const { setTogglerAction, togglersRedux: { isLoading }} = useTogglersRedux();


    useEffect(() => {
        auth._id && setUserId(auth._id);
    }, []);

    const logoutHandler = () => {
        setUserId('');
        setTogglerAction({
            type:  'isLoggedIn',
            value: false,
        });
    };

    const renderMessages = () => {
        if (messages?.length === 0) {
            return <div>There is no message</div>;
        }

        return messages?.map((msg) => (
            <Message
                key = { msg._id }
                { ...msg }
            />
        ));
    };

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
                        <div>{auth.username?.toUpperCase()}</div>
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
                                onClick = { logoutHandler }
                            />
                        </div>
                    </div>
                    <div className = 'chat-main'>
                        {renderMessages()}
                    </div>
                    <WriteMsg postMessage = { postMessageHandler }  />
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
