// Core
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { Keyboard } from './Keyboard';


// Styles
const Container = styled.form`
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
        background-color: rgb(159,133,255);

        width: 70%;

        :after {
            content: '';
            position: absolute;
            right: 20px;
            top: 0;
            bottom: 0;
            width: 20px;
            background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25' fill-rule='evenodd'%3E%3Cpath d='M16.036 18.455l2.404-2.405 5.586 5.587-2.404 2.404zM8.5 2C12.1 2 15 4.9 15 8.5S12.1 15 8.5 15 2 12.1 2 8.5 4.9 2 8.5 2zm0-2C3.8 0 0 3.8 0 8.5S3.8 17 8.5 17 17 13.2 17 8.5 13.2 0 8.5 0zM15 16a1 1 0 1 1 2 0 1 1 0 1 1-2 0'%3E%3C/path%3E%3C/svg%3E") center / contain no-repeat;

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

export const WriteMsg: FC<PropsType> = (props) => {
    // temp
    const [ show, setShow ] = useState(false);
    const [ message, setMessage ] = useState('');

    const messageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.postMessage(message);
    };

    const disableSubmit = () => message === '';

    return (
        <Container onSubmit = { (event) => sendMessage(event) }>
            <input
                type = 'text'
                value = { message }
                onChange = { (event) => messageHandler(event) }
            />

            <button
                className = 'submit-btn'
                disabled = { disableSubmit() }
                type = 'submit'>SEND
            </button>

            <FontAwesomeIcon

                icon = { faKeyboard }
                size = '2x'
            />

            {!show && <Keyboard />}


        </Container>
    );
};
