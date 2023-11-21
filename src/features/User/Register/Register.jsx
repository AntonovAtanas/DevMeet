import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <div className="login-form">
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
                        type="text"
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
                        type="text"
                        name="repeatPassword"
                        placeholder="Repeat password..."
                        className="default-input"
                    />
                </div>

                <button className="button-main login-button">Register</button>
            </form>
            <Link to="/user/login">
                <p className="register-redirect">
                    Already have an account? Sign in here!
                </p>
            </Link>
        </div>
    );
}
