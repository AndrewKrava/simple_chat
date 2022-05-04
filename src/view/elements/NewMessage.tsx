// Core
import React, { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { Keyboard } from './Keyboard';


// test

import { keyboardUtil, VirtualKeyboardEvent } from '../../tools/utils/keyboardUtil';
const path1 = '../../assets/icons/keyboard.svg';
const path2 = '../../assets/icons/keyboard1.svg';


///

// Styles
const Container = styled.div`
    padding: 20px;
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
        :hover {
            
        }
    }
    

    button {
        margin-left: 5px;
    }

    svg {
        margin-top: auto;
        margin-bottom: auto;
        margin-left: 5px;
    }
`;

type PropsType = {
    postMessage: (text: string) => void
}


export const NewMessage: FC<PropsType> = (props) => {
    const [ message, setMessage ] = useState('');

    // temp for test keyboard

    const [ isShow, setIsShow ] = useState(true);


    const keyboardRef = useRef<HTMLDivElement | null>(null);
    const setMessageHandler = (event: VirtualKeyboardEvent) => {
        setMessage((prev) => prev + event.detail?.key);
    };
    useEffect(() => {
        keyboardUtil().subscribe('keyboardevent', keyboardRef, setMessageHandler);

        return () => keyboardUtil().removeSubscribe('keyboardevent', keyboardRef, setMessageHandler);
    }, []);

    const dispatchEvent = (event: React.KeyboardEvent<HTMLInputElement>) => {
        console.log('ev ', event);

        // console.log('ev ', event.currentTarget.getAttribute('key'));

        const eventData = {
            key:       event.key,
            keycode:   String(event.keyCode),
            eventName: event.type,
        };
        keyboardUtil().dispatch('inputevent', keyboardRef, eventData);
    };

    ///////////


    const messageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const sendMessage = () => {
        props.postMessage(message);
        setMessage('');
    };

    return (
        <Container
            ref = { keyboardRef }>
            <input
                type = 'text'
                value = { message }
                onChange = { (event) => messageHandler(event) }
                onKeyDown = { (event) => dispatchEvent(event) }
                onKeyPress = { (event) => dispatchEvent(event) }
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
                onClick = { () => setIsShow((prev) => !prev) }
            />
            {isShow && <Keyboard htmlRef = { keyboardRef } />}
        </Container>
    );
};
