// Core
import styled from 'styled-components';

// Constants
import { MOBILE_WIDTH, TABLET_WIDTH } from '../../../init/constants';

// width: min(70%, 800px);
// height: max(150px, 20vh);
//     margin: auto;
export const Container = styled.section`
    position: absolute;
    bottom: 5px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    opacity: 1;


    border: 0 solid #0b1301;
    border-radius: 5px;
    padding: 5px;
    background-color: #e58c18;
    display: grid;
    grid-template-rows: repeat(5, 1fr);

    height: 20vh;
    width: 70vw;

    @media ${MOBILE_WIDTH} {
        width: 95vw;
    }

    @media ${TABLET_WIDTH} {
        width: 95vw;
    }

    .first-row {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        flex-wrap: nowrap;
    }

    .fifth-row {
        display: grid;
        grid-template-columns: 2fr 2fr 9fr 2fr 2fr;
    }

    .button-key {
        display: flex;
        justify-content: center;
        border: 3px solid rgba(48, 61, 61, 1);
        border-radius: 5px;
        align-items: center;
        color: black;
        background-color: white;
        user-select: none;

        :hover {
            cursor: pointer;
        }
        
        :active {
            box-shadow:         inset 0 0 10px #000000;
            background-color: rgba(0, 0, 0, 0);
        }
    }

    .hover {
        background-color: #303f9f;
        color: #ffff00;
    }
`;

export const SecondRow = styled.div`
    display: grid;
    grid-template-columns: ${(props: {isEnLang: boolean}) => props.isEnLang ? 'repeat(10, 1fr)' : 'repeat(11, 1fr)'};
`;

export const ThirdRow = styled.div`
    display: grid;
    grid-template-columns: ${(props: {isEnLang: boolean}) => props.isEnLang ? 'repeat(9, 1fr)' : 'repeat(11, 1fr)'};
`;

export const FourthRow = styled.div`
    display: grid;
    grid-template-columns: ${(props: {isEnLang: boolean}) => props.isEnLang ? 'repeat(8, 2fr) 3fr' : 'repeat(10, 2fr) 3fr'};
`;
