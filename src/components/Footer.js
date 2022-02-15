import { Box, Container, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles= makeStyles({
    footer:{
        position: 'absolute',
        bottom: '0',
        height: '8vh',
        width:'100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    email:{
        textTransform: 'lowercase'
    }
})

const Footer = () => {

    const classes = useStyles()

  return(
    <Box component="div" className={classes.footer} sx={{bgcolor: "primary.main"}}>
    <Container maxWidth="lg">
            <Typography>
            <span className={classes.email}>&copy;roniceyemeli</span>{new Date().getFullYear()} | All rights reserved |
          Terms Of Service | Privacy
            </Typography>
    </Container>
    </Box>  
  )
}

export default Footer