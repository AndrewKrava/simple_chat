// Core
// import { useEffect } from 'react';

// Tools
import { useSelector } from '../../tools/hooks';

// Saga
import { useAuthSaga } from './saga';

export const useAuth = () => {
    const { fetchAuth, fetchRegistration } = useAuthSaga();
    const auth = useSelector((state) => state.auth);

    // useEffect(() => {
    //     fetchAuth();
    // }, []);

    return {
        auth,
        fetchAuth,
        fetchRegistration,
    };
};
