// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Tools
import { useLocalStorage, useSelector } from '../../tools/hooks';
import { useTogglersRedux } from '../client/togglers';

// Constants
import { USER_ID } from '../../init';

// Saga
import { useAuthSaga } from './saga';

// Actions
import { authActions } from './slice';

export const useAuth = (isInit = false) => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const { setTogglerAction, togglersRedux: { isInitialized }} = useTogglersRedux();
    const [ userId, setUserId, removeLocalStorageItem ] = useLocalStorage(USER_ID, '');
    const { refreshAuth, postRegistration } = useAuthSaga();

    const removeError = () => {
        dispatch(authActions.removeError());
    };

    const userIdToLocalStorage = (userId: string) => {
        setUserId(userId);
    };

    const logout = () => {
        removeLocalStorageItem();
        setTogglerAction({
            type:  'isLoggedIn',
            value: false,
        });
    };

    useEffect(() => {
        if (userId && isInit) {
            refreshAuth(userId);
        } else if (!isInitialized) {
            setTogglerAction({
                type:  'isInitialized',
                value: true,
            });
        }
    }, []);

    return {
        auth,
        refreshAuth,
        postRegistration,
        logout,
        isInitialized,
        removeError,
        userIdToLocalStorage,
    };
};
