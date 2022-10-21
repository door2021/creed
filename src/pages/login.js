import { useRouter } from 'next/router';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSignInUser } from 'src/states/userSlice';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("")
  const dispatch = useDispatch()
  const usersList = useSelector((state) => state.users.usersList)

  const handleSignIn = () => {

    usersList.forEach((u) => {
      if(u.email === email){
        dispatch(setSignInUser(u))
        router.push('/home')
      }
    })
  }

  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm">
          <Box sx={{ my: 3 }}>
            <Typography
              color="textPrimary"
              variant="h4"
            >
              Sign in
              </Typography>
          </Box>

          <TextField
            fullWidth
            label="Email Address"
            margin="normal"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
      
          <Box sx={{ py: 2 }}>
            <Button
              color="primary"
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              onClick={() => handleSignIn()}
            >
              Sign In
              </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Login;
