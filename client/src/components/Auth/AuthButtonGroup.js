import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import LoginSignUp from './LoginSignUp';
import Logout from './Logout';

export default function AuthButtonGroup() {
    const { isAuthenticated } = useAuth0();
    if (isAuthenticated) {
        return <Logout />;
    } else {
        return <LoginSignUp />;
    }
}