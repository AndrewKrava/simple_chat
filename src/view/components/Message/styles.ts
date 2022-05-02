// Core
import styled from 'styled-components';

export const Container = styled.div`
    .box {
        display: flex;
        width: 100%;
    }

    .left-position {
        justify-content: flex-start;
    }

    .right-position {
        justify-content: flex-end;
    }

    .content {
        margin: 10px;
        padding: 10px;
        width: 60%;
        font-size: 1.2rem;
        overflow-wrap: anywhere;
    }

    .my-message {
        background-color: rgb(159, 133, 255);
        border-radius: 15px 15px 0 15px;
    }

    .message {
        background-color: rgb(56, 48, 83);
        border-radius: 15px 15px 15px 0;
    }

    .author {
        margin-bottom: 0.5rem;
        color: #ff8a80;
        font-size: 0.9rem;
    }

    .message-info {
        margin-top: 0.5rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        font-size: 0.8rem;
        color: #c6ff00;
        .date {
            display: flex;
            justify-content: flex-end;
        }
    }

    .message-tools {
        display: flex;
        justify-content: flex-end;
        padding-bottom: 0.3rem;

        svg {
            color: black;
            padding: 0.3rem;
            :hover {
                cursor: pointer;
            }
        }
    }

    .editing {
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
    }
`;
