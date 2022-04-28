// Core
import { useEffect } from 'react';

// Tools
import { useSelector } from '../../tools/hooks';

// Saga
import { useMessagesSaga } from './saga';

export const useMessages = () => {
    const { fetchMessages, postMessage, deleteMessage, putMessage } = useMessagesSaga();
    const messages = useSelector((state) => state.messages);

    useEffect(() => {
        fetchMessages();
    }, []);

    return {
        messages,
        postMessage,
        deleteMessage,
        putMessage,
    };
};
