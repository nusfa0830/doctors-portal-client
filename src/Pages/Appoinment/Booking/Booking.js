import { Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space } = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4} >

                <Paper elevation={3} sx={{ py: 5 }} >
                    <Typography variant="h4" gutterBottom component="div" style={{ color: '#39dbce' }} >
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {space} space available
                    </Typography>
                    <Button
                        onClick={handleBookingOpen} variant="contained"
                        style={{ backgroundColor: '#4aede0' }}>Book Appoinment</Button>

                </Paper>

            </Grid>
            <BookingModal
                date={date}
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                setBookingSuccess={setBookingSuccess} >


            </BookingModal>

        </>
    );
};

export default Booking;