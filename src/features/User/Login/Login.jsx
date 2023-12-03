import { Link } from 'react-router-dom';

import { inputPatterns } from '../../../shared/input-validation-pattern/input-patterns';
import useAuth from '../useAuth';

export default function Login() {
    const {
        formValues,
        handleInputChange,
        handleSubmit,
        isFormValid,
        handleInputBlur,
        isInputBlurred,
        errorMessage,
    } = useAuth({
        email: '',
        password: '',
    });

    return (
        <div className="auth-form">
            <h1>Sign In</h1>
            <form onSubmit={(e) => handleSubmit(e, 'login')}>
                <div className="input-wrapper">
                    <i
                        className="fa-solid fa-user"
                        style={{ color: '#28587B' }}
                    ></i>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email..."
                        className={
                            !isFormValid.email && isInputBlurred.email
                                ? 'default-input error-input'
                                : 'default-input'
                        }
                        // pattern={inputPatterns.email}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        value={formValues.email}
                    />
                </div>
                {!isFormValid.email && isInputBlurred.email && (
                    <span className="error-message">
                        Not valid email address
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
                        autoComplete="on"
                        className={
                            !isFormValid.password && isInputBlurred.password
                                ? 'default-input error-input'
                                : 'default-input'
                        }
                        pattern={inputPatterns.password}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        value={formValues.password}
                    />
                </div>
                {!isFormValid.password && isInputBlurred.password && (
                    <span className="error-message">
                        Password must be between 6-12 characters
                    </span>
                )}

                {errorMessage && (
                    <span className="error-message">{errorMessage}</span>
                )}

                <button
                    className="button-main auth-button"
                    disabled={!isFormValid.email || !isFormValid.password}
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
