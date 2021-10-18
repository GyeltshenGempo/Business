import * as React from 'react';
import "./SignUp.scss"
import {useHistory} from "react-router-dom";
import {gender, signUpInitialValues, signUpValidation} from '../AuthValidationSchema';
import {Field, Form, Formik} from 'formik';
import {TextField} from "formik-material-ui";
import {usersApi} from "../../../services/UserServices";
import {Notify} from "../../../shared/components/notification/Notification";
import Loader from "../../../shared/Loader";
import Typography from '@material-ui/core/Typography';
import {Visibility, VisibilityOff} from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import {Card, IconButton, InputAdornment} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';


export default function SignUp() {
  const history = useHistory();
  const [passwordValues, setPasswordValues] = React.useState({showPassword: false, showCpassword: false,});

  const onSignUp = (values, {setSubmitting, resetForm}) => {
    usersApi('post', {user: {...values}}).then(res => {
      setSubmitting(false);
      resetForm();
      history.push(`/login`);
      Notify('Thank you for your registering.We have sent an email with a confirmation link to your email address.', 'success');
    }).catch(err => {
      setSubmitting(false);
      Notify(err, 'error');
    });
  };

  const handleClickShowPassword = (type) => {
    if (type === 'password') {
      setPasswordValues({...passwordValues, showPassword: !passwordValues.showPassword});
    } else if (type === 'confirmation') {
      setPasswordValues({...passwordValues, showCpassword: !passwordValues.showCpassword});
    }
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <Grid container spacing={2}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Typography className="signUpBanner" align={'center'}> LOGIN TO ACCOUNT </Typography>
      </Grid>

      <Grid item lg={12} md={12} sm={12} xs={12} align={'center'}>
        <Card className="signUpCard" sx={{boxShadow: 2}}>
          <Typography className="signUp" onClick={()=> history.push('/')}> SIGN UP </Typography>
          <Formik initialValues={signUpInitialValues} onSubmit={onSignUp} validationSchema={signUpValidation}>
            {({
                values,
                errors,
                isSubmitting,
                dirty,
                isValid,
                handleBlur,
                handleChange,
                ...formik
              }) => (
              <Form>
                <>
                  <Grid container spacing={2}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <Field component={TextField} variant="outlined" name="profile_attributes.first_name"
                             label="FirstName" size='medium' fullWidth
                             required/>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <Field component={TextField} variant="outlined" name="profile_attributes.last_name"
                             label="LastName" size='medium' fullWidth
                             required/>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <Field component={TextField} variant="outlined" name="email" label="Email" size='medium' fullWidth
                             required/>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <Field component={TextField} variant="outlined" name="phone" label="Phone" size='medium' fullWidth
                             required/>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <Autocomplete
                        id="combo-box-demo"
                        options={gender}
                        getOptionLabel={(option) => option.title}
                        onChange={(e, value) => formik.setFieldValue('profile_attributes.gender', value?.value)}
                        style={{width: '100%', marginTop: 15}}
                        renderInput={(params) => <Field component={TextField} name="profile_attributes.gender"
                                                        {...params} label="Gender" required variant="outlined"/>}
                      />
                    </Grid>
                    {/*<Grid item lg={12} md={12} sm={12} xs={12}>*/}
                    {/*  <Field component={TextField} variant="outlined" type="date" disableFuture*/}
                    {/*         name="profile_attributes.dob"*/}
                    {/*         label="Date of birth" size='medium' fullWidth*/}
                    {/*         required/>*/}
                    {/*</Grid>*/}
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <Field component={TextField} name="password" label="Password" variant="outlined" required
                             type={passwordValues.showPassword ? 'text' : 'password'} fullWidth
                             InputProps={{
                               endAdornment: <InputAdornment position="end">
                                 <IconButton
                                   aria-label="toggle password visibility"
                                   onClick={() => handleClickShowPassword('password')}
                                   onMouseDown={handleMouseDownPassword}
                                 >
                                   {passwordValues.showPassword ? <Visibility/> : <VisibilityOff/>}
                                 </IconButton>
                               </InputAdornment>,
                             }}
                             className="mt-3"/>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <Field component={TextField} name="confirmation_password" label="Confirm Password" required
                             type={passwordValues.showCpassword ? 'text' : 'password'}
                             variant="outlined" fullWidth
                             InputProps={{
                               endAdornment: <InputAdornment position="end">
                                 <IconButton
                                   aria-label="toggle password visibility"
                                   onClick={() => handleClickShowPassword('confirmation')}
                                   onMouseDown={handleMouseDownPassword}
                                 >
                                   {passwordValues.showCpassword ? <Visibility/> : <VisibilityOff/>}
                                 </IconButton>
                               </InputAdornment>,
                             }}
                             className="mt-3"/>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <Button variant="contained" type="submit" className="signUpButton"
                              disabled={(!isValid && dirty)}>SUBMIT</Button>
                    </Grid>
                  </Grid>
                  {isSubmitting && <Loader/>}
                </>
              </Form>
            )}
          </Formik>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography className="goBackLink hand-cursor" onClick={() => history.push('/login')}> Back to
              Login </Typography>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
