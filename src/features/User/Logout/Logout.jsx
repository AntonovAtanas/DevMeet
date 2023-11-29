import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userService } from '../../../services/users-service';

export default function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        userService
            .logout()
            .then(() => {
                navigate('/');
            })
            .catch(() => {
                navigate('/');
            });
    }, []);

    return null;
}
