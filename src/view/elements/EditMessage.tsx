// Core
import React, { FC, useState } from 'react';
import { finished } from 'stream';
import styled from 'styled-components';

// Styles
const Container = styled.div`
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

    button {
        width: fit-content;
        border-radius: 5px;
        color: white;
        background-color: #6200ea;
    }

    .button-section {
        display: flex;
        justify-content: flex-end;
    }
    button {
        :hover {
            cursor: pointer;
        }
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

    const submit = () => {
        props.update(message);
        props.finish();
    };

    return (
        <Container>
            <input
                type = 'text'
                value = { message }
                onChange = { (event) => inputHandler(event) }
            />
            <div className = 'button-section'>
                <button
                    type = 'submit'
                    onClick = { () => submit() }>Update
                </button>
            </div>


        </Container>
    );
};
