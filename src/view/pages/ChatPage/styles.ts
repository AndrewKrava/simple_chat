// Core
import styled from 'styled-components';

// Constants
import { MOBILE_WIDTH, TABLET_WIDTH } from '../../../init/constants';

export const Container = styled.section`
    height: 100vh;
    background-color: black;
    color: white;

    .container {
        display: grid;
        grid-template-rows: 1fr 8fr 1fr;
        height: 75%;
        width: 60%;

        @media ${MOBILE_WIDTH} {
            width: 100vw;
        }

        @media ${TABLET_WIDTH} {
            width: 100vw;
        }

        margin: auto;
    }

    .header {
        position: relative;
        display: flex;
        justify-content: center;
        margin: 3% 0;
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


//chat
// @media ${MOBILE_WIDTH} {
//     height: calc(100vh - 162px);
// }

// @media ${TABLET_WIDTH} {
//     height: calc(100vh - 162px);
// }
