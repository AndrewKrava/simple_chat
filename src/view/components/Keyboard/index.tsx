// Core
import React, { FC, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Tools
import { keyboardUtil, CallbackType } from '../../../tools/utils/keyboardUtil';

// Helper
import { keysData } from './keysData';

// Constants
import { CHANGE_LANG_KEY, SHIFT_KEY_CODE, SPACE_KEY_CODE } from '../../../init/constants';

// Styles
import * as S from './styles';

// Types
type PropsType = {
    htmlRef: React.MutableRefObject<HTMLDivElement | null>
}

export const Keyboard: FC<PropsType> = (props) => {
    const [ coloredButtnos, setColoredButtons ] = useState<Set<string>>(new Set());
    const [ isEnLang, setIsEnLang ] = useState(true);
    const [ isShiftPress, setIsShiftPress ] = useState(false);

    const colorButtonsHandler: CallbackType = (event) => {
        setColoredButtons((prev) => {
            if (event.detail?.eventName === 'keydown' && event.detail.keyCode !== '0') {
                return new Set(prev.add(event.detail?.keyCode));
            } else if (event.detail?.eventName === 'keyup' && event.detail.keyCode !== '0') {
                prev.delete(event.detail?.keyCode);

                return new Set(prev);
            }

            return prev;
        });
    };

    useEffect(() => {
        keyboardUtil().subscribe('inputevent', props.htmlRef, colorButtonsHandler);

        return () => keyboardUtil().removeSubscribe('inputevent', props.htmlRef, colorButtonsHandler);
    }, []);


    const dispatchEvent = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const eventData = {
            key:     isShiftPress ? event.currentTarget.textContent?.toUpperCase() || '' : event.currentTarget.textContent || '',
            keyCode: event.currentTarget.dataset.keycode || '',
        };
        if (eventData.keyCode === CHANGE_LANG_KEY) {
            setIsEnLang((prev) => !prev);

            return;
        }
        if (eventData.keyCode === SHIFT_KEY_CODE) {
            setIsShiftPress((prev) => !prev);
            setColoredButtons((prev)=>{
                if (!isShiftPress) {
                    return new Set(prev.add(eventData.keyCode));
                }
                prev.delete(eventData.keyCode);

                return prev;
            });

            return;
        }
        if (eventData.keyCode === SPACE_KEY_CODE) {
            eventData.key = ' ';
        }

        keyboardUtil().dispatch('keyboardevent', props.htmlRef, eventData);
    };

    const getButtonStyle = (keyCode: string | null) => {
        return keyCode && coloredButtnos.has(keyCode) ? 'button-key hover' : 'button-key';
    };


    return (
        <S.Container>
            <div className = 'first-row'>
                { keysData.firstLine.map((key) => {
                    return (
                        <div
                            className = { getButtonStyle(key.keyCode) }
                            data-keycode = { key.keyCode }
                            key = { uuidv4() }
                            role = 'button'
                            onClick = { (event) => dispatchEvent(event) }>{key.keyEnValue}
                        </div>
                    );
                }) }
            </div>
            <S.SecondRow isEnLang = { isEnLang }>
                {keysData.secondLine.map((key) => {
                    if (isEnLang && key.keyEnValue === null) {
                        return void 0;
                    }

                    return (
                        <div
                            className = { getButtonStyle(key.keyCode) }
                            data-keycode = { key.keyCode }
                            key = { uuidv4() }
                            role = 'button'
                            onClick = { (event) => dispatchEvent(event) }>{isEnLang ? key.keyEnValue : key.keyRuValue}
                        </div>
                    );
                })}
            </S.SecondRow>
            <S.ThirdRow isEnLang = { isEnLang }>
                {keysData.thirdLine.map((key) => {
                    if (isEnLang && key.keyEnValue === null) {
                        return void 0;
                    }

                    return (
                        <div
                            className = { getButtonStyle(key.keyCode) }
                            data-keycode = { key.keyCode }
                            key = { uuidv4() }
                            role = 'button'
                            onClick = { (event) => dispatchEvent(event) }>{isEnLang ? key.keyEnValue : key.keyRuValue}
                        </div>
                    );
                })}
            </S.ThirdRow>
            <S.FourthRow isEnLang = { isEnLang }>
                {keysData.forthLine.map((key) => {
                    if (isEnLang && key.keyEnValue === null) {
                        return void 0;
                    }

                    return (
                        <div
                            className = { getButtonStyle(key.keyCode) }
                            data-keycode = { key.keyCode }
                            key = { uuidv4() }
                            role = 'button'
                            onClick = { (event) => dispatchEvent(event) }>{isEnLang ? key.keyEnValue : key.keyRuValue}
                        </div>
                    );
                })}
            </S.FourthRow>
            <div className = 'fifth-row'>
                {keysData.fifthLine.map((key) => {
                    return (
                        <div
                            className = { getButtonStyle(key.keyCode) }
                            data-keycode = { key.keyCode }
                            key = { uuidv4() }
                            role = 'button'
                            onClick = { (event) => dispatchEvent(event) }>{isEnLang ? key.keyEnValue : key.keyRuValue}
                        </div>
                    );
                })}
            </div>
        </S.Container>
    );
};

