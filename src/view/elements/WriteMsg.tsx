// Core
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';


// Styles
const Container = styled.form`
    padding: 20px;
    background-color: rgb(38, 35, 55);

    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;

    input {
        padding: 0.7rem 0.4rem;
        border: none;
        outline: none;
        border-radius: 1rem;
        font-size: 1.2rem;
        background-color: rgb(159,133,255);

        width: 70%;
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


        </Container>
    );
};
