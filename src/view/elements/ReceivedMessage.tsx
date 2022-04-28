// Core
import React, { FC } from 'react';
import styled from 'styled-components';


// justify - content: ${ (props: Pick<MessageInfo, 'isMyMessage'>) => props.isMyMessage ? 'flex-end' : 'flex-start' };


const Container = styled.div`
    display: flex;

    .author {
        margin-bottom: 0.5rem;
        color: #ff8a80;
        font-size: 0.9rem;
    }

    .message {
        margin: 10px;
        padding: 10px;

        width: 60%;

        color: white;
        font-size: 1.2rem;
        overflow-wrap: anywhere;

        background-color: rgb(56, 48, 83);
    }

    .my-message {
        color: black;
        background-color: rgb(159, 133, 255);
    }

    .message-info {
        margin-top: 0.5rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        font-size: 0.8rem;
            .date {
                display: flex;
                justify-content: flex-end;
            }
    }

    .message-tools {
        display: flex;
        justify-content: flex-end;

        svg {
            padding: 0.3rem;
            :hover {
                cursor: pointer;
            }
        }
    }

`;

export const ReceivedMessage: FC = () => {
    return (
        <Container>
            recieved msg
        </Container>
    );
};
