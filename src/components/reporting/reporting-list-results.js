import PropTypes from 'prop-types';
import {
  Card
} from '@mui/material';

export const ReportingListResults = ({ reportings, ...rest }) => {

  return (

      <Card {...rest}>
        
      </Card>
  );
};

ReportingListResults.propTypes = {
  reportings: PropTypes.array.isRequired
};
