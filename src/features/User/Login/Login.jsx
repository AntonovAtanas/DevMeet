import { isValidElement, useState } from 'react';
import { Link } from 'react-router-dom';

import './login.css';

import { inputPatterns } from '../../../shared/input-validation-pattern/input-patterns';

export default function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [isFormValid, setIsFormValid] = useState({
        username: false,
        password: false,
    });

    const [isInputBlurred, setIsInputBlurred] = useState({
        username: false,
        password: false,
    });

    function loginSubmitHandler(e) {
        e.preventDefault();

        console.log(formData);
    }

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
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    function handleInputBlur(e) {
        const inputName = e.target.name;

        setIsInputBlurred({ ...isInputBlurred, [inputName]: true });
    }

    return (
        <div className="auth-form">
            <h1>Sign In</h1>
            <form onSubmit={loginSubmitHandler}>
                <div className="input-wrapper">
                    <i
                        className="fa-solid fa-user"
                        style={{ color: '#28587B' }}
                    ></i>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username..."
                        // className="default-input"
                        className={
                            !isFormValid.username && isInputBlurred.username
                                ? 'default-input error-input'
                                : 'default-input'
                        }
                        pattern={inputPatterns.username}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                    />
                </div>
                {!isFormValid.username && isInputBlurred.username && (
                    <span className="error-message">
                        Username must be between 4-12 characters
                    </span>
                )}
                <div className="input-wrapper">
                    <i
                        className="fa-solid fa-lock"
                        style={{ color: '#28587B' }}
                    ></i>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password..."
                        className={
                            !isFormValid.password && isInputBlurred.password
                                ? 'default-input error-input'
                                : 'default-input'
                        }
                        pattern={inputPatterns.password}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                    />
                </div>
                {!isFormValid.password && isInputBlurred.password && (
                    <span className="error-message">
                        Password must be between 4-12 characters
                    </span>
                )}

                <button
                    className="button-main auth-button"
                    disabled={!isFormValid.username || !isFormValid.password}
                >
                    Sign In
                </button>
            </form>
            <Link to="/user/register">
                <p className="auth-redirect">
                    Don't have an account? Sign up here!
                </p>
            </Link>
        </div>
    );
}
