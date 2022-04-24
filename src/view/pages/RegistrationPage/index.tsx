// Core
import React, { FC, useState } from 'react';

// Bus
import { useAuth } from '../../../bus/auth';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';

const RegistrationPage: FC = () => {
    const [ username, setUsername ] = useState('');
    const { postRegistration, auth: { error }} = useAuth();

    const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        postRegistration(username);
    };

    const disableSubmit = () => username === '';

    return (
        <S.Container>
            <div>{error && error}</div>
            <form onSubmit = { (event) => handlerSubmit(event) }>
                <input
                    placeholder = 'username...'
                    type = 'text'
                    value = { username }
                    onChange = { (event) => setUsername(event.target.value) }
                />
                <button
                    disabled = { disableSubmit() }
                    type = 'submit'>ENTER
                </button>
            </form>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <RegistrationPage />
    </ErrorBoundary>
);
