// Core
import styled from 'styled-components';

const mobile = '(max-width: 425px)';

const tablet = '(min-width: 426px) and (max-width: 768px)';

export const Container = styled.section`

    padding-top: 20px;
    height: 100vh;
    background-color: black;
    color: white;

    .container {
        width: 60vw;

        @media ${mobile} {
            width: 100vw;
        }

        @media ${tablet} {
            width: 80vw;
        }

        margin: auto;

    }

    .header {
        display: flex;
        justify-content: center;
        padding: 10px;;
    }

    .logout-btn {
        position: relative;
        left: 35%;
        padding: 3px 5px;

        border: none;
        border-radius: 5px;

        color: white;
        background-color: red;
    }

    .chat-main {
        display: flex;
        flex-direction: column-reverse;

        height: 50vh;   //TODO refactor

        background-color: rgb(38, 35, 55);
        overflow: auto;
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

    .message {
        margin: 10px;
        padding: 10px;

        width: 60%;

        font-size: 1.2rem;
        overflow-wrap: anywhere;
    }
`;
