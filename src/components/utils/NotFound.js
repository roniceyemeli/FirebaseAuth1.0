import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import './utils.scss'

const Notfound = () => {
  return (
    <Container>
    <Box component="div" className='notfound'>
    <Typography component="h2" variant="h5">404 | not found</Typography>

    </Box>
</Container>
  )
}

export default Notfound