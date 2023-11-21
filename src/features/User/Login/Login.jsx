import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function loginSubmitHandler(e) {
        e.preventDefault();

        console.log(username);
        console.log(password);
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
                        className="default-input"
                        onChange={(e) => setUsername(e.target.value)}
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
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button className="button-main auth-button">Sign In</button>
            </form>
            <Link to="/user/register">
                <p className="auth-redirect">
                    Don't have an account? Sign up here!
                </p>
            </Link>
        </div>
    );
}
