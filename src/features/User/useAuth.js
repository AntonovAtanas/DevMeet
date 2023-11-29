import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { inputPatterns } from '../../shared/input-validation-pattern/input-patterns';
import { userService } from '../../services/users-service';
import AuthContext from '../../contexts/authContext';

export default function useAuth(initialValues) {
    const [formValues, setValues] = useState(initialValues);
    const [isFormValid, setIsFormValid] = useState({});
    const [isInputBlurred, setIsInputBlurred] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const { setUserDataInLocalStorage } = useContext(AuthContext);

    const navigate = useNavigate();

    function handleInputChange(e) {
        const { name, value } = e.target;

        const pattern = new RegExp(inputPatterns[name]);
        let isValidInput = false;

        if (name !== 'repeatPassword') {
            isValidInput = pattern.test(value);
        } else {
            isValidInput = formValues.password == value;
        }

        // update if input field is valid or invalid
        setIsFormValid({
            ...isFormValid,
            [name]: isValidInput,
        });

        // update form state
        setValues({
            ...formValues,
            [name]: value,
        });
    }

    function handleInputBlur(e) {
        const inputName = e.target.name;

        setIsInputBlurred({ ...isInputBlurred, [inputName]: true });
    }

    async function handleSubmit(e, formType) {
        e.preventDefault();

        // TODO
        if (formType === 'login') {
            try {
                let { data, error } = await userService.login(formValues);
                if (error) {
                    throw new Error('Username or password do not match!');
                }

                // set data in local storage
                setUserDataInLocalStorage(data.user);
                setErrorMessage('');
                return navigate('/');
            } catch (error) {
                setErrorMessage(error.message);
            }
        } else {
            try {
                const { data, error } = await userService.register(formValues);

                if (error) {
                    console.log(error);
                    throw new Error(error);
                }

                // set data in local storage

                setUserDataInLocalStorage(data.user);
                setErrorMessage('');
                return navigate('/');
            } catch (error) {
                setErrorMessage(error.message);
            }
        }
    }

    return {
        formValues,
        handleInputChange,
        handleSubmit,
        isFormValid,
        handleInputBlur,
        isInputBlurred,
        errorMessage,
    };
}
