import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import '../global.scss'

const Home = () => {
  return (
    <Container>
        <Box component="div" className='home'>
        <Typography component="h2" variant="h5">you are authentificated</Typography>

        </Box>
    </Container>
  )
}

export default Home