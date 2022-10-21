import { Card, CardContent, Grid, Typography, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSelector } from 'react-redux';

const TotalCustomer = (props) => {
  const usersList = useSelector((state) => state.users.usersList)
  return <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            Total customers
          </Typography>
        </Grid>

        <Grid item>
          <IconButton
            edge="end"
            size="small"
          >
            <MoreVertIcon />
          </IconButton>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}>

        <Grid item>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {usersList.length}
          </Typography>
        </Grid>

      </Grid>
    </CardContent>
  </Card>
};

export default TotalCustomer
