import { Box, Container } from '@mui/material';
import { TaskListResults } from '../components/task/task-list-results';
import { TaskListToolbar } from '../components/task/task-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';

const Task = () => {

  return <Box
    component="main"
    sx={{
      flexGrow: 1,
      py: 8
    }}
  >
    <Container maxWidth={false}>
      <TaskListToolbar />
      <Box sx={{ mt: 3 }}>
        <TaskListResults tasks={[]} />
      </Box>
    </Container>
  </Box>
};
Task.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Task;
