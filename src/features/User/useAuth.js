import { useState } from 'react';
import { inputPatterns } from '../../shared/input-validation-pattern/input-patterns';
import { userService } from '../../services/users-service';
import { useNavigate } from 'react-router-dom';

export default function useAuth(initialValues) {
    const [formValues, setValues] = useState(initialValues);
    const [isFormValid, setIsFormValid] = useState({});
    const [isInputBlurred, setIsInputBlurred] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

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
            console.log('submitted login form');
            // let { data, error } = await supabase.auth.signInWithPassword({
            //     email: '',
            //     password: '',
            // });

            // console.log(data);
        } else {
            try {
                const result = await userService.register(formValues);
                if (result.error) {
                    throw new Error(result.error);
                }

                setErrorMessage('');
                return navigate('/events');
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
