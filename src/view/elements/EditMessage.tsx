// Core
import React, { FC, useState } from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.form`
    display: grid;
    grid-template-columns: 3fr 1fr;
    input {
        padding-bottom: 0.3rem;
        background-color: inherit;
        border: none;
        border-bottom: solid thin black;

        :focus {
            outline: none;
            animation: color 1s infinite
        }
    }
    @keyframes color {
        50% { border-bottom-color: red}
    }

    .button-section {
        display: flex;
        justify-content: flex-end;
    }
`;

// Types
type PropsType = {
    text: string
    update: (text: string) => void
    finish: Function
}

export const EditMessage: FC<PropsType> = (props) => {
    const [ message, setMessage ] = useState(props.text);

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.update(message);
        props.finish();
    };

    const disableSubmit = () => message === props.text;

    return (
        <Container onSubmit = { (event) => submit(event) }>
            <input
                type = 'text'
                value = { message }
                onChange = { (event) => inputHandler(event) }
            />
            <div className = 'button-section'>
                <button
                    className = 'submit-btn'
                    disabled = { disableSubmit() }
                    type = 'submit'>Update
                </button>
            </div>


        </Container>
    );
};
