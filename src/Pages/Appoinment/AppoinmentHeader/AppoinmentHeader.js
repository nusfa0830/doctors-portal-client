import { Container, Grid } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png';
import Calender from '../../../Shared/Calender/Calender';

const AppoinmentHeader = ({ date, setDate }) => {


    return (
        <Container>

            <Grid container spacing={2}>
                <Grid item xs={12} md={6} >
                    <Calender date={date} setDate={setDate}   ></Calender>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '350px' }} src={chair} alt="" />
                </Grid>
            </Grid>

        </Container>
    );
};

export default AppoinmentHeader;