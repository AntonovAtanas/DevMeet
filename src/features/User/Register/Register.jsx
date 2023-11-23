import { Link } from 'react-router-dom';

import useAuth from '../useAuth';

export default function Register() {
    const {
        formValues,
        handleInputChange,
        handleSubmit,
        isFormValid,
        handleInputBlur,
        isInputBlurred,
    } = useAuth({ username: '', password: '', repeatPassword: '' });

    return (
        <div className="auth-form">
            <h1>Register</h1>
            <form onSubmit={(e) => handleSubmit(e, 'register')}>
                <div className="input-wrapper">
                    <i
                        className="fa-solid fa-user"
                        style={{ color: '#28587B' }}
                    ></i>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username..."
                        className={
                            isInputBlurred.username && !isFormValid.username
                                ? 'default-input error-input'
                                : 'default-input'
                        }
                        value={formValues.username}
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
                            isInputBlurred.password && !isFormValid.password
                                ? 'default-input error-input'
                                : 'default-input'
                        }
                        value={formValues.password}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                    />
                </div>
                {!isFormValid.password && isInputBlurred.password && (
                    <span className="error-message">
                        Password must be between 4-12 characters
                    </span>
                )}

                <div className="input-wrapper">
                    <i
                        className="fa-solid fa-lock"
                        style={{ color: '#28587B' }}
                    ></i>
                    <input
                        type="password"
                        name="repeatPassword"
                        placeholder="Repeat password..."
                        className={
                            isInputBlurred.repeatPassword &&
                            (!isFormValid.repeatPassword ||
                                formValues.repeatPassword !==
                                    formValues.password)
                                ? 'default-input error-input'
                                : 'default-input'
                        }
                        value={formValues.repeatPassword}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                    />
                </div>
                {isInputBlurred.repeatPassword &&
                    (formValues.repeatPassword.length < 4 ||
                        formValues.repeatPassword.length > 12) && (
                        <span className="error-message">
                            Password must be between 4-12 characters
                        </span>
                    )}

                {isInputBlurred.repeatPassword &&
                    formValues.repeatPassword !== formValues.password && (
                        <span className="error-message">
                            Passwords do not match
                        </span>
                    )}

                <button
                    className="button-main auth-button"
                    disabled={
                        !isFormValid.username ||
                        !isFormValid.password ||
                        !isFormValid.repeatPassword
                    }
                >
                    Register
                </button>
            </form>
            <Link to="/user/login">
                <p className="auth-redirect">
                    Already have an account? Sign in here!
                </p>
            </Link>
        </div>
    );
}
