import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userService } from '../../../services/users-service';
import AuthContext from '../../../contexts/authContext';

export default function Logout() {
    const navigate = useNavigate();
    const { setUserId } = useContext(AuthContext);

    useEffect(() => {
        userService
            .logout()
            .then(() => {
                setUserId(null);
                navigate('/');
            })
            .catch(() => {
                navigate('/');
            });
    }, []);

    return null;
}
