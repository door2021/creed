import { Box, Container, Grid, Button } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { useRouter } from 'next/router';

const Dashboard = () => {
  const router = useRouter();

  return <Box
    component="main"
    sx={{
      flexGrow: 1,
      py: 8
    }}
  >
    <Container maxWidth={false}>
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          lg={12}
          md={12}
          xl={9}
          xs={12}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Box>Create users in <strong>Users</strong> tab, copy email and check login user from <strong>Login user</strong> tab. Paste email and sign in, signout</Box>
            <Button
              color='primary'
              sx={{
                fontWeight: '600',
                fontSize: '18px',
                letterSpacing: '1.0px'
              }}
              onClick={() => router.push('/customers')}
            >
              Go | Users
                </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>

};

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
