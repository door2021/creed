import {
  Box,
  Button, Typography
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { createUser } from 'src/service/user_faker';
import { setUsers, setMsg } from 'src/states/userSlice';
import { Upload as UploadIcon } from '../../icons/upload';

export const CustomerListToolbar = (props) => {
  const dispatch = useDispatch()

  const handleAddUser = () => {
    var msg = createUser()
    dispatch(setUsers(msg))
  }

  return <Box {...props}>
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        m: -1
      }}
    >
      <Typography
        sx={{ m: 1 }}
        variant="h4"
      >
        Customers
      </Typography>
      <Box sx={{ m: 1 }}>
        <Button
          variant="outlined"
          startIcon={(<UploadIcon fontSize="small" />)}
          sx={{ mr: 1, border: '2px solid #ededed', color: 'black' }}
        >
          Import
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => handleAddUser()}
        >
          Add Customers
        </Button>
      </Box>
    </Box>
  </Box>
};
