// Core
import React, { FC, useCallback, useEffect } from 'react';

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

const ChatPage: FC = () => {
    const { auth } = useAuth();
    const setUserId = useLocalStorage(USER_ID, '')[ 1 ];
    const { setTogglerAction } = useTogglersRedux();

    const { messages, fetchMessages } = useMessages();

    // const init = useCallback(() => {
    //     console.log('use callback');

    //     fetchMessages();
    // }, []);

    useEffect(() => {
        // auth._id && setUserId(auth._id);
        // fetchMessages();
        // init();
    }, []);

    const logoutHandler = () => {
        setUserId('');
        setTogglerAction({
            type:  'isLoggedIn',
            value: false,
        });
    };

    console.log('retr: ', messages);


    return (
        <S.Container>
            <div className = 'container'>

                <div className = 'header'>
                    <div className = 'header-label'>{auth.username?.toUpperCase()}</div>
                    <button
                        className = 'logout-btn'
                        onClick = { logoutHandler }>Logout
                    </button>

                </div>
                <div className = 'chat-main'>
                    <button onClick = { fetchMessages }>Test</button>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>


            </div>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <ChatPage />
    </ErrorBoundary>
);
