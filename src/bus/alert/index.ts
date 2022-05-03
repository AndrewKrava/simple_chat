// Core
// import { useEffect } from 'react';

// Tools
import { useSelector } from '../../tools/hooks';

// Saga
// import { useAlertSaga } from './saga';

export const useAlert = () => {
    // const { fetchAlert } = useAlertSaga();
    const alert = useSelector((state) => state.alert); // Add alert to ./src/init/redux/index.ts

    // useEffect(() => {
    //     fetchAlert();
    // }, []);

    return {
        alert,
    };
};
