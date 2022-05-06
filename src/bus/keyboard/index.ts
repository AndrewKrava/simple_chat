// Tools
import { useDispatch } from 'react-redux';
import { useSelector } from '../../tools/hooks';

// Actions
import { keyboardActions } from './slice';

export const useKeyboard = () => {
    const dispatch = useDispatch();
    const isKeyboardShown = useSelector((state) => state.keyboard);

    const switchKeyboardView = (isShown: boolean) => {
        dispatch(keyboardActions.switchKeyboard(isShown));
    };

    return {
        isKeyboardShown,
        switchKeyboardView,
    };
};
