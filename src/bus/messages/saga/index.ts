// Core
import { useDispatch } from 'react-redux';
import { SagaIterator } from '@redux-saga/core';
import { all, call } from 'redux-saga/effects';

// Watchers & Actions
import { fetchMessagesAction, watchFetchMessages } from './fetchMessages';

export const useMessagesSaga = () => {
    const dispatch = useDispatch();

    return {
        fetchMessages: () => void dispatch(fetchMessagesAction(1)),
    };
};

export function* watchMessages(): SagaIterator {
    yield all([ call(watchFetchMessages) ]);
}
