// Core
import React, { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { Keyboard } from './Keyboard';


//
const path1 = '../../assets/icons/keyboard.svg';
const path2 = '../../assets/icons/keyboard1.svg';

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

    // temp keyboard
    const [ show, setShow ] = useState(false);
    //

    const keyboardRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        keyboardRef.current?.addEventListener('myevent', (event) => {
            console.log('get me event ', event);
            // setMessage(event.);
        });
    }, []);


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
                // onKeyUp={}
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
            />
            {!show && <Keyboard refObj = { keyboardRef } />}
        </Container>
    );
};
