// Core
import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import { ChatPage } from '../pages';

export const Private: FC = () => {
    return (
        <Routes>
            <Route
                element = { <ChatPage /> }
                path = '/chat'
            />
            <Route
                element = {
                    <Navigate
                        replace
                        to = '/chat'
                    />
                }
                path = '*'
            />
        </Routes>
    );
};
