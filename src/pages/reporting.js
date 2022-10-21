import { Box, Container } from '@mui/material';
import { ReportingListResults } from '../components/reporting/reporting-list-results';
import { ReportingListToolbar } from '../components/reporting/reporting-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';

const Reporting = () => {

  return <Box
    component="main"
    sx={{
      flexGrow: 1,
      py: 8
    }}
  >
    <Container maxWidth={false}>
      <ReportingListToolbar />
      <Box sx={{ mt: 3 }}>
        <ReportingListResults reportings={[]} />
      </Box>
    </Container>
  </Box>
};
Reporting.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Reporting;
