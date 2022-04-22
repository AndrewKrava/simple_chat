// Core
import { useDispatch } from 'react-redux';
import { SagaIterator } from '@redux-saga/core';
import { all, call } from 'redux-saga/effects';

// Watchers & Actions
import { fetchAuthAction, watchFetchAuth } from './fetchAuth';
import { fetchRegistrationAction, watchFetchRegistration } from './fetchRegistration';


export const useAuthSaga = () => {
    const dispatch = useDispatch();

    return {
        fetchAuth: (userId: string) => {
            dispatch(fetchAuthAction(userId));
        },
        fetchRegistration: (username: string) => {
            dispatch(fetchRegistrationAction(username));
        },
    };
};

export function* watchAuth(): SagaIterator {
    yield all([ call(watchFetchAuth), call(watchFetchRegistration) ]);
}
