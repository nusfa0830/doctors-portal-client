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

const PrivateRoute = ({ children, ...rest }) => {
    let history = useHistory();
    let location = useLocation();
    const { user, isLoading } = useAuth();
    // reload korle oi page a thakbe

    if (isLoading) { return <CircularProgress /> }


    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;