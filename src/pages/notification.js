import { Box, Container } from '@mui/material';
import { NotificationListResults } from '../components/notification/notification-list-results';
import { NotificationListToolbar } from '../components/notification/notification-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';

const Notifications = () => {

  return <Box
    component="main"
    sx={{
      flexGrow: 1,
      py: 8
    }}
  >
    <Container maxWidth={false}>
      <NotificationListToolbar />
      <Box sx={{ mt: 3 }}>
        <NotificationListResults customers={[]} />
      </Box>
    </Container>
  </Box>
};
Notifications.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Notifications;
