// Core
import React, { FC, useState } from 'react';

// Bus
import { useAuth } from '../../../bus/auth';
import { useTogglersRedux } from '../../../bus/client/togglers';

// Components
import { ErrorBoundary } from '../../components';
import { AlertError, Spinner } from '../../elements';

// Styles
import * as S from './styles';

const RegistrationPage: FC = () => {
    const [ username, setUsername ] = useState('');
    const { postRegistration, auth:{ error }} = useAuth();
    const { togglersRedux: { isLoading }} = useTogglersRedux();

    const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        postRegistration(username);
    };

    return (
        <S.Container>
            { error && <AlertError message = { error } />}
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
                                disabled = { username === '' }
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
