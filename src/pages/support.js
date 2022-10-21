import { Box, Container } from '@mui/material';
import { SupportListResults } from '../components/support/support-list-results';
import { SupportListToolbar } from '../components/support/support-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';

const Support = () => {

  return <Box
    component="main"
    sx={{
      flexGrow: 1,
      py: 8
    }}
  >
    <Container maxWidth={false}>
      <SupportListToolbar />
      <Box sx={{ mt: 3 }}>
        <SupportListResults supports={[]} />
      </Box>
    </Container>
  </Box>
};
Support.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Support;
