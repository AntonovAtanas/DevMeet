import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import AuthContext from '../../contexts/authContext';

export default function GuestGuard() {
    const { userId } = useContext(AuthContext);

    if (userId) {
        return <Navigate to={'/'} />;
    }

    return <Outlet />;
}
