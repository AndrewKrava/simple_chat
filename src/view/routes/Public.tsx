// Core
import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import { RegistrationPage } from '../pages';

export const Public: FC = () => {
    console.log();

    return (
        <Routes>
            <Route
                element = { <RegistrationPage /> }
                path = '/registration'
            />
            <Route
                element = {
                    <Navigate
                        replace
                        to = '/registration'
                    />
                }
                path = '*'
            />
        </Routes>
    );
};
