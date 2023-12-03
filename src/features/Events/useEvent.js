import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { eventPatterns } from '../../shared/input-validation-pattern/event-patterns';
import eventsService from '../../services/events-service';
import AuthContext from '../../contexts/authContext';

export default function useEvent(initialValues) {
    const [formValues, setValues] = useState(initialValues);
    const [isInputBlurred, setIsInputBlurred] = useState({});
    const [isFormValid, setIsFormValid] = useState({});
    const [error, setError] = useState(null);
    const { userId } = useContext(AuthContext);

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

    async function handleSubmit(e, formType) {
        e.preventDefault();

        // create event
        if (formType == 'create') {
            try {
                await eventsService.addEvent({
                    ...formValues,
                    ownerId: userId,
                });
                navigate('/events');
            } catch (error) {
                setError(error.message);
            }
        } else {
            // edit event
            try {
                await eventsService.editEvent(formValues);
                navigate('/events');
            } catch (error) {
                setError(error);
            }
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
        setValues,
        setIsFormValid,
    };
}
