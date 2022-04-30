// Core
import { all } from 'redux-saga/effects';

// Tools
import { watchAuth } from '../../bus/auth/saga';
import { watchMessages } from '../../bus/messages/saga';

export function* rootSaga() {
    yield all([ watchAuth(), watchMessages() ]);
}
