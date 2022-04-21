// Core
import React, { FC, useEffect, useCallback } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Containers
import { Routes } from './routes';

// Hooks
import { useLocalStorage } from '../tools/hooks';
import { useTogglersRedux } from '../bus/client/togglers';

// Assets
import { GlobalStyles, defaultTheme } from '../assets';

// test redux
import { makeRequest, FetchOptions } from '../tools/utils/';

// Styles
export const AppContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
`;

export const App: FC = () => {
    const { setTogglerAction } = useTogglersRedux();
    const [ isDefaultTheme ] = useLocalStorage('isDefaultTheme', true);

    //*********** */
    const [ userId, setUserId ] = useLocalStorage('userId', null);
    // console.log('userId: ', userId);

    const foo = () => fetch('https://jsonplaceholder.typicode.com/users');

    const reqOptions: FetchOptions = {
        fetch: foo,
    };

    const result = (getRes: any) => {
        console.log('success: ', getRes);
    };

    (async() => {
        const res = makeRequest({ fetchOptions: reqOptions, success: result });
        // for (const iterator of res) {
        //     console.log('>> ', iterator);
        // }
        console.log('generator: ', res.next());
        console.log('generator: ', res.next());
        console.log('generator: ', res.next());
    })();


    //********** */


    const setOnlineStatusHanlder = useCallback(() => void setTogglerAction({
        type:  'isOnline',
        value: navigator.onLine,
    }), [ setTogglerAction ]);

    useEffect(() => {
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
