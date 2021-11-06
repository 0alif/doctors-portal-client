import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography, Container, Box } from '@mui/material';


const bannerBg = {
    background: `url(${bg})`,


}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography varient="h6" sx={{ my: 3, fontSize: 13, fontWaidth: 300, color: 'gray' }}>
                            Lorem ipsum dolor sit amet cinsectetur asipisicing facer totam aliquam presintium vel. Amet veniam doloremque laborum.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>
                            Get Appoinrment
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '350px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;