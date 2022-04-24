// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

// Slice
import { togglerCreatorAction } from '../../client/togglers';
import { authActions, sliceName } from '../slice';

// Tools
import { makeRequest } from '../../../tools/utils';

// Constants
import { REGISTRATION_PATH } from '../../../init/constants';

// Action
export const postRegistrationAction = createAction<string>(`${sliceName}/POST_REGISTRATION_ASYNC`);

// Types
import { AuthState } from '../types';

// Saga
const postRegistration = (callAction: ReturnType<typeof postRegistrationAction>) => {
    return makeRequest<AuthState, Error>({
        togglerType:  'isLoading',
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
            yield put(togglerCreatorAction({
                type:  'isLoggedIn',
                value: true,
            }));
        },
        error: function* (error) {
            // TODO remove
            // console.log('!!!!!!!!!get error: ', error);

            yield put(authActions.errorAuth(error));
        },
    });
};

// Watcher
export function* watchPostRegistration(): SagaIterator {
    yield takeLatest(postRegistrationAction.type, postRegistration);
}
