// Core
import styled from 'styled-components';

// Constants
import { MOBILE_WIDTH, TABLET_WIDTH, LANDSCAPE_HEIGHT } from '../../../init/constants';

export const Container = styled.section`
    height: 100vh;
    background-color: black;
    color: white;

    .header {
        position: relative;
        display: flex;
        justify-content: center;
        margin: 2% 0;
        width: 100%;
    }

    .header-title {
        font-size: 1.5rem;
    }

    .control-buttons {
        position: absolute;
        right: 5%;

        svg {
            margin-left: 25px;
            cursor: pointer;
        }
    }

    .chat-main {
        display: flex;
        flex-direction: column-reverse;
        height: 100%;

        background-color: rgb(38, 35, 55);
        overflow-y: auto;
    }

    /* used in children component */
    .submit-btn {
        border: none;
        border-radius: 5px;
        color: white;
        background-color: #6200ea;

        :hover {
            cursor: pointer;
        }

        :disabled {
            color: rgb(87, 85, 93);
            background-color: rgb(117, 115, 126);

            :hover {
                cursor: not-allowed;
            }
        }
    }
`;

export const ChatBox = styled.div`
    display: grid;
    grid-template-rows: 1fr 8fr 1fr;
    height: 75%;
    width: 60%;
    margin: auto;

    @media ${MOBILE_WIDTH} {
        width: 100vw;
        height: ${(props: { isKeyboardShown: boolean }) => props.isKeyboardShown ? '75%' : '100%'};
    }

    @media ${TABLET_WIDTH} {
        width: 100vw;
        height ${(props: { isKeyboardShown: boolean }) => props.isKeyboardShown ? '75%' : '100%'};
    }

    @media ${LANDSCAPE_HEIGHT} {
        height:  ${(props: { isKeyboardShown: boolean }) => props.isKeyboardShown ? '65%' : '100%'};
    }
`;
