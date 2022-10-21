import { useRouter } from 'next/router';

import { Avatar, Box, Button, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setSignInUser } from 'src/states/userSlice';

const Home = () => {
    const router = useRouter();
    const dispatch = useDispatch()
    const signInUser = useSelector((state) => state.users.signInUser)

    const handleSignOut = () => {
        dispatch(setSignInUser({}))
        router.push('/customers')
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

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                        <Avatar src={signInUser.avatar} />

                        <Box mt={3} mb= {2} sx={{fontSize: '15px', fontWeight: '700'}}>User name: {signInUser.firstname + ' ' + signInUser.lastname}</Box>
                        <Box mb= {2} sx={{fontSize: '15px', fontWeight: '700'}}>Email address: {signInUser.email}</Box>
                        <Box mb= {2} sx={{fontSize: '15px', fontWeight: '700'}}>First name: {signInUser.firstname + ' ' + signInUser.lastname}</Box>
                        <Box mb= {2} sx={{fontSize: '15px', fontWeight: '700'}}>Last name: {signInUser.lastname}</Box>
                    </Box>
                    <Box sx={{ py: 2 }}>
                        <Button
                            color="primary"
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                            onClick={() => handleSignOut()}
                        >
                            Sign out
              </Button>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default Home;
