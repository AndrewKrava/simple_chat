// Core
import React, { FC, useEffect } from 'react';
import styled from 'styled-components';

// Buss
import { useAuth } from '../../bus/auth';

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

    .button-confirm {
        margin-top: 1rem;
        padding: 0.3rem 3rem;
        border: none;
        border-radius: 0.4rem;
        background-color: rgba(238, 238, 238, 0.2);
        :hover {
            cursor: pointer;
        }
    }
`;

// Types
type PropsType = {
    message: string
}

export const AlertError: FC<PropsType> = (props) => {
    const { removeError } = useAuth();

    useEffect(() => {
        const intervalId = setTimeout(removeError, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <Container>
            <div className = 'alert-box'>
                <p className = 'alert-title'>ERROR</p>
                <p className = 'alert-message'>{props.message}</p>
                <div className = 'buttons-box'>
                    <button
                        className = 'button-confirm'
                        onClick = { () => removeError() }>Ok
                    </button>
                </div>
            </div>
        </Container>
    );
};
