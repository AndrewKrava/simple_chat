// Core
import { useCallback, useEffect } from 'react';

// Tools
import { useLocalStorage, useSelector } from '../../tools/hooks';
import { useTogglersRedux } from '../client/togglers';

// Constants
import { USER_ID } from '../../init';

// Saga
import { useAuthSaga } from './saga';

export const useAuth = (isInit = false) => {
    const auth = useSelector((state) => state.auth);
    const { setTogglerAction, togglersRedux: { isInitialized }} = useTogglersRedux();
    const [ userId, setUserId, removeLocalStorageItem ] = useLocalStorage(USER_ID, '');
    const { refreshAuth, postRegistration } = useAuthSaga();

    const logout = () => {
        removeLocalStorageItem();
        setTogglerAction({
            type:  'isLoggedIn',
            value: false,
        });
    };

    //  BAD CODE
    const loginUser = useCallback(() => {
        if (userId && isInit) {
            refreshAuth(userId);
        } else if (!isInitialized) {
            setTogglerAction({
                type:  'isInitialized',
                value: true,
            });
        }
    }, []);

    useEffect(() => {
        loginUser();
    }, []);

    // TODO Refactor
    // useEffect(() => {
    //     console.log('set local storage');
    //     auth._id && setUserId(auth._id);
    // }, [  ]);

    return {
        auth,
        refreshAuth,
        postRegistration,
        logout,
        isInitialized,
    };
};
