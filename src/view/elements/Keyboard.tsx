// Core
import React, { FC, useEffect, useRef, useState } from 'react';
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

    display: grid;
    grid-template-rows: repeat(5, 1fr);
    .first-row {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        flex-wrap: nowrap;
    }
    .forth-row {
        display: grid;
        grid-template-columns: repeat(8, 2fr) 3fr;
        flex-wrap: nowrap;
    }

    .button-key {
        display: flex;
        justify-content: center;
        border: 3px solid rgba(48, 61, 61, 1);
        border-radius: 5px;
        align-items: center;
        color: black;
        background-color: white;
    }

    .button-colored {
        background-color: #303f9f;
        color: #ffff00;
    }
`;

//////////////
import { keyboardUtil, CallbackType } from '../../tools/utils/keyboardUtil';
import { keysData } from '../../tools/utils/keysData';

type PropsType = {
    htmlRef: React.MutableRefObject<HTMLDivElement | null>
}

export const Keyboard: FC<PropsType> = (props) => {
    const [ coloredButtnos, setColoredButtons ] = useState<Array<string>>([]);

    const colorButtonsHandler: CallbackType = (event) => {
        setColoredButtons((prev) => prev.concat(event.keyCode));
    };

    useEffect(() => {
        keyboardUtil().subscribe('inputevent', props.htmlRef, colorButtonsHandler);

        return () => keyboardUtil().removeSubscribe('inputevent', props.htmlRef, colorButtonsHandler);
    }, []);


    const dispatchEvent = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const eventData = {
            key:     event.currentTarget.textContent || '',
            keycode: event.currentTarget.dataset.keycode || '',
        };
        keyboardUtil().dispatch('keyboardevent', props.htmlRef, eventData);
    };


    return (
        <Container>
            <div className = 'first-row'>
                { keysData.firstLine.map((key) => {
                    return (
                        <div
                            className = 'button-key'
                            data-keycode = { key.keyCode }
                            key = { key.keyCode }
                            role = 'button'
                            onClick = { (event) => dispatchEvent(event) }>{key.keyEnValue}
                        </div>
                    );
                }) }
            </div>
            <div className = 'forth-row'>
                {keysData.forthLine.map((key) => {
                    return (
                        <div
                            className = 'button-key'
                            data-keycode = { key.keyCode }
                            key = { key.keyCode }
                            role = 'button'
                            onClick = { (event) => dispatchEvent(event) }>{key.keyEnValue}
                        </div>
                    );
                })}
            </div>
        </Container>
    );
};
