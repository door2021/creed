import PropTypes from 'prop-types'
import {

  Card,
} from '@mui/material';

export const SupportListResults = ({ supports, ...rest }) => {

  return (
      <Card {...rest}>
       
      </Card>
  );
};

SupportListResults.propTypes = {
  customers: PropTypes.array.isRequired
};
