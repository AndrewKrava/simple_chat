// Core
import { all } from 'redux-saga/effects';

// Tools
import { watchAuth } from '../../bus/auth/saga';

export function* rootSaga() {
    yield all([ watchAuth() ]);
}
