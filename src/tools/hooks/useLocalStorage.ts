// Core
import { useState } from 'react';
import localStorage from 'store';

// Instruments
import { APP_NAME } from '../../init';

export const useLocalStorage = <_, TValue>(key: string, innitialValue: TValue)
: [TValue, (value: TValue) => void, () => void] => {
    const [ storedValue, setStoredValue ] = useState(() => {
        try {
            const value: TValue | undefined = localStorage.get(`${APP_NAME}:${key}`);

            return typeof value !== 'undefined' ? value : innitialValue;
        } catch (error) {
            console.log(`local storage error by key: ${APP_NAME}:${key}. Npm package store error.`);

            return innitialValue;
        }
    });

    const setValue = (value: TValue) => {
        try {
            localStorage.set(`${APP_NAME}:${key}`, value);
            setStoredValue(value);
        } catch (error) {
            console.log(`local storage error by key: ${APP_NAME}:${key}. Dont forget about KEY and VALUE arguments.`);
        }
    };

    const removeItem = () => {
        try {
            localStorage.remove(`${APP_NAME}:${key}`);
        } catch (error) {
            console.log(`error occurred while trying to remove key: ${APP_NAME}:${key}. With message: ${error}`);
        }
    };

    return [
        storedValue,
        setValue,
        removeItem,
    ];
};
