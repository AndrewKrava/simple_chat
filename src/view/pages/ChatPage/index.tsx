// Core
import React, { FC, useEffect } from 'react';

// Hooks
import { useLocalStorage } from '../../../tools/hooks';
import { useTogglersRedux } from '../../../bus/client/togglers';

// Bus
import { useAuth } from '../../../bus/auth';

// Components
import { ErrorBoundary } from '../../components';

// Constants
import { USER_ID } from '../../../init/constants';

// Styles
import * as S from './styles';
import { useMessages } from '../../../bus/messages';
import { AdaptiveScroll, Message, Spinner, WriteMsg } from '../../elements';

const ChatPage: FC = () => {
    const { auth } = useAuth();
    const setUserId = useLocalStorage(USER_ID, '')[ 1 ];
    const { setTogglerAction, togglersRedux: { isLoading }} = useTogglersRedux();

    const { messages, postMessage } = useMessages();

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

                            <div className = ''>
                                <WriteMsg postMessage = { postMessageHandler } />
                            </div>


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
