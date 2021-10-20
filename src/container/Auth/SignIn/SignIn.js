import * as React from 'react';
import {useContext, useEffect} from 'react';
import "./SignIn.scss"
import {NavLink} from 'reactstrap';
import {useHistory} from "react-router-dom";
import {useSnackbar} from "notistack";
import {DispatchContext, StateContext} from "../../../store";
import {Field, Form, Formik} from 'formik';
import {login} from "../../../services/AuthServices";
import {signInValidation} from "../AuthValidationSchema";
import {TextField} from "formik-material-ui";
import {Notify, setProps} from '../../../shared/Components/notification/Notification';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Card} from '@material-ui/core';
import Loader from '../../../shared/Loader';
import Button from '@material-ui/core/Button';

export default function SignIn() {
  const history = useHistory();
  const snackbar = useSnackbar();
  const dispatch = useContext(DispatchContext);
  const {user} = useContext(StateContext);

  useEffect(() => {
    setProps(snackbar);
  }, []);

  const onLogin = (values, {setSubmitting}) => {
    login({user: {...values}}, dispatch).then(response => {
      setSubmitting(false);

        history.push('/');
      Notify('Login successfully', 'success');
    }).catch(err => {
      setSubmitting(false);
      Notify(err, 'error');
    });
  };
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography className="signInBanner" align={'center'}> LOGIN TO ACCOUNT </Typography>
        </Grid>

        <Grid item lg={12} md={12} sm={12} xs={12} align={'center'}>
          <Card className="signInCard" sx={{boxShadow: 2}}>
            <Typography className="signIn">SIGN IN</Typography>
            <Formik initialValues={{login: '', password: ''}} onSubmit={onLogin} validationSchema={signInValidation}>
              {({
                  values,
                  error,
                  isSubmitting,
                  dirty,
                  handleBlur,
                  handleChange,
                  ...formik
                }) => (
                <Form>
                  <>
                    <Grid container spacing={2}>
                      <Grid item lg={12} xs={12}>
                        <Field component={TextField} variant="outlined" name="login" label="Email" fullWidth required/>
                      </Grid>
                      <Grid item lg={12} xs={12}>
                        <Field component={TextField} variant="outlined" type="password" name="password" label="Password"
                               fullWidth
                               required/>
                      </Grid>
                      <Grid item lg={12} xs={12}>
                        <Button variant="contained" type="submit" className="button" disabled={!dirty || isSubmitting}>
                          Sign In</Button>
                      </Grid>
                    </Grid>
                    {isSubmitting && <Loader/>}
                  </>
                </Form>
              )}
            </Formik>
            <Grid item lg={12} xs={12} className="linkButton">
              <NavLink className="createAccountLink" onClick={() => history.push('/sign-up')}>Create New
                Account</NavLink>
              <NavLink className="forgotPwdLink" onClick={() => history.push('/password/reset')}>Forgot
                Password?</NavLink>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
