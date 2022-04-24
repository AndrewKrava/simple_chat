// Core
import React, { FC, useEffect } from 'react';

// Hooks
import { useLocalStorage } from '../../../tools/hooks';

// Bus
import { useAuth } from '../../../bus/auth';

// Components
import { ErrorBoundary } from '../../components';

// Constants
import { USER_ID } from '../../../init/constants';

// Styles
import * as S from './styles';

// TODO phase2
const ChatPage: FC = () => {
    const { auth } = useAuth();
    const setUserId = useLocalStorage(USER_ID, '')[ 1 ];

    useEffect(() => {
        auth._id && setUserId(auth._id);
    }, []);

    return (
        <S.Container>
            <div className = 'container'>
                Wellcome {auth.username}

                <div className = 'forTest'>
                    <div>TODO phase2</div>

                    <div>
                        <div>Use this button to remove user Id from Local Storage</div>
                        <div>Only for test purpose</div>
                        <button
                            onClick = { () => {
                                setUserId('');
                            } }>Remove User Id
                        </button>
                    </div>
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
