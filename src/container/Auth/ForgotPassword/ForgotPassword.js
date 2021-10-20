import * as React from 'react';
import "./ForgotPassword.scss";
import {NavLink} from 'reactstrap';
import {useHistory} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Card, TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';

export default function ForgotPassword(props) {
  const history = useHistory();
  return (
    <Grid container spacing={3}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Typography className="forgotPwdBanner" align={'center'}> LOGIN TO ACCOUNT </Typography>
      </Grid>

      <Grid item lg={12} md={12} xs={12} align={'center'}>
        <Card className="forgotPwdCard" sx={{boxShadow: 2}}>
          <Typography className="forgotPwd"> Forgot Password </Typography>
          <Grid container spacing={3}>
            <Grid item lg={12} xs={12}>
              <TextField variant="outlined" label="Email" fullWidth required/>
            </Grid>
            <Grid item lg={12} xs={12}>
              <Button variant="contained" fullWidth required> Reset Password </Button>
            </Grid>
            <Grid item lg={12} xs={12} className="signInLink">
              <div className="redirectSignUp">Don't have an Account?<NavLink className="link1"
                                                                             onClick={() => history.push('/sign-up')}> Sign
                Up</NavLink></div>
              <div className="backToLogin">Back to<NavLink className="link1" onClick={() => history.push('/login')}> Log
                In</NavLink></div>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
