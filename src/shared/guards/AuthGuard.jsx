import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import AuthContext from '../../contexts/authContext';

export default function AuthGuard() {
    const { userId } = useContext(AuthContext);

    if (!userId) {
        return <Navigate to={'/user/login'} />;
    }

    return <Outlet />;
}
