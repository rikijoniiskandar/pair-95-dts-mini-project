import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';

import ilustration from '../assets/image/ProfilePicture.png'
import { auth, loginWithEmailAndPassword, registerWithEmailAndPassword } from '../authentication/firebase';

const LoginOrRegisterForm = ({ loginOrRegister }) => {
  const navigate = useNavigate();

  const [user, isLoading, error] = useAuthState(auth);

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const textFieldEmailOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const textFieldPasswordOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const loginHandler = () => {
    loginWithEmailAndPassword(credential.email, credential.password);
  };

  const registerHandler = () => {
    registerWithEmailAndPassword(credential.email, credential.password);
  };

  const buttonLoginOrRegisterOnClickHandler = () => {
    if (loginOrRegister === "login") {
      loginHandler();
    } else {
      registerHandler();
    }
  };

  useEffect(
    () => {
      if (isLoading) {
        return
      }

      if (user) {
        navigate("/");
      }
    },
    [user, isLoading, navigate]
  );


  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row'
    }}>
      <Box sx={{ display: { xs: 'none', sm: 'block' }, width: '100%', height: '100vh' }}>
        <img src={ilustration} width={'100%'} style={{ height: '100vh' }} alt="ilustration-login" />
      </Box>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ width: '100%' }}
      >
        <Typography variant="body1">
          {loginOrRegister === "login" ? "Login Page" : "Register Page"}
        </Typography>
        <Box background='' sx={{ display: 'flex', flexDirection: 'column', gap: '12px', marginY: '6px', backgroundColor: 'linear-gradient(to right bottom, #430089, #82ffa1)' }}>
          <TextField
            type="email"
            placeholder="EMAIL"
            variant="outlined"
            size="large"
            sx={{ "::placeholder": { color: 'grey' } }}
            onChange={textFieldEmailOnChangeHandler}
            value={credential.email}
          />

          <TextField
            type="Password"
            variant="outlined"
            placeholder='PASSWORD'
            size="large"
            value={credential.password}
            onChange={textFieldPasswordOnChangeHandler}
            sx={{ width: '400px', borderColor: 'white', outline: 'none', "::placeholder": { color: 'white' } }} />

          <Button
            variant="contained"
            color='primary'
            size="large"
            onClick={buttonLoginOrRegisterOnClickHandler}
          >
            {loginOrRegister === "login" ? "Login" : "Register Account"}
          </Button>

          {loginOrRegister === "login" ? (
            <Link to="/register">
              <Typography variant="body1">or do you want Register ?</Typography>
            </Link>
          ) : (
            <Link to="/login">
              <Typography variant="body1">or do you want Login ?</Typography>
            </Link>
          )}
        </Box>
      </Grid>
    </Box>
  )
}

export default LoginOrRegisterForm;