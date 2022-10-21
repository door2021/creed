import PropTypes from 'prop-types'
import {

  Card,
} from '@mui/material';

export const NotificationListResults = ({ customers, ...rest }) => {

  return (
      <Card {...rest}>
       
      </Card>
  );
};

NotificationListResults.propTypes = {
  customers: PropTypes.array.isRequired
};
