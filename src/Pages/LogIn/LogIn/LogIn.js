


import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Typography from '@mui/material/Typography';
import login from '../../../images/login.png'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { Container, Grid, TextField, Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CircularProgress from '@mui/material/CircularProgress';


const LogIn = () => {
    const { user, registerUser, signInWithGoogle, logInUser, isLoading, authError } = useAuth();
    const [loginData, setLoginData] = useState({});

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        //  
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }
    const handleLoginSubmit = e => {
        logInUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    //  handler for google sign in

    const handleGoogleSignin = () => {
        signInWithGoogle(location, history);

    }


    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 5 }} xs={12} md={6} >
                    <Typography variant="body1" gutterBottom>LogIn</Typography>

                    <form onSubmit={handleLoginSubmit} >

                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            name="email"
                            onChange={handleOnChange}
                            label="Your Email" variant="standard" />

                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            variant="standard"
                            label="Password"
                            name="password"
                            onChange={handleOnChange}
                            type="password"
                            autoComplete="current-password"
                        />



                        <Button
                            sx={{ width: "75%", m: 1, mt: 5 }}
                            variant="contained"
                            type="submit"
                            style={{ backgroundColor: '#4aede0' }}>LogIn</Button>
                        <NavLink
                            to="/register"
                            style={{ textDecoration: 'none' }} >
                            <Button variant="text" style={{ color: '#39dbce' }}>New User? please register</Button>
                        </NavLink>

                        {isLoading && <CircularProgress />}

                        {user?.email && <Alert severity="success">
                            <AlertTitle>Succesfully login</AlertTitle>
                            <strong>check it!</strong>
                        </Alert>}
                        {authError &&
                            <Alert severity="error">{authError}</Alert>}
                    </form>
                    {/*google button  */}
                    <hr></hr>

                    <Button onClick={handleGoogleSignin}
                        sx={{ width: "75%", m: 1, mt: 5 }}
                        variant="contained"
                        type="submit"
                        style={{ backgroundColor: '#4aede0' }}>Google Sign In</Button>


                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt='' />
                </Grid>


            </Grid>

        </Container>
    );
};

export default LogIn;