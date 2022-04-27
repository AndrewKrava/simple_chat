// Core
import React, { FC, useState } from 'react';
import styled from 'styled-components';


// keyboard-ico svg
// import pic1 from '../../../static/images/keyboard.svg';
// import pic2 from '../../../static/images/keyboard1.svg';


// Styles
const Container = styled.div`
    background-color: rgb(38, 35, 55);

`;

type PropsType = {
    postMessage: (text: string) => void
}

export const WriteMsg: FC<PropsType> = (props) => {
    const [ message, setMessage ] = useState('');

    const messageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const sendMessage = () => {
        props.postMessage(message);
    };

    const disableSubmit = () => message === '';

    return (
        <Container>
            <input
                type = 'text'
                value = { message }
                onChange = { (event) => messageHandler(event) }
            />
            <button
                disabled = { disableSubmit() }
                type = 'submit'
                onClick = { sendMessage }>SEND
            </button>

        </Container>

    );
};
