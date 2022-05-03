// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Buss
import { useMessages } from '../../bus/messages';

// Styles
const Container = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);

    .alert-box {
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 30%;
        left: 0;
        right: 0;
        padding: 2rem;
        width: 30%; 
        min-height: 10%;
        background-color: rgb(54, 57, 66);
        color: white;
        border-radius: 10px;
    }

    .alert-title {
        font-size: 1.2rem;
    }

    .alert-message {
        margin-top: 1rem;
    }

    .buttons-box {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    button {
        margin-top: 1rem;
        padding: 0.3rem 3rem;
        border: none;
        border-radius: 0.4rem;
        :hover {
            cursor: pointer;
        }
    }

    .delete-btn {
        background-color: red;
    }
`;

// Types
type PropsType = {
    messageId: string
    declineDelete: Function
}

export const Alert: FC<PropsType> = (props) => {
    const { deleteMessage } = useMessages();

    return (
        <Container>
            <div className = 'alert-box'>
                <p className = 'alert-title'>DELETE MESSAGE</p>
                <p className = 'alert-message'>Are you sure you want do delete this message?</p>
                <div className = 'buttons-box'>
                    <button
                        className = 'delete-btn'
                        onClick = { () => deleteMessage(props.messageId) }>Delete
                    </button>
                    <button
                        onClick = { () => props.declineDelete() }>Cancel
                    </button>
                </div>
            </div>
        </Container>
    );
};
