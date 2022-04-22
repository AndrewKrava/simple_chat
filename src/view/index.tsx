// Core
import React, { FC, useEffect, useCallback } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Containers
import { Routes } from './routes';

// Hooks
import { useLocalStorage } from '../tools/hooks';
import { useTogglersRedux } from '../bus/client/togglers';
import { useAuth } from '../bus/auth';

// Assets
import { GlobalStyles, defaultTheme } from '../assets';

// Styles
export const AppContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
`;

export const App: FC = () => {
    const { setTogglerAction, togglersRedux: { isLoggedIn }} = useTogglersRedux();
    const [ isDefaultTheme ] = useLocalStorage('isDefaultTheme', true);
    const { auth, fetchAuth, fetchRegistration } = useAuth();

    //*********** */
    const [ userId, setUserId ] = useLocalStorage('userId', '');

    // if (userId && !isLoggedIn) {
    // // make request /users/refresh/:userId if success -> loggin
    //     fetchAuth(userId);
    //     console.log('auth>>> ', auth);

    //     setTogglerAction({
    //         type:  'isLoggedIn',
    //         value: true,
    //     });
    // } else {
    //     // fetchRegistration('testuser1');
    //     // console.log('if ', auth);

    //     // setUserId('one');
    // }

    //********** */


    const setOnlineStatusHanlder = useCallback(() => void setTogglerAction({
        type:  'isOnline',
        value: navigator.onLine,
    }), [ setTogglerAction ]);

    useEffect(() => {
        console.log('use effect');

        if (userId && !isLoggedIn) {
            fetchAuth(userId);
            console.log('auth>>> ', auth);

            setTogglerAction({
                type:  'isLoggedIn',
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
                <Routes />
            </AppContainer>
        </ThemeProvider>
    );
};
