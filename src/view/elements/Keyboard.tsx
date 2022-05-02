// Core
import React, { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';


// Styles
const Container = styled.div`

`;

type PropsType = {

}

export const Keyboard: FC<PropsType> = (props) => {
    const el = useRef<HTMLInputElement | null>(null);
    const listener = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // el.current?.addEventListener('keypress', () => {
        //     console.log('event key press');
        // });
        window.addEventListener('keypress', () => {
            console.log('event key press');
        });
    }, []);


    const handler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        console.log('event: ', event);
    };

    const eventPress = () => {
        // document.dispatchEvent
        // console.log('ref ', el);
        el.current?.dispatchEvent(new KeyboardEvent('keypress', { key: 'a', which: 65 }));
    };

    console.log('el ', el);
    console.log('el current ', el.current);


    return (
        <Container>
            <input
                ref = { el }
                type = 'text'
                // onChange = { event =>  }
                // onKeyDown = { (event) => handler(event) }
                // onKeyPress = { (event) => handler(event) }
                // onKeyUp = { (event) => handler(event) }
            />

            <div ref = { listener }>listener
                <div>
                    <button onClick = { () => eventPress() }>press</button>
                </div>

            </div>
        </Container>
    );
};
