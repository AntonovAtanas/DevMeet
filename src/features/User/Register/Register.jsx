import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <div className="auth-form">
            <h1>Register</h1>
            <form>
                <div className="input-wrapper">
                    <i
                        className="fa-solid fa-user"
                        style={{ color: '#28587B' }}
                    ></i>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username..."
                        className="default-input"
                    />
                </div>
                <div className="input-wrapper">
                    <i
                        className="fa-solid fa-lock"
                        style={{ color: '#28587B' }}
                    ></i>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password..."
                        className="default-input"
                    />
                </div>
                <div className="input-wrapper">
                    <i
                        className="fa-solid fa-lock"
                        style={{ color: '#28587B' }}
                    ></i>
                    <input
                        type="password"
                        name="repeatPassword"
                        placeholder="Repeat password..."
                        className="default-input"
                    />
                </div>

                <button className="button-main auth-button">Register</button>
            </form>
            <Link to="/user/login">
                <p className="auth-redirect">
                    Already have an account? Sign in here!
                </p>
            </Link>
        </div>
    );
}
