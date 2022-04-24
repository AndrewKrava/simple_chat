// Core
import styled from 'styled-components';
import backgroundPic from '../../../../static/images/cave.jpg';

export const Container = styled.section`

    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url(${backgroundPic});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;


    form {
        width: 200px;
        height: 80px;
        margin: auto;
        padding: 10px;

        display: flex;
        flex-flow: column nowrap;    
        justify-content: space-between;
        
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 9px;
    }

    input {
        padding: 5px;
        font-size: inherit;
        color: white;
        
        border-color: black;
        border-radius: 5px;

        background-color: transparent;

        :focus {
            outline: none !important;
            border: thin solid red;
            box-shadow: 0 0 20px red;
        }
    }


    button {
        padding: 5px;
        font: inherit;
        
        color: white;

        background-color: transparent;

        border-width: medium;
        border-color: black;
        border-radius: 5px;

        box-shadow: 4px 4px 2px 1px rgb(0, 0, 0);

        :hover {
            cursor: pointer;
        }
    }

    button:disabled {
        color: grey;
        background-color: transparent;
        border-color: black;
        box-shadow: none;

        :hover {
            cursor: not-allowed;
        }
    }
`;
