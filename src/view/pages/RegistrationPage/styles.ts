// Core
import styled from 'styled-components';

export const Container = styled.section`
background-color: blue;
height: 100vh;

    form {
        width: 200px;
        height: 50px;
        margin: auto;
        // padding-top: 50px;
        flex-flow: column nowrap;

        background-color: black;
    }

    input {

    }

    button {
        // margin-left: 130px;
        // margin-top: 40px;
        color: white;
        background-color: #0d47a1;
        border-radius: 5px;
    }

    button:disabled {
        background: #ccc;
    }
`;
