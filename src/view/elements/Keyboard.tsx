// Core
import React, { FC } from 'react';
import styled from 'styled-components';


// Styles
const Container = styled.div`

`;

type PropsType = {

}

export const Keyboard: FC<PropsType> = (props) => {
    const handler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        console.log('event: ', event);
    };

    const eventPress = () => {
        // document.dispatchEvent
    };

    return (
        <Container>
            <input
                type = 'text'
                // onChange = { event =>  }
                // onKeyDown = { (event) => handler(event) }
                // onKeyPress = { (event) => handler(event) }
                // onKeyUp = { (event) => handler(event) }
            />
            <div>
                <button onClick = { () => eventPress() }>press</button>
            </div>
        </Container>
    );
};
