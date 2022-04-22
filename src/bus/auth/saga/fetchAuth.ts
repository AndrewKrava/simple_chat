// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

// Slice
import { authActions, sliceName } from '../slice';

// Tools
import { makeRequest } from '../../../tools/utils';

// Constants
import { REFRESH_AUTH_PATH } from '../../../init/constants';

// Action
export const fetchAuthAction = createAction<string>(`${sliceName}/FETCH_AUTH_ASYNC`);

// Types
import { AuthState } from '../types';

// Saga
const fetchAuth = (callAction: ReturnType<typeof fetchAuthAction>) => {
    // TODO remove
    console.log('callout refresh action: ', callAction);

    return makeRequest<AuthState, Error>({
        callAction,
        fetchOptions: {
            successStatusCode: 200,
            fetch:             () => fetch(REFRESH_AUTH_PATH + callAction.payload, {
                method:  'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
        },
        success: function* (result) {
            yield put(authActions.setAuth(result));
        },
        error: function* (error) {
            console.log('get error: ', error);

            yield put(authActions.setAuth({
                _id:      null,
                username: null,
                error:    error.message,
            }));
        },
    });
};

// Watcher
export function* watchFetchAuth(): SagaIterator {
    yield takeLatest(fetchAuthAction.type, fetchAuth);
}
