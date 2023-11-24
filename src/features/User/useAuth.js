import { useState } from 'react';
import { inputPatterns } from '../../shared/input-validation-pattern/input-patterns';

export default function useAuth(initialValues) {
    const [formValues, setValues] = useState(initialValues);
    const [isFormValid, setIsFormValid] = useState({});
    const [isInputBlurred, setIsInputBlurred] = useState({});

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

    function handleSubmit(e, formType) {
        e.preventDefault();

        // TODO
        if (formType === 'login') {
            console.log('submitted login form');
            console.log(formValues);
        } else {
            console.log('submitted register form');
            console.log(formValues);
        }
    }

    return {
        formValues,
        handleInputChange,
        handleSubmit,
        isFormValid,
        handleInputBlur,
        isInputBlurred,
    };
}