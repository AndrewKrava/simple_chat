// Core
import React, { FC, Suspense } from 'react';

// Routes
import { Public } from './Public';
import { Private } from './Private';

// Bus
import { useTogglersRedux } from '../../bus/client/togglers';

// Elements
import { Spinner } from '../elements';

export const Routes: FC = () => {
    const { togglersRedux: { isLoggedIn, isLoading }} = useTogglersRedux();

    const init = () => {
        if (isLoading) {
            return <Spinner/>;
        }

        return isLoggedIn
            ? <Private />
            : <Public />;
    };

    return (
        <Suspense fallback = { <Spinner /> }>
            {init()}
        </Suspense>
    );
};
