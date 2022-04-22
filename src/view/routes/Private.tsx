// Core
import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import { ChatPage } from '../pages';

export const Private: FC = () => {
    return (
        <Routes>
            <Route
                element = { <ChatPage /> }
                path = '/chat'
            />
        </Routes>
    );
};
