import React from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import { AppBar, Avatar, Box, Container, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import "../global.scss";

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  right:{
    display: "flex",
  },
  links:{
    marginRight:'1rem'
  }
});


const NavBar = () => {
  const classes = useStyles();

  const [user, setUser] = React.useState({})

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  console.log(user?.email)

  const logout = async () => {
    if(user?.email){
      await signOut(auth);
    }
    localStorage.clear();
  };

  return (
    <Container>
      <AppBar elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Typography component='h2' variant='h5'>
              firebaseAuth
          </Typography>
          <Box component='div' className={classes.right}>
          <Box component="ul" sx={{display:'flex', listStyle:'none'}} className={classes.links} >
          <Typography component='li'>
            <Link to="/login" className="nav_log" onClick={logout}>
              {user?.email ? "logout" : "login"}
            </Link>
          </Typography>
          <Typography component='li'>
            <Link to="/crud" className="nav_log">
              crud
            </Link>
          </Typography>
          <Typography component='li'>
            <Link to={user?.email ? "/" : "/register"} className="nav_reg">
              {user?.email ? `${user.email}`:"register"}
            </Link>
          </Typography>
          <Typography component='li'>
            {format(new Date(), "do MMMM Y")}
          </Typography>
          </Box>
          <Avatar sx={{ bgcolor: "secondary.main"}} className='avatar'>
            {user?.email ? `${user.email[0]}` : null}
          </Avatar>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default NavBar;
