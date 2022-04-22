// Core
import { lazy } from 'react';

// Pages
export const RegistrationPage = lazy(() => import(/* webpackChunkName: "RegistrationPage" */ './RegistrationPage'));
export const ChatPage = lazy(() => import(/* webpackChunkName: "ChatPage" */ './ChatPage'));
