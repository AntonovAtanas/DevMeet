import { useState } from 'react';

import { eventPatterns } from '../../shared/input-validation-pattern/event-patterns';
import eventsService from '../../services/events-service';
import { useNavigate } from 'react-router-dom';

export default function useEvent(initialValues) {
    const [formValues, setValues] = useState(initialValues);
    const [isInputBlurred, setIsInputBlurred] = useState({});
    const [isFormValid, setIsFormValid] = useState({});
    const [error, setError] = useState(null);

    const navigate = useNavigate();

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

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const addedEvent = await eventsService.addEvent(formValues);
            // TODO: Add event in eventsContext
            console.log(addedEvent);
            navigate('/events');
        } catch (error) {
            console.log(error);
            setError(error.message);
        }
    }
    return {
        formValues,
        handleInputBlur,
        isFormValid,
        isInputBlurred,
        handleInputChange,
        handleSubmit,
        error,
    };
}
