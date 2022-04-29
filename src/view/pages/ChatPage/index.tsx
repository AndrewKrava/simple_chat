// Core
import React, { FC, useEffect } from 'react';

// Hooks
import { useLocalStorage } from '../../../tools/hooks';
import { useTogglersRedux } from '../../../bus/client/togglers';

// Bus
import { useAuth } from '../../../bus/auth';

// Components
import { ErrorBoundary } from '../../components';

// Elements
import {  SentMessage, Spinner, WriteMsg } from '../../elements';
import { ReceivedMessage } from '../../elements/ReceivedMessage';

// Constants
import { USER_ID } from '../../../init/constants';


// Styles
import * as S from './styles';
import { useMessages } from '../../../bus/messages';
// import { AdaptiveScroll, Message, Spinner, WriteMsg } from '../../elements';     // TODO use AdaptiveScroll


const ChatPage: FC = () => {
    const { auth } = useAuth();
    const { messages, postMessage, deleteMessage, putMessage } = useMessages();
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

        return messages?.map((msg) => msg.username === auth.username
            ? (
                <SentMessage
                    key = { msg._id }
                    { ...msg }
                    deleteMessage = { deleteMessage }
                    putMessage = { putMessage }
                />
            )
            : (
                <ReceivedMessage
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
                isLoading
                    ? <Spinner/>
                    : (
                        <div className = 'container'>

                            <div className = 'header'>
                                <div className = 'header-label'>{auth.username?.toUpperCase()}</div>
                                <button
                                    className = 'logout-btn'
                                    onClick = { logoutHandler }>Logout
                                </button>

                            </div>
                            <div className = 'chat-main'>
                                {renderMessages()}

                                {/* TODO use AdaptiveScroll  */}
                                {/* <AdaptiveScroll > */}
                                {/* </AdaptiveScroll> */}
                            </div>

                            <WriteMsg postMessage = { postMessageHandler }  />

                        </div>
                    )
            }

        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <ChatPage />
    </ErrorBoundary>
);
