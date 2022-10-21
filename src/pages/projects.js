import { Box, Container } from '@mui/material';
import { ProjectListToolbar } from '../components/project/project-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';

const Projects = () => (
  <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <ProjectListToolbar />
      </Container>
    </Box>
  </>
);

Projects.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Projects;
