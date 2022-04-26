// Core
import { type } from 'os';
import React, { FC, useState } from 'react';
import styled from 'styled-components';

// Types
import { PostMessageObj } from '../../bus/messages/saga/postMessage';

// keyboard-ico svg
// import pic1 from '../../../static/images/keyboard.svg';
// import pic2 from '../../../static/images/keyboard1.svg';


// Styles
const Container = styled.div`
    background-color: rgb(38, 35, 55);

`;

type PropsType = {
    postMessage: (obj: PostMessageObj) => void
    username: string
}

export const WriteMsg: FC<PropsType> = (props) => {
    const [ message, setMessage ] = useState('');

    const messageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const sendMessage = () => {
        props.postMessage();
    };

    return (
        <Container>
            <input
                type = 'text'
                value = { message }
                onChange = { (event) => messageHandler(event) }
            />
            <button
                type = 'submit'
                onClick = { sendMessage }>SENT
            </button>

        </Container>

    );
};
