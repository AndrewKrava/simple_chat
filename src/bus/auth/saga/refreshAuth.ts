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
import { REFRESH_AUTH_PATH } from '../../../init/constants';

// Action
export const refreshAuthAction = createAction<string>(`${sliceName}/REFRESH_AUTH_ASYNC`);

// Types
import { AuthState } from '../types';

// Saga
const refreshAuth = (callAction: ReturnType<typeof refreshAuthAction>) => {
    return makeRequest<AuthState, Error>({
        togglerType:  'isLoading',
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
            yield put(togglerCreatorAction({
                type:  'isLoggedIn',
                value: true,
            }));
        },
        error: function* (error) {
            yield put(authActions.errorAuth(error));
        },
        finallyEnd: function* () {
            yield put(togglerCreatorAction({
                type:  'isInitialized',
                value: true,
            }));
        },
    });
};

// Watcher
export function* watchRefreshAuth(): SagaIterator {
    yield takeLatest(refreshAuthAction.type, refreshAuth);
}
