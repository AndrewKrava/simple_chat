// Core
// import { useEffect } from 'react';

// Tools
import { useSelector } from '../../tools/hooks';

// Saga
import { useAuthSaga } from './saga';

export const useAuth = () => {
    const { refreshAuth, postRegistration } = useAuthSaga();
    const auth = useSelector((state) => state.auth);

    // useEffect(() => {
    //     // fetchAuth();
    // }, []);

    return {
        auth,
        refreshAuth,
        postRegistration,
    };
};
