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
    } = useAuth({ email: '', password: '', repeatPassword: '' });

    return (
        <div className="auth-form">
            <h1>Register</h1>
            <form onSubmit={(e) => handleSubmit(e, 'register')}>
                {/* email */}
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
                            isInputBlurred.email && !isFormValid.email
                                ? 'default-input error-input'
                                : 'default-input'
                        }
                        value={formValues.email}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                    />
                </div>
                {!isFormValid.email && isInputBlurred.email && (
                    <span className="error-message">Email is not valid</span>
                )}

                {/* first name */}
                <div className="input-wrapper">
                    <i
                        className="fa-solid fa-user"
                        style={{ color: '#28587B' }}
                    ></i>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First name..."
                        className={
                            isInputBlurred.firstName && !isFormValid.firstName
                                ? 'default-input error-input'
                                : 'default-input'
                        }
                        value={formValues.firstName}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                    />
                </div>
                {!isFormValid.firstName && isInputBlurred.firstName && (
                    <span className="error-message">
                        First name must be between 2-12 characters
                    </span>
                )}

                {/* last name */}
                <div className="input-wrapper">
                    <i
                        className="fa-solid fa-user"
                        style={{ color: '#28587B' }}
                    ></i>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last name..."
                        className={
                            isInputBlurred.lastName && !isFormValid.lastName
                                ? 'default-input error-input'
                                : 'default-input'
                        }
                        value={formValues.lastName}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                    />
                </div>
                {!isFormValid.lastName && isInputBlurred.lastName && (
                    <span className="error-message">
                        Last name must be between 2-12 characters
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
                        !isFormValid.email ||
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
