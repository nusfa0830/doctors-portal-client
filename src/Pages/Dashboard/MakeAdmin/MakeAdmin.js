import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Alert, AlertTitle, Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';




const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }

    const handleAdminSubmit = e => {
        const user = { email };
        console.log(user)
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    console.log(success)

    return (
        <div>
            <h2>Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: " 50%" }}
                    id="standard-basic"
                    onBlur={handleOnBlur}
                    label="Email"
                    type="email"
                    variant="standard" />
                <Button type="submit" variant="contained">make admin</Button>
            </form>
            {success && <Alert severity="success">
                <AlertTitle>Made Admin Succesfully </AlertTitle>

            </Alert>}
        </div>
    );
};

export default MakeAdmin;