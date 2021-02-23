import React from 'react';
import useAuth0 from '@auth0/auth0-react';

import Login from './Login';

export default function AuthButton() {
    const { isAuthenticated } = useAuth0();
    if (isAuthenticated) {
        return "need to log out";
    } else {
        return <Login />;
    }
}