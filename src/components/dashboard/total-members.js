import { Card, CardContent, Grid, Typography, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const TotalMembers = (props) => (
  <Card {...props}>
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
            Members
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
            0
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
export default TotalMembers
