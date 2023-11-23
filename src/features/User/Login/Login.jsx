import { Link } from 'react-router-dom';

import './login.css';

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
    } = useAuth({
        username: '',
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
                        name="username"
                        placeholder="Username..."
                        className={
                            !isFormValid.username && isInputBlurred.username
                                ? 'default-input error-input'
                                : 'default-input'
                        }
                        pattern={inputPatterns.username}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        value={formValues.username}
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
                        value={formValues.password}
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
