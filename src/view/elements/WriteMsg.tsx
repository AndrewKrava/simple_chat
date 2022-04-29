// Core
import React, { FC, useState } from 'react';
import styled from 'styled-components';


// TODO keyboard-ico svg for keyboard button, use in phase3
// import pic1 from '../../../static/images/keyboard.svg';
// import pic2 from '../../../static/images/keyboard1.svg';


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
`;

type PropsType = {
    postMessage: (text: string) => void
}

export const WriteMsg: FC<PropsType> = (props) => {
    const [ message, setMessage ] = useState('');

    const messageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const sendMessage = () => {
        props.postMessage(message);
    };

    const disableSubmit = () => message === '';

    return (
        <Container>
            <input
                type = 'text'
                value = { message }
                onChange = { (event) => messageHandler(event) }
            />

            <button
                className = 'submit-btn'
                disabled = { disableSubmit() }
                type = 'submit'
                onClick = { sendMessage }>SEND
            </button>

        </Container>
    );
};
