// Core
import { useDispatch } from 'react-redux';
import { SagaIterator } from '@redux-saga/core';
import { all, call } from 'redux-saga/effects';

// Watchers & Actions
import { refreshAuthAction, watchRefreshAuth } from './refreshAuth';
import { postRegistrationAction, watchPostRegistration } from './postRegistration';


export const useAuthSaga = () => {
    const dispatch = useDispatch();

    return {
        refreshAuth: (userId: string) => {
            dispatch(refreshAuthAction(userId));
        },
        postRegistration: (username: string) => {
            dispatch(postRegistrationAction(username));
        },
    };
};

export function* watchAuth(): SagaIterator {
    yield all([ call(watchRefreshAuth), call(watchPostRegistration) ]);
}
