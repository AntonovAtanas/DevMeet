import { Link } from 'react-router-dom';

import './login.css';

export default function Login() {
    return (
        <div className="login-form">
            <h1>Sign In</h1>
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
                        type="text"
                        name="password"
                        placeholder="Password..."
                        className="default-input"
                    />
                </div>

                <button className="button-main">Sign In</button>
            </form>
            <Link to="/user/register">
                <p className="register-redirect">
                    Don't have an account? Sign up here!
                </p>
            </Link>
        </div>
    );
}
