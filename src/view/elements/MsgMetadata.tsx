// Core
import React, { FC } from 'react';
import styled from 'styled-components';
import moment from 'moment';

// Styled
const Container = styled.div`
    margin-top: 0.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 0.8rem;
    color: #c6ff00;
        .date {
            display: flex;
            justify-content: flex-end;
        }
`;

// Types
type PropsType = {
    createdAt: string
    updatedAt: string
}

export const MsgMetadata: FC<PropsType> = (props) => {
    const isSame = moment(props.createdAt).isSame(props.updatedAt);

    return (
        <Container>
            <div>{!isSame && 'edited'}</div>
            <div className = 'date'>
                {moment(props.updatedAt).format('hh:mm:ss')}
            </div>
        </Container>
    );
};
