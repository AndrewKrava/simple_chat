// Core
import styled from 'styled-components';

const mobile = '(max-width: 425px)';

const tablet = '(min-width: 426px) and (max-width: 768px)';

export const Container = styled.section`

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
    
    .header-label {
    }

    .chat-main {
        display: flex;
        flex-direction: column-reverse;

        height: 50vh;   //TODO refactor

        background-color: rgb(38, 35, 55);
        overflow: auto;
    }

    .logout-btn {
        position: relative;
        left: 35%;
    }


`;
