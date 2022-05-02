// Core
import React, { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';


// Styles
const Container = styled.div`
    /* position: sticky; */
    position: absolute;
    bottom: 3vh;

    opacity: 1;

    margin: auto;

    width: min(70%, 800px);
    height: max(150px, 25vh); 
    border: 0 solid #0b1301;
    border-radius: 5px;
    padding: 5px;
    background-color: #e58c18;
`;

type PropsType = {

}

export const Keyboard: FC<PropsType> = (props) => {
    // useEffect(() => {

    // }, []);

    return (
        <Container>
            keyboard
        </Container>
    );
};
