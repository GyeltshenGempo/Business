import * as React from 'react';
import {useState} from 'react';
import './Users.scss';
import {Button, Card, Grid, MenuItem, TextField} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export const Users = () => {
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    setStatus('active');
  };

  return (
    <Grid container>
      <Grid item lg={12} md={12} xs={12} className="adminBanner">
      </Grid>
      <Grid item lg={12} md={12} sm={8} xs={8}>
        <Card className="adminCard" sx={{boxShadow: '2'}}>
          <div className="cardHead">
            <div>
              <Typography> User List </Typography>
            </div>
            <div>
              <Button variant="contained">Invite Users</Button>
            </div>
          </div>
          <div className="">
            <TextField
              id="outlined-select-currency"
              select
              label="Status"
              // value={currency}
              onChange={handleChange}
              helperText="Please select your status"
            >
              <MenuItem>
                Active
              </MenuItem>
              <MenuItem>
                InActive
              </MenuItem>
            </TextField>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}
