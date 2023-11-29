import { useState } from 'react';

import { eventPatterns } from '../../shared/input-validation-pattern/event-patterns';

export default function useEvent(initialValues) {
    const [formValues, setValues] = useState(initialValues);
    const [isInputBlurred, setIsInputBlurred] = useState({});
    const [isFormValid, setIsFormValid] = useState({});

    function handleInputBlur(e) {
        const inputName = e.target.name;

        setIsInputBlurred({ ...isInputBlurred, [inputName]: true });
    }

    function handleInputChange(e) {
        const { name, value } = e.target;

        const pattern = new RegExp(eventPatterns[name]);

        const isValidInput = pattern.test(value);

        setIsFormValid({
            ...isFormValid,
            [name]: isValidInput,
        });

        setValues({
            ...formValues,
            [name]: value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('add event submit');
    }
    return {
        formValues,
        handleInputBlur,
        isFormValid,
        isInputBlurred,
        handleInputChange,
        handleSubmit,
    };
}
