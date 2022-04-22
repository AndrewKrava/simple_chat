// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

// Slice
import { authActions, sliceName } from '../slice';

// Tools
import { makeRequest } from '../../../tools/utils';

// Constants
import { REGISTRATION_PATH } from '../../../init/constants';

// Action
export const fetchRegistrationAction = createAction<string>(`${sliceName}/FETCH_REGISTRATION_ASYNC`);

// Types
import { AuthState } from '../types';

// Saga
const fetchRegistration = (callAction: ReturnType<typeof fetchRegistrationAction>) => {
    console.log('callout registration action: ', callAction);

    return makeRequest<AuthState>({
        callAction,
        fetchOptions: {
            successStatusCode: 201,
            fetch:             () => fetch(REGISTRATION_PATH, {
                method:  'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: callAction.payload }),
            }),
        },
        success: function* (result) {
            yield put(authActions.setAuth(result));
        },
    });
};

// Watcher
export function* watchFetchRegistration(): SagaIterator {
    yield takeLatest(fetchRegistrationAction.type, fetchRegistration);
}
