import PropTypes from 'prop-types';
import {
  Card,
} from '@mui/material';

export const TaskListResults = ({ tasks, ...rest }) => {

  return (

      <Card {...rest}>
        
      </Card>
  );
};

TaskListResults.propTypes = {
  tasks: PropTypes.array.isRequired
};
