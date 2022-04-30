// Core
// import { useEffect } from 'react';

// Tools
import { useSelector } from '../../tools/hooks';

// Saga
import { useAuthSaga } from './saga';

export const useAuth = () => {
    const auth = useSelector((state) => state.auth);
    const { refreshAuth, postRegistration } = useAuthSaga();

    return {
        auth,
        refreshAuth,
        postRegistration,
    };
};
