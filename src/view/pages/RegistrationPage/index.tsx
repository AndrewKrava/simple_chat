// Core
import React, { FC, useState } from 'react';

// Bus
import { useAuth } from '../../../bus/auth';
import { useTogglersRedux } from '../../../bus/client/togglers';

// Components
import { ErrorBoundary } from '../../components';
import { Spinner } from '../../elements';

// Styles
import * as S from './styles';

// TODO error handling for callout
const RegistrationPage: FC = () => {
    const [ username, setUsername ] = useState('');
    const { postRegistration } = useAuth();
    const { togglersRedux: { isLoading }} = useTogglersRedux();

    const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        postRegistration(username);
    };

    const disableSubmit = () => username === '';

    return (
        <S.Container>
            {
                isLoading
                    ? <Spinner />
                    : (
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
                    )
            }

        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <RegistrationPage />
    </ErrorBoundary>
);
