// Core
import React, { FC, useState } from 'react';

// Bus
import { useAuth } from '../../../bus/auth';

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';


const RegistrationPage: FC = () => {
    // const [ disabledSubmit, setIsDisabledSubmit ] = useState(false);
    const [ username, setUsername ] = useState('');
    const { postRegistration } = useAuth();

    const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        postRegistration(username);
    };

    const disabled = () => username === '';

    return (
        <S.Container>
            <form onSubmit = { (event) => handlerSubmit(event) }>
                <input
                    type = 'text'
                    value = { username }
                    onChange = { (event) => setUsername(event.target.value) }
                />
                <button
                    // disabled = { username === '' }
                    disabled = { disabled() }
                    type = 'submit'>Loggin
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
