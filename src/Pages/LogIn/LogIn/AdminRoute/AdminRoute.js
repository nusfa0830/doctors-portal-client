import { CircularProgress } from '@mui/material';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation,
} from "react-router-dom";

import useAuth from '../../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    let history = useHistory();
    let location = useLocation();
    const { user, admin, isLoading } = useAuth();
    // reload korle oi page a thakbe

    if (isLoading) { return <CircularProgress /> }


    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/home",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;