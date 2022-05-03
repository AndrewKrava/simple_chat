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
            width: 100vw;
        }

        margin: auto;
    }

    .header {
        position: relative;
        display: flex;
        justify-content: center;
        margin: 20px 0;
        width: 100%;
    }
    
    .header-title {
        font-size: 1.5rem;
    }

    .control-buttons {
        position: absolute;
        right: 20px;

        svg {
            margin-left: 25px;
            cursor: pointer;
        }
    }

    .chat-main {
        display: flex;
        flex-direction: column-reverse;
        height: 50vh;

        @media ${mobile} {
            height: calc(100vh - 162px);
        }

        @media ${tablet} {
            height: calc(100vh - 162px);
        }

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
`;
