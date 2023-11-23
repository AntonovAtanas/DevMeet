import { useState } from 'react';
import { inputPatterns } from '../../shared/input-validation-pattern/input-patterns';

export default function useAuth(initialValues) {
    const [formValues, setValues] = useState(initialValues);
    const [isFormValid, setIsFormValid] = useState({});
    const [isInputBlurred, setIsInputBlurred] = useState({});

    function handleInputChange(e) {
        const { name, value } = e.target;

        const pattern = new RegExp(inputPatterns[name]);
        const isValidInput = pattern.test(value);

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

        console.log(formType);
        //  TODO
        console.log(formValues);
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
