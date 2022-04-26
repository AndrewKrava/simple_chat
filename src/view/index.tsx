// Core
import React, { FC, useEffect, useCallback } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Containers
import { Routes } from './routes';

// Elements
import { Spinner } from './elements/Spinner';

// Hooks
import { useLocalStorage } from '../tools/hooks';
import { useTogglersRedux } from '../bus/client/togglers';
import { useAuth } from '../bus/auth';


// Assets
import { GlobalStyles, defaultTheme } from '../assets';

// Constants
import { USER_ID } from '../init/constants';

// Styles
export const AppContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
`;


export const App: FC = () => {
    const { setTogglerAction, togglersRedux: { isInitialized }} = useTogglersRedux();
    const [ isDefaultTheme ] = useLocalStorage('isDefaultTheme', true);
    const [ userId ] = useLocalStorage(USER_ID, '');

    const { refreshAuth } = useAuth();


    const setOnlineStatusHanlder = useCallback(() => void setTogglerAction({
        type:  'isOnline',
        value: navigator.onLine,
    }), [ setTogglerAction ]);

    const loginUser = useCallback(() => {
        refreshAuth(userId);
    }, []);


    useEffect(() => {
        if (userId) {
            loginUser();
        } else {
            setTogglerAction({
                type:  'isInitialized',
                value: true,
            });
        }

        setOnlineStatusHanlder();
        window.addEventListener('online', setOnlineStatusHanlder);
        window.addEventListener('offline', setOnlineStatusHanlder);
    }, []);

    return (
        <ThemeProvider theme = { isDefaultTheme ? defaultTheme : defaultTheme } >
            <GlobalStyles />
            <AppContainer>
                {
                    isInitialized
                        ? <Routes />
                        : <Spinner/>
                }
            </AppContainer>
        </ThemeProvider>
    );
};
