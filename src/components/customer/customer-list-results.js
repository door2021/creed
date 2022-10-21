import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow, TextField, InputAdornment, Grid,
  SvgIcon, Tabs, Tab, Container,
  Typography, CardContent, Button
} from '@mui/material';
import { getInitials } from '../../utils/get-initials';
import { Search as SearchIcon } from '../../icons/search';
import TotalMembers from '../dashboard/total-members';
import ActiveNow from '../dashboard/active-now';
import TotalCustomers from '../dashboard/total-customers';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { removeUser, updateUser, setUser, setMsg } from 'src/states/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import CustomerEmpty from './customer-empty'

export const CustomerListResults = ({ customers, ...rest }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [value, setValue] = useState(0)

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('')

  const dispatch = useDispatch()
  const usersList = useSelector((state) => state.users.usersList)
  const user = useSelector((state) => state.users.user)

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = usersList.map((customer) => customer.userId);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //update user
  const handleUpdateUser = () => {
    var data = {
      username: firstname + ' ' + lastname,
      email: email,
      firstname: firstname,
      lastname: lastname,
    }

    dispatch(updateUser({ id: user.userId, data: data }))

    dispatch(setUsers(msg))
    dispatch(setMsg(true))
    setTimeout(() => dispatch(setMsg(false)), 3000)
  }

  //delete user for
  const handleDeleteUser = (id) => {
    dispatch(removeUser(id))
  }

  //set new user for editing
  const handleSetUser = (u) => {
    dispatch(setUser(u))

    if (Object.keys(user).length > 0) {
      setFirstName('')
      setLastName('')
      setEmail('')
    } else {
      setFirstName(u.firstname)
      setLastName(u.lastname)
      setEmail(u.email)
    }
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', marginTop: '30px' }}>
        <Tabs value={value} aria-label="basic tabs example" onChange={handleChange}>
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Table" {...a11yProps(1)} />
          <Tab label="List view" {...a11yProps(2)} />
          <Tab label="Segment" {...a11yProps(3)} />
          <Tab label="Custom" {...a11yProps(4)} />
        </Tabs>
      </Box>

      <Container sx={{ marginTop: '2rem' }} maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalCustomers />
          </Grid>
          <Grid
            item
            xl={3}
            lg={4}
            sm={6}
            xs={12}
          >
            <TotalMembers />
          </Grid>
          <Grid
            item
            xl={3}
            lg={4}
            sm={6}
            xs={12}
          >
            <ActiveNow />
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500, display: 'flex', flexDirection: 'column' }}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        color="action"
                        fontSize="small"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search customer"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>

      {Object.keys(user).length < 1 ?
        <Card {...rest}>
          <PerfectScrollbar>
            <Box sx={{ minWidth: 1050 }}>
              {usersList.length > 0 ?
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={selectedCustomerIds.length === usersList.length}
                          color="primary"
                          indeterminate={
                            selectedCustomerIds.length > 0
                            && selectedCustomerIds.length < usersList.length
                          }
                          onChange={handleSelectAll}
                        />
                      </TableCell>
                      <TableCell>
                        UserName
                  </TableCell>
                      <TableCell>
                        Email
                  </TableCell>
                      <TableCell>
                        First Name
                  </TableCell>
                      <TableCell>
                        Last Name
                  </TableCell>
                      <TableCell>

                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      usersList.slice(limit * page, page === 0 ? limit : (limit * page) + limit).map((customer) => (
                        <TableRow
                          hover
                          key={customer.userId}
                          selected={selectedCustomerIds.indexOf(customer.userId) !== -1}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              checked={selectedCustomerIds.indexOf(customer.userId) !== -1}
                              onChange={(event) => handleSelectOne(event, customer.userId)}
                              value="true"
                            />
                          </TableCell>
                          <TableCell>
                            <Box
                              sx={{
                                alignItems: 'center',
                                display: 'flex',
                              }}
                            >
                              <Avatar
                                src={customer.avatar}
                                sx={{ mr: 2 }}
                              >
                                {getInitials(customer.firstname)}
                              </Avatar>
                              <Typography
                                color="textPrimary"
                                variant="body1"
                              >
                                {`${customer.firstname} ${customer.lastname}`}
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell>
                            {customer.email}
                          </TableCell>
                          <TableCell>
                            {customer.firstname}
                          </TableCell>
                          <TableCell>
                            {customer.lastname}
                          </TableCell>
                          <TableCell>
                            <Box sx={{ display: 'flex' }}>
                              <Box sx={{ mr: 2, cursor: 'pointer' }} onClick={() => handleDeleteUser(customer.userId)}>
                                <DeleteOutlinedIcon />
                              </Box>
                              <Box sx={{ cursor: 'pointer' }} onClick={() => handleSetUser(customer)}>
                                <CreateOutlinedIcon />
                              </Box>
                            </Box>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table> :
                <CustomerEmpty />
              }
            </Box>
          </PerfectScrollbar>

          {usersList.length > 0 &&
            <TablePagination
              component="div"
              count={usersList.length}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleLimitChange}
              page={page}
              rowsPerPage={limit}
              rowsPerPageOptions={[5, 10, 25]}
            />}
        </Card> :

        //edit user section
        <Grid container spacing={3}>
          <Grid item lg={8} md={6} xs={12} mt={2}>
            <Card {...rest}>
              <PerfectScrollbar>
                <CardContent>
                  <Box sx={{
                    mb: 4,
                    mt: 1,
                    ml: 1,
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#5048E5',

                  }}>Edit customer ({user.firstname + ' ' + user.lastname})</Box>

                  <Grid container spacing={3}>

                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Grid>

                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="First Name"
                        variant="outlined"
                        value={firstname}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </Grid>

                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        variant="outlined"
                        value={lastname}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </Grid>

                    <Box
                      sx={{
                        p: 2,
                        mt: 2,
                        width: '100%',
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button
                        color="primary"
                        variant="contained"
                        sx={{ marginRight: "5px" }}
                        onClick={() => handleSetUser({})}
                      >
                        Cancel
              </Button>
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={() => handleUpdateUser()}
                      >
                        Save
              </Button>
                    </Box>
                  </Grid>
                </CardContent>
              </PerfectScrollbar>
            </Card>
          </Grid></Grid>}
    </Box>
  );
};

CustomerListResults.propTypes = {
  customers: PropTypes.array.isRequired
};
