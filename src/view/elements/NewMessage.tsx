// Core
import React, { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';

// Components
import { Keyboard } from '../components';

// Bus
import { useKeyboard } from '../../bus/keyboard';

// Utils
import { keyboardUtil, VirtualKeyboardEvent } from '../../tools/utils/keyboardUtil';

//  Constants
import { ENTER_KEY_CODE, BACKSPACE_KEY_CODE } from '../../init/constants';

// Styles
const Container = styled.div`
    padding: 1% 20px;
    background-color: rgb(38, 35, 55);
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;

    input {
        position: relative;
        padding: 0.7rem 0.4rem;
        border: none;
        outline: none;
        border-radius: 1rem;
        font-size: 1.2rem;
        width: 70%;
        background-color: rgb(159,133,255);
    }
    
    button {
        margin-left: 5px;
        user-select: none;
    }

    svg {
        margin-top: auto;
        margin-bottom: auto;
        margin-left: 5px;
        :hover {
            cursor: pointer;
        }
    }
`;

type PropsType = {
    postMessage: (text: string) => void
}

export const NewMessage: FC<PropsType> = (props) => {
    const [ message, setMessage ] = useState('');
    const { isKeyboardShown, switchKeyboard } = useKeyboard();
    const messageState = useRef(message);
    const keyboardRef = useRef<HTMLDivElement | null>(null);

    const sendMessage = () => {
        const messageToSend = messageState.current.trim();
        if (messageToSend !== '') {
            props.postMessage(messageState.current);
            setMessage('');
        }
    };

    const keyboardListener = (event: VirtualKeyboardEvent) => {
        if (event.detail?.keyCode === ENTER_KEY_CODE) {
            sendMessage();

            return;
        }

        setMessage((prev) => {
            let resultMessage = '';
            if (event.detail?.keyCode === BACKSPACE_KEY_CODE) {
                resultMessage = prev.slice(0, -1);
            } else {
                resultMessage = `${prev}${event.detail?.key}`;
            }
            messageState.current = resultMessage;

            return resultMessage;
        });
    };

    useEffect(() => {
        keyboardUtil().subscribe('keyboardevent', keyboardRef, keyboardListener);

        return () => keyboardUtil().removeSubscribe('keyboardevent', keyboardRef, keyboardListener);
    }, []);

    const dispatchEvent = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.type !== 'keypress') {
            const eventData = {
                key:       event.key,
                keyCode:   String(event.keyCode),
                eventName: event.type,
            };
            keyboardUtil().dispatch('inputevent', keyboardRef, eventData);
            if (String(event.keyCode) === ENTER_KEY_CODE) {
                sendMessage();
            }
        }
    };

    const messageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        messageState.current = event.target.value;
        setMessage(event.target.value);
    };

    return (
        <Container
            ref = { keyboardRef }>
            <input
                type = 'text'
                value = { message }
                onChange = { (event) => messageHandler(event) }
                onKeyDown = { (event) => dispatchEvent(event) }
                onKeyUp = { (event) => dispatchEvent(event) }
            />
            <button
                className = 'submit-btn'
                disabled = { message === '' }
                type = 'submit'
                onClick = { () => sendMessage() }>SEND
            </button>
            <FontAwesomeIcon
                icon = { faKeyboard }
                size = '2x'
                onClick = { () => switchKeyboard(!isKeyboardShown) }
            />
            {isKeyboardShown && <Keyboard htmlRef = { keyboardRef } />}
        </Container>
    );
};
