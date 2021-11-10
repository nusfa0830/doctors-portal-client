import { Container, Grid, TextField, Button } from '@mui/material'
import login from '../../images/login.png'
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import useAuth from '../../hooks/useAuth';
import { NavLink, useHistory } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle'

const Register = () => {
    const [loginData, setLoginData] = useState({});
    let history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();


    const handleonBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        //  
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData);

    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('password didnot match');
            return
        }

        registerUser(loginData.email, loginData.password, history, loginData.name)
        e.preventDefault();
    }

    return (
        <Container>


            <Grid container spacing={2}>
                <Grid item sx={{ mt: 5 }} xs={12} md={6} >

                    <Typography variant="body1" gutterBottom>Register</Typography>

                    {!isLoading &&
                        <form onSubmit={handleLoginSubmit} >
                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                name="name"
                                onBlur={handleonBlur}
                                label="Your Name" variant="standard" />



                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                name="email"
                                type="email"
                                onBlur={handleonBlur}
                                label="Your Email" variant="standard" />

                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                variant="standard"
                                label="Password"
                                name="password"
                                onBlur={handleonBlur}
                                type="password"

                            />
                            <TextField
                                sx={{ width: "75%", m: 1 }}
                                id="standard-basic"
                                variant="standard"
                                label="Confirm Password"
                                name="password2"
                                onBlur={handleonBlur}
                                type="password"
                                autoComplete="current-password"
                            />



                            <Button
                                sx={{ width: "75%", m: 1, mt: 5 }}
                                variant="contained"
                                type="submit"
                                style={{ backgroundColor: '#4aede0' }}>Register</Button>
                            <NavLink
                                to="/login"
                                style={{ textDecoration: 'none' }} >
                                <Button variant="text" style={{ color: '#39dbce' }}>Already Registered? Please LogIn </Button>
                            </NavLink>
                        </form>}


                    {isLoading && <CircularProgress />}

                    {user?.email && <Alert severity="success">
                        <AlertTitle>Register</AlertTitle>
                        Successfully Registered — <strong>check it out!</strong>
                    </Alert>}
                    {authError &&
                        <Alert severity="error">{authError}</Alert>}


                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt='' />
                </Grid>


            </Grid>

        </Container>
    );
};

export default Register;